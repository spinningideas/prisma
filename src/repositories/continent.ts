/* eslint-disable @typescript-eslint/no-unused-vars */
import _ from "lodash";
import BaseRepository from "./baseRepository";
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from "./prisma-repo";

// This type will be used if you want to extends the functions in Continent Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.CONTINENT]["Where"];
type Select = ModelTypes[typeof MODELS_NAME.CONTINENT]["Select"];
type Include = ModelTypes[typeof MODELS_NAME.CONTINENT]["Include"];
type Create = ModelTypes[typeof MODELS_NAME.CONTINENT]["Create"];
type Update = ModelTypes[typeof MODELS_NAME.CONTINENT]["Update"];
type Cursor = ModelTypes[typeof MODELS_NAME.CONTINENT]["Cursor"];
type Order = ModelTypes[typeof MODELS_NAME.CONTINENT]["Order"];
type Delegate = ModelTypes[typeof MODELS_NAME.CONTINENT]["Delegate"];
// type GroupBy = ModelStructure[typeof MODELS_NAME.CONTINENT]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.CONTINENT>;
type Model = ModelStructure[typeof MODELS_NAME.CONTINENT];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class Continent extends BaseRepository(MODELS_NAME.CONTINENT) {}

export default Continent;
