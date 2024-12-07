export default function Task(props){
    return(
        <>
            <li>
                <input type="checkbox" checked={props.etat} onChange={props.checkout}  />
                {props.value}
            </li>
        </>
    )
}