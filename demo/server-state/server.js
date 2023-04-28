const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const _ = require('lodash');

router.render = (req, res) => {
    const object = req._parsedUrl.path.split("?")[0];
    const page = req._parsedUrl.path.split("?")[1]
    if(page){
    const startIndex = (page - 1) * 2;
    const endIndex = page * 2;
  
    const lodashWrapper = _(router.db.get(object.replace('/','')));
        // Slice the array based on the start and end indices
        const pageItems =lodashWrapper.value().slice(startIndex, endIndex);
    
        res.jsonp(pageItems);
    }else{
        res.jsonp(router.db.get('todos'));
    }
   
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});