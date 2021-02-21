const { Router } = require("express");
const Multer = require("multer");
const path = require('path')
const imagen = Router()
const { v4: uuidv4 } = require("uuid");
const { Storage } = require("@google-cloud/storage");

require("dotenv").config();

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT,
  credentials: {
    client_email: process.env.GCLOUD_CLIENT_EMAIL,
    private_key: process.env.GCLOUD_PRIVATE_KEY,
  },
});

const bucket = storage.bucket(process.env.GCS_BUCKET);

let upload = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileZise: 5 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb("Only .png, .jpg and .jpeg format allowed!");
    }
  },
});


imagen.post("/imagen", upload.single("file"), (req, res) => {
  const fileName = uuidv4() + path.extname(req.file.originalname);
  const blob = bucket.file(fileName);
  const blobStream = blob
    .createWriteStream({
      resumable: false,
      gzip: true,
    })
    .on("finish", () => {
      const publicURL = `https://storage.googleapis.com/${process.env.GCS_BUCKET}/${blob.name}`;
      res.json(publicURL)
    });
  blobStream.end(req.file.buffer);
});

module.exports = imagen;
