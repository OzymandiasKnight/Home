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
                        card_width="270px" card_height="300px"  image="showcases/GuidePython.png" link="https://ozymandiasknight.github.io/GuidePython/guide_bases.pdf"/>
                        <Card title="Blood War" description='Jeu de plateforme multijoueur local en 2D'
                        card_width="270px" card_height="300px" image="showcases/Bloodwar.png" link="https://github.com/OzymandiasKnight/BloodWar"/>
                        <Card title="Slower Pace" description='Plugin Minecraft augmentant la durée du jeu'
                        card_width="270px" card_height="300px" image="showcases/SlowerPace.png" link="https://github.com/OzymandiasKnight/SlowerPace"/>
                        <Card title="Work Nodes" description='Logiciel de gestion de projet'
                        card_width="270px" card_height="300px" image="showcases/WorkNodes.png" link="https://github.com/OzymandiasKnight/ProjectManager"/>
                        <Card title="Art Station" description='Site vitrine de présentation de mes créations 3D'
                        card_width="270px" card_height="300px" image="showcases/Artstation.png" link="https://ozymandiasknight.github.io/Artstation/"/>
                        <Card title="Photo Builder" description='Mini réseaux social permettant de comparer les frises chronologiques de ses amis'
                        card_width="270px" card_height="300px" image="showcases/PhotoBuilder.png" link="https://github.com/OzymandiasKnight/SocialTimelineBuilder"/>
                        <Card title="Portfolio" description='Decouvrez le code de ce portfolio, lien GitHub'
                        card_width="270px" card_height="300px" image="icons/logo.svg" link="https://github.com/OzymandiasKnight/Home"/>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage;