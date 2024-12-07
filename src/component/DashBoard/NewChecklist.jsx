export default function Form(props){

    return( 
        <div className="formulaire" style={props.etat}>

            <div className="parent">
                <form action="" onSubmit={props.envoyer}>
                     <span onClick={props.close}>&times;</span>
                    <div className="a">
                        <label htmlFor="">Title :</label>
                        <input type="text" name="" ref={props.nomRef} placeholder="Nom" required/>
                    </div>
                    <div className="a">
                        <label htmlFor="">Description :</label>
                        <input type="text" name="" ref={props.descRef} placeholder="Description" required/>
                    </div>
                    <div className="bouton">

                        <input className="btn outline" type="submit" value="ADD" />
                    </div>

                </form>

            </div>
        </div>
    )
}