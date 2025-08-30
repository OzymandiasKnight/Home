interface ImgProps {
    img_url: string;
    style: React.CSSProperties;
    background_color: string;
}


function ImgToSvg({img_url, style, background_color}: ImgProps) {
  const prefix:string = "/Home"
  function make_path(relative_path: string) {
      const publicUrl = import.meta.env.VITE_PUBLIC_URL || '';
      return `${prefix}${publicUrl}/${relative_path}`;
  }
  console.log(make_path(img_url));
  return (
    <div style={style}>
        <div style={{
          backgroundColor: background_color
          , WebkitMaskImage: `url(${make_path(img_url)})`
          , WebkitMaskBoxImageWidth: '100%'
          , WebkitMaskSize: 'contain'
          ,width: `100%`, height: `100%`,
        }}>
        </div>
    </div>
  )
}
export default ImgToSvg;