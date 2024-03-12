import {Link} from 'react-router-dom';

export default function Project({ title, url, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={url} target="_blank">Link!</Link>
        </div>
    )
};