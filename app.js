
const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Bem-vindo!');
    } 
    else if (req.url === '/seg') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Cardápio de segunda-feira:
            *Bife de vaca 
            *Frango grelhado 
            *Strogonoff de frango 
            
            Acompanhamentos: Arroz
            Feijão 
            Macarrão alho e óleo
            Abobrinha
            Salada`);
    }
    else if (req.url === '/ter') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Cardápio de terça-feira:
            *Bife de porco
            *Frango assado 
            *Parmegiana de frango 
            
            Acompanhamentos: Arroz
            Feijão 
            Macarrão à bolonhesa
            Chuchu
            Salada`);
    }
    else if (req.url === '/qua') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Cardápio de quarta-feira:
            *Bife de vaca 
            *Frango grelhado 
            *Strogonoff de frango 
            
            Acompanhamentos: Arroz
            Feijão 
            Macarrão alho e oleoa
            Abobrinha
            Salada`);
    }
}
);

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});

