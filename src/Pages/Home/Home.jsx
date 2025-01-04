import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  )
}
