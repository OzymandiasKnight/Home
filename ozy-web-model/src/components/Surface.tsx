import type { ReactNode } from "react";

type SurfaceProps = {
    children: ReactNode;
    style?: React.CSSProperties;
};

function Surface({ children, style }: SurfaceProps) {
    return (<div className="surface" style={style}>
        {children}
    </div>);
}

export default Surface;