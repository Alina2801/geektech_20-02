
const PokList=({names})=>{
    return(
        <ol>
            {names.map((item,i)=><li key={i}>{item}</li>)}
        </ol>

    )
}

export default PokList