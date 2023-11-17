import express, {Router, Request, Response} from 'express';
import MainRouter from './routes/MainRoutes'
const app = express();

app.use(express.json());

app.use(MainRouter);
app.use(MainRouter);

app.listen(3000, function(){
    console.log('Servidor funcionando normalmente na porta 3000');
});
