export default function TaskList(props){
    return(
        <>
            <li>
                <input type="checkbox" checked={props.etat} onChange={props.checkout}  />
                {props.value}
            </li>
        </>
    )
}