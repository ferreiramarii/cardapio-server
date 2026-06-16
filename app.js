
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
            *Carne de panela 
            *Frango frito 
            *Strogonoff de frango 
            
            Acompanhamentos: Arroz
            Feijão 
            Batata frita
            Repolho
            Salada`);
    }
    else if (req.url === '/qui') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Cardápio de quinta-feira:
            *Bife de vaca 
            *Frango xadrez 
            *Torresmo 
            
            Acompanhamentos: Arroz
            Tutu de feijão 
            Farofa de bacon
            Quibebe
            Salada`);
    }
    else if (req.url === '/sex') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Cardápio de sexta-feira:
            *Bife de vaca 
            *Frango grelhado 
            *Feijoada
            
            Acompanhamentos: Arroz
            Feijão 
            Farofa
            Vinagrete 
            Couve
            Salada`);
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Dia nao encontrado.');
    }
}
);

const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});

