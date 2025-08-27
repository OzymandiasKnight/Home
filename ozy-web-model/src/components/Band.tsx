import Link from './Link';
import Icon from './Icon';

function NavBar({ is_compact, is_mobile}:{is_compact:boolean, is_mobile:boolean}) {
    const prefix:string = ""

    return (
        <div className={"headband " + ((is_compact) ? "headband-compact" : "")}>
            <div style={{ flexDirection: 'inherit', display:'flex', justifyContent: 'center', alignItems: 'inherit', width:'100%'}}>
                <div style={{top:'-3.6px', position:'relative'}}>
                
                <Link link="/">
                    {!is_compact && <Icon img_url="/icons/home.svg"
                    style={{ width: "32px", height: "32px", zIndex: 150}}background_color='var(--primary)'/>}
                    <div style={{top:'4px', position:'relative'}}>
                        {(is_mobile) ? <h2>Nikiel</h2> : <h2>Nikiel Patrick</h2>}
                        
                    </div>
                </Link>
                </div>
                <Link link={`${prefix}/projects`}>
                    <Icon img_url="/icons/projects.svg" style={{ width: "32px", height: "32px", zIndex: 150}} background_color='var(--primary)'/>
                    {!is_compact && <h2>Projets</h2>}
                </Link>
                <Link link={`${prefix}/blogs`}>
                    <Icon img_url="/icons/blogs.svg" style={{ width: "32px", height: "32px", zIndex: 150}} background_color='var(--primary)'/>
                    {!is_compact && <h2>Blogs</h2>}
                </Link>
                <Link link={`${prefix}/contacts`}>
                    <Icon img_url="/icons/contacts.svg" style={{ width: "32px", height: "32px", zIndex: 150}} background_color='var(--primary)'/>
                    {!is_compact && <h2>Contacts</h2>}
                </Link>
                {/*<Link link="/hobbies">
                    <Icon img_url="icons/hobbies.svg" style={{ width: "32px", height: "32px", zIndex: 150}} background_color='var(--primary)'/>
                    {!is_compact && <h2>Hobbies</h2>}
                </Link>*/}
            </div>
        </div>
    );
}

export default NavBar;