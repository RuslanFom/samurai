import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <DialogsContainer />} />
                    <Route path='/profile' render={ () => <Profile /> } />
                    <Route path='/music' render={ () => <Music /> } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
        );
}


export default App;