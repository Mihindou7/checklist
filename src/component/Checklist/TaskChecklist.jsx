import Task from "./TasList"
export default function TaskTotal(props){
    return(
        <>
            <div className="task">
            <input type="text" defaultValue={props.title} />
            <input type="text" defaultValue={props.description} />                
            <div className="details">
                    <div className="situation">
                        <p></p>
                    </div>
                    <hr />
                    <ul>
                        
                            {props.checklist.map((list,indexCheck)=>(
                                <Task key={indexCheck} value={list.value} etat={list.etat} checkout={()=>props.checkout(indexCheck)}></Task>
           
                            ))}
                    </ul>
                </div>
            </div>
        
        </>
    )
}