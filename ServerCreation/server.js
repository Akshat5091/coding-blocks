const http=require('http')
const port=8080;
const fs=require("fs")

const server=http.createServer((req,res)=>{

    //console.log(req.url);

    res.writeHead(200,{
        "Content-Type" : 'text/html'
    });

    if (req.url == '/tt1') file = 'twister1.html';
    else if (req.url == '/tt2') file = 'twister2.html';
    else file = 'twister3.html';
    
    fs.readFile('./twister1.html',(err,data)=>{
        if(err){
            return console.log(err);
        }
        res.end(data);
    })
   // res.end("<h1>hello,this is your data</h1>")

});

server.listen(port,(err)=>{
    if(err){
    console.log(err);
    return;
    }
    console.log("server at port",port);
}); 