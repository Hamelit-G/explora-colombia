const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Permite que la API pueda interpretar cuerpos en JSON
app.use(express.json());

// Ruta de prueba inicial
app.get("/", (req, res) => {
  res.json({ mensaje: "¡Mi primera API funciona!" });
});

// Arreglo temporal de destinos (en memoria)
const destinos = [
  { id: 1, nombre: "Jardín", departamento: "Antioquia", precio: 150000 },
  { id: 2, nombre: "Cartagena", departamento: "Bolívar", precio: 300000 },
  { id: 3, nombre: "Salento", departamento: "Quindío", precio: 200000 }
];

// Ruta GET para consultar la lista de destinos
app.get("/api/destinos", (req, res) => {
  res.json(destinos);
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});