import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Path to your JSON database
const DB_PATH = path.join(__dirname, 'src', 'data', 'db.json');

// Helper to read DB
const readDB = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (err) {
        console.error("DB Read Error", err);
        return { products: [], users: [] };
    }
};

// Helper to write DB
const writeDB = (data) => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (err) {
        console.error("DB Write Error", err);
    }
};

// Ensure upload directory exists
const uploadDir = path.join(__dirname, 'public', 'images', 'products');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer Config for Image Uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Upload Endpoint
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const filePath = `/images/products/${req.file.filename}`;
    res.json({ url: filePath });
});

// Native JSON Routes (Replacing json-server)
app.get('/products', (req, res) => {
    const db = readDB();
    res.json(db.products);
});

app.post('/products', (req, res) => {
    const db = readDB();
    const newProduct = { ...req.body, id: Date.now().toString() };
    db.products.push(newProduct);
    writeDB(db);
    res.status(201).json(newProduct);
});

app.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const db = readDB();
    db.products = db.products.filter(p => p.id !== id);
    writeDB(db);
    res.status(200).send({ message: 'Deleted' });
});

app.get('/users', (req, res) => {
    const db = readDB();
    res.json(db.users);
});

app.listen(port, () => {
    console.log(`Backend Server running at http://localhost:${port}`);
    console.log(`JSON DB emulation active for /products and /users`);
    console.log(`Upload API: http://localhost:${port}/api/upload`);
});
