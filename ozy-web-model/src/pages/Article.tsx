import { useParams } from "react-router-dom";
import MarkReader from "../components/MarkReader.tsx";

function ArticlePage() {
    const { slug } = useParams<{slug:string}>();
    const link:string = `marks/${slug}.txt`;


    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '900px', minWidth: '300px' }}>
                <MarkReader txt_path={link}/>
            </div>
        </div>
    )
}

export default ArticlePage;