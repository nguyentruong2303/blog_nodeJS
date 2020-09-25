const newsRouter = require('./news');
const newsSite = require('./site');


function router(app) {

      app.use('/news', newsRouter);
      app.use('/', newsSite);      
       
} 
module.exports = router;
