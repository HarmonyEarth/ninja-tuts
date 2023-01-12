const express = require('express');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
require('dotenv').config();

// express app
const app = express();

// mongoDB connection string
const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@nodeninja.epbab.mongodb.net/nodeninja?retryWrites=true&w=majority`;

mongoose.connect(dbURI)
    .then((result) => app.listen(3001))// connected to database & listening for requests
    .catch((err) => console.log(err));


// middleware & static files
// app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {

//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });


// mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'Second Coming',
//         image: 'https://media.discordapp.net/attachments/695386845844078692/905974571642019930/h8jbxk5w9kx71.png?width=1003&height=632',
//         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida molestie quam, non lobortis nisl finibus eu.'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// app.get('/single-blog', (req, res) => {
//     Blog.findById('61846f664e319baeb30fa176')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


// routes
app.get('/', (req, res) => {

    // res.send('<h1>Choushinsei Flashman</h1>');
    res.sendFile('./Denziman/tiger.html', { root: __dirname });
    // res.redirect('/blogs');

});

app.get('/about', (req, res) => {
    
    // res.send('<h1>Leh Wanda!</h1>');
    res.sendFile('./Denziman/about.html', { root: __dirname });

});

//blog routes
app.use('/blogs', blogRoutes);


// redirect

app.get('/about-denzi', (req, res) => {
    res.redirect('/about');
});


// Error 404

app.use((req, res) => {
    res.status(404).sendFile('./Denziman/404.html', { root: __dirname });
});

