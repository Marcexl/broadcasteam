import { Card } from 'primereact/card';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';

function Services() {

    const [result, setResult] = useState([]);

    const showDataById = (id) => {
        const data = [
            {id:1, items:['Lanzamientos de producto','Stands','Proyecciones y realidad aumentada','IA recreativo',  'Eventos corporativos y comerciales']},
            {id:2, items:['Streaming y satelitales','Estudios y exteriores']},
            {id:3, items:['Rodajes','Postproducción','Arte y escenografía ']},
            {id:4, items:['Animación','Diseño gráfico','Desarrollos web y apps','Redes sociales y MKT digital']},
        ];

        const res = data.find(t => t.id === id);
        setResult(res.items);
        console.log(res.items);
    };


    return(
        <>
        <div className="formgrid grid mxl-content mt-5 services-section gap-5" id="services">
            <div className="field col">
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title="Eventos y experiencias" className='card-service' onMouseOver={ () => showDataById(1)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title="Eventos corporativos y comerciales" className='card-service' onMouseOver={ () => showDataById(2)}></Card>
                        </Tilt>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title="Producción audiovisual" className='card-service' onMouseOver={ () => showDataById(3)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title="Producción multimedia" className='card-service' onMouseOver={ () => showDataById(4)}></Card>
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className="field col">
                <ul className='result'>
                    { 
                        result.length === 0 ? 
                            result.map(t => {
                                return <li>t</li>  
                            }) 
                            : 
                            <li>no results</li>
                    }
                </ul>
            </div>
        </div>
        </>
    );
}

export default Services;