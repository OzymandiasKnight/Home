import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';

interface ProjectInfos {
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: ProjectInfos[] = [
    {title:"Guide Python", description:'Guide pour débuter en Python',
    image:"showcases/GuidePython.png",link:"https://ozymandiasknight.github.io/GuidePython/guide_bases.pdf"},
    {title:"Blood War", description:'Jeu de plateforme multijoueur local en 2D',
    image:"showcases/Bloodwar.png",link:"https://github.com/OzymandiasKnight/BloodWar"},
    {title:"Slower Pace", description:'Plugin Minecraft augmentant la durée du jeu',
    image:"showcases/SlowerPace.png",link:"https://github.com/OzymandiasKnight/SlowerPace"},
    {title:"Work Nodes", description:'Logiciel de gestion de projet',
    image:"showcases/WorkNodes.png", link:"https://github.com/OzymandiasKnight/ProjectManager"},
    {title:"Art Station", description:'Site vitrine de présentation de mes créations 3D',
    image:"showcases/Artstation.png", link:"https://ozymandiasknight.github.io/Artstation/"},
    {title:"Photo Builder",
    description:'Mini réseaux social permettant de comparer les frises chronologiques de ses amis',
    image:"showcases/PhotoBuilder.png", link:"https://github.com/OzymandiasKnight/SocialTimelineBuilder"},
    {title:"Portfolio" , description:'Decouvrez le code de ce portfolio, lien GitHub',
    image:"icons/logo.svg", link:"https://github.com/OzymandiasKnight/Home"}
];

function ProjectCard(infos:ProjectInfos,index:number) {
    const delay:string = String(index*0.15) + "s";
    return (
        <div key={index} style={{position:'relative',animationDelay:`${delay}`}} className="project-show">
            <Card title={infos.title} description={infos.description}
            card_width="270px" card_height="300px"  image={infos.image} link={infos.link}/>
        </div>
    )
}

function ProjectsList(project_list:ProjectInfos[]) {
    return (
        <>
        {project_list.map((item:ProjectInfos, index:number) => (
            ProjectCard(item,index)
        ))}
        </>
    )
}

function ProjectsPage() {
    return (
        <div>
            <div style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <h1>Mes Projets</h1>
                <div className="space-s"></div>
                <div style={{minWidth:'320px', width:'100%', maxWidth:'900px', display: 'flex', justifyContent: 'center'}}>
                    <Grid size="270px">
                        {ProjectsList(projects)}
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;