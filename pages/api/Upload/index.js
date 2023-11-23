import fs from 'fs';
import path from 'path';
import slugify from 'slugify';
import formidable from 'formidable-serverless';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  fs.mkdir(path.resolve('../../uploads'), { recursive: true }, function (err) {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Failed to create uploads directory' });
    }
  });

  const form = new formidable.IncomingForm({ multiples: true, uploadDir: path.resolve('../../uploads') });

  form.keepExtensions = true;
  form.on('fileBegin', function (name, file) {
    file.path = path.join(form.uploadDir, slugify(file.name));
  });

  try {
    const files = await new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) {
          console.error(err);
          return reject(err);
        }
        resolve(files);
      });
    });

    const fileNames = Object.values(files).map((file) => file.name);

    // res.status(200).json({ files: fileNames });
    res.status(200).json(fileNames);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to process the upload' });
  }
}