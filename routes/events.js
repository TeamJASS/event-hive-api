import { Router } from "express";
import { deleteEvent, getEvent, getEvents, patchEvent, postEvent } from "../controllers/events.js";
import { remoteUpload } from "../middleware/events.js";
//
//Create a router

const eventRouter = Router();


//Define routes

eventRouter.get('/events', getEvents);


eventRouter.post('/events',remoteUpload.single('image'),postEvent);

eventRouter.patch('/events/:id', patchEvent);


eventRouter.delete('/events/:id', deleteEvent);


eventRouter.get('/events/:id', getEvent);
// export router

export default eventRouter;