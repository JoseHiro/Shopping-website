  const express = require('express');
  const bodyParser = require('body-parser');
  const path = require('path');
  const db = require('./util/database');

  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', 'views');

  const adminRoutes = require('./routes/admin');
  const shopRoutes = require('./routes/shop');


  // db.execute('SELECT * FROM products')
  // .then((result) => {
  //   console.log(result[0]);
  // })
  // .catch(result => {
  //   console.log(result);
  // });

  // controller
  const error = require('./controllers/404');

  app.use(bodyParser.urlencoded({extended: false}));
  // app.use(express.static('public'))
  app.use(express.static(path.join(__dirname, 'public')))

  app.use('/admin', adminRoutes);
  app.use(shopRoutes);

  app.use(error.pageNotFound);

  app.listen(3000);
