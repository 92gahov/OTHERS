const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// connect to mongoDB
const dbURI = process.env.DB_END;
mongoose.connect(dbURI)
    .then((result) => {
        // console.log('connected to db')
        app.listen(3000);
    })
    .catch((err) => console.log(err));

// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// app.listen(3000, () => console.log("Server running on port 3000"));

// middleware static files
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById("636914d5f0a1af38c225d6ca")
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host ', req.hostname);
//     console.log('path ', req.path);
//     console.log("method ", req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log('in the nex middleware');
//     next();
// })

// app.get('/blogs/create', (req, res) => {
//     res.render('create', { title: "Crate a new Blog" });
// })

app.get('/', (req, res) => {
    // const blogs = [
    //     { title: "Lorem", snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    //     { title: "Lorem", snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    //     { title: "Lorem", snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' }
    // ]
    // res.send('<p>Home page</p>');
    // res.sendFile('./views/index.html', { root: __dirname });
    // res.render('index', { title: "Home", blogs: blogs });
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    // res.send('<p>About page</p>');
    // res.sendFile('./views/about.html', { root: __dirname });
    res.render('about', { title: "About" });
});

// app.get('/blogs', (req, res) => {
//     Blog.find().sort({ createdAd: -1 })
//         .then((result) => {
//             res.render('index', { title: 'All Blogs', blogs: result });
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.post('/blogs', (req, res) => {
//     const blog = new Blog(req.body);

//     blog.save()
//         .then((result) => {
//             res.redirect('/blogs')
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.get('/blogs/:id', (req, res) => {
//     const id = req.params.id;
//     Blog.findById(id)
//         .then((result) => {
//             res.render('details', { blog: result, title: 'Blog Details' });
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// });

// app.delete('/blogs/:id', (req, res) => {
//     const id = req.params.id;

//     Blog.findByIdAndDelete(id)
//         .then(result => {
//             res.json({ redirect: '/blogs' });
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// });

// redirects

// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// });


// app.get('/blogs/create', (req, res) => {
//     res.render('create', { title: "Crate a new Blog" });
// })

app.use('/blogs', blogRoutes);

// 404 page

app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname });
    res.status(404).render('404', { title: "404" });
});