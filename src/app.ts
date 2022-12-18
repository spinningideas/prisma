import express, { Express, Request, Response } from "express";
import cors from "cors";
import Continent from "./repositories/continent";
import Country from "./repositories/country";

const app: Express = express();
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || "localhost";

// Setup app
app.use(cors());

// Setup routes

//==continents=======================
app.get("/continents", async (req: Request, res: Response) => {
  return await Continent.findAll({});
});

//==countries==============================
app.get("/countries/:continentCode", async (req: Request, res: Response) => {
  let continentCode = req.params.continentCode;
  return await Continent.findMany({
    continentCode: continentCode,
  }).then((results) => {
    if (!results) {
      res.status(404).json({
        message: "countries not found with continentCode: " + continentCode,
      });
    } else {
      res.json(results);
    }
  });
});

app.get(
  "/countries/:continentCode/:pageNumber/:pageSize/:orderBy/:orderDesc",
  async (req: Request, res: Response) => {
    const { continentCode } = req.params;
    //const { pageNumber } = req.params;
    //const { pageSize } = req.params;
    // const { orderBy } = req.params;

    //const currentPageNumber = pageNumber as unknown as number;
    //const currentPageSize = pageSize as unknown as number;

    /*
    const where = {
      skip: currentPageNumber,
      take: currentPageSize,
      where: {
        continentCode: {
          equals: continentCode,
        },
      },
      orderBy: {
        orderBy: "desc",
      },
    };
    */

    return await Country.findMany({}).then((results) => {
      if (!results) {
        res.status(404).json({
          message: "No countries found with continentCode: " + continentCode,
        });
      } else {
        res.json(results);
      }
    });
  }
);

app.get("/country/:countryCode", async (req: Request, res: Response) => {
  let countryCode = req.params.countryCode;
  return await Country.findOne({ countryCode: countryCode }).then((results) => {
    if (!results) {
      res.status(404).json({
        message: "country not found with countryCode: " + countryCode,
      });
    } else {
      res.json(results);
    }
  });
});

//==app start AFTER DB setup done via npm commands ==============================

app.listen(PORT, () => {
  console.log(`Server running at ${HOST}:${PORT} `);
});
