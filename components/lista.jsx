import React, { useState , useEffect } from "react";

const Lista = () => {

    // const personas = ["Leandro", "Jose", "Julio", "Pedro"];

    const [personas, setPersonas] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/lista')
        .then(resp => resp.json())
        .then(data=> setPersonas([data]))
        .catch(error=> {
            console.log('no se pudo obtener personas', error)
        });
    }, [] );

    return (
      <>
        <h1> Personas </h1>
        <ul>
            {personas.map((persona, index) => (
                <li key={index}>
                    <p>{persona.nombre} -- {persona.apellido} -- {persona.nacionalidad} -- </p>
                    </li>
                ))};
        </ul>
      </>

    )

}

export default Lista;