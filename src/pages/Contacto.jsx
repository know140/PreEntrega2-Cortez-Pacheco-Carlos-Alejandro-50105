// Contacto.jsx
import React, { useState } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para enviar el formulario (puedes usar axios u otra biblioteca)
    console.log('Form data submitted:', formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Mensaje:
          <textarea name="message" value={formData.message} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Envíar</button>
      </form>
    </div>
  );
};

export default Contacto;
