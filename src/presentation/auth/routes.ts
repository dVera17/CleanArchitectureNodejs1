import { Router } from 'express';
import { AuthController } from './controller';
import { AuthDatasourceImpl, AuthRepositoryImpl } from '../../infraestructure';

export class AuthRoutes {

    static get routes(): Router {
        const router = Router();
        const datasource = new AuthDatasourceImpl();
        const authRepository = new AuthRepositoryImpl(datasource);
        const controller = new AuthController(authRepository);

        router
            .post('/register', controller.registerUser)
            .post('/login', controller.loginUser)

        return router;
    }
}