const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// GET /usuarios
app.get('/usuarios', async (req, res) => {
  const usuarios = await prisma.usuario.findMany();
  res.json(usuarios);
});

// POST /usuarios
app.post('/usuarios', async (req, res) => {
  const { nombre, email } = req.body;
  const nuevo = await prisma.usuario.create({
    data: { nombre, email },
  });
  res.json(nuevo);
});

// PUT /usuarios/:id
app.put('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  const actualizado = await prisma.usuario.update({
    where: { id: Number(id) },
    data: { nombre, email },
  });
  res.json(actualizado);
});

// DELETE /usuarios/:id
app.delete('/usuarios/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.usuario.delete({
    where: { id: Number(id) },
  });
  res.json({ mensaje: 'Usuario eliminado' });
});

// Servidor en puerto 3000
app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));
