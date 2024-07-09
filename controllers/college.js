import { collegeModel } from "../models/college.js";
import { json }  from "express";


// Add / post a college
export const postCollege= async (req,res,next)=>{
    try {
      const postCollege =await collegeModel.create({
          ...req.body,
          image:req.file.filename
      });
      res.status(201).json(postCollege)
    } catch (error) {
     next(error);
    }
 
 };


// get a college by ID
 export const getCollege =  async (req, res,next) => {
    try {
        const getCollege =await collegeModel.findById(req.params.id);
        res.status(200).json(getCollege);
    } catch (error) {
        next(error);
    }
};

// Get all colleges with filter
export const getColleges = async (req, res, next) => {
    try {
        const { limit=10, skip=0, filter="{}", } = req.query;
       
        const getColleges = await collegeModel
        .find(JSON.parse(filter))
        .select(JSON.parse(fields))
        .limit(limit)
        .skip(skip);

        res.status(200).json(getColleges);
    } catch (error) {
        next (error );
    }
};


//  patch/ update a college
export const patchCollege = async (req, res,next) => {
    try {
        const updateCollege = await collegeModel.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(201).json(updateCollege)

    } catch (error) {
        next(error);
    }
};


// Delete a college by ID

export const deleteCollege = async (req, res,next) => {
    try {
        const deleteCollege = await collegeModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deleteCollege);
    } catch (error) {
        next(error);
    }
};




