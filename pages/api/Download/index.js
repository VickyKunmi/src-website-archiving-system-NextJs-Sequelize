import fs from "fs";
import path from "path";

export default function handler(req, res){
    const {fileName} = req.query;
    const filePath = path.resolve("../../uploads", fileName);

    if(fs.existsSync(filePath)){
        res.setHeader('Content-dispoaition', `attachment; filename=${fileName}`);
        res.setHeader("content-type", 'application/zip');

        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);

    } else{
        res.status(404).json({error: "FIle not found"})
    }
}