import { render } from '@testing-library/react';
import React from 'react'
import './ParallaxText.css'; 


class ParallaxText extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            activeText : [
                "active ", 
                " ", 
                " ", 
                " ", 
                " ",                                
            ],
            liActivePosition : [
                {
                    turnOn : 890,
                    turnOff : 900,
                },
                {
                    turnOn : 900,
                    turnOff : 715,
                },
                {
                    turnOn : 715,
                    turnOff : 600,
                },
                {
                    turnOn : 600,
                    turnOff : 450,
                },
                {
                    turnOn : 450,
                    turnOff : 600,
                },
            ],
            liCurrentPosition : [
                " ",
                " ",
                " ",
                " ",
                " ",
            ],
        }
    }


    render(){

        const activeTextArray = this.props.activeTextArray; 

        return (
            <div  className="ParallaxText">

                <ul  className="liList">

                    <li id="li1" className={"phrase " + activeTextArray[0]}>
                    Un système photo nettement plus puissant. </li>

                    <li id="li2" className={"phrase " + activeTextArray[1]}>
                    Un écran si réactif qu’il renouvelle vos sensations à chaque interaction. </li>

                    <li id="li3"  className={"phrase " + activeTextArray[2]}>
                    La puce de smartphone la plus rapide au monde. </li>

                    <li id="li4"  className={"phrase " + activeTextArray[3]}>
                    Une résistance exceptionnelle. </li>

                    <li id="li5"  className={"phrase " + activeTextArray[4]}>
                    Et un gain d’autonomie spectaculaire. </li>

                </ul>
            </div>
    )
    }
    
    
}

export default ParallaxText
