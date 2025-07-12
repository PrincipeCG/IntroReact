import './App.css'
import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'
import Timer from './Components/timer' 
import ConditionalSquare from './Components/ConditionalSquare'
import SquareContainer from './Components/SquareContainer'
import FocusInput from './Components/FocusInput'
import Parents from './Components/useCallBackExample'
import ContadorReducer from './Components/ContadorReducer'
import Nav from './Components/Nav'
import User from './Components/User'


const alt = "cat-image"

function App() {

  const [counter, setCounter] = useState(0);  


  return (
    <>
        <BrowserRouter>
        <h1>Este es mi primer componente:</h1>
        <Card 
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPCrPgO-uZZpPAOAXPMR3UgDnn8SQSAhF2w&s"}
          alt={alt}
          text={"Gato 1"}
          />
        <Card 
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR9Psh4BCsBkIELf3SmfJikyEgWeAARxB3Jg&s"} 
          alt={alt}
          text={"Gato 2"}
          />
        <Card 
          src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS7FgWZA38GLAwPkDuoYE73z_odJScltvfQ&s"}
          alt={alt}
          text={"Gato 3"}
          />

          <Nav/>
          
          <Routes>
              <Route path='/' element={() => <h1>Hola</h1>}/>
              <Route path='/Counter' element={<Counter counter={counter} setCounter={setCounter}/>}/>
              <Route path='/FilterableList' element={<FilterableList />}/>
              <Route path='/Timer' element={<Timer />}/>
              <Route path='/User/:userId' elements={<User/>}/>
          </Routes>
        </BrowserRouter>
      </> 
  )
}

export default App
