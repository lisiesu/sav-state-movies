import {Link} from 'react-router-dom';

function Card({image, name, id}) {
    return (
        <Link to={`/singleshow/${id}`} className='listitem'>
            <img src={image} alt={name}/>
        </Link>
    )
}

export default Card;