import { Prisma, PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";
import { json } from "stream/consumers";

const UserRouter = Router();
const prisma = new PrismaClient();

UserRouter.get('/users', function(re, res){
    res.send('listar usuários')
})

UserRouter.post('/user', async function(req, res){
    const user: Prisma.UserCreateInput = req.body;
    console.log(user);
    const newuser = await prisma.user.create({
        data: user
    })
    res.status(200).json({
        status: 'ok',
        user: newuser
    })
})

UserRouter.delete('/user', function(req, res){
    res.send('deletar usuário')
})

UserRouter.put('/user', function(req, res){
    res.send('Atualizar usuário')
})

export default UserRouter;