import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header/components"
import Rewards from "./components/Rewards/components"

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={ <Rewards/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
