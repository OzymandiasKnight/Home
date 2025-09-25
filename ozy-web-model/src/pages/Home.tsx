import Link from '../components/Link';
import RoadMap from '../components/Roadmap';
import Image from '../components/Image'
import { useEffect } from 'react'

const roadmapCollege:React.ReactNode[] = [
  <div>
    <h1 className="text-bg">2020</h1>
    <h2>Python</h2>
    <p>Stage d'une semaine d'innitiation au Python.</p>
    <p>Création de plusieurs projets en autodidacte</p>
  </div>,
  <div>
    <h1 className="text-bg">2021</h1>
    <h2>Java</h2>
    <p>Création de Plugin minecraft avec JRE Spigot.</p>
  </div>,
  <div>
    <h1 className="text-bg">2022</h1>
    <h2>Godot</h2>
    <p>Création de jeux multijoueurs.</p>
  </div>
]

const roadmapLycee:React.ReactNode[] = [
  <div>
    <h1 className="text-bg">2023</h1>
    <h2>HTML, CSS & Javascript</h2>
    <p>Découverte en autodidacte.</p>
  </div>,
  <div>
    <h1 className="text-bg">2024</h1>
    <h2>Projet Basse Vision</h2>
    <p>Prototype de GPS mobile à l'aide de Godot, pathfinding vers une salle et guidage audio.</p>
  </div>,
  <div>
    <h2>Passe Ton Hack d'Abord 2024</h2>
    <p>Equipe de 6 personnes.</p>
    <p>Classée 19/1132 équipes francophones.</p>
    <p>Invitation à la remise des prix.</p>
  </div>,
  <div>
    <h1 className="text-bg">2025</h1>
    <h2>PHP & SQL</h2>
    <p>En cours de NSI, création d'un laboratoire SQL en PHP.</p>
  </div>,
  <div>
    <h2>Oteria Cyber Cup 2025</h2>
    <p>Equipe de 4 personnes.</p>
    <p>Classée 8/13 (une des deux seules équipes lycée).</p>
  </div>,
  <div>
    <h2>Passe Ton Hack d'Abord 2025</h2>
    <p>Equipe de 6 personnes.</p>
    <p>Classée 41/1040 équipes francophones.</p>
  </div>,
  <div>
    <h2>React</h2>
    <p>Création de sites en autodidacte.</p>
    <p>(Le site actuel utilise React)</p>
  </div>
]

const roadmapVacances:React.ReactNode[] = [
<div>
  <h1 className="text-bg"></h1>
  <h2>Java Spring Boot & Vue.js</h2>
  <p>Création d'un mini réseaux social 'PhotoBuilder'.</p>
</div>,

]

const roadmapEtudes:React.ReactNode[] = [
<div>
  <h2>Programmation C</h2>
  <p>Apprentissage des bases de la programmation en C.</p>
</div>
]


function HomePage({is_mobile}: {is_mobile: boolean}) {
    useEffect(() => {
      const road_elements = document.querySelectorAll<HTMLElement>(".road-content")
      const road_titles = document.querySelectorAll<HTMLElement>(".road-title")

      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach( entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      }, { threshold:0.1});

      road_elements.forEach(ele => observer.observe(ele));
      road_titles.forEach(ele => observer.observe(ele));

      return () => observer.disconnect();

    });

    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', minWidth:'320px', width:'100%', maxWidth:'900px'}}>
            <div style={{minWidth:'320px', overflowWrap:'break-word'}}>
              <div style={{display:'flex', flexDirection:'row', gap:'0px', lineHeight:'64px', alignItems:'center'}}>
                <Image src="icons/logo.svg" alt="logo" style={{width:'64px', height:'64px', zIndex:'1', paddingRight:'8px'}}></Image>
                <div style={{height:'100%', width:'fit-content', display:'flex', justifyContent:'center', overflow:'hidden'}} className="name">
                  <h1 style={{position:'relative',top:'0%',width:'fit-content', maxWidth:'fit-content', display:'inline'}}>Patrick Nikiel</h1>
                </div>
              </div>
                <div className="space-s"></div>
                <h2>En recherche d'alternance dans l'informatique</h2>
                <h2>De préférence dans le développement web ou la cybersécurité</h2>
                <div className="space-s"></div>
                <p>Je suis un développeur passionné,</p>
                <p>une alternance me permettrais de découvrir, le monde du travail pendant que j'étudie</p>
            </div>
            <div className="space-s"></div>
            <Link link="/Home/files/NikielAlternanceDeveloppeur.pdf" is_nav={true}>
              <p>Télécharger mon CV</p>
            </Link>
            <div className="space"></div>
            <div className="rule-h"></div>
            <div className="space-s"></div>
            <h1>Mon parcours :</h1>
            <div className="space"></div>
            <div className="roadmap" style={{minWidth: '320px', width:'100%'}}>
              <h1 style={{textAlign:'center'}} className="road-title">Collège</h1>
              <RoadMap list={roadmapCollege} lineHeight='160px' is_mobile={is_mobile}/>
              <h1 style={{textAlign:'center'}} className="road-title">Lycée</h1>
              <RoadMap list={roadmapLycee} lineHeight='160px' is_mobile={is_mobile} is_flip={true}/>
              <div style={{textAlign:'center'}}>
                <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
                  <h1 className="text-bg" style={{}}>2025</h1>
                </div>
                <h1 className="road-title">Obtention du baccalauréat</h1>
                <p>Mention bien avec 20/20 en NSI et 15/20 en mathématiques</p>
            </div>
            <RoadMap list={roadmapVacances} lineHeight='160px' is_mobile={is_mobile}/>
            </div>
            <div style={{textAlign:'center'}}>
                <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
                  <h1 className="text-bg" style={{}}>2025</h1>
                </div>
                <h1 className="road-title">Rentrée à l'ESGI</h1>
                <p style={{display:'inherit'}}>Rentrée en septembre</p>
                <p>Recherche d'alternance</p>
            </div>
            <RoadMap list={roadmapEtudes} is_flip={true} lineHeight='160px' is_mobile={is_mobile}/>
            <div className="space"></div>
            <Link link="/projects">
            <h2>Decouvrez mes projets</h2>
            </Link>
        </div>
      </div>
    );
}

export default HomePage;