const mongoose = require("mongoose");
require("dotenv").config();


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch((err) => console.error("❌ MongoDB Connection Error:", err));

const Category = require("./server"); // Import model from server.js

const seedData = [
    {
        categoryName: "Sorting",
        questions: [
            { title: "Bubble Sort", description: "Simple sorting algorithm.", markdown: "**O(n²)**" },
            { title: "Quick Sort", description: "Efficient sorting algorithm.", markdown: "**O(n log n)**" }
        ]
    },
    {
        categoryName: "Arrays",
        questions: [
            { title: "Array Rotation", description: "Rotate an array efficiently.", markdown: "```js\nfunction rotateArray() {...}```" },
            { title: "Move Zeroes", description: "Shift zeroes to the end.", markdown: "```js\nfunction moveZeroes() {...}```" }
        ]
    }
];

async function insertData() {
    try {
        // await Category.deleteMany(); // Clear existing data
        await Category.insertMany(seedData);
        console.log("✅ Dummy data inserted!");
        process.exit();
    } catch (err) {
        console.error("❌ Error inserting dummy data:", err);
        process.exit(1);
    }
}

insertData();
