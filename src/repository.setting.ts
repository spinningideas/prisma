import { PrismaRepoConfig } from "prisma-repo";

const config: PrismaRepoConfig = {
  extendExpress: false, // default false
  overwrite: false, // default false
  repositoryPath: "src/repositories", // default 'src/repository'
  typesPath: "src/types", // default 'src/types'
  prismaLogger: true, // default false
};

export default config;
