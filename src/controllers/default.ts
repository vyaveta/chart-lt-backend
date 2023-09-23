import { DATA_RECORDS } from "../db/data";
import { Request, Response } from 'express';


export const getData = (req: Request, res: Response) => {
    try{
        return res.status(200).json(DATA_RECORDS)
    }catch(error: any){
        console.log("[GET_DATA]", error?.message)
        return res.status(500).json(error)
    }
}