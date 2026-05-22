import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const dataFile = readFileSync(
  "/home/runner/work/Restren/Restren/lib/site-data.ts",
  "utf8",
);
const robotsFile = readFileSync(
  "/home/runner/work/Restren/Restren/app/robots.ts",
  "utf8",
);

test("all required service slugs are present", () => {
  const required = [
    "restaurant-refurbishment",
    "restaurant-fit-out",
    "takeaway-fit-out",
    "commercial-kitchen-fit-out",
    "hospitality-refurbishment",
    "cafe-fit-out",
    "shop-conversion",
    "restaurant-renovation",
    "fast-food-fit-out",
    "shopfitting-services",
  ];

  required.forEach((slug) => {
    assert.equal(
      dataFile.includes(`slug: "${slug}"`),
      true,
      `missing slug ${slug}`,
    );
  });
});

test("all required location slugs are present", () => {
  const required = [
    "london-restaurant-refurbishment",
    "birmingham-restaurant-fit-out",
    "manchester-takeaway-fit-out",
    "leeds-hospitality-refurbishment",
    "liverpool-shopfitters",
    "glasgow-restaurant-renovation",
  ];

  required.forEach((slug) => {
    assert.equal(
      dataFile.includes(`slug: "${slug}"`),
      true,
      `missing slug ${slug}`,
    );
  });
});

test("robots rules include indexing controls and sitemap refs", () => {
  assert.equal(robotsFile.includes('disallow: ["/admin", "/staging", "/test", "/*?*"]'), true);
  assert.equal(robotsFile.includes("/sitemap.xml"), true);
  assert.equal(robotsFile.includes("/image-sitemap.xml"), true);
  assert.equal(robotsFile.includes("/blog-sitemap.xml"), true);
});
