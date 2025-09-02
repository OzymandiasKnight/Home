interface ImgProps {
    img_url: string;
    style: React.CSSProperties;
    background: string;
}


function ImgToSvg({img_url, style, background}: ImgProps) {
  const prefix:string = "/Home"
  function make_path(relative_path: string) {
      const publicUrl = import.meta.env.VITE_PUBLIC_URL || '';
      return `${prefix}${publicUrl}/${relative_path}`;
  }
  return (
    <div style={style} className="icon">
        <div style={{
          backgroundColor: background,
          transition: 'background-color 0.25s',
          WebkitMaskImage: `url(${make_path(img_url)})`,
          WebkitMaskBoxImageWidth: '100%',
          WebkitMaskSize: 'contain',
          width: `100%`, height: `100%`,
          userSelect: 'none'
        }}>
        </div>
    </div>
  )
}
export default ImgToSvg;