import { useState } from 'react';

export default function Player({ initialName, symbol, isActive}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    
    function handleEditClick() {
        setIsEditing(editing => !editing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        // btnCaption = "Save";
    } 

    return ( 
        <li className={isActive ? 'active' : undefined}>
          <span id="player">
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
}