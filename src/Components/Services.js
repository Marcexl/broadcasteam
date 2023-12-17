import { Card } from 'primereact/card';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';

function Services() {
    const { t } = useTranslation();

    const [result, setResult] = useState([]);
    const [idService, setIdService] = useState(null);

    const showDataById = (id) => {
        setIdService(id);
        if(idService !== id) {
            setResult([]);
            const data = [
                {id:1, items:[t('services.events.itemOne'),t('services.events.itemTwo'),t('services.events.itemThree'),t('services.events.itemFour'),t('services.events.itemFive'),]},
                {id:2, items:[t('services.transmissions.itemOne'),t('services.transmissions.itemTwo')]},
                {id:3, items:[t('services.visual.itemOne'),t('services.visual.itemTwo'),t('services.visual.itemThree')]},
                {id:4, items:[t('services.multimedia.itemOne'),t('services.multimedia.itemTwo'),t('services.multimedia.itemThree'),]},
            ];
            const res = data.find(t => t.id === id);

            setTimeout( () => {
                setResult(res.items);
            },200);
        }

    };


    return(
        <>
        <div className="formgrid grid mxl-content mt-5 services-section gap-5" id="services">
            <div className="field col">
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.events.title')} className='card-service' onMouseOver={ () => showDataById(1)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.transmissions.title')}  className='card-service' onMouseOver={ () => showDataById(2)}></Card>
                        </Tilt>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.visual.title')}  className='card-service' onMouseOver={ () => showDataById(3)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.multimedia.title')} className='card-service' onMouseOver={ () => showDataById(4)}></Card>
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className="field col col-result">
                <ul className='result'>
                    {
                        result.length > 0 ?
                            result.map((i, k) => {
                                return <li className={`service-item s-i-${k}`} key={k}>{i}</li>
                                })
                            :
                            ""
                    }
                </ul>
            </div>
        </div>
        </>
    );
}

export default Services;