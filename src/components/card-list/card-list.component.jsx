import CardComponent from "../card/card.component";

const CardListComponent = (props) => {
    const {data} = props
    return <div>
        {data.map(d => {
            return <CardComponent key={d.id} d={d}/>
        })}

    </div>
}

export default CardListComponent;