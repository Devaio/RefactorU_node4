
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('Seville', { title: 'Magellan\'s Journey' });
};