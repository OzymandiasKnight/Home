import Link from '../components/Link.tsx';

function BlogsPage() {
    const prefix:string = "/blogs/"
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'900px', minWidth:'300px'}}>
                <h1>Mes Blogs :</h1>
                <Link link={`${prefix}markdownsystem`}>
                    <p>Mon système de blog personnalisé</p>
                </Link>
                <Link link={`${prefix}cybersecurity`}>
                    <p>Mes concours de cybersécurité</p>
                </Link>
                <Link link={`${prefix}drawings`}>
                    <p>Ma passion pour les dessins</p>
                </Link>
            </div>
        </div>
    );
}

export default BlogsPage;