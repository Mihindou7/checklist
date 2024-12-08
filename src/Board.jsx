import Form from "./component/DashBoard/NewChecklist.jsx";
import TaskList from "./component/DashBoard/List.jsx";
import { useEffect, useState, useRef } from "react";
export default function MainPage(){

    const [liste,setListe]= useState([])
    useEffect(
        ()=>{
            fetch("./Base.json")
            .then(res=>(res.json()))
            .then(data=>setListe(data))
            .catch((error)=>console.error(error))
        },[]
    )
        //suivre l'évolution
        const progress = (id,totalId)=>{
            if(id !==totalId){
                return "progress"
            }
            return "Done"
        }
        //supprimer une task
        const deleteTask = (id)=>{
            const newtable = liste.filter(a=> a.id !=id)
            setListe(newtable)
        }
        //ajout new checklist
        const nomRef= useRef();
        const descRef= useRef();
        //on affiche le formulaire d'ajout
        const [etat, setEtat]= useState({display:"none"});
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
            const name= nomRef.current.value;
            const descr= descRef.current.value;
            const data = { 
                title:name, 
                date: new Date().toISOString(),
                description: descr,
                chechlist:[  {"value": null, "etat": false},]
                
            };
            setListe((checklist) => [...checklist, data]);
            close();
        } 
    return(
        <>
            <div className="head">
            <h1>My checkList</h1>
            <button onClick={affiche}>New Checklist</button>
            </div>
            <Form
            etat = {etat}
            nomRef={nomRef}
            descRef={descRef} 
            envoyer={Submitformulaire} 
            close={close} 

            
            />
         
            {
                liste.length > 0 ?(

                    liste.map((li,index)=>(
                        <TaskList
                        key={index}
                        id={li.id}
                        nom={li.title}
                        description={li.description}
                        situation={progress(li.chechlist.filter((inputChecked)=>inputChecked.etat).length,li.chechlist.length)}
                        staindone={li.chechlist.filter((inputChecked)=>inputChecked.etat).length}
                        totaltodo={li.chechlist.length}
                        deleted={()=>deleteTask(li.id)}
                        ></TaskList>
                    ))
                ) :(<p>Chargement</p>)
                
            }
         
 
        </>
    )
}