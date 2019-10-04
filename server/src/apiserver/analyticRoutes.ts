import express, { response } from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { connection as sql } from '../db';
import { getUniqueId, userAuthed, getAccessToken } from './utils';
import { string } from 'prop-types';

export let router = express.Router();

// Gets a list of all Slugs this user is a Creator of
router.get('/analytic/all', async (req: Request, res: Response) => {
  const { userId } = req.query;

  if (!userId) {
    res.send('Missing UserID');
  }

  let accessToken = getAccessToken(req);

  // Protected route, make sure user is authed
  if (await userAuthed(userId, accessToken)) {
    let rows: any = await sql.query(`SELECT * FROM urls_analytics WHERE creator_user_id=${sql.escape(userId)}`);
    let slugs: { slug: string; destination: string }[] = [];
    rows.forEach((row: any, i: number) => {
      slugs[i] = { slug: row.urls_slug, destination: row.urls_destination };
    });
    res.send(slugs);
  } else {
    res.status(401).send('Unauthorized Route');
  }
});

// Gets analytics for a specific Shortened URL
router.get('/analytic/:slug', async (req: Request, res: Response) => {
  const { slug } = req.params;
  const { userId } = req.query;
  let { days } = req.query;

  // Default days to 7 if not given
  if (!days) {
    days = 7;
  }

  let accessToken = getAccessToken(req);

  if (await userAuthed(userId, accessToken)) {
    let analyticData = await getAnalyticData(slug, userId, days);
    res.send(analyticData);
  } else {
    res.status(401).send('Unauthorized Route');
  }
});

// Gets Base analytic data for a specific slug (short url)
// Returns data in following format for last n days
// {
//   total_visits: "10",
//   "continent": [
//     {"NA": "5"},
//     {"EU" : "5"}
//   ],
//   "dates": [
//     {"Oct 25 2019": "5"},
//     {"Oct 26 2019": "5"}
//   ]
// }
const getAnalyticData = async (slug: string, userId: string, days: number) => {
  // Get
  let totalVisits = `SELECT SUM(visits) as visits FROM analytics WHERE slug=${sql.escape(slug)} 
  UNION ALL `;
  let continents = ['AF', 'AN', 'AS', 'EU', 'NA', 'OC', 'SA'];
  let continentVisits = '';
  continents.forEach((continent, i) => {
    continentVisits += `SELECT SUM(b.visits) FROM urls_analytics AS a 
    JOIN analytics AS b ON a.urls_slug = b.slug 
    WHERE creator_user_id=${sql.escape(userId)} AND a.urls_slug=${sql.escape(slug)} AND b.continent=${sql.escape(
      continent
    )}`;
    if (i !== continents.length - 1) {
      continentVisits += ` 
      UNION ALL `;
    }
  });
  let lastNDays = `SELECT b.visit_date, b.visits FROM urls_analytics AS a 
  JOIN analytics AS b ON a.urls_slug = b.slug 
  WHERE creator_user_id=${sql.escape(userId)} 
  AND a.urls_slug=${sql.escape(slug)} AND b.visit_date >= (DATE(NOW()) - INTERVAL ${sql.escape(days)} DAY)`;

  let rows: any = await sql.query(totalVisits + continentVisits);
  let rows2: any = await sql.query(lastNDays);

  let response = <AnalyticData>{};
  response.continents = [];
  response.dates = [];

  // Populate response with total visits + each continent
  rows.forEach((row: any, i: number) => {
    if (row.visits !== null && i == 0) {
      response.totalVisits = row.visits;
    } else if (row.visits !== null) {
      response.continents.push({ [continents[i - 1]]: row.visits });
    }
  });

  rows2.forEach((row: any) => {
    response.dates.push({ [row.visit_date]: row.visits });
  });

  return response;
};

interface AnalyticData {
  continents: { [continent: string]: number }[];
  dates: { [date: string]: number }[];
  totalVisits: number;
}
