import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  pdfTotals: defineTable({
    path: v.string(),
    opens: v.number(),
    firstOpenedAt: v.number(),
    lastOpenedAt: v.number(),
  }).index("by_path", ["path"]),
  pdfDaily: defineTable({
    path: v.string(),
    date: v.string(),
    opens: v.number(),
  }).index("by_path_date", ["path", "date"]),
});
