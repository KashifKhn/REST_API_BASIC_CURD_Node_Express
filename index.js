const express = require("express");
const path = require("path");
const { v4: uuid } = require("uuid");
const methodOverride = require("method-override");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method")); 

let posts = [
  {
    id: uuid(),
    userName: "Kashif Khan",
    content: "I Love Coding",
  },
  {
    id: uuid(),
    userName: "Kashif Khan",
    content: "I Love Coding",
  },
  {
    id: uuid(),
    userName: "Kashif Khan",
    content: "I Love Coding",
  },
  {
    id: uuid(),
    userName: "Kashif Khan",
    content: "I Love Coding",
  },
];

app.get("/posts", (req, res) => {
  res.render("index", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new");
});

app.post("/posts", (req, res) => {
  const { userName, content } = req.body;
  const post = { id: uuid(), userName, content };
  posts.push(post);
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("SinglePost", { post });
});

app.patch("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  const newContent = req.body.content;
  post.content = newContent;
  console.log(post);
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  const { id } = req.params;
  const post = posts.find((post) => post.id === id);
  res.render("edit", { post });
});

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts =posts.filter((post) => post.id !== id);
  res.redirect("/posts");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
