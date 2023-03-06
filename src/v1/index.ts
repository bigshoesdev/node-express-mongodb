import { Router } from 'express';

import AuthMiddleware from '../middleware/auth';

import * as AuthController from './controllers/auth';
import * as UserController from './controllers/user';
import * as BookController from './controllers/book';

const router = Router();

router.get('/status', (req, res) => res.json({ status: 'UP' }));

router.post('/auth/login', AuthController.login);
router.post('/auth/signup', AuthController.signup);

router.post('/user/me', [AuthMiddleware], UserController.me);
router.get('/user/all', [AuthMiddleware], UserController.all);

router.post('/book/add', BookController.add);
router.get('/book/all', BookController.all);
router.get('/book/search', BookController.search);

export default router;
