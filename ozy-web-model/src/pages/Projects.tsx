import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';
import Icon from '../components/Icon.tsx'

interface ProjectInfos {
    title: string;
    description: string;
    image: string;
    link: string;
    tags: string[];
}

interface SoftwareInfos {
    name: string;
    image: string;
}

interface TechInfos {
    name: string;
    image: string;
}

const projects: ProjectInfos[] = [
    {title:"Portfolio" , description:'Decouvrez le code de ce portfolio, lien GitHub',
    image:"icons/logo.svg", link:"https://github.com/OzymandiasKnight/Home", tags:["React", "TypeScript", "Inkscape", "VS Code", "Github"]},
    {title:"Photo Builder",
    description:'Mini réseaux social permettant de comparer les frises chronologiques de ses amis',
    image:"showcases/PhotoBuilder.png", link:"https://github.com/OzymandiasKnight/SocialTimelineBuilder", tags:["Java", "Vue", "MySQL","Eclipse","VS Code"]},
    {title:"Guide Python", description:'Guide pour débuter en Python',
    image:"showcases/GuidePython.png",link:"https://ozymandiasknight.github.io/GuidePython/guide_bases.pdf", tags:["Python","VS Code", "Github"]},
    {title:"Work Nodes", description:'Logiciel de gestion de projet',
    image:"showcases/WorkNodes.png", link:"https://github.com/OzymandiasKnight/ProjectManager", tags:["Godot","Inkscape"]},
    {title:"Blood War", description:'Jeu de plateforme multijoueur local en 2D',
    image:"showcases/Bloodwar.png",link:"https://github.com/OzymandiasKnight/BloodWar", tags:["Godot","GIMP"]},
    {title:"Art Station", description:'Site vitrine de présentation de mes créations 3D',
    image:"showcases/Artstation.png", link:"https://ozymandiasknight.github.io/Artstation/", tags:["HTML/CSS", "JavaScript", "Blender", "VS Code", "Github"]},
    {title:"Slower Pace", description:'Plugin Minecraft augmentant la durée du jeu',
    image:"showcases/SlowerPace.png",link:"https://github.com/OzymandiasKnight/SlowerPace", tags:["Java","Eclipse"]},
];

const softwares: SoftwareInfos[] = [
    {name:"Visual Studio", image:"softwares/vs.svg"},
    {name:"VS Code", image:"softwares/vscode.svg"},
    {name:"Eclipse", image:"softwares/eclipse.svg"},
    {name:"IntelliJ", image:"softwares/intellij.svg"},
    {name:"Blender", image:"softwares/blender.svg"},
    {name:"GIMP", image:"softwares/gimp.svg"},
    {name:"Inkscape", image:"softwares/inkscape.svg"},
    {name:"Github", image:"softwares/github.svg"},
    {name:'Figma', image:'softwares/figma.svg'},
]

const techs: TechInfos[] = [
    {name:"Python", image:'techs/python.svg'},
    {name:"Java", image:'techs/java.svg'},
    {name:"HTML/CSS", image:'techs/html.svg'},
    {name:"JavaScript", image:'techs/javascript.svg'},
    {name:"TypeScript", image:'techs/typescript.svg'},
    {name:"MySQL", image:'techs/mysql.svg'},
    {name:"PHP", image:'techs/php.svg'},
    {name:"React", image:'techs/react.svg'},
    {name:"Vue", image:'techs/vue.svg'},
    {name:"Godot", image:'techs/godot.svg'},
]

function ProjectCard(infos:ProjectInfos,index:number) {
    const delay:string = String(index*0.15) + "s";
    return (
        <div key={index} style={{position:'relative',animationDelay:`${delay}`}} className="project-show">
            <Card title={infos.title} description={infos.description}
            card_width="270px" card_height="300px"  image={infos.image} link={infos.link} tags={infos.tags} tags_base={techs.concat(softwares)}/>
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

function SoftwareList(software_list:SoftwareInfos[]) {
    return (
        <>
        {software_list.map((item:SoftwareInfos, index:number) => (
            <div key={index} style={
                {animationDelay:`${String(index*0.1)}s`}} 
                className="tag-show tag">
                <Icon img_url={item.image}
                style={{width:'32px', height:'32px', backgroundRepeat:'no-repeat', background:"var(--secondary-v)", padding:'4px', borderRadius:'8px'}}
                background="var(--secondary)"/>
                <p style={{textAlign:'center'}}>{item.name}</p>
            </div>
        ))}
        </>
    )
}

function TechList(tech_list:TechInfos[]) {
    return (
        <>
        {tech_list.map((item:TechInfos, index:number) => (
            <div key={index} style={{animationDelay:`${String(index*0.1+1)}s`}} className="tag-show tag">
                <Icon img_url={item.image}
                style={{width:'32px', height:'32px', backgroundRepeat:'no-repeat', background:"var(--secondary-v)", padding:'4px', borderRadius:'8px'}}
                background="var(--secondary)"/>
                <p style={{textAlign:'center'}}>{item.name}</p>
            </div>
            ))}
        </>
    )
}

/*Page Component*/
function ProjectsPage() {
    return (
        <div>
            <div style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <h1>Mes compétences</h1>
                <div className="space-s"></div>
                <h2>Les logiciels que je maîtrise</h2>
                <div className="space-s"></div>
                <div style={{minWidth:'320px', width:'100%', maxWidth:'900px', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'16px'}}>
                        {SoftwareList(softwares)}
                    </div> 
                </div>
                <div className="space-s"></div>
                <div className="space-s"></div>
                <h2>Mon stack technique</h2>
                <div className="space-s"></div>
                <div style={{minWidth:'320px', width:'100%', maxWidth:'900px', display: 'flex', justifyContent: 'center'}}>
                    <div style={{display:'flex', flexWrap:'wrap', gap:'16px'}}>
                        {TechList(techs)}
                    </div> 
                </div>
                <div className="space-s"></div>
                <div className="space-s"></div>
                <h1>Mes projets</h1>
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