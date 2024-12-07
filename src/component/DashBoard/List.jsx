import DashboardButton from "./Button.jsx"
export default function TaskList(props){
    return(
        <div className="list">
              <div>
                 <h1>{props.nom}</h1>
                 <p>{props.description}</p>
             </div>
             <div>
                  <DashboardButton nom="Edit" redirection={`/details?id=${props.id }`}/>
                  <p>{props.situation}</p>
                  <button onClick={props.deleted}>Delete</button>
                  <p>{props.staindone}/{props.totaltodo}</p>
             </div>  
        </div>
   
    )
}