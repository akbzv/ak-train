import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HEllo world");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});


var a = 10;
console.log(a);
var b = 20;
console.log(b);
