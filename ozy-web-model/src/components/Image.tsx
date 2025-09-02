function Image({ src, alt, style }: { src: string; alt: string; style: React.CSSProperties }) {
    const prefix:string = "/Home"
    function make_path(relative_path: string) {
        const publicUrl = import.meta.env.VITE_PUBLIC_URL || '';
        return `${prefix}${publicUrl}/${relative_path}`;
    }


    return (<div className="img" style={style}>
        <img src={make_path(src)} alt={alt} style={{width:'inherit', height:'inherit'}}/>
    </div>);
}

export default Image;