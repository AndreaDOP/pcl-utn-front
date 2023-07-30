/* eslint-disable no-unused-vars */
import { useState } from "react";
import Notaslis from "./notaslis";

const Notas = () => {
  const [title, setTitle] = useState("");
  const [notas, setNotas] = useState([]);
  const [editItem, setEditItem] = useState(null);

  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newNotaslis = {
      id: Date.now(),
      //id: crypto.randomUUID(),
      title: title,
      complete:false
    };

    const oldNotas = [... notas];
    oldNotas.unshift(newNotaslis);

    setNotas(oldNotas);
    setTitle("");
  }

  function handleDelete(id) {
    const tempNotas = notas.filter((item) => item.id !== id);

    setNotas([...tempNotas]);
  }

  function handleUpdate(id, value) {
    const temp = [... notas];
    const item = temp.find((item) => item.id === id); 
    item.title = value;
    setNotas([...temp]);
  }

  function handleCheckboxChange(id, status) {
    const temp = [... notas];
    const item = temp.find((item) => item.id === id); 
    item.complete = status;

    console.log("Holis");
    setNotas([...temp]);
  }

  return (
      <>
      <section className="h-screen">
     <div className="text-3xl text-center bg-neutral-400 h-screen ">
      <div>
        <h1 className="text-orange-600 font-montserrat pb-5 pt-5">Mi block de Notas</h1>
        <h3>Escribe las tareas que necesitas realizar.</h3>
      </div>
      
        <form className="mt-5" onSubmit={handleSubmit}>
            <input
             onChange={handleInputChange}
             value={title}
             className="notaslisInput"
             />

            <input
             type={"submit"}
             value=""
             className="buttonBoton"
             />            
          </form>
          
            

     <div className="text-5xl text-center">
        {notas.map((item) => (
          <Notaslis
           key={item.id} 
           item={item} 
           onUpdate={handleUpdate}
           onDelete={handleDelete} 
           onComplete={handleCheckboxChange}
           />
          ))}
     </div>  
    </div>
    </section>    
    </>
    )
}

export default Notas;