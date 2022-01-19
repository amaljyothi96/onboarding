import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function TypeCard(props) {
    const { typeTitle, typeDesc, icon } = props;
    return (
        <div className="cardContainer">
            { icon &&<FontAwesomeIcon className="icon" icon={icon} /> }
            <p className="cardTitle">{typeTitle}</p>
            <p className="description">{typeDesc}</p>
        </div>
    )
}

export default TypeCard;