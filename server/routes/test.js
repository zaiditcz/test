import express from 'express';
import test from "./../controller/test";

const router = express.Router();

router.route('/testing').get(test.testingController);

export default router;