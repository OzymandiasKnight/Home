import './Home.css';

/*function remainder(value, divisor) {
    return Math.round(value / divisor) * divisor;
}*/

function make_path(relative_path) {
  return `${process.env.PUBLIC_URL}/${relative_path}`;
}

function Photo() {
    const photoUrl = make_path(`photo.jpg`);
    return (
        <div className='photo'>
            <img src={photoUrl} alt="Erreur chargement de la photo"></img>
            <h1>Patrick Nikiel</h1>
        </div>
    )
}

function Paragraph({text='',title=''}) {
    let format = [];
    text.split('\\n').forEach((line, idx) => {
        format.push(<h3 key={idx}>{line}</h3>);
    });
    return (
        <div className='paragraph'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='text'>
                {format}
                <div className='marker-area'></div>
            </div>
        </div>
    )
}

function Home() {
    return (
        
        <div className='home'>
            <div class='self'>
                <Photo />
            </div>

            <Paragraph title="Ma passion pour l'informatique" text="
            Enchanté, je suis un développeur passionné,
            ma passion a commencé au collège avec la découverte de Python.
            J'ai été fasciné par la manière dont le code pouvait
            mettre en commun la logique et la créativité. \n
            Depuis, j'ai exploré divers langages de programmation,
            en continuant avec Godot Engine,
            qui m'a permis de créer des jeux vidéo.
            J'ai tout de suite voulu créer des jeux en multijoueur
            pour y faire participer mes amis. \n
            Ça m'a permis de découvrir les bases du networking. \n
            En entrant au lycée, j'ai découvert le développement web classique
            en autodidacte.
            Comme j'ai fait 'Numérique et Science Informatique' au lycée,
            j'ai pu découvrir le SQL et renforcer mes bases
            en réseaux,
            j'ai aider mes camarades de classe là ou j'avais de l'avance
            (en Python la plupart du temps). J'aide aussi des amis et des
            internautes pendant mon temp libres à faire leurs premiers pas
            dans la programmation. Pour me faciliter la tâche j'ai fait
            un guide python en ligne, puis je regarde avec eux les
            notions qu'ils ont mal compris.
            "/>
            <Paragraph title="Le Projet Basse Vision - 2024" text="
            En deuxième année de lycée, moi et deux amis,
            avions créer un prototype d'application mobile
            à l'aide du moteur de jeu Godot Engine.
            Cette application avait pour but d'aider
            les personnes à basse vision. \n
            On à réussit a y intégrer un système de path finding
            qui prédit le chemin le plus court pour arriver à la
            salle souhaitée.
            Ainsi l'utilisateur était guidée avec des
            indications audio 'tourner a gauche',\n 'faite demi-tour' etc
            selon la direction du téléphone.
            Ces deux amis fesaient les calculs pendant que
            je mettais en place ce qu'ils demendait
            directement dans l'application.
            "/>
            <Paragraph title="Concours PasseTonHack - 2024" text="
            Le concours PasseTonHack est un concours de cybersécurité et
            des équipes de tout les lycée mondiaux francophones peuvent
            y participer.\n
            Mon équipe les 'Scriptkitties' est arrivée dans le top 20
            de ce concours, nous avons pu assister a la remise des
            prix. Bien que aucun prix ne nous à été remis,
            les connaissances que m'a apporté ce concours on été
            plus bien intéressante.
            J'y ais appris Wireshark, HxD/Hydra ainsi que l'utilisation
            de l'api 'requests' de Python.
            "/>
            <Paragraph title="Concours VideoDiMath - 2025" text="
            Le concours VideoDiMath engage les collégiens et lycéens
            à présenter une vidéo, qui doit expliquer un concept mathématique.
            La classe de math expertes (dont je n'en fait pas partie) de mon lycée
            m'a contactée pour les aider a avoir un support sur lequel expliquer
            leurs idées. J'ai donc fourni des réalisations 3D faites avec Blender.\n Le theme était de savoir
            si la trajectoire de la balle d'un tir de sniper dans une série était cohérent
            physiquement. Nous avons pris l'extrait de la série 'The Shooter' S03E13,
            ou l'on voit un tir de sniper être réalisée. J'ai refait le tir en 3D cell-shading,
            ainsi que des plans qui montrent l'intérieur du canon \n et les forces appliquées à la balle.
            D'autre part j'ai formé et guidée l'équipe de montage de quatres personnes
            étant donnée que j'en étais le plus capable.
            "/>
        </div>

);
}


export default Home;