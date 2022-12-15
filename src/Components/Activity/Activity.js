import { useState } from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
    
    const [labelText, setlabelText] = useState('Vandaag')
    const [labelStyle, setlabelStyle] = useState('activity__label--green')
    let labelChange = () => {
        switch(labelText){
            case "Vandaag":
                setlabelText("Morgen");
                break
            case "Morgen":
                setlabelText("Overmorgen");
                break;
            case "Overmorgen":
                setlabelText("Vandaag");
                break;
        }
        switch(labelStyle){
            case "activity__label--green":
                setlabelStyle("activity__label--orange");
                break
            case "activity__label--orange":
                setlabelStyle("activity__label--red");
                break;
            case "activity__label--red":
                setlabelStyle("activity__label--green");
                break;
        }
    }

    return (

        <li className="activity">
            <h3 className={labelStyle} onClick={labelChange}>{labelText || "----"}</h3>
            <p className="activity__discription">{activity.description || "description"}</p>
        </li>

    );
}

export default Activity;

