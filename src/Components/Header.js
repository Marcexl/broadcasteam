
import React, { useEffect, useState } from 'react';
import { Menubar } from 'primereact/menubar';
import Logo from './logo.png';
import i18n from "i18next";
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();

    const [scrolled, setScrolled] = useState("");
    const items = [
        {
            label: t('header.services'),
            command: () => navigateToSection('services'),
        },
        {
            label: t('header.contact'),
            command: () => navigateToSection('contact'),
        },
        {
            label: '',
            icon: 'pi pi-fw pi-language',
            items: [
                {
                    label: 'EN',
                    command: () => i18n.changeLanguage('en')
                },
                {
                    label: 'ES',
                    command: () => i18n.changeLanguage('es')
                }
            ]
        },
    ];

    const start = <img alt="logo" src={Logo} height="80" className="mr-2 header-logo"></img>;

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
        <div className={`card fixed top-0 left-0 w-full header z-3 ${scrolled}`}>
            <Menubar className="justify-content-between mxl-content" model={items} start={start} />
        </div>
    )
}

export default Header;