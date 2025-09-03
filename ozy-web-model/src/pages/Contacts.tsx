import Link from '../components/Link';

function ContactsPage() {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', minWidth:'320px', width:'100%', maxWidth:'900px'}}>
                <div style={{width:'100%', overflowWrap:'break-word'}}>
                    <h1>Mes contacts</h1>
                    <div className="space"></div>
                    <h2>CV&nbsp;:</h2>
                    <Link link="/Home/files/NikielAlternanceDeveloppeur.pdf" is_nav={true}>
                        <p>Télécharger mon CV</p>
                    </Link>
                    <div className="space-s"></div>
                    <h2>Téléphone&nbsp;:</h2>
                    <p>+33&nbsp;6&nbsp;20&nbsp;69&nbsp;48&nbsp;89</p>
                    <p>(Veuillez me laisser un message si je ne répond pas)</p>
                    <div className="space-s"></div>
                    <h2>Email&nbsp;:</h2>
                    <Link link="mailto:patrick.nikielp@gmail.com">
                        <p>patrick.nikielp@gmail.com</p>
                    </Link>
                    <div className="space-s"></div>
                    <h2>Disponibilités par ordre de préférence&nbsp;:</h2>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="bulletpoint"></div>
                            <p>Yvelines</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="bulletpoint"></div>
                            <p>Paris</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className="bulletpoint"></div>
                            <p>Île de France (1h30 {`\u003C`} de transport de Saint-Germain-En-Laye)</p>
                        </div>
                    </div>
                    <div className="space-s"></div>
                    <h2>LinkedIn&nbsp;:</h2>
                    <Link link="https://www.linkedin.com/in/patrick-nikiel">
                        <p>https://www.linkedin.com/in/patrick-nikiel</p>
                    </Link>
                    <div className="space-s"></div>
                    <h2>GitHub&nbsp;:</h2>
                    <Link link="https://github.com/OzymandiasKnight">
                        <p>https://github.com/OzymandiasKnight</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ContactsPage;