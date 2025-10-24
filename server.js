const express = require("express");
const path = require("path");

const app = express();

// Serve static files from public folder (for development)
app.use(express.static(path.join(__dirname, "public")));

// Handle React routing - return all requests to index.html
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
