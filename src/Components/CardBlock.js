import {useState} from "react";


function Card(props) {
    const [ingredientsShown, setIngredientsState] = useState(false);

    return (
        <div className="flex-item">
            <div className="card-wrapped">
                <div className="card-content">
                    <div className="image-and-title-block">
                        <img className="menu-item-image" src={props.dataForACard.imageUrl}/>
                        <h3 className="dish-title">{props.dataForACard.title}</h3>
                    </div>
                    <button className="btn show-details" onClick={(event) => setIngredientsState(!ingredientsShown)}>{ingredientsShown ? 'Скрыть': 'Отобразить'}</button>
                    {ingredientsShown && (
                        <div>
                            <ul>
                                {props.dataForACard.ingredients.map(ingredient => (
                                    <div>
                                        <li>{ingredient}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="menu-price">
                        <h1 style={{color: 'rgba(90, 50, 64, 1)'}}>{props.dataForACard.price} руб.</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
function CardBlock(props) {
    return (
        <div className="cards-listing-block">
            <h1>{props.blockTitle}</h1>
            <div className="flex-container">
                {props.blockData.map(oneCard => <Card dataForACard={oneCard}/>)}
            </div>
        </div>
    )
}

export default CardBlock;