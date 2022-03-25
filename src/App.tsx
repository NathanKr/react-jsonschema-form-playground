import './App.css'
import MyFormMaterialUiTheme1 from './components/MyFormMaterialUiTheme1'
import MyFormMaterialUiTheme2 from './components/MyFormMaterialUiTheme2'
import MyFormMaterialUiTheme3 from './components/MyFormMaterialUiTheme3'

function App() {

  return (
    <div className="App">
       <h2>MyFormMaterialUiTheme3</h2>
      <MyFormMaterialUiTheme3/> 
      <h2>MyFormMaterialUiTheme2</h2>
      <MyFormMaterialUiTheme2/> 
      <h2>MyFormDefaultTheme1</h2>
      <MyFormMaterialUiTheme1/>
    </div>
  )
}

export default App
