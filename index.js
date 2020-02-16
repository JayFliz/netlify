const http = require('http');
const axios = require('axios');

let server = http.createServer((req,res) => {

    console.log(req.rawHeaders);
    //res.setHeader("Content-Security-Policy", "script-src 'self' https://apis.google.com");

    axios.all([
        axios.get('https://reqres.in/api/users'),
        axios.get('https://reqres.in/api/users?page=2')
      ]).then(axios.spread((response1, response2) => {
        console.log(response1.data);
        console.log(response2.data);
        res.end(JSON.stringify(response1.data));
        
      })).catch(error => {
        console.log(error);
      });
      
    
});

server.listen(3000);

