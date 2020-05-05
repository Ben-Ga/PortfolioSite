import React from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Auxiliary from './Auxiliary'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SkillsPage from './SkillsPage'
import ProjectPage from './ProjectPage'
import ContactPage from './ContactPage'
import NUScript from './NUScript'


const Layout = () => {
    return (
        <Auxiliary>
            <BrowserRouter>
                <Navbar/>
                <Footer/>
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
                </Switch>
            </BrowserRouter>
        </Auxiliary>
    )
}

export default Layout
