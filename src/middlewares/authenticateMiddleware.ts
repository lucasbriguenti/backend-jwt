import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secretKey from '../secret';

export default function authenticateMiddleware(req: Request, res: Response, next: NextFunction) {
    // Obter o token do cabeçalho da solicitação
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }

    try {
        // Verificar o token
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;

        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido' });
    }
}