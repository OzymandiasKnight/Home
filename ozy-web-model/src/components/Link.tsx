import '../components.css';
import { NavLink } from 'react-router-dom';

function Link({ link, children, is_nav }: { link: string; children: React.ReactNode, is_nav?: boolean }) {
    const isActive = link === window.location.pathname;

    const content = (
        <>
            <div className="link-content">
                {children}
            </div>
            <div className="underline">
                <div className={"anim " + ((isActive) ? "active" : "")}></div>
            </div>
        </>
    );

    return (
        <div className="link">
            {is_nav ? (
                <a href={link}>
                    {content}
                </a>
            ) : (
            <NavLink to={link}>
                {content}
            </NavLink>
            )}
        </div>
    )
}

export default Link;