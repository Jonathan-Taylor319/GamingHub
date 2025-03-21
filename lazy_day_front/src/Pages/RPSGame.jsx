import React, { useState } from "react";

export default function RPSGame() {
    const [p1Choice , setP1Choice] = useState(null)
    const [p2Choice, setP2Choice] = useState(null)

    

    return (
        <div>
            <div>
                <h2>Choose your Champion.....</h2>
                <p>knight kills archer, Archer kills Wizard, Wizard kills Knight</p>
                
            <div>
                <label htmlFor="Knight">{/*need a image*/}</label>
                <button id="Knight">Knight</button>
                <label htmlFor="Wizard">{/*need a image*/}</label>
                <button id="Wizard">Wizard</button>
                <label htmlFor="Archer">{/*need a image*/}</label>
                <button id="Archer">Archer</button>
            </div>

            </div>
        </div>
        
    )
}

/* trying to create a simple rock, paper, scissors game. I am trying to think of what I need and how to build
    // create three var's one for each element....do we want to literally use RPS or make it themed ?
    // knight > archer , archer > mage , mage > knight
    // would like to use conditional rendering for each selection to pop up in a div on top and then an animation for whoever wins
    // best 2 out of 3 or maybe 3 out of 5? maybe both..... make a simple button for a 3 round game function and a 5
    
*/