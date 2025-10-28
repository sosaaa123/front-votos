import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Icono from "./componentes/Icono"
import Confetti from "react-confetti"
export default function Stand() {
  const { id } = useParams()
  const [datos, setDatos] = useState([])
  const [mensaje, setMensaje] = useState("")
  const [confetti, setConfetti] = useState(false)
  useEffect(() => {
    fetch(`https://conteo-de-votos-2025.vercel.app/stands/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data)
        setDatos(data)
      })
  }, [id])

  console.log(datos)

  const votar = () => {
    fetch(`https://conteo-de-votos-2025.vercel.app/stands/${id}/votar`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setMensaje(result.mensaje)
        console.log(result)
        alert(result.mensaje)
        setConfetti(true)
      })
  }

  const conf = () => {
    setConfetti(true)
  }

  return (
    <>
      <div className="cont">
        <div className="s">
          <nav>Expotec 2025</nav>
          <Icono especialidad={datos.orientacion}></Icono>
        </div>

        <div className="info">
          <h1 className="titulo">{datos.nombre}</h1>

          <p className="descripcion"> {datos.descripcion}</p>
          <div className="dat1">
            <div>
              <p>{datos.curso}</p>
            </div>
            <div>
              <p>{datos.orientacion}</p>
            </div>
          </div>
        </div>
        <div className="xd">
          <div className="dat2">
            <div className="ic">
              <i class="fa-solid fa-book"></i>
            </div>
            <div className="cont1">
              <p className="dato">Materia {datos.materia}</p>
              <p className="inf">Materia</p>
            </div>
          </div>
          <div className="dat2">
            <div className="ic">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="cont1">
              <p className="dato">Profesor {datos.profesor}</p>
              <p className="inf">Profesor</p>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button className="boton" onClick={votar}>
            Votar
          </button>
        </div>
        <button onClick={votar}>confetti</button>
        {confetti ? <Confetti width={400} height={700} /> : <div></div>}
      </div>
    </>
  )
}
