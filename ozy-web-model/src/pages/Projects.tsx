import Grid from '../components/Grid.tsx';
import Card from '../components/Card.tsx';

function ProjectsPage() {
    return (
        <div style={{}}>
            <div style={{width: '100%', display:'flex', justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                <h1>Mes Projets</h1>
                <div className="space-s"></div>
                <div style={{minWidth:'320px', width:'100%', maxWidth:'900px', display: 'flex', justifyContent: 'center'}}>
                    <Grid size="270px">
                        <Card title="Guide Python" description='Guide pour débuter en Python'
                        card_width="270px" card_height="300px"  image="showcases/GuidePython.png"/>
                        <Card title="Blood War" description='Jeu de plateforme multijoueur local en 2D'
                        card_width="270px" card_height="300px" image="showcases/Bloodwar.png"/>
                        <Card title="Slower Pace" description='Plugin Minecraft augmentant la durée du jeu'
                        card_width="270px" card_height="300px" image="showcases/Bloodwar.png"/>
                        <Card title="Work Nodes" description='Logiciel de gestion de projet'
                        card_width="270px" card_height="300px" image="showcases/WorkNodes.png"/>
                        <Card title="Art Station" description='Site vitrine de présentation de mes créations 3D'
                        card_width="270px" card_height="300px" image="showcases/Artstation.png"/>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;