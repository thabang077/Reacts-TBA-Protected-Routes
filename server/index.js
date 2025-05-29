// import express from "express";
// import cors from "cors";
// import authRouters from "./routes/authRoutes.js";

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.use("/auth", authRouters);

// app.listen(process.env.PORT, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouters from "./routes/authRoutes.js";

dotenv.config(); // ✅ Load environment variables

const app = express();
app.use(express.json());
app.use(cors());
app.use("/auth", authRouters);

// Optional fallback port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
