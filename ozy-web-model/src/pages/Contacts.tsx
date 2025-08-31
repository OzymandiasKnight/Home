import Link from '../components/Link';

function ContactsPage() {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', minWidth:'320px', width:'100%', maxWidth:'900px'}}>
                <div style={{width:'100%', overflowWrap:'break-word'}}>
                    <h1>Mes contacts</h1>
                    <h2>Mon CV&nbsp;:</h2>
                    <Link link="/Home/files/NikielAlternanceDeveloppeur.pdf" is_nav={true}>
                        <p>Télécharger mon CV</p>
                    </Link>
                    <div className="space-s"></div>
                    <h2>Mon téléphone&nbsp;: +33 6 20 69 48 89</h2>
                    <p>(Veuillez me laisser un message si je ne répond pas)</p>
                    <h2>Mon email&nbsp;: patrick.nikielp@gmail.com</h2>
                    <h2>Disponibilités par ordre de préférence&nbsp;:</h2>
                    <p>Yvelines</p>
                    <p>Paris</p>
                    <p>Île de France (1h30 {`\u003C`} de transport de Saint-Germain-En-Laye)</p>
                    <div className="space-s"></div>
                    <h2>Mon LinkedIn&nbsp;:</h2>
                    <Link link="https://www.linkedin.com/in/patrick-nikiel">
                        <p>https://www.linkedin.com/in/patrick-nikiel</p>
                    </Link>
                    <h2>Mon GitHub&nbsp;:</h2>
                    <Link link="https://github.com/OzymandiasKnight">
                        <p>https://github.com/OzymandiasKnight</p>
                    </Link>
                    <div className="space-s"></div>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;