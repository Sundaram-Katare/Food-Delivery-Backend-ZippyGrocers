const drinks = require("./Data/Drinks");
const diary = require("./Data/Diary");
const snacks = require("./Data/Snacks");
const skinCare = require("./Data/Skin");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());



app.get("/api/snacks/", (req, res) => {
    res.json(snacks);
});


app.get("/api/diary", (req, res) => {
    res.json(diary);
});

app.get("/api/drinks", (req,res) => {
    res.json(drinks);
});

app.get("/api/skinCare", (req,res) => {
    res.json(skinCare);
})

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});