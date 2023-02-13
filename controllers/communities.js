module.exports = {
  index,

}

function index(req, res) {
  res.render('communities/index', {title: 'Community'});
}