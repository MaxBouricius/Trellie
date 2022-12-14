import { useState } from "react";
import "./Activity.css";

const Activity = ({ activity }) => {
    
    const [labelText, setlabelText] = useState('Vandaag')
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
    }

    return (

        <li className="activity">
            <h3 className="activity__label" onClick={labelChange}>{labelText || "----"}</h3>
            <p className="activity__discription">{activity.description || "description"}</p>
        </li>

    );
}

export default Activity;

