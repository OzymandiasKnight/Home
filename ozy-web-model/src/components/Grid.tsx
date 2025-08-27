function Grid({children, size}: {children: React.ReactNode, size: string}) {
    return (
        <div className="grid" style={{gridTemplateColumns: `repeat(auto-fit, minmax(${size}, 1fr))`, justifyItems: 'center'}}>
            {children}
        </div>
    );
}

export default Grid;
