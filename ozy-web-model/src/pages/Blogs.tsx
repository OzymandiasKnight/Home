import Link from '../components/Link.tsx';

interface BlogInfos{
    link:string,
    title:string,
}

const blogs:BlogInfos[] = [
    {link:"markdownsystem", title:"Mon système de blog personnalisé"},
    {link:'cybersecurity', title:"Mes concours de cybersécurité"},
    {link:'drawings', title:"Ma passion pour les dessins"}
]

function BlogLink(blog_infos:BlogInfos, index:number) {
    const delay:string = String(index*0.1) + "s";
    const prefix:string = "/blogs/"
    return (
        <div style={{position:'relative',animationDelay:`${delay}`}} className="project-show">
            <Link link={`${prefix}${blog_infos.link}`}>
                <p>{blog_infos.title}</p>
            </Link>
        </div>
    );
}

function BlogsList() {
    return (
        <>
            {blogs.map((item, index) => {
                return (
                <div key={index}>
                    {BlogLink(item,index)}
                </div>
                )

            })}
        </>
    )
}

function BlogsPage() {
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'900px', minWidth:'300px'}}>
                <h1>Mes Blogs :</h1>
                {BlogsList()}
            </div>
        </div>
    );
}

export default BlogsPage;