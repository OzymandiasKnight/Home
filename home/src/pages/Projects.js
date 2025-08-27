import './Project.css';
import '../Components.css'

function make_path(relative_path) {
  return `${process.env.PUBLIC_URL}/${relative_path}`;
}


function ProjectGallery() {
    return <div className="gallery">
        <ProjectCard name="Blood War" img="Bloodwar.png" tags={["Godot","GDscript","Gimp"]}></ProjectCard>
        <ProjectCard name="Guide Python" tags={["Python"]}></ProjectCard>

    </div>
}

function ProjectCard({name, img, tags}) {
    const link = make_path(`showcases/${img}`)

    return (
        <div className="card project_card">
            <h1>{name}</h1>
            <div className="showcase">
                {/* <img src={link} alt="Showcase Image"></img> */}
            </div>
            <div className="grid">
                {tags.map((tag, idx) => (
                    <h3 key={idx} className="tag">{tag}</h3>
                ))}
            </div>
            <h1></h1>
        </div>
    );
};


function Projects() {
    return <div className="page">
        <ProjectGallery/>
    </div>;
}


export default Projects;