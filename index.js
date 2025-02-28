import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, "src")));

app.use(function(req, res, next){
    res.header('Access-Control-Allow-Private-Network', 'true');
    res.header('Access-Control-Allow-Origin', 'https://www.owlbear.rodeo');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, accept, access-control-allow-origin');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Vary', 'Origin');
 
    if ('OPTIONS' == req.method) res.status(200).send();

    else next();
});

app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send("Running");
});

let PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
console.log(`Servidor rodando na porta ${PORT}`);
});
