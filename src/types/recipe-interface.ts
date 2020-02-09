
export interface RecipeRequest {
  q:     string;
  from:  number;
  to:    number;
  more:  boolean;
  count: number;
  hits:  Hit[];
}

export interface Hit {
  recipe:     Recipe;
  bookmarked: boolean;
  bought:     boolean;
}

export interface Recipe {
  uri:             string;
  label:           string;
  image:           string;
  source:          string;
  url:             string;
  shareAs:         string;
  yield:           number;
  dietLabels:      string[];
  healthLabels:    HealthLabel[];
  cautions:        string[];
  ingredientLines: string[];
  ingredients:     Ingredient[];
  calories:        number;
  totalWeight:     number;
  totalTime:       number;
  totalNutrients:  { [key: string]: Total };
  totalDaily:      { [key: string]: Total };
  digest:          Digest[];
}

export interface Digest {
  label:        string;
  tag:          string;
  schemaOrgTag: SchemaOrgTag | null;
  total:        number;
  hasRDI:       boolean;
  daily:        number;
  unit:         Unit;
  sub?:         Digest[];
}

export enum SchemaOrgTag {
  CarbohydrateContent = "carbohydrateContent",
  CholesterolContent = "cholesterolContent",
  FatContent = "fatContent",
  FiberContent = "fiberContent",
  ProteinContent = "proteinContent",
  SaturatedFatContent = "saturatedFatContent",
  SodiumContent = "sodiumContent",
  SugarContent = "sugarContent",
  TransFatContent = "transFatContent",
}

export enum Unit {
  Empty = "%",
  G = "g",
  Iu = "IU",
  Kcal = "kcal",
  Mg = "mg",
  Μg = "µg",
}

export enum HealthLabel {
  AlcoholFree = "Alcohol-Free",
  PeanutFree = "Peanut-Free",
  SugarConscious = "Sugar-Conscious",
  TreeNutFree = "Tree-Nut-Free",
}

export interface Ingredient {
  text:   string;
  weight: number;
}

export interface Total {
  label:    string;
  quantity: number;
  unit:     Unit;
}
