import DashboardButton from "./Button.jsx"
export default function TaskList(props){
    return(
    
        <div className="list">
            <div className="center">
            <div>
                 <h2>{props.nom}</h2>
                 <p>{props.description}</p>
             </div>
             <div className="buttonnew">
                  <DashboardButton nom="Edit" redirection={`/details?id=${props.id }`}/>
                  <p>{props.situation}</p>
                  <button onClick={props.deleted}>Delete</button>
                  <p>{props.staindone}/{props.totaltodo}</p>
             </div>  
            </div>
             
        </div>
   
    )
}