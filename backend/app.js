

require("dotenv").config();
const express = require('express');
const cors = require("cors");
const { PORT } = process.env;
const assignmentRoutes = require("./routes/assignmentRoutes");
const submissionRoutes = require("./routes/submissionRoutes");

const app = express();
require("./db")
// Middleware
app.use(cors());
app.use(express.json());




app.use((req, res, next) => {
    res.header("Cross-Origin-Resource-Policy", "cross-origin");
    next();
  });
// Use assignment-related routes
app.use("/assignments", assignmentRoutes);

// Use student submission-related routes
app.use("/submissions", submissionRoutes);

app.use("/user", require("./routes/users"));







  // Routes
app.get('/', (req, res) => {
    res.send('Welcome to the College Management System');
});

app.get("*", (req, res) => {
    res.status(404).json({
      message: "Url Does not exit",
    });
  });

app.listen(PORT,()=>{
  console.log(`Server is live on port ${PORT}`)
})




