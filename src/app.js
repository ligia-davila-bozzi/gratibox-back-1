import express from 'express';
import cors from 'cors'; 

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => res.send('Bolezinha'));

export default app;