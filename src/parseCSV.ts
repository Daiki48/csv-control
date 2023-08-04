import { parse, stringify } from "https://deno.land/std@0.194.0/csv/mod.ts";

export const parseCSV = () => {
  // deno-lint-ignore prefer-const
  let text = `
url,views,likes
https://deno.land,10,7
https://deno.land/x,20,15
https://deno.dev,30,23
`;

  // deno-lint-ignore prefer-const
  let data = parse(text, {
    skipFirstRow: true,
    strip: true,
  });

  console.log("data[0]");
  console.log(data[0].url);
  console.log(data[0].views);
  console.log(data[0].likes);
  console.log("data[1]");
  console.log(data[1].url);
  console.log(data[1].views);
  console.log(data[1].likes);

  const obj = [
    { mascot: "dino", fans: { old: 100, new: 200 } },
    { mascot: "bread", fans: { old: 5, new: 2 } },
  ];

  const csv = stringify(obj, {
    columns: ["mascot", ["fans", "new"]],
  });

  console.log(csv);
};
