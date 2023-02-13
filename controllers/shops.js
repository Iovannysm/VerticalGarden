module.exports = {
  index,

}

function index(req, res) {
  res.render('shops/index', {title: 'Shop'});
}