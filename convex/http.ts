import { httpRouter } from "convex/server";
import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";
import type { Id } from "./_generated/dataModel";

const http = httpRouter();

http.route({
  path: "/zavod-tajnicka.pdf",
  method: "GET",
  handler: httpAction(async (ctx, request) => {
    const storageId = process.env.PDF_STORAGE_ID as Id<"_storage"> | undefined;
    const file = storageId ? await ctx.storage.get(storageId) : null;
    if (!file) {
      return new Response("PDF unavailable", {
        status: 503,
        headers: { "Cache-Control": "no-store" },
      });
    }

    const range = request.headers.get("range");
    const isInitialRequest = !range || /^bytes=0-/i.test(range);
    const isBot = /bot|crawler|spider|preview|facebookexternalhit|slurp/i.test(
      request.headers.get("user-agent") ?? "",
    );
    if (request.method === "GET" && isInitialRequest && !isBot) {
      try {
        await ctx.runMutation(internal.pdf.recordOpen, {});
      } catch {
        // Keep the document available during a temporary analytics failure.
        console.error("PDF open could not be recorded");
      }
    }

    return new Response(await file.arrayBuffer(), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="zavod-tajnicka.pdf"',
        "Content-Length": String(file.size),
        "Cache-Control": "private, no-store, max-age=0",
        "CDN-Cache-Control": "no-store",
        "Cloudflare-CDN-Cache-Control": "no-store",
        "Pragma": "no-cache",
        "Expires": "0",
        // The document is small: send it in full to avoid multiple range reads
        // being counted as separate opens by PDF viewers.
        "Accept-Ranges": "none",
        "X-Content-Type-Options": "nosniff",
      },
    });
  }),
});

export default http;
