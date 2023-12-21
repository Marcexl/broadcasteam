
import {useEffect, useRef, useState, useMemo} from 'react';
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import footerLogo from './footer-logo.svg';

function About() {
    const { t } = useTranslation();

    const ref1 = useRef(null);
    const isInViewport1 = useIsInViewport(ref1);
    return(
        <>
        <div className="about-section">
            <div className="mxl-content about-section-container text-center flex flex-column justify-content-center align-items-center">
                <img src={footerLogo} alt="footer logo" className='footer-logo mt-5' />

                <div className="broad-subtitle" ref={ref1}>
                    {
                    isInViewport1 ?
                        <>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                transition={{delay: 0.3 }}>
                                {t('about.lineOne')}
                            </motion.p>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                transition={{delay: 0.6 }}>
                                {t('about.lineTwo')}
                            </motion.p>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                transition={{delay: 0.9 }}>
                                {t('about.lineThree')}
                            </motion.p>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                transition={{delay: 1.2 }}>
                                {t('about.lineFour')}
                            </motion.p>
                            <motion.p
                                initial={{ y: 15, opacity: 0 }}
                                animate={{ y: 0, opacity: 1}}
                                transition={{delay: 1.5 }}>
                                {t('about.lineFive')}
                            </motion.p>
                        </>
                        :
                        ""
                    }
                </div>
            </div>
            <div className="mxl-content about-section-container-2 flex flex-column justify-content-center ">

            </div>
        </div>

        </>
    );
}

export default About;

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting),
        ),
      [],
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }