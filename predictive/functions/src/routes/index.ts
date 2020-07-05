import { Router } from 'express';

const router: Router = Router();

import { assetController } from '../controllers/assetController';

router.get('/', assetController.getAll);
router.post('/', assetController.save);

export default router;