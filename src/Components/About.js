import { TypeAnimation } from 'react-type-animation';


function About() {
    return(
        <>
        <div className="about-section">
            <div className="mxl-content about-section-container text-center flex flex-column justify-content-center align-items-center">
                <h1 className="broad-title">BROADCAST <span>TEAM</span></h1>
                <div className="broad-subtitle">
                <TypeAnimation
                sequence={[
                    'CREEMOS QUE LA CREATIVIDAD PUEDE SUPERAR CUALQUIER OBSTÁCULO, NOS APASIONA BRINDAR SOLUCIONES PRÁCTICAS Y EFICIENTES',
                    3000,
                    'Trabajamos en equipo con nuestros clientes generando un feedback constante',
                    3000, 
                    'esto nos permite optimizar recursos, aprender y mejorar en cada proyecto',
                    3000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }}
                repeat={Infinity}
            />
                </div>
            </div>
            <div className="mxl-content about-section-container-2 flex flex-column justify-content-center ">

            </div>
        </div>

        </>
    );
}

export default About;