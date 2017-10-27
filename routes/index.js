//**************************************************************************
//***** mongodb get all of the Routes in Routes collection where frequence>=1
//      and sort by the name of the route.  Render information in the views/pages/mongodb.ejs
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Exercise N1' });
});

module.exports = router;


