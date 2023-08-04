import { catCSV } from "./src/readCSV.ts";
import { parseCSV } from "./src/parseCSV.ts";

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  parseCSV();
  catCSV("./sample/data.csv");
}
