import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import secretKey from '../secret';

class AuthController {
    login(_: Request, res: Response) {
        // Aqui você faria a autenticação (por exemplo, verificar usuário/senha em um banco de dados)
        const user = {
            id: 1,
            username: 'usuario'
        };

        // Gera um token JWT
        const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });

        res.json({ token });
    }

    dashboard(_: Request, res: Response) {
        res.json({
            result: "Dashboard protegido"
        });
    }
}

export default new AuthController();
