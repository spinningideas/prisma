import { PrismaClient } from "@prisma/client";
import runSeeders from "../src/seeders/runSeeders";

const prisma = new PrismaClient();

async function main() {
  runSeeders();
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
