import React from 'react'
import Banner from '../../Components/Banner/Banner'
import About from '../About/About'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <About></About>
        <Skills></Skills>
        <Projects></Projects>
    </div>
  )
}
