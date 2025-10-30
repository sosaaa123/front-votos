import { Route, Routes } from "react-router-dom"
import "./App.css"
import Stand from "./Stand"
import Principal from "./Principal"
import Standes from "./Standes"
function App() {
  return (
    <>
      <Routes>
        <Route path="/stand/:id" element={<Stand />}></Route>
        <Route path="/" element={<Principal />}></Route>
        <Route path="/stands" element={<Standes />}></Route>
      </Routes>
    </>
  )
}

export default App
