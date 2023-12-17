// Importa las bibliotecas y componentes necesarios
import React, { useState, useRef} from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import footerLogo from './footer-logo.svg';
import { Toast } from 'primereact/toast';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const ContactForm = () => {
  const toast = useRef(null);
  const [loading, setLoading] = useState(false);

  const { t } = useTranslation();
  const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
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
  const handleSubmit = async (e) => {
    setLoading(true);
    
    e.preventDefault();
    // Aquí puedes realizar la lógica de envío o validación adicional si es necesario
    const valid = validateForm();
    if(valid){
      const data = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        message: formValues.message,
      };

      const res = await axios.post(`${apiEndpoint}/mail.php`, data);
      if(res.data.success){
        setLoading(false);
        toast.current.show({ severity: 'success', summary: 'Success', detail: 'Gracias. Se ha enviado el mensaje!' })
      } else {
        setLoading(false);
        toast.current.show({ severity: 'error', summary: 'Error', detail: res.data.error })
      }
    }
  };

  // Función para validar el formulario antes del envío
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validación del campo de nombre
    if (!formValues.name.trim()) {
      newErrors.name = t('contact.form.required');
      isValid = false;
    }

    // Validación del campo de correo electrónico
    if (!formValues.email.trim()) {
      newErrors.email = t('contact.form.valid');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = t('contact.form.valid');
      isValid = false;
    }

    // Validación del campo de teléfono
    if (!formValues.phone) {
      newErrors.phone = t('contact.form.required');
      isValid = false;
    }

    // Validación del campo de mensaje
    if (!formValues.message.trim()) {
      newErrors.message = t('contact.form.required');
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  return (
    <div className='contact-section' id="contact">
      <div className='formgrid grid mxl-content'>
        <div className='field col'>
          <h2 className='mb-5'>{t('contact.leftTitle')}</h2>
          <p className='social-items'>
            <i className='pi pi-whatsapp pr-1'></i>
            <span>Whatsapp: </span>
            <a rel="nofollow" href="https://wa.me/+5491124012362">+54 9 11 2401-2362</a>
          </p>
          <p className='social-items'>
            <i className='pi pi-envelope pr-2'></i>
            <span>Email: </span>
            <a rel="nofollow" href="mailto:hola@agencybroadcast.com">hola@agencybroadcast.com</a>
          </p>
          <p className='social-items'>
            <i className='pi pi-instagram pr-2'></i>
            <span>{t('contact.followUs')}: </span>
            <a rel="nofollow" href="#">@agencybroadcast</a>
          </p>
          <img src={footerLogo} alt="footer logo" className='footer-logo mt-5' />

        </div>
        <div className='field col'>
          <h2 className='mb-5'>{t('contact.rightTitle')}</h2>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div className="p-field">
              <InputText
                id="name"
                name="name"
                value={formValues.name}
                placeholder={t('contact.form.name')}
                onChange={handleInputChange}
                className='w-full'
              />
              <small className="p-error">{formErrors.name}</small>
            </div>

            <div className="p-field">
              <InputText
                id="email"
                name="email"
                placeholder={t('contact.form.email')}
                value={formValues.email}
                onChange={handleInputChange}
                className='mt-3 w-full'
              />
              <small className="p-error">{formErrors.email}</small>
            </div>

            <div className="p-field">
              <InputNumber
                id="phone"
                name="phone"
                value={formValues.phone}
                placeholder={t('contact.form.phone')}
                onValueChange={handleInputChange}
                useGrouping={false}
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
                placeholder={t('contact.form.message')}
                onChange={handleInputChange}
                className='mt-3 w-full'
              />
              <small className="p-error">{formErrors.message}</small>
            </div>

            <div className="p-field mt-5">
              <Button type="submit" label={t('contact.form.submit')} className='w-full' loading={loading} />
            </div>
            <Toast ref={toast} position="bottom-right"/>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
