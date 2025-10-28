import { Route, Routes } from "react-router-dom"
import "./App.css"
import Stand from "./Stand"
import Principal from "./Principal"
function App() {
  return (
    <>
      <Routes>
        <Route path="/stand/:id" element={<Stand />}></Route>
        <Route path="/" element={<Principal />}></Route>
      </Routes>
    </>
  )
}

export default App
