const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// RUTAS PARA USUARIOS

// GET /usuarios - obtener todos los usuarios
app.get('/usuarios', async (req, res) => {
  try {
    const usuarios = await prisma.usuario.findMany();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener usuarios', detalle: error.message });
  }
});

// POST /usuarios - crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  try {
    const { nombre, email } = req.body;
    const nuevo = await prisma.usuario.create({
      data: { nombre, email },
    });
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear usuario', detalle: error.message });
  }
});

// PUT /usuarios/:id - actualizar usuario por id
app.put('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email } = req.body;
    const actualizado = await prisma.usuario.update({
      where: { id: Number(id) },
      data: { nombre, email },
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar usuario', detalle: error.message });
  }
});

// DELETE /usuarios/:id - eliminar usuario por id
app.delete('/usuarios/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.usuario.delete({
      where: { id: Number(id) },
    });
    res.json({ mensaje: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario', detalle: error.message });
  }
});


// RUTAS PARA CARROS

// GET /carros - obtener todos los carros
app.get('/carros', async (req, res) => {
  try {
    const carros = await prisma.carros.findMany();
    res.json(carros);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener carros', detalle: error.message });
  }
});

// POST /carros - crear un nuevo carro
app.post('/carros', async (req, res) => {
  try {
    const { marca, NumeroPlacas } = req.body;
    const nuevo = await prisma.carros.create({
      data: { marca, NumeroPlacas },
    });
    res.json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear carro', detalle: error.message });
  }
});

// PUT /carros/:id - actualizar carro por id
app.put('/carros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { marca, NumeroPlacas } = req.body;
    const actualizado = await prisma.carros.update({
      where: { id: Number(id) },
      data: { marca, NumeroPlacas },
    });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar carro', detalle: error.message });
  }
});

// DELETE /carros/:id - eliminar carro por id
app.delete('/carros/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.carros.delete({
      where: { id: Number(id) },
    });
    res.json({ mensaje: 'Carro eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar carro', detalle: error.message });
  }
});


// Servidor en puerto 3000
app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));
