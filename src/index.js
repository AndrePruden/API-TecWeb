import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { envelopesRouter } from './routes/envelopes.routes.js';

const app = express();
const PORT = process.env.PORT;  // Usamos el puerto proporcionado por el entorno de ejecución (Render en este caso)

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/envelopes', envelopesRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);  // Este mensaje solo aparecerá cuando se ejecute localmente
});
