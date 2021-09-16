import  React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './scss/reset.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Login from './components/Auth/Login/Login'
import Register from './components/Auth/Register/Register'
import JobGiver from './components/Auth/Register/JobGiver/JobGiver'
import JobTaker from './components/Auth/Register/JobTaker/JobTaker'
import Premium from './components/Premium/Premium'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'
import Profile from './components/Profile/Profile'
import Cookie from "./components/Cookie/Cookie";
import Chat from './components/Chat/Chat'
import { getUserInfo } from './logic/user/info/getUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { setAccessToken, userData } from './slices/user/userSlice';
import AuthorizedHome from './components/Home/AuthorizedHome';
import AuthorizedHeader from './components/Header/AuthorizedHeader';
import { handleLoading, loadingData, updateLoadingStage } from './slices/loading/loadingSlice';
import LoadingPopup from './components/popups/loading/LoadingPopup';
import { getProffessionCategories, getProffessions } from './logic/proffessions/getProffesions';
import { proffessionData } from './slices/proffessions/proffessionSlice';
import AdminPage from './components/admin/AdminPage';
import { getCountries, getLocationToken } from './logic/locations/getLoactionData';
import { locationData } from './slices/locations/locationSlice';
import NewJobOffer from './components/new/jobOffer/NewJobOffer';


function App() {
  const [loaded, setLoaded] = useState(false);

  const homeTop = useRef();
  const categoryRef = useRef();
  const admRef = useRef();

  const dispatch = useDispatch();
  const userInfo = useSelector(userData);
  const proffessionInfo = useSelector(proffessionData);
  const locationInfo = useSelector(locationData);
  const loadingInfo = useSelector(loadingData);

  useEffect(() => {
    if(!proffessionInfo.proffessions){
      getProffessions(dispatch);
    }
    if(!proffessionInfo.categories){
      getProffessionCategories(dispatch);
    }
  }, [proffessionInfo.proffessions, dispatch, proffessionInfo.categories]);

  useEffect(() => {
    if(userInfo){
      const localAccessToken = window.localStorage.getItem("accessToken");
      let accessToken = null;

      if(userInfo.accessToken && userInfo.accessToken !== ""){
        accessToken = userInfo.accessToken;
      }else if(localAccessToken){
        accessToken = localAccessToken;
      }

      if(accessToken){
        dispatch(updateLoadingStage(1));
        dispatch(setAccessToken(accessToken));
        if(!userInfo.info){
          getUserInfo(accessToken, dispatch, 1);
        }
      }else{
        dispatch(handleLoading(false));
      }
    }
  }, [userInfo.info, dispatch, userInfo, userInfo.accessToken]);

  useEffect(() => {
    if(!locationInfo.token){
      getLocationToken(dispatch);
    }else if(locationInfo.token && !locationInfo.countries){
      getCountries(locationInfo.token, dispatch);
    }
  }, [dispatch, locationInfo.token, locationInfo.countries]);

  useEffect(() => {
    const accessToken = window.localStorage.getItem("accessToken");

    if(!accessToken && userInfo && proffessionInfo.proffessions && proffessionInfo.categories && locationInfo.countries){
      setLoaded(true);
      return
    }else if(accessToken && userInfo.info && proffessionInfo.proffessions && proffessionInfo.categories && locationInfo.countries){
      setLoaded(true);
      return
    }
    setLoaded(false)
  }, [userInfo, proffessionInfo.proffessions, proffessionInfo.categories, locationInfo.countries]);

  AOS.init();
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 300, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  if(!loaded){
    return(
      <LoadingPopup />
    );
  }else{
    return (
      <Router>
        <div className="App">
          <Cookie />
  
          {loadingInfo.isLoading && (
            <LoadingPopup />
          )}
          
          <Switch>
  
            <Route path='/chat'>
              <AuthorizedHeader />
              <Chat />
            </Route>
  
            <Route path='/login'>
              <Header />
              <Login />
              <Footer />
            </Route>

            <Route path='/admin'>
              <AuthorizedHeader />
              <AdminPage />
            </Route>
  
  
            <Route path='/register/jobTaker'>
              <Header />
              <JobTaker />
            </Route>
            
            <Route path='/register/jobGiver'>
              <Header />
              <JobGiver />
            </Route>
            
            <Route path='/register'>
              <Header />
              <Register />
            </Route>
  
  
            <Route path='/premium'>
              {userInfo.loggedIn ? (
                <AuthorizedHeader />
              ) : (
                <Header 
                  homeTop={homeTop}
                  categoryRef={categoryRef}
                  admRef={admRef}
                />
              )}
              <Premium />
              <Footer />
            </Route>
  
            <Route path='/profile/:searchID'>
              <AuthorizedHeader />
              <Profile />
              <Footer />
            </Route>
  
            <Route path='/settings'>
              <ProfileSettings />
              <Footer />
            </Route>
  
            {userInfo.loggedIn && (
              <Route path="/new/jobOffer">
                <AuthorizedHeader />
                <NewJobOffer />
              </Route>
            )}
  
            <Route path='/'>
              {userInfo.loggedIn ? (
                <>
                  <AuthorizedHeader />
                  <AuthorizedHome />
                </>
              ) : (
                <>
                  <Header 
                    homeTop={homeTop}
                    categoryRef={categoryRef}
                    admRef={admRef}
                  />
                  <Home 
                    homeTop={homeTop}
                    categoryRef={categoryRef}
                    admRef={admRef}
                  />
                </>
              )}
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
