

const Pokemon = (props) => {
    return(
        <div className= "Pokemon">
            <h1>{props.name}</h1>
            <h2>HP: {props.hp} </h2>
            <img src={props.img} alt="" /> 
            <button onClick={props.handleAttack}>Attack!!!!</button>
        </div>
    )

   
}

export default Pokemon