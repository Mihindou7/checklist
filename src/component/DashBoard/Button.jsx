export default function DashboardButton(props){
    return(
        <div className="buttonnew">
          <button>
             <a href={props.redirection}>{props.nom}</a>
          </button>
        </div>
    )
}
