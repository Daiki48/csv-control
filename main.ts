import { catCSV } from "./src/readCSV.ts";
import { parseCSV } from "./src/parseCSV.ts";

if (import.meta.main) {
  parseCSV();
  catCSV("./sample/sample.csv");
}
