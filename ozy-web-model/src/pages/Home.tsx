import Link from '../components/Link';
import RoadMap from '../components/Roadmap';

const roadmapCollege:React.ReactNode[] = [
  <div>
    <h1 className="text-bg">2019</h1>
    <h2>Scratch</h2>
    <p>Découverte de scratch au collège en math</p>
  </div>,
  <div>
    <h1 className="text-bg">2020</h1>
    <h2>Python</h2>
    <p>Stage d'une semaine d'innitiation au Python</p>
    <p>Création de plusieurs projets en autodidacte</p>
  </div>,
  <div>
    <h1 className="text-bg">2021</h1>
    <h2>Java</h2>
    <p>Création de Plugin minecraft avec JRE Spigot</p>
  </div>,
  <div>
    <h1 className="text-bg">2022</h1>
    <h2>Godot</h2>
    <p>Création de jeux multijoueurs</p>
  </div>
]

const roadmapLycee:React.ReactNode[] = [
  <div>
    <h1 className="text-bg">2023</h1>
    <h2>HTML, CSS & Javascript</h2>
    <p>Découverte en autodidacte</p>
  </div>,
  <div>
    <h1 className="text-bg">2024</h1>
    <h2>Projet Basse Vision</h2>
    <p>Prototype de GPS mobile à l'aide de Godot, pathfinding vers une salle et guidage audio</p>
  </div>,
  <div>
    <h2>Passe Ton Hack d'Abord 2024</h2>
    <p>Equipe de 6 personnes</p>
    <p>Classée 19/1132 équipes francophones</p>
    <p>Invitation à la remise des prix</p>
  </div>,
  <div>
    <h1 className="text-bg">2025</h1>
    <h2>PHP & SQL</h2>
    <p>En cours de NSI, création d'un laboratoire SQL en PHP</p>
  </div>,
  <div>
    <h2>Oteria Cyber Cup 2025</h2>
    <p>Equipe de 4 personnes</p>
    <p>Classée 8/13 (une des deux seules équipes lycée)</p>
  </div>,
  <div>
    <h2>Passe Ton Hack d'Abord 2025</h2>
    <p>Equipe de 6 personnes</p>
    <p>Classée 41/1040 équipes francophones</p>
  </div>,
  <div>
    <h2>React</h2>
    <p>Création de sites en autodidacte</p>
    <p>(Le site actuel utilise React)</p>
  </div>
]

const roadmapEtudes:React.ReactNode[] = [
<div>
  <h1 className="text-bg"></h1>
  <h2>Java Spring Boot & Vue.js</h2>
  <p>Création d'un mini réseaux social 'PhotoBuilder'</p>
</div>,

]

function HomePage({is_mobile}: {is_mobile: boolean}) {
    return (
      <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column', minWidth:'320px', width:'100%', maxWidth:'900px'}}>
            <div style={{minWidth:'320px', overflowWrap:'break-word'}}>
                <h1>Patrick Nikiel</h1>
                <h2>En recherche d'alternance dans</h2>
                <h2>le développement web ou cybersécurité</h2>
                <p>Je suis un développeur passionné,</p>
                <p>une alternance me permettrais de faire un premier pas dans</p>
                <p>l'enseignement supérieur et le monde du travail</p>
            </div>
            <div className="space"></div>
            <div className="rule-h"></div>
            <div className="space-s"></div>
            <h1>Mon parcours :</h1>
            <div className="space"></div>
            <div className="roadmap" style={{minWidth: '320px', width:'100%'}}>
              <h1 style={{textAlign:'center'}}>Collège</h1>
              <RoadMap list={roadmapCollege} lineHeight='160px' is_mobile={is_mobile}/>
              <h1 style={{textAlign:'center'}}>Lycée</h1>
              <RoadMap list={roadmapLycee} lineHeight='160px' is_mobile={is_mobile}/>
              <div style={{textAlign:'center'}}>
                <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
                  <h1 className="text-bg" style={{}}>2025</h1>
                </div>
                <h1>Obtention du baccalauréat</h1>
                <p>Mention bien avec 20/20 en NSI et 15/20 en mathématiques</p>
            </div>
            <RoadMap list={roadmapEtudes} lineHeight='160px' is_mobile={is_mobile}/>
            </div>
            <div style={{textAlign:'center'}}>
                <div style={{width:'100%', justifyContent:'center', display:'flex'}}>
                  <h1 className="text-bg" style={{}}>2025</h1>
                </div>
                <h1>Rentrée à l'ESGI</h1>
                <p>Rentrée en septembre</p>
                <p>Recherche d'alternance</p>
            </div>
            <div className="space"></div>
            <Link link="/projects">
            <h2>Decouvrez mes projets</h2>
            </Link>
        </div>
      </div>
    );
}

export default HomePage;