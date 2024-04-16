const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Custom route for search functionality
server.get("/posts", (req, res) => {
  const { title, name } = req.query;

  // Assuming db.json contains posts
  const posts = router.db.get("posts").value();

  if (title) {
    // Filter posts based on title if title query parameter is provided
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(filteredPosts);
  } else if (name) {
    // Filter posts based on title if title query parameter is provided
    const filteredPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filteredPosts);
  } else {
    res.json(posts);
  }
});

server.use(router);

server.listen(8181, () => {
  console.log("listening on port", 8181);
});
