/* eslint-disable @typescript-eslint/no-explicit-any */
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import authController from './controllers/authController';
import authenticateMiddleware from './middlewares/authenticateMiddleware';
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors())
// Rotas públicas
app.post('/login', authController.login);

// Rota protegida com middleware de autenticação
app.get('/dashboard',authenticateMiddleware, authController.dashboard);

declare module 'express-serve-static-core' {
    interface Request {
        user?: any;
    }
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
