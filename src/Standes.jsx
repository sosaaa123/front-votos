import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Icono from "./componentes/Icono"
import "./Standes.css"
export default function Standes() {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    fetch("https://conteo-de-votos-2025.vercel.app/stands")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data)
        setDatos(data)
      })
  }, [])
  console.log(datos)

  return (
    <section className="standes">
      <h1>Expotec 2025</h1>
      {datos.map((s) => (
        <Link to={`/stand/${s.id_stand}`}>
          <div key={s.id_stand} className="standes-cont">
            <div className="icon">
              <i class="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="inff">
              <h3>{s.nombre}</h3>
              <div className="pes">
                <p>{s.curso}</p>
                <p>-</p>
                <p>{s.orientacion}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  )
}
