const http =require('http')

server = http.createServer(function(request, response) {
    const blogging = require("./blogging")
    console.log("running");
    console.log(blogging.data("1"))
    response.writeHead(200,"Application-Type:Text/HTML")
    response.write(JSON.stringify(blogs))
    response.end()
    
    
}).listen(5000,()=>{
    console.log('started the server')
})