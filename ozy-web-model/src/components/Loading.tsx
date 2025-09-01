import Icon from './Icon'
import '../components.css'

function LoadingScreen() {
    return (
        <div className='loading-circle fade-in' style={{width:'100%', height:'100%', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div style={{position:'relative'}}>
                <Icon img_url="/icons/loading.svg" style={{ width: "160px", height: "160px", zIndex: 1, animation: 'loading 2s linear infinite reverse'}}
                background='var(--primary-v)'></Icon>
                <Icon img_url="/icons/loading.svg"
                style={{position:'absolute', top: 0, left: 0, width: "160px", height: "160px", zIndex: -1, animation: 'loading 1s linear infinite'}}
                background='var(--primary)'></Icon>
                <Icon img_url="/icons/loading_bg.svg"
                style={{position:'absolute', top: 0, left: 0, width: "160px", height: "160px", zIndex: -2}}
                background='var(--surface)'></Icon>
            </div>
        </div>
    )
}

export default LoadingScreen;