const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
const corsOptions = {
    origin: ["http://localhost:5173", "https://dsa-explorer-frontend.vercel.app/api"], // Allow frontend URLs
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
};

app.use(cors(corsOptions));


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// Define a Schema with Categories & Questions
const questionSchema = new mongoose.Schema({
    title: String,
    description: String,
    markdown: String
});

const categorySchema = new mongoose.Schema({
    categoryName: String,
    questions: [questionSchema] // Array of questions
});

const Category = mongoose.model("Category", categorySchema);

// ✅ API Endpoints

// Get All Categories with Questions
app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a New Category with Questions
app.post("/categories", async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Questions from a Specific Category
app.get("/categories/:categoryName", async (req, res) => {
    try {
        const category = await Category.findOne({ categoryName: req.params.categoryName });
        if (!category) return res.status(404).json({ error: "Category not found" });

        res.json(category.questions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Add a Question to a Specific Category
app.post("/categories/:categoryName/questions", async (req, res) => {
    try {
        const category = await Category.findOne({ categoryName: req.params.categoryName });
        if (!category) return res.status(404).json({ error: "Category not found" });

        category.questions.push(req.body);
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));


module.exports = app;

