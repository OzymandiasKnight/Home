import Link from '../components/Link.tsx';

function BlogsPage() {
    const prefix:string = ""
    return (
        <div style={{display:'flex', justifyContent:'center'}}>
            <div style={{width:'900px', minWidth:'300px'}}>
                <h1>Mes Blogs :</h1>
                <Link link={`${prefix}/blogs/markdownsystem`}>
                    <p>Mon système de blog personnalisé</p>
                </Link>
            </div>
        </div>
    );
}

export default BlogsPage;