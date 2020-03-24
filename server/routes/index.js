import express from "express";
import testRoute from "./test";

const router = express.Router();

router.use("/test-route", testRoute);

export default router;