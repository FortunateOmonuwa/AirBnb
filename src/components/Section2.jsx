import Card from "./Card";
import Details from './CardDetails'

const CardSection = ()=>{
    const details = Details.map(detail => {
        console.log(detail);
        return <Card cardimage = {detail.cardimage}
        key = {detail.id}
        // detail = {detail}
        {...detail}
       />
    })
    return(
        <div className="section-two">
            {details};
        </div>
    )
}

export default CardSection;