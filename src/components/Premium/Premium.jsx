import React from 'react'
import "./Premium.scss";
import CrownIcon from "../../assets/svg/crown.svg";
import SecureIcon from "../../assets/svg/premium/secure.svg";
import AdIcon from "../../assets/svg/premium/ad.svg";
import CommunicationIcon from "../../assets/svg/premium/communication.svg";
import FolderIcon from "../../assets/svg/premium/folder.svg";

function Premium() {
    return (
        <div className="premium">
            <header className="premium__header">
                <div className="premium__header__option">
                    <img src={CrownIcon} alt="crown" />
                    <h3>Darba devējs</h3>
                </div>
                <div className="premium__header__option">
                    <img src={CrownIcon} alt="crown" />
                    <h3>Darba ņēmējs</h3>
                </div>
            </header>
            <div className="premium__body">
                <div className="premium__body__top">
                    <p>Šeit var iegādāties mūsu premium tarifus. Tas dos Jums jaunas Premium funkcijas, kuras atvērs jaunu Youth Deal funkcionalitāti. Esiet augšpusē ar Premium!</p>
                </div>
                <div className="premium__body__bottom">
                    <ul className="premium__body__bottom__reasons">
                        <li>
                            <img src={SecureIcon} alt="secure" />
                            <h4>Divpakāpju autentifikācija</h4>
                        </li>
                        <li>
                            <img src={AdIcon} alt="secure" />
                            <h4>Bez reklāmām</h4>
                        </li>
                        <li>
                            <img src={FolderIcon} alt="secure" />
                            <h4>Datu glabāšana</h4>
                        </li>
                        <li>
                            <img src={CommunicationIcon} alt="secure" />
                            <h4>Komunicēšana</h4>
                        </li>
                        <li>
                            <img src={SecureIcon} alt="secure" />
                            <h4>Un daudz vairāk</h4>
                        </li>
                        <button>3.99/Mēnesī. ABONĒT</button>
                    </ul>
                </div>
            </div>
            <img src={CrownIcon} alt="" />
        </div>
    )
}

export default Premium
