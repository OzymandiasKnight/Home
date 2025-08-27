import React, { useEffect } from 'react';
import Icon from './Icon.tsx';

function ScrollTopButton() {
    const [visible, setVisible] = React.useState(false);
    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 80);
        window.addEventListener('scroll', onScroll, {passive:true});
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <button onClick={scrollToTop} className="scroll-to-top" style={{opacity: visible ? 1 : 0 }}>
            <Icon img_url="/icons/arrowup.svg" style={{ width: "32px", height: "32px"}} background_color='var(--primary)'/>
        </button>
    );
}

export default ScrollTopButton;