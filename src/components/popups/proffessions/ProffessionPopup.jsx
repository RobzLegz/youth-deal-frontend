import React from 'react'
import { useSelector } from 'react-redux'
import { proffessionData } from '../../../slices/proffessions/proffessionSlice'
import "./ProffessionPopup.scss"

function ProffessionPopup() {
    const proffessionInfo = useSelector(proffessionData);

    return (
        <div className="proffessionPopup">
            <ul className="proffessionPopup__categoryList">
                {proffessionInfo && proffessionInfo.categories.map((category, i) => (
                    <li key={i}>{category}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProffessionPopup
