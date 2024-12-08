
import TaskTotal from "./component/Checklist/TaskChecklist.jsx";
import EditForm from "./component/Checklist/Edit.jsx";
import { useState, useEffect, useRef } from "react";
import {  useSearchParams } from "react-router-dom";
export default function Affiche(){
        const [searchId] = useSearchParams()
        var id = parseInt(searchId.get("id")) -1;
        console.log(id);
        

        const [myCheckList, SetmyChecklist] = useState([])
        useEffect(
            ()=>{
                fetch("./Base.json")
                .then(res=>res.json())
                .then(data=>{ if (data[id]) {
                    SetmyChecklist([data[id]]);
                    };
                })
                .catch((error) => console.error('Error', error));
            },[]
        )
        //ici, je gère les modifications des check. Ici il faut faire très attention, on prend l'index de la tâche global et celui de sa tâche, c'est assez compliqué
        const checkout = (indexDeTache, indexDeCheck)=>{
            //pour commencer, react nous impose de copier la table
            const copiListe = [...myCheckList];
            //ensuite on parcourt le tableau, et on change l'état du check (true devient false et false devient true)
            copiListe[indexDeTache].chechlist[indexDeCheck].etat = !copiListe[indexDeTache].chechlist[indexDeCheck].etat;
            // on retourne le nouveau tableau modifier
            SetmyChecklist(copiListe);
        }

        //ajout task
        const nom =useRef();
        //on affiche le formulaire d'ajout
        const [etats, setEtat]= useState({display:"none"});
        const affiche= ()=>{
            setEtat({display:"block"});
        }
        //on ferme le formulaire
        const close=()=>{
            setEtat({display:"none"});
        }
    //on soumet
    const Submitformulaire = async (e) => {
        e.preventDefault();
        const name= nom.current.value;
        const data = { 
            value:name, 
            etat:false
            
        };
        SetmyChecklist((prevChecklist) => {
            const updatedChecklist = [...prevChecklist];

            if (updatedChecklist[0] && updatedChecklist[0].chechlist) {
                
                updatedChecklist[0].chechlist = [
                    ...updatedChecklist[0].chechlist,
                    data
                ];
                console.log(updatedChecklist);
            }

            return updatedChecklist; 
        });
        
        close();
    } 
    
    return(
        <>
         <div>
                <h1>CheckList</h1>
             </div>
            {myCheckList.length > 0 ? (

                myCheckList.map(((list,index)=>(
                    <TaskTotal 
                    key={index}
                    title={list.title}
                    description={list.description}
                    checklist={list.chechlist} 
                    checkout={(itemIndex) =>checkout(index,itemIndex)}
                    >
                        
                    </TaskTotal>
                )))       
            ) : (<p>Chargement</p>)}
            <EditForm
            etat={etats}
            envoyer={Submitformulaire}
            close={close}
            nomRef={nom}
            />
            <button onClick={affiche}>add</button>
        </>
    )
}