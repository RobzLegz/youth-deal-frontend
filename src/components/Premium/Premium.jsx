import React, { useEffect, useState } from 'react'
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
import { useSelector } from 'react-redux';
import { userData } from '../../slices/user/userSlice';

function Premium() {
    const [premiumShocase, setPremiumShocase] = useState("jobGiver");

    const userInfo = useSelector(userData);

    useEffect(() => {
        if(userInfo.info){
            if(userInfo.info.is_employer){
                setPremiumShocase("jobGiver")
            }else{
                setPremiumShocase("jobSeeker")
            }
        }
    }, [userInfo.info]);

    return (
        <div className="premium">
            <header className="premium__header">
                <div 
                    className={premiumShocase === "jobGiver" ? "premium__header__optionActive" : "premium__header__option"}
                    onClick={() => setPremiumShocase("jobGiver")}
                >
                    <img src={CrownIcon} alt="crown" />
                    <h3>Darba devējs</h3>
                </div>
                <div 
                    className={premiumShocase === "jobSeeker" ? "premium__header__optionActive" : "premium__header__option"}
                    onClick={() => setPremiumShocase("jobSeeker")}    
                >
                    <img src={CrownIcon} alt="crown" />
                    <h3>Darba ņēmējs</h3>
                </div>
            </header>
            <div className="premium__body">
                <div className="premium__body__top">
                    <p>Šeit var iegādāties mūsu premium tarifus. Tas dos Jums jaunas Premium funkcijas, kuras atvērs jaunu Youth Deal funkcionalitāti.</p>
                    <p>Esiet augšpusē ar Premium!</p>
                </div>
                <div className="premium__body__bottom">
                    {premiumShocase === "jobGiver" ? (
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
                    ) : (
                        <ul className="premium__body__bottom__reasons">
                            <li>
                                <img src={SecureIcon} alt="secure" />
                                <h4>Paziņojumi par jauniem darba sludinājumiem</h4>
                            </li>
                            <li>
                                <img src={BlockedIcon} alt="secure" />
                                <h4>Pieejama statistika, kā darba devēji mijiedarbojas ar taviem sludinājumiem</h4>
                            </li>
                            <li>
                                <img src={FolderIcon} alt="secure" />
                                <h4>Advancēta meklēšana</h4>
                            </li>
                            <li>
                                <img src={CoordinationIcon} alt="secure" />
                                <h4>Sīkāks algas pārskats</h4>
                            </li>
                            <li>
                                <img src={MoreIcon} alt="secure" />
                                <h4>Pieeja video materiālu bāzei</h4>
                            </li>
                            <li>
                                <img src={MoreIcon} alt="secure" />
                                <h4>Palīdzība ar CV sastādīšanu</h4>
                            </li>
                            <li>
                                <img src={MoreIcon} alt="secure" />
                                <h4>Iespējams vienlaicīgi pieteikties vairākiem darba piedāvājumiem</h4>
                            </li>
                            {userInfo.info && !userInfo.info.has_premium ? (
                                <button>3.99/Mēnesī. ABONĒT</button>
                            ) : !userInfo.info && (
                                <button>3.99/Mēnesī. ABONĒT</button>
                            )}
                        </ul>
                    )}
                    
                    <div className="premium__body__bottom__imageContainer">
                        <img src={PremiumSuccessIcon} alt="premium" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Premium
