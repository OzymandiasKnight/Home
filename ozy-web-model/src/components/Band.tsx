import Link from './BandLink';
import Icon from './Icon';
import {useLocation} from 'react-router-dom';

function BandLink({link_to, children, icon_url, display_icon} : {link_to: string; icon_url: string; children:React.ReactNode; display_icon: boolean}) {
    const tab = useLocation();
    let isActive = tab.pathname.startsWith(link_to);
    if (link_to === "/") {
        isActive = tab.pathname === "/"
    }

    return (
        <Link link={link_to}>
            {display_icon &&
            <Icon img_url={icon_url}
            style={{ width: "32px", height: "32px", zIndex: 150}} background={((isActive) ? 'var(--primary-v)' : 'var(--primary)')}/>}
            <div style={{fontWeight: (isActive) ? 'bold' : 'normal', fontSize:'32px', height:'40px'}}>
                {children}
            </div>
        </Link>
    )
}

function NavBar({ is_compact, is_mobile, screen_width}:{is_compact:boolean, is_mobile:boolean, screen_width:number}) {
    return (
        <div className={"headband " + ((is_compact) ? "headband-compact" : "")} style={{width:(is_compact) ? screen_width : 'fit-content'}}>
                <div style={{ flexDirection: 'inherit', display:'flex', justifyContent: 'center', alignItems: 'inherit'}}>
                    <BandLink link_to='/' icon_url="/icons/home.svg" display_icon={!is_compact}>
                        <div style={{width:(!is_mobile) ? '182px' : '78px'}} className={(useLocation().pathname === "/") ? "tab active" : "tab "}>
                            {(is_mobile) ? <span>Nikiel</span> : <span>Nikiel Patrick</span>}
                            <div className={(useLocation().pathname === "/") ? "underline active" : "underline "}>
                                <div className={"anim"}></div>
                            </div>
                        </div>
                    </BandLink>
                    <BandLink link_to='/projects' icon_url="/icons/projects.svg" display_icon={true}>
                        <div>
                            {!is_compact && <div><span>Projects</span></div>}
                        </div>
                    </BandLink>

                    <BandLink link_to='/blogs' icon_url="/icons/blogs.svg" display_icon={true}>
                        <div>
                            {!is_compact && <div><span>Blogs</span></div>}
                        </div>
                    </BandLink>
                    <BandLink link_to='/contacts' icon_url="/icons/contacts.svg" display_icon={true}>
                        <div>
                            {!is_compact && <div><span>Contacts</span></div>}
                        </div>
                    </BandLink>
                    
                    {/*<Link link="/hobbies">
                        <Icon img_url="icons/hobbies.svg" style={{ width: "32px", height: "32px", zIndex: 150}} background_color='var(--primary)'/>
                        {!is_compact && <h2>Hobbies</h2>}
                    </Link>*/}
                </div>
            </div>
    );
}

export default NavBar;