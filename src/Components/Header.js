
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
            //url: 'https://agencybroadcast.com#services'
            command: () => goToLink(1)
        },
        {
            label: t('header.contact'),
            command: () => goToLink(2)
        },
        {
            label: '',
            icon: 'pi pi-fw pi-language',
            items: [
                {
                    label: 'EN',
                    command: () => changeLang('en')
                },
                {
                    label: 'ES',
                    command: () => changeLang('es')
                }
            ]
        },
    ];

    const start = <img alt="logo" src={Logo} height="80" className="mr-2 header-logo"></img>;

    const addHeaderClass = () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY < 10){
                setScrolled('');
            }else {
                setScrolled('scrolled');
            }
        });
    }

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
    }

    const goToLink = (id) => {
        const btn = document.getElementById(id === 1 ? 'services' : 'contact');

        btn.addEventListener("click", function() {
            var i = 10;
            var int = setInterval(function() {
              window.scrollTo(0, i);
              i += 10;
              if (i >= 200) clearInterval(int);
            }, 20);
          })
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