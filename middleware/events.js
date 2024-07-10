import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";




// export const localUpload =multer({dest:'uploads-pictures'});

export const remoteUpload =multer({
    storage:multerSaveFilesOrg({
        apiAccessToken: process.env.SAVEFILESORG_API_KEY,
        relativePath:'/uploads-eventHive/*'
        })
})