// eslint-disable-next-line import/no-import-module-exports
import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/:username', (req: Request, res: Response) => {});
router.patch('/:username', (req: Request, res: Response) => {});
router.post('/signup', (req: Request, res: Response) => {});
router.post('/login', (req: Request, res: Response) => {});
// SOFT DELTE
router.patch('/signout', (req: Request, res: Response) => {});
router.get('/', (req: Request, res: Response) => {});
module.exports = router;
