import express from "express";
import { deleteSession } from "./controllers/session.controller.js";
import { getUser, storeUser } from "./controllers/user.controller.js";

const routes = express.Router();
routes.post('/sing-up', storeUser);
routes.get('/sing-in', getUser);
routes.delete('/logout/:token', deleteSession);

export default routes;