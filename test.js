const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  date: { type: Date, default: Date.now }
});

const Blog = mongoose.model('Blog', blogSchema);

app.post('/api/blogs', (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content
  });

  newBlog.save()
    .then(blog => res.json(blog))
    .catch(err => res.status(500).json({ error: err.message }));
});




app.get('/api/blogs', async (req, res) => {

const blogs = await Blog.find()

res.json({blogs})




});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });


const upload = multer({  dest: 'uploads/'  ,  limits: {
    fieldSize: 1024 * 1024 * 10, 
  }, }); 

// const upload = multer({ storage: storage });

app.post('/api/upload', upload.single('upload'), (req, res) => {

  res.json({url: `http://localhost:5000/uploads/${req.file.filename}`, message : "uploaded"});
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
