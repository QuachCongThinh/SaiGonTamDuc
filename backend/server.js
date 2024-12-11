const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/view_counter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const viewSchema = new mongoose.Schema({ count: { type: Number, default: 0 } });
const View = mongoose.model("View", viewSchema);

(async () => {
  const view = await View.findOne();
  if (!view) {
    await new View({ count: 0 }).save();
    console.log("Initialized view count");
  }
})();

app.post("/api/increment-view", async (req, res) => {
  const view = await View.findOne();
  view.count++;
  await view.save();
  res.json({ viewCount: view.count });
});

app.get("/api/view-count", async (req, res) => {
  const view = await View.findOne();
  res.json({ viewCount: view.count });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
