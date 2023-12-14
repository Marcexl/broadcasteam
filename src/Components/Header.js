
import React from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from './logo.png';

function Header() {
    const items = [
        {
            label: 'Servicios',
            command: () => navigateToSection('services'),
        },
        {
            label: 'Contacto',
            command: () => navigateToSection('contact'),
        },
        {
            label: '',
            icon: 'pi pi-fw pi-language',
            items: [
                {
                    label: 'EN',
                },
                {
                    label: 'ES',
                }
            ]
        },
    ];

    const start = <img alt="logo" src={Logo} height="80" className="mr-2"></img>;

    const navigateToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    
    return (
        <div className="card fixed top-0 left-0 w-full z-1">
            <Menubar className="justify-content-between mxl-content" model={items} start={start} />
        </div>
    )
}

export default Header;