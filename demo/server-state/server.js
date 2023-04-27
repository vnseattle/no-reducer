const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

  

router.render = (req, res) => {
    // Code to execute after the delay
    res.jsonp(router.db.get('todos'));
};

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);

server.listen(3000, () => {
    console.log('JSON Server is running');
});