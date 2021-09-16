import React from 'react'
import "./Premium.scss";
import CrownIcon from "../../assets/svg/crown.svg";
// import AdIcon from "../../assets/svg/premium/ad.svg";
// import CommunicationIcon from "../../assets/svg/premium/communication.svg";
import FolderIcon from "../../assets/svg/premium/folder.svg";
// import ArrowRightCircleIcon from "../../assets/svg/premium/arrow-right-circle.svg";
import PremiumSuccessIcon from "../../assets/svg/premium/premium.svg";
import SecureIcon from "../../assets/svg/premium/secure.svg";
import BlockedIcon from "../../assets/svg/premium/blocked.svg";
import CoordinationIcon from "../../assets/svg/premium/coordination.svg";
import MoreIcon from "../../assets/svg/premium/more.svg";

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
                            <img src={BlockedIcon} alt="secure" />
                            <h4>Bez reklāmām</h4>
                        </li>
                        <li>
                            <img src={FolderIcon} alt="secure" />
                            <h4>Datu glabāšana</h4>
                        </li>
                        <li>
                            <img src={CoordinationIcon} alt="secure" />
                            <h4>Komunicēšana</h4>
                        </li>
                        <li>
                            <img src={MoreIcon} alt="secure" />
                            <h4>Un daudz vairāk</h4>
                        </li>
                        <button>3.99/Mēnesī. ABONĒT</button>
                    </ul>
                    <div className="premium__body__bottom__imageContainer">
                        <img src={PremiumSuccessIcon} alt="premium" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium
