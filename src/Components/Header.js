
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
        
function Header() {
    const items = [
        {
            label: 'Servicios',
        },
        {
            label: 'Contacto',
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

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;

    return (
        <div className="card fixed top-0 left-0 w-full">
            <Menubar className="justify-content-between" model={items} start={start} />
        </div>
    )
}

export default Header;