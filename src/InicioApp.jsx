
import React from 'react';
import Card from './components/Card';
import Alert from './components/Alert';
import Counter from './components/Contador';
import ContactForm from './components/ContactForm';
import './InicioApp.css';

function App() {
  return (
    <div className="App">
      <h1>Desafio 11</h1>
      
      <h2>Tarjeta de Presentación</h2>
      <Card 
        name="Juan Pérez"
        profession="Desarrollador Web"
        photo="./public/ingeniero.jpg"
      />

      <h2>Alerta Personalizada</h2>
      <Alert type="success">Este es un mensaje de EXITO.</Alert>
      <Alert type="warning">Este es un mensaje de ADVERTENCIA.</Alert>
      <Alert type="error">Este es un mensaje de ERROR-FATAL.</Alert>

      <h2>Contador</h2>
      <Counter />

      <h2>Formulario de Contacto</h2>
      <ContactForm />
    </div>
  );
}

export default App;
