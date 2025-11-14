import { Router } from "express";
import { Part } from "../models/part.js";

const router = Router();

// for storing the data in-memory array

let parts: Part[] = [];
let nextId = 1;

// GET all parts

router.get("/", (req, res) => {
    res.json(parts);
});

// POST new part

router.post("/", (req, res) => {
    const { name, category, material, diameterMm } = req.body;

    if (!name || !category || !material || diameterMm === undefined) {
        return res.status(400).json({ error: "Something is missing" });
    }

    const newPart: Part = {
        id: nextId++,
        name,
        category,
        material,
        diameterMm
    };

    parts.push(newPart);
    res.status(201).json(newPart);
});

// DELETE by id

router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    if (!id) {
        return res.status(400).json({ error: "Invalid ID, it must be Number" });
    }

    const part = parts.find(p => p.id === id);

    if (!part) {
        return res.status(404).json({ error: "Part not found." });
    }

    parts = parts.filter(p => p.id !== id);

    return res.json({ message: "Part deleted", part });

});

export default router;