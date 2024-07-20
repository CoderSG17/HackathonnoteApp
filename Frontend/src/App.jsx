import React, { Fragment } from 'react'
import MainNavi from './Components/Mainnavigation/MainNavi'
import {Routes,Route} from 'react-router-dom'
import Allnotes from './Components/Pages/Allnotes'
import Newnotes from './Components/Pages/Newnotes'
import Shownotes from './Components/Pages/Shownotes'
import Feedback from './Components/Pages/Feedback'

function App() {
  return (
    <Fragment>
      <MainNavi/>
      <main>
        <Routes>
        <Route path = '/' element={<Allnotes/>}/>
        <Route path = '/new' element={<Newnotes/>}/>
        <Route path = '/feedback' element={<Feedback/>}/>
        <Route path = '/notes/:id' element={<Shownotes/>}/>
        </Routes>
       
      </main>
    </Fragment>
  )
}

export default App