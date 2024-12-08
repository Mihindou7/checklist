import Task from "./TasList"
export default function TaskTotal(props){
    return(
        <>
           
            <div className="task">
            <label htmlFor="">Title :</label>
            <input type="text" defaultValue={props.title} /><br />
            <label htmlFor="">Description :</label>
            <input type="text" defaultValue={props.description} />                
            <div className="details">
                <h2>TASK list</h2>
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