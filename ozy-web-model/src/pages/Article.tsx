import { useParams } from "react-router-dom";
import MarkReader from "../components/MarkReader.tsx";
import { useEffect, useState } from "react";

function ArticlePage() {
    const { slug } = useParams<{slug:string}>();
    const link:string = `marks/${slug}.txt`;
    const [pageScroll, setPageScroll] = useState(0);

    const handleScroll = () => {
        let percent = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        console.log(percent);
        setPageScroll(percent);
    };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
    }, []);
    let percentBar: React.ReactNode = <div className="progress-bar" style={{width: `${pageScroll * 100}%`}} key="scroll"></div>;

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: '900px', minWidth: '300px' }}>
                <MarkReader txt_path={link}/>
            </div>
            {percentBar}
        </div>
    )
}

export default ArticlePage;