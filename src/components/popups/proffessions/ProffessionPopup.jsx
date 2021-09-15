import React from 'react'
import { useSelector } from 'react-redux'
import { proffessionData } from '../../../slices/proffessions/proffessionSlice'
import CloseIcon from "../../../assets/svg/close.svg"
import "./ProffessionPopup.scss"

function ProffessionPopup({proffessionID, setProffessionID, setProffessionListOpen}) {
    const proffessionInfo = useSelector(proffessionData);

    return (
        <div className="proffessionPopup">
            <header className="proffessionPopup__header">
                <h3>Profesiju izvēle</h3>
                <img src={CloseIcon} alt="close" onClick={() => setProffessionListOpen(false)} />
            </header>
            <ul className="proffessionPopup__categoryList">
                {proffessionInfo && proffessionInfo.categories.map((category, i) => (
                    <li key={i}>{category.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default ProffessionPopup
