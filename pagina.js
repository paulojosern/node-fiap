const http = require('http')

//criando nosso servidor

const server = http.createServer(function(req, res){
    let categoria = req.url
    if(categoria == '/fiap'){
        res.end(pag('Página Principal'))
    } 
    res.end(
        `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
            </head>
            <body>
                <h1>Pagina teste</h1>
            </body>
        </html>
        `
    )
    console.log('subiu server')
})
server.listen(2000)