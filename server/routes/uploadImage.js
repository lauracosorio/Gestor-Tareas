const express = require("express");
const imageUpload = express.Router();
const Multer = require("multer");
const { v4: uuidv4 } = require('uuid');
const path = require("path");
const { Storage } = require('@google-cloud/storage');

require("dotenv").config()

const storage = new Storage({
    projectId: process.env.GCLOUD_PROJECT,
    credentials: {
      client_email: process.env.GCLOUD_CLIENT_EMAIL,
      private_key: process.env.GCLOUD_PRIVATE_KEY

    }
  });

  const bucket = storage.bucket(process.env.GCS_BUCKET)

  let upload = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileZise: 5 * 1024 * 1024
    }
  });

  imageUpload.post('/imageupload', upload.single('file'), (req, res) => {
    const newFileName = uuidv4() + path.extname(req.file.originalname);
    const blob = bucket.file(newFileName);
    const blobStream = blob.createWriteStream({
      resumable: false,
      gzip: true
    }).on('finish', () => {
      const publicURL = `https://storage.googleapis.com/${process.env.GCS_BUCKET}/${blob.name}`
      res.json(publicURL);

    //   const imageDetails = JSON.parse(req.body.data)
    //   imageDetails.image = publicURL

    //   db.image.create(imageDetails).then(()=>res.json(imageDetails))
    });
    blobStream.end(req.file.buffer);
  });
  
  module.exports = imageUpload;