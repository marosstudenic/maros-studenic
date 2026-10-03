import { internalMutation, internalQuery } from "./_generated/server";

const path = "/zavod-tajnicka.pdf";

export const recordOpen = internalMutation({
  args: {},
  handler: async (ctx) => {
    const now = Date.now();
    const date = new Date(now).toISOString().slice(0, 10);
    const total = await ctx.db
      .query("pdfTotals")
      .withIndex("by_path", (q) => q.eq("path", path))
      .unique();
    if (total) {
      await ctx.db.patch(total._id, {
        opens: total.opens + 1,
        lastOpenedAt: now,
      });
    } else {
      await ctx.db.insert("pdfTotals", {
        path,
        opens: 1,
        firstOpenedAt: now,
        lastOpenedAt: now,
      });
    }
    const daily = await ctx.db
      .query("pdfDaily")
      .withIndex("by_path_date", (q) => q.eq("path", path).eq("date", date))
      .unique();
    if (daily) {
      await ctx.db.patch(daily._id, { opens: daily.opens + 1 });
    } else {
      await ctx.db.insert("pdfDaily", { path, date, opens: 1 });
    }
  },
});

// Internal functions are available to the authenticated Convex dashboard/CLI,
// but cannot be called by an unauthenticated browser client.
export const stats = internalQuery({
  args: {},
  handler: async (ctx) => ({
    total: await ctx.db
      .query("pdfTotals")
      .withIndex("by_path", (q) => q.eq("path", path))
      .unique(),
    daily: await ctx.db
      .query("pdfDaily")
      .withIndex("by_path_date", (q) => q.eq("path", path))
      .order("desc")
      .collect(),
  }),
});

export const generateUploadUrl = internalMutation({
  args: {},
  handler: async (ctx) => ctx.storage.generateUploadUrl(),
});
