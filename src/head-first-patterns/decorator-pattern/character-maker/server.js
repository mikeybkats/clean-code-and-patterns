const express = require("express");
const app = express();
const port = 8211;
import { makeBilbo } from "./dist/output.js";

app.use(express.static("./dist/"));

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
