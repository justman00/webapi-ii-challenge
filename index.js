const express = require("express");
const postRoutes = require("./routes/post-route");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to API - II</h1>
  `);
});

server.use("/api/posts", postRoutes);

server.listen(4000, () => console.log(`we work on 4000 only`));
