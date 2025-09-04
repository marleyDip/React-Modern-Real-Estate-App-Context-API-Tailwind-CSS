import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express(); // Initialize Express Application
app.use(cors()); // Enable Cross-Origin Resource Sharing for all routes

//Route Endpoint to check server / API status
app.get("/", (req, res) => {
  res.send("API successfully connected");
});

const port = process.env.PORT || 4000; // Use the PORT from environment variables or default to 4000; Define server port

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // Log server start message
});
