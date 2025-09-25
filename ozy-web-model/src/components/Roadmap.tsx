import Icon from './Icon.tsx';

interface RoadMapProps {
    lineHeight: string;
    list: React.ReactNode[];
    is_mobile: boolean;
    is_flip?: boolean;
    
}


function make_roadmap(props: RoadMapProps) {
  let heightNumber:string = String(parseInt(props.lineHeight));
  let heightValue:string = String(props.lineHeight.substring(heightNumber.length));
  let doubleHeight:string = String(parseInt(heightNumber)*2) + heightValue;
  const roadmap:React.ReactNode[] = []
  let flip:number = (props.is_flip) ? 1 : 0;
  roadmap.push(<div key={-2} style={{justifyContent:'center', display:'flex'}}>
    <Icon img_url="icons/roadcenter.svg"
    style={{ height:props.lineHeight, width:doubleHeight, maskImage: 'linear-gradient(180deg, transparent 20% ,black 80%)', transform: "scaleX(" + ((flip) ? "-1" : "1") + ")"}} background='var(--primary-v)'/>
  </div>)

  props.list.forEach((item,idx) => {
    flip += 1;
    if (flip > 2) {
      flip = 1;
    }
    roadmap.push(
      <div key={idx} style={{ justifyContent:'center', display:'flex'}}>
        <div style={{display: 'flex', flexDirection:(flip==2) ? 'row' : 'row-reverse', height:'fit-content', width: doubleHeight, alignItems:'center'}}>
          {/*Imgs*/}
          <div style={{width: '100%', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center'}}>

            <Icon img_url="icons/roadturn.svg"
            style={{width: props.lineHeight, height: props.lineHeight,
            rotate: String((flip+1)*90)+'deg'}} background='var(--primary-v)'/>

            <Icon img_url="icons/roadturn.svg"
            style={{width: props.lineHeight, height: props.lineHeight,
            rotate: String((flip+3)*90)+'deg'}} background='var(--primary-v)'/>

          </div>
          {/*Elements*/}
          <div style={{position: 'absolute', width: doubleHeight, zIndex:1}}>
            <div style={
              {position:'relative', textAlign: (flip!=1) ?'left' : 'left',
              left: (props.is_mobile) ? '0%' : ((flip!=2) ? '100%' : '-100%'),
              float:'right'}
            } className="road-content">{item}</div>
          </div>
        </div>
      </div>
    )
  })

  roadmap.push(<div key={-1} style={{width:'100%', justifyContent:'center', display:'flex', transform: 'scale(' + ((flip==1) ? '-1' : '1') + ',-1)'}}>
    <Icon img_url="icons/roadcenter.svg"
    style={{ height:props.lineHeight, width:doubleHeight, maskImage: 'linear-gradient(180deg, transparent 20% ,black 80%)'}} background='var(--primary-v)'/>
  </div>)
  return roadmap;
}

function RoadMap(props: RoadMapProps) {
    return (
        <div>
            {make_roadmap(props)}
        </div>
    )
}

export default RoadMap;