import { Card } from 'primereact/card';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import i18n from '../i18n';
function Services() {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
            pathLength: { delay, type: "spring", duration: 3, bounce: 0 },
            opacity: { delay, duration: 0.01 }
            }
        };
        }
    };

    const { t } = useTranslation();
    const [result, setResult] = useState([]);
    const [idService, setIdService] = useState(1);

    const showDataById = (id) => {
        setIdService(id);
        setResult([]);
        let data = [
            {id:1, items:[
                t('services.events.itemOne'),
                t('services.events.itemTwo'),
                t('services.events.itemThree'),
                t('services.events.itemFour'),
                t('services.events.itemFive'),
            ]},
            {id:2, items:[
                t('services.transmissions.itemOne'),
                t('services.transmissions.itemTwo')
            ]},
            {id:3, items:[
                t('services.visual.itemOne'),
                t('services.visual.itemTwo'),
                t('services.visual.itemThree')
            ]},
            {id:4, items:[
                t('services.multimedia.itemOne'),
                t('services.multimedia.itemTwo'),
                t('services.multimedia.itemThree'),
                t('services.multimedia.itemFour'),
            ]},
        ];
        const res = data.find(t => t.id === id);
        cleanClass(id);
        setTimeout( () => {
            setResult(res.items);
        },200);
    };

    useEffect( () => {
        showDataById(idService);
    },[i18n.language]);

    return(
        <>
        <div className="formgrid grid mxl-content mt-5 services-section gap-5" id="services">
            <div className="field col">
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.events.title')} className='card-service active' id="card-1" onMouseOver={ () => showDataById(1)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.transmissions.title')}  className='card-service' id="card-2" onMouseOver={ () => showDataById(2)}></Card>
                        </Tilt>
                    </div>
                </div>
                <div className="formgrid grid">
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.visual.title')}  className='card-service' id="card-3" onMouseOver={ () => showDataById(3)}></Card>
                        </Tilt>
                    </div>
                    <div className="field col">
                        <Tilt tiltReverse={true}>
                            <Card title={t('services.multimedia.title')} className='card-service' id="card-4" onMouseOver={ () => showDataById(4)}></Card>
                        </Tilt>
                    </div>
                </div>
            </div>
            <div className="field col col-result relative">
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
                {/*<motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 600 600"
                    initial="hidden"
                    animate="visible"
                    className="absolute top-0 left-0"
                    >
                    <motion.rect
                        width="100%"
                        height="100%"
                        x="0"
                        y="0"
                        rx="20"
                        stroke="#ff0055"
                        fill="transparent"
                        variants={draw}
                    />
                </motion.svg>*/}

            </div>
        </div>
        </>
    );
}

export default Services;

function cleanClass(id){
    const boxes = document.querySelectorAll('.card-service');
    for (const box of boxes) {
        box.classList.remove('active');
    }
    const e = document.getElementById("card-" + id);
    e.classList.add("active");
}