import React from 'react'

function Badcomponent({heroName}) {
if(heroName==="joker")
throw new Error("not a hero")
    // const [name,setName]=useState("");
    // var arr;
    return (
        <div>
            
            {heroName}

        </div>
    )
}

export default Badcomponent
