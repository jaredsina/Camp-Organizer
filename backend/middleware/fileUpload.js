const multer = require("multer");
const File = require("../models/file");

const upload = multer({
  storage: multer.diskStorage({
    // set destination for uploaded files
    destination: "./uploads",
    filename: (req, file, cb) => {
      const filename = file.originalname;

      // check if file already exists in the database
      const fileModel = File.findOne({ filename: filename });

      if (fileModel) {
        console.log("file already exists");
        // if file exists, append a number to the end of the filename
        const newFilename = filename + Date.now();
        cb(null, newFilename);
      } else {
        console.log("file does not exist");
        cb(null, filename);
      }
    },
  }),
});

module.exports = upload;
