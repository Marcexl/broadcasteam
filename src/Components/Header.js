
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from './logo.png';

function Header() {
    const [scrolled, setScrolled] = useState("");
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

    const addHeaderClass = () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY < 10){
                setScrolled('');
            }else {
                setScrolled('scrolled');
            }
        });
    }

    useEffect( () => {
        addHeaderClass();
    },[])
    
    return (
        <div className={`card fixed top-0 left-0 w-full z-3 ${scrolled}`}>
            <Menubar className="justify-content-between mxl-content" model={items} start={start} />
        </div>
    )
}

export default Header;