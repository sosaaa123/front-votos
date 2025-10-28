import { Route, Routes } from "react-router-dom"
import "./App.css"
import Stand from "./stand"
function App() {
  return (
    <>
      <Routes>
        <Route path="/stand/:id" element={<Stand />}></Route>
      </Routes>
    </>
  )
}

export default App
