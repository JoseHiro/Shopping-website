const Product = require('../models/product')

// admin
exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
  res.render('admin/add-product', {
    pageTitle: "Add product",
    path: "/admin/add-product",
    formsCSS: true,
    productCSS: true,
    activecAddProduct: true
  });
};


exports.postAddProduct  = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, price, description);
  product.save();
  res.redirect('/');
}

exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
}
