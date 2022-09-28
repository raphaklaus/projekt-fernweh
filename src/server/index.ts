const express = require("express");
const path = require("path");
const app = express();
const port = 8080; // default port to listen

import { routes } from "./routes/sentences";

routes(app);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
