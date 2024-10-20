import poemsManager from "./data/PoemsM.js";

async function router(req, res) {
  const url = req.url;
  const opts = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      res.writeHead(200, opts).end("the router(API) is conected");
      break;
    case "/api/poems":
      try {
        const poems = await poemsManager.readAll();
        return res.writeHead(200, opts).end(JSON.stringify(poems));
      } catch (error) {
        console.log(error)
        return res.writeHead(error.statisCode || 404).end("NOT POEMS FOUND")
      }

    default:
      res.writeHead(404, opts).end("ENDPOINT NOT FOUND");
      break;
  }
}

export default router;
