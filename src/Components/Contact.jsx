// Importa las bibliotecas y componentes necesarios
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

const ContactForm = () => {
  // Estados para almacenar los valores del formulario y los errores
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  // Función para manejar cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de envío o validación adicional si es necesario
    console.log('Form submitted:', formValues);
  };

  // Función para validar el formulario antes del envío
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validación del campo de nombre
    if (!formValues.name.trim()) {
      newErrors.name = 'El nombre es obligatorio';
      isValid = false;
    }

    // Validación del campo de correo electrónico
    if (!formValues.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Ingrese un correo electrónico válido';
      isValid = false;
    }

    // Validación del campo de teléfono
    if (!formValues.phone.trim()) {
      newErrors.phone = 'El teléfono es obligatorio';
      isValid = false;
    }

    // Validación del campo de mensaje
    if (!formValues.message.trim()) {
      newErrors.message = 'El mensaje es obligatorio';
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  return (
    <div className='contact-section' id="contact">
        <div className='formgrid grid mxl-content'>
          <div className='field col'>
            <h2>Contactanos</h2>
          </div>
          <div className='field col'>
            <form onSubmit={handleSubmit} className='contact-form'>
                <div className="p-field">
                    <InputText
                    id="name"
                    name="name"
                    value={formValues.name}
                    placeholder='Nombre'
                    onChange={handleInputChange}
                    className='w-full'
                    />
                    <small className="p-error">{formErrors.name}</small>
                </div>

                <div className="p-field">
                    <InputText
                    id="email"
                    name="email"
                    placeholder='Email'
                    value={formValues.email}
                    onChange={handleInputChange}
                    className='mt-3 w-full'
                    />
                    <small className="p-error">{formErrors.email}</small>
                </div>

                <div className="p-field">
                    <InputMask
                    id="phone"
                    name="phone"
                    mask="(999) 999-9999"
                    value={formValues.phone}
                    placeholder='Teléfono'
                    onChange={handleInputChange}
                    className='mt-3 w-full'
                    />
                    <small className="p-error">{formErrors.phone}</small>
                </div>

                <div className="p-field">
                    <InputTextarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    placeholder='Dejanos tu mensaje'
                    onChange={handleInputChange}
                    className='mt-3 w-full'
                    />
                    <small className="p-error">{formErrors.message}</small>
                </div>

                <div className="p-field">
                    <Button type="submit" label="Enviar" />
                </div>
            </form>
          </div>
        </div>
    </div>
  );
};

export default ContactForm;
