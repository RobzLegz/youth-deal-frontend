import React, {useState} from 'react';
import adm from '../../assets/svg/home/adm.svg';
import contacts from '../../assets/svg/home/contacts.svg';
import vawes from '../../assets/svg/home/waves.svg';
import welcome from '../../assets/svg/home/welcome.svg';
import team from '../../assets/svg/home/team.svg';
import rightArrow from '../../assets/svg/home/rightArrow.svg';
import Whitearrow from '../../assets/svg/home/next.svg';
import './Home.scss';
import { useHistory } from 'react-router-dom';

const popularFinds = ['Inženierzinātnes', 'Māksla un kultūra', 'Vadība un administrācija', 'Ekonomika', 'IT sfēra', 'Marketings,reklāma un PR', 'Valodniecība', 'Pakalpojumi un tūrisms', 'Skaistums un mode', 'Sports']

function Home({categoryRef, admRef, homeTop}){

    const [showAllFinds, setShowAllFinds] = useState(false);

    const history = useHistory();

    function handleFindsCount(){
        if (showAllFinds) {
            return popularFinds.length
        } else {
            return popularFinds.length - 4;
        }
    }

    return (
        <div className='home'>
            <div id="homeRef" ref={homeTop} />
            <section className="home__introduction" id="top">

                <div data-aos="fade-right" className="home__introduction__left">

                    <h1 className="home__introduction__left__title">Sveicināti!</h1>
                    <p className="home__introduction__left__under-title">Sāciet veidot savu veiksmīgo karjeru ar Youth <span>Deal</span></p>
                    <p className="home__introduction__left__desc">
                    Youth Deal apmierina gan darba devēja, gan arī darba ņēmēja intereses. Katram darbiniekam atrodam vispiemērotāko amatu!
                    </p>

                    <div className="home__introduction__left__paths">

                        <button className="home__introduction__left__paths__job-giver" onClick={() => history.push("/register/jobGiver")}>
                            Es esmu darba devējs <img src={rightArrow} alt="job giver" />
                        </button>

                        <button className="home__introduction__left__paths__job-taker" onClick={() => history.push("/register/jobTaker")}>
                            Es esmu darba ņēmējs <img src={Whitearrow} alt="job taker"/>
                        </button>

                    </div>
                    
                </div>

                <div data-aos="fade-left" className="home__introduction__right">
                    <img src={welcome} alt="Introduction" />
                </div>


            </section>


            <section className="home__find-options" id="categories" ref={categoryRef}>
             
                <div className="home__find-options__left">
                    <h3>Šeit var atrast darbu un darbiniekus visās jomās:</h3>
                </div>
                
                <div data-aos="fade-up" className="home__find-options__right">
                    <p className="home__find-options__right__title">Populārākie Meklējumi</p>
                    <div className="home__find-options__right__finds">
                        {popularFinds.slice(0, handleFindsCount()).map((find,index) => (
                            <div key={index} className="home__find-options__right__finds__find">
                                <input type="text" placeholder={find} disabled={true} />
                            </div>
                        ))}
                        <div onClick={() => {setShowAllFinds(!showAllFinds)}} className="home__find-options__right__finds__show-more">
                            Parādīt vēl <img src={rightArrow} alt="arrow-down" className={showAllFinds ? 'active' : ''} />
                        </div>
                    </div>
                </div>
                <img src={vawes} alt="vawes" className="home__find-options__vawes" data-aos="fade-up" data-aos-duration="2000"></img> 
            </section>

            <section className="home__find-talents" id="find">

                <p className="home__find-talents__title">
                    Atrodiet talantus Jūsu projektam-komandai
                </p>
                
                <p className="home__find-talents__desc">
                    Vai vēlaties atrast labākos talantus savai komandai? 
                    Pievienojiet savus darba piedāvājumus, lai atrastu jaunus apbrīnojamus komandas dalībniekus!
                </p>

                <button className='home__find-talents__find-together'>Atrast kopā ar Youth Deal</button>

                <img data-aos="fade-left"  src={team} alt="find talents" />
            </section>

            <section className="home__info" id="ADM" ref={admRef}>

                <div className="home__info__contacts">
                    <p className="home__info__contacts__title">Kontakti</p>
                    <p className="home__info__adm__desc">Sazinieties ar cilvēkiem ar kontaktu palīdzību</p>
                    <img src={contacts} alt="contact" id="contact_image" data-aos="zoom-in" data-aos-easing="ease-out-cubic" />
                    <button>Atrast Kontaktus</button>
                </div>

                <div className="home__info__adm">
                    <p className="home__info__adm__title">#ADM</p>
                    <p className="home__info__adm__desc">
                        Ja Tu esi aktīvā darba meklējšanā (#ADM), tad šī loma ir domāta Tev. 
                        Atlasi to reģistrējoties vai iestaj iestatījumos. 
                        Tad darba devēji varēs redzēt, ka Tu patiešām vēlies strādāt, un Tevi ātrāk atradīs. 
                    </p>
                    <img src={adm} alt="ADM" data-aos="zoom-out" data-aos-easing="ease-out-cubic"/>
                    <button>Atrast Kontaktus</button>
                </div>

            </section>
        </div>
    )
}

export default Home;