import '../components.css';
import { NavLink } from 'react-router-dom';

function BandLink({ link, children}: { link: string; children: React.ReactNode}) {
    const content = (
        <>
            <div className="link-content">
                {children}
            </div>
        </>
    );

    return (
        <div className="link">
            <NavLink to={link}>
                {content}
            </NavLink>
        </div>
    )
}

export default BandLink;