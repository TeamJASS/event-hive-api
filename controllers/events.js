import { eventModel } from "../models/events.js";


 //Get All Events

export const getEvents = async (req, res, next) => {
    try {
       //get query params
       
        const { limit =10, skip=0, filter="{}",fields="{}" } = req.query;

        // // //Get all events from database
        const allEvents = await eventModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);
        // // //Return all events as reponse
        res.json(allEvents);
    } catch (error) {
        next(error);
    }
}

//Post Events
export const postEvent = async (req, res, next) => {
    try {
        //Add event to database
        const newEvent = await eventModel.create({
            ...req.body,
            image: req.file.filename
        });
        //return response
        res.json(newEvent);
    } catch (error) {
        next(error);
    }
}


//Patch event
export const patchEvent = async (req, res, next) => {
    try {
        //update event by id
        const updatedEvent = await eventModelModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        //return response
        res.json(updatedEvent)
        // res.json(`event with ID ${req.params.id} updated`);
    } catch (error) {
        next(error);

    }
}

//delete event
export const deleteEvent = async (req, res, next) => {
    try {
        //delete event by id
        const deletedEvent = await eventModel.findByIdAndDelete(req.params.id);
        res.json(deletedEvent);
        //return response
    } catch (error) {
        next(error);
    }
}
export const getEvent = async (req, res) => {
    try {
        const getOneEvent = await eventModel.findById(req.params.id);
        res.status(200).send(getOneEvent);
    } catch (error) {
        next(error);
    }
}

