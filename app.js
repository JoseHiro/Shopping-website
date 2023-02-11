  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const mongoConnect = require('./util/database').mongoConnect;
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
    User.findById('63e53a6fb525f6da5b3b05a7')
    .then(user => {
      req.user = new User(user.name, user.email, user.cart, user._id,);
      next();
    })
    .catch(err => console.log(err));
  })

  app.use('/admin', adminRoutes);
  app.use(shopRoutes);

  app.use(error.pageNotFound);

  // syncs the table that you define in the database.js file into db
  mongoConnect( ()=> {
    app.listen(3000);
  });
