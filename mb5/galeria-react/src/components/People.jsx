import Hello from "./Hello"
import people from './../assets/data.json'

function People(props){
    return(
        <>
            {people.map((person) => (
                <Hello name={person.name}/>
            ))}
        </>
    )
}
export default People;