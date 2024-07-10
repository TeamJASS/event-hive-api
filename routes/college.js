import { Router } from "express";
import { getCollege, getCollege, deleteCollege,patchCollege,postCollege } from "../controllers/college";

const collegeRouter = Router();

collegeRouter.get('/college',getColleges);

collegeRouter.post('/college',remoteUpload.single('image'),postCollege);

collegeRouter.patch('/college/:id',patchCollege);

collegeRouter.get('/college/:id',getCollege);

collegeRouter.delete('/college/:id',deleteCollege);


export default collegeRouter;
