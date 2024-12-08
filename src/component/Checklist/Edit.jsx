export default function EditForm(props){

    return(
        <div className="formulaire" style={props.etat}>
           

            <div className="parent">
                <h3>Create a new task</h3>
                <form action="" onSubmit={props.envoyer}>
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Title:</label>
                        <input type="text" name="" ref={props.nomRef} placeholder="Nom" required/>
                    </div>

                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" />
                    </div>

                </form>

            </div>
        </div>
    )
}