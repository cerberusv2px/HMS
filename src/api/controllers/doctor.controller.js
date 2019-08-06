import { Router } from 'express';
import { doctorService } from '../services';

let router = Router();

router.get('/', async (req, res, next) => {
  try {
    const doctor = await doctorService.fetchAll();
    res.json({ data: doctor });
  } catch (err) {
    next(err);
  }
});

export default router;
