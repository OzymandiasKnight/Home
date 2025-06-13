
import './Skills.css';


function make_path(relative_path) {
  return `${process.env.PUBLIC_URL}/${relative_path}`;
}

function ImgToSvg({img_url, alt_text, size, className}) {
  return (
    <div className={`${className}`}>
      <div className='img-svg'>
          <div 
            className='img-svg-mask'
            style={{
            WebkitMaskImage: `url(${img_url})`,
            maskImage: `url(${img_url})`,
            width: `${size}`,
            height: `${size}`,
          }}>
            <img
                src={img_url}
                alt={alt_text}
                className="img-svg-outline"
                style={{position: 'relative', width: `${size}`, height: `${size}`}}
            />
          </div>
      </div>
    </div>
  )
}

function GalleryTitle({title}) {
  return (
    <div className='gallery_title'>
      <div className='title-border'>
      <h1>{title}</h1>
      </div>
    </div>
  )
}

function CodeLang({lang_name,lang_id}) {
  const iconUrl = make_path(`languages/${lang_id}.svg`);
  return (
    <div className='card'>
      <ImgToSvg img_url={iconUrl} alt_text={lang_name} size={'50px'} className={'code-img'}/>
      <div className='card-bar'></div>
      <h4>{lang_name}</h4>
    </div>
  );
}



function GalleryCode() {
  return (
    
    <div className='gallery_code'>
      <GalleryTitle title='Languages de programmations / Frameworks'/>
      <div className='gallery_panel'>
        <CodeLang lang_name="Python" lang_id="python"/>
        <CodeLang lang_name="GDscript" lang_id="godot"/>
        <CodeLang lang_name="HTML" lang_id="html"/>
        <CodeLang lang_name="JavaScript" lang_id="javascript"/>
        <CodeLang lang_name="PHP" lang_id="php"/>
        <CodeLang lang_name="Java" lang_id="java"/>
        <CodeLang lang_name="React" lang_id="react"/>
        <CodeLang lang_name="Rust" lang_id="rust"/>
      </div>
    </div>
  )
}


function Program({pro_id, pro_name}) {
  const iconUrl = make_path(`programs/${pro_id}.svg`);
  return (
    <div className='card'>
      <ImgToSvg img_url={iconUrl} alt_text={pro_name} size={'50px'} className={'code-img'}/>
      <h4>{pro_name}</h4>
    </div>
  );
}


function GalleryPrograms() {
  return (
    <div className='gallery_programs'>
      <GalleryTitle title='Programmes maîtrisés'/>
      <div className='gallery_panel'>
        <Program pro_id='eclipse' pro_name='Eclipse' />
        <Program pro_id='vscode' pro_name='VS Code'/>
        <Program pro_id='visualstudio' pro_name='Visual Studio'/>
        <Program pro_id='github' pro_name='Github'/>
        <Program pro_id='docker' pro_name='Docker'/>
        <Program pro_id='blender' pro_name='Blender' />
        <Program pro_id='../languages/godot' pro_name='Godot' />
        <Program pro_id='gimp' pro_name='GIMP' />
      </div>
    </div>
  )
}

function SpeakLang({lang_name,level}) {
  return (
    <div className='language_card'>
      <h3 className='name'>{`${lang_name}: `}</h3>
      <h3 className='level'>{level}</h3>
    </div>
  )
}



function GallerySpeak() {
  return (
    <div className='gallery_languages'>
      <GalleryTitle title='Mes langues'/>
      <div className='speak_panel'>
        <div>
        <SpeakLang lang_name="Français" level="C2"/>
        <SpeakLang lang_name="Polonais" level="C2"/>
        <SpeakLang lang_name="Englais" level="C1"/>
        <SpeakLang lang_name="Espagnol" level="B1-B2"/>
        <SpeakLang lang_name="Japonais" level="A1"/>
        </div>
      </div>
    </div>
  );
};

function Skills() {
    return <div>
        <GalleryCode />
        <GalleryPrograms />
        <GallerySpeak />
    </div>;
}

export default Skills;