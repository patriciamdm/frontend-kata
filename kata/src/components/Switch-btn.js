import React from 'react'
import './switch-btn.css'

const SwitchBtn = ({showInfo, setShowInfo}) => {

    return (
        <>
            <input id="hideinfo" type="checkbox" onChange={() => setShowInfo(!showInfo)}/>
            <label for="hideinfo"></label>
        </>
    )
}

export default SwitchBtn