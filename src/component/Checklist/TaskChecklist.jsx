import TaskList from "./TaskList"
export default function Task(props){
    return(
        <>
            <div className="task">
            <input type="text" defaultValue={props.title} />
            <input type="text" defaultValue={props.description} />                
            <div className="details">
                    <div className="situation">
                        <p>{props.countChecked}/{props.countChecke}</p>
                    </div>
                    <hr />
                    <ul>
                        
                            {props.checklist.map((list,indexCheck)=>(
                                <TaskList key={indexCheck} value={list.value} etat={list.etat} checkout={()=>props.checkout(indexCheck)}></TaskList>
           
                            ))}
                    </ul>
                </div>
            </div>
        
        </>
    )
}