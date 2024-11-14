// src/components/LandingPage.js
import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, TextField, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
const LandingPage = () => {
  // Estado para el menú lateral (sidemenu)
  const [sidemenuOpen, setSidemenuOpen] = useState(false);
  
  // Estado para el carrusel de imágenes
  const items = [
    { imgSrc: 'src/components/path/image1.jpeg', label: 'Imagen 1' },
    { imgSrc: '.src/path/image2.png', label: 'Imagen 2' },
    { imgSrc: '.src/path/imagen3.png', label: 'Imagen 3' }
  ];
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Estado para el formulario de contacto
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Función para cambiar la imagen en el carrusel
//   const handleNextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

  // Función para manejar el cambio de estado en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      {/* Menú superior */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setSidemenuOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            IBL en REACT
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Menú lateral (sidemenu) */}
      <Drawer open={sidemenuOpen} onClose={() => setSidemenuOpen(false)}>
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">Menú</Typography>
          <Button onClick={() => alert('Navegar a Home')}>Home</Button>
          <Button onClick={() => alert('Navegar a Contacto')}>Contacto</Button>
          <Button onClick={() => alert('Navegar a Acerca de Nosotros')}>Acerca de Nosotros</Button>
          <Button onClick={() => alert('Navegar a Login')}>Login</Button>
          {/* Agregamos  más botones según sea necesario */}
        </Box>
      </Drawer>

      <Carousel>
        {items.map((item, index) => (
          <Paper key={index}>
            <img src={item.imgSrc} alt={item.label} style={{ width: '100%' }} />
          </Paper>
        ))}
      </Carousel>

      {/* Formulario de Contacto */}
      <Box component="form" sx={{ maxWidth: 500, margin: '20px auto', padding: 2, border: '1px solid #ccc', borderRadius: 1 }}>
        <Typography variant="h5" gutterBottom>Contáctanos</Typography>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Correo Electrónico"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          multiline
          rows={4}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>Enviar</Button>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#6200ea', color: '#ffffff', textAlign: 'center', padding: 2, marginTop: 4 }}>
        <Typography>&copy; 2024 IBL en REACT</Typography>
      </Box>
    </div>
  );
};

export default LandingPage;

/* 1. Concepto useState explicado por partes
useState es un Hook en React que permite agregar estado a los componentes funcionales.
2. ¿Cuáles son las ventajas de la composición en React?
La composición es una técnica que permite combinar varios componentes más pequeños para crear otros componentes más grandes y complejos.

Ventajas:
Reutilización de código: Puedes usar componentes en diferentes partes de la aplicación.
Mantenibilidad: Facilita el mantenimiento al dividir el código en pequeñas piezas manejables.
Flexibilidad: Es fácil cambiar un componente individual sin afectar otros.
3. ¿Qué son los componentes padres y los componentes hijos?
Un componente padre es aquel que contiene otros componentes en su interior.
Los componentes hijos son aquellos que están contenidos dentro de otro componente (el padre).
4. ¿Qué son los Hooks en React y cuáles son los más utilizados?
Los Hooks son funciones especiales que permiten "enganchar" el estado y otras funcionalidades de React en los componentes funcionales.

Los Hooks más comunes:
useState: Para manejar el estado en componentes funcionales.
useEffect: Permite ejecutar efectos secundarios en componentes, como llamadas a APIs o manipulación de DOM.
useContext: Ayuda a compartir datos entre componentes sin pasar props a través de múltiples niveles.
5. ¿Qué son los props en React y qué tipo de datos pueden recibir?
Los props son parámetros que se envían de un componente padre a un componente hijo para pasarle información. Los props pueden recibir cualquier tipo de dato en JavaScript: strings, números, objetos, funciones, etc.
6. ¿Cómo se agregan estilos en ReactJS y cómo puedo definir un tema de estilos?
Hay varias maneras de agregar estilos en React:

Estilos en línea: Definir estilos directamente en los componentes.
Archivos CSS: Crear archivos CSS y usarlos en los componentes.
CSS Modules: Usar un enfoque modular de CSS para tener estilos aislados.
Styled Components o Material UI: Utilizar bibliotecas para trabajar con estilos en JavaScript.
7. ¿Qué es UI Material y cómo se instala en ReactJS?
Material UI es una biblioteca de componentes de interfaz de usuario (UI) basada en Material Design, el sistema de diseño de Google. Proporciona componentes listos para usar y consistentes que ayudan a crear una UI moderna y atractiva.
*/