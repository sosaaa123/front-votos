import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Icono from "./componentes/Icono"
import "./Standes.css"
export default function Standes() {
  const [datos, setDatos] = useState([])
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true)
    fetch("https://conteo-de-votos-2025.vercel.app/stands")
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data)
        setDatos(data)
        setLoad(false)
      })
  }, [])
  console.log(datos)

  return (
    <>
      {load ? (
        <div className="cargando">
          <div className="cargg">
            <h2>Cargando...</h2>
            <p className="ccc slide-down veinte">
              Expotec <span className="veinticinco">20</span>
              <span className="veinticinco">25</span>
            </p>
          </div>
        </div>
      ) : (
        <section className="standes">
          <h1>
            Expotec <span className="veinte">20</span>
            <span className="veinticinco">25</span>
          </h1>
          {datos.map((s) => (
            <Link to={`/stand/${s.id_stand}`}>
              <div key={s.id_stand} className="standes-cont">
                <Icono
                  especialidad={s.orientacion}
                  clase={s.id_stand > 90 ? "rnn rnnn" : "rnn rnnnn"}
                ></Icono>
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
          <footer className="fttt">
            <div className="redesz">
              <button className="fb">
                <a href="https://www.facebook.com/tecnicabrandsen/?locale=es_LA">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </button>
              <button className="ig">
                <a href="https://www.instagram.com/expotecnica1/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </button>
            </div>
          </footer>
        </section>
      )}
    </>
  )
}
