import React from "react";
import MiniJumbo from "@/components/global/MiniJumbo";


export default function RCIA() {
    return (
        <>
       <MiniJumbo
               images={[
                 "/images/jovenes/jovenes.jpg",
                 "/images/jovenes/jovenes2.jpg",
                 "/images/jovenes/jovenes3.jpg",
                 "/images/jovenes/jovenes4.jpg",
                 "/images/jovenes/jovenes5.jpg",
                 "/images/jovenes/jovenes6.jpg",
               ]}
               title="What is RCIA?"
             />
        
        <div>
            <h1>Sign up for RCIA</h1>
            <a href="https://forms.gle/A6QWrKx8YemjaHLR7" className="button blue" target="_blank">Sign Up</a>
        </div>
        
        </>
    )
}