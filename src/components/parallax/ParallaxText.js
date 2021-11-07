import React from 'react'
import './ParallaxText.css'; 

function ParallaxText(props) {

     
    
    return (
            <div  className="ParallaxText">

                <ul  className="liList">

                    <li value={2} onClick={props.onClick} className={"phrase " + props["data-active"]}>
                    Un système photo nettement plus puissant.
                    </li>

                    <li onClick={props.onClick} className={"phrase " + props["data-active"]}>
                    Un écran si réactif qu’il renouvelle vos sensations à chaque interaction.   
                    </li>

                    <li onClick={props.onClick} className={"phrase " + props["data-active"]}>
                    La puce de smartphone la plus rapide au monde.
                    </li>

                    <li onClick={props.onClick} className={"phrase " + props["data-active"]}>
                    Une résistance exceptionnelle.   
                    </li>

                    <li onClick={props.onClick} className={"phrase " + props["data-active"]}>
                    Et un gain d’autonomie spectaculaire.
                    </li>

                </ul>
            </div>
    )
}

export default ParallaxText
