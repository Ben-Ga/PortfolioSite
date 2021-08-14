import React, {useState} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Auxiliary from './Auxiliary'
import About from '../components/About'
import Navbar from '../components/Navbar'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import NUScript from './NUScript'
import SideDrawer from '../UI/SideDrawer/SideDrawer'
import Website from './Website'
import BurgerBuilder from './BurgerBuilder'
import Tomlk from './Tomlk'
import AnimalDash from './projects/AnimalDash'
import StockNotif from './projects/StockNotif'
import GoogleChallenge from './projects/GoogleChallenge'

const Layout = () => {


    const [showSideDrawer, setShow] = useState(false);

    const closeSideDrawerHandler = () => {
        setShow(! showSideDrawer)
    }
    return (
        <Auxiliary>
            <BrowserRouter>
                <Navbar showSidedrawer={closeSideDrawerHandler}/>
                <SideDrawer open={showSideDrawer} closed={closeSideDrawerHandler}/>
                {/* <Footer/> */}
                <Switch>
                    <Route exact path='/skills'>
                        <SkillsPage/>
                    </Route>
                    <Route exact path='/projects'>
                        <ProjectPage/>
                    </Route>
                    <Route exact path='/contact'>
                        <ContactPage/>
                    </Route>
                    <Route exact path='/'>
                        <About/>
                    </Route>
                    <Route exact path='/projects/nuscript/'>
                        <NUScript/>
                    </Route>
                    <Route exact path='/projects/website/'>
                        <Website/>
                    </Route>
                    <Route exact path="/projects/burgerbuilder/">
                        <BurgerBuilder/>
                    </Route>
                    <Route exact path="/projects/tomlk/">
                        <Tomlk/>
                    </Route>
                    <Route exact path="/projects/animal-dashboard/">
                        <AnimalDash />
                    </Route>
                    <Route exact path="/projects/stock-notif">
                        <StockNotif/>
                    </Route>
                    <Route exact path="/projects/google-challenge">
                        <GoogleChallenge />
                    </Route>
                </Switch>
            </BrowserRouter>
        </Auxiliary>
    )
}

export default Layout
