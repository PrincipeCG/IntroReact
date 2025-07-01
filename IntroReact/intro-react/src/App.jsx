import './App.css'
import Card from './Components/Card.jsx'
import Counter from './Components/Counter.jsx'
import FilterableList from './Components/FilterableList.jsx'
import Timer from './Components/timer.jsx' 

const alt = "cat-image"

function App() {
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
        <Counter />
        <FilterableList />
        <Timer />
    </>
  )
}

export default App
