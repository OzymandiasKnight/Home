import '../components.css'
import '../styles/Card.css';
import Image from './Image';

interface CardProps {
    card_height: string;
    card_width: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

function Card({ card_width, card_height, title, description, image, link }: CardProps) {

    function go_to_link() {
        window.location.href = link;
    }

    return (
        <div className="card" style={{ width: card_width, height: card_height }} onClick={go_to_link}>
            <Image src={image} alt="Card Image" style={{ height: '100%'}} />
            <div className="card-solid" style={{
                backgroundColor: 'var(--primary)',
                height: '100%',width: '100%', position: 'absolute', top:'0px', left:'0px',
                borderRadius:'16px'}}></div>
            <div className="card-content" style={
                { width: Number(card_width.split('px')[0]) - 16 + "px",
                    height: Number(card_height.split('px')[0]) - 16 + "px" }
                }>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;