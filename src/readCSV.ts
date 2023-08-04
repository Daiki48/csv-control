import { parse } from "https://deno.land/std@0.194.0/csv/mod.ts";

export const catCSV = async (filePath: string) => {
  const text = await Deno.readTextFile(filePath);
  const result = parse(text);
  console.log(result);
};
