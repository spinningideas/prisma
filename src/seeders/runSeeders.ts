import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

import continentData from "./continentData";
import countryData from "./countryData";

const seedContinents = async () => {
  console.log("Running seeding of continents");
  const data = continentData;
  for (let i = 0; i < data.length; i++) {
    let continent = data[i];
    console.log(`Seeding continent: ${continent.continentName}`);
    await prisma.continent.upsert({
      where: { continentId: continent.continentId },
      update: {},
      create: continent,
    });
  }
};

const seedCountries = async () => {
  console.log("Running seeding of countries");
  const data = countryData;
  for (let i = 0; i < data.length; i++) {
    let country = data[i];
    console.log(`Seeding country: ${country.countryName}`);
    await prisma.country.upsert({
      where: { countryId: country.countryId },
      update: {},
      create: country,
    });
  }
};

const runSeeders = async (): Promise<boolean> => {
  try {
    console.log("Running seeders in database");
    await seedContinents();
    await seedCountries();
    console.log("Completed running seeders in database");
    return Promise.resolve(true);
  } catch (e) {
    console.log("ERROR: could not run seeders in database:");
    console.log(e);
    return Promise.resolve(false);
  }
};

export default runSeeders;
