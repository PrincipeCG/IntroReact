import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'
import Timer from './Components/timer' 
import ConditionalSquare from './Components/ConditionalSquare'
import SquareContainer from './Components/SquareContainer'
import FocusInput from './Components/FocusInput'
import Parents from './Components/useCallBackExample'
import ContadorReducer from './Components/ContadorReducer'
import { useState } from 'react'


const alt = "cat-image"

function App() {

  const [counter, setCounter] = useState(0);
  const [squareCounter, setSquareCounter] = useState(0); 

  return (
    <>
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
        <Counter counter={counter} setCounter={setCounter}/>
        <FilterableList />
        <Timer />
        <h1>Contador de los cuadrados</h1>
      <Counter counter={squareCounter} setCounter={setSquareCounter}/>
      <SquareContainer>
        {Array.from({ length: squareCounter }, (_, index) => (
          <ConditionalSquare key={index} />
        ))}
      </SquareContainer>
      <FocusInput/>
      <Parents />
      <ContadorReducer />
    </>
  )
}

export default App
