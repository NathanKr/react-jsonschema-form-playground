import './App.css'
import FormTodos from './components/FormTodos'
import FormPersonWithPets from './components/FormPersonWithPets'
import FormQuiz from './components/FormQuiz'
import FormUnion from './components/FormUnion'

function App() {

  return (
    <div className="App">
      <h2>FormUnion</h2>
      <FormUnion/>
       <h2>FormTodos</h2>
      <FormTodos/> 
      <h2>FormPersonWithPets</h2>
      <FormPersonWithPets/> 
      <h2>FormQuiz</h2>
      <FormQuiz/>
    </div>
  )
}

export default App
