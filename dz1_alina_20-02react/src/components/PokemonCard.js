
import List from "./PokemonsList";

const PokemonCard = ({name}) => {
    return (
        <div className="pokemonCard">
            <List names={name.map(i=>i.name)}></List>
        </div>
    )
}

export default PokemonCard