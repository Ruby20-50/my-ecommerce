// import axios from "axios";

import React from "react";

export default function Plant({ name, image, species, color }){
    return (
        <div className="bg-white p-6 shadow-lg
         text-black m-5 rounded-xl w-sm">
            <h2 className="p-3 font-serif 
            font-bold tracking tracking-wide"> This is {name} plant! </h2>
            <img src={image} alt={name} width="90%"
             className="inline-flex items-center 
             justify-center rounded-xl shadow-xl 
             shadow-gray"/>
            <p className="p-3 text-sm tracking-tight">It is from the {species} species. 
                This type of plant has a beautiful {color}</p>
               
        </div>
    )
}
 {/* <Plant name="apple" color="red" image="..\Apple-tree-with-fruit1.jpg" species="fruit"/>
    <Plant name="Guava" color="green" image="..\mjc-mp-jan-357429512.webp" species="fruit"/>
    <Plant name="Orange" color="orange" image="..\36488.webp" species="fruit"/> */}