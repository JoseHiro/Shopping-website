  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const mongoose = require('mongoose');
  const User = require('./models/user');
  const app = express();

  // controller
  const error = require('./controllers/404');

  app.set('view engine', 'ejs');
  app.set('views', 'views');

  const adminRoutes = require('./routes/admin');
  const shopRoutes = require('./routes/shop');

  app.use(bodyParser.urlencoded({extended: false}));
  // app.use(express.static('public'))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use((req, res, next) => {
    User.findById('63e85aa863041ebe5c20095a')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
  })

  app.use('/admin', adminRoutes);
  app.use(shopRoutes);

  app.use(error.pageNotFound);

  mongoose
  .connect('mongodb+srv://JoseHiro:goal@cluster0.qzoei47.mongodb.net/shop?retryWrites=true&w=majority')
  .then(result => {
    User.findOne().then(user => {
      if(!user) {
        const user = new User({
          name: "Josey",
          email: "aaa@aaa",
          cart: {
            items: []
          }
        });
      }
      user.save();
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  })
