
const Card = (props) =>{
    console.log(props)
    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="sold">{badgeText}</div>}
            <img className="cardImage" src={props.cardimage} alt="" />
            <div className='star-container'> 
                <img src={props.starImage} alt="" />
                <span className='five'>{props.stats.starRating}</span>
                <span className='six'>{props.stats.number}</span>
                <span className='usa'>{props.country}</span>
            </div>
            
            <p className='text'>{props.text}
</p>
            <div className='price'>
                <span className='from'>From {props.amount} </span>
                <span className='person'> / person</span>
            </div>
        </div>
    )
}

export default Card;