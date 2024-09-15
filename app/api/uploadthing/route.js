import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core"; // Adjust the path

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
