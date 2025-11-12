import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Icono from "./componentes/Icono"
import Confetti from "react-confetti"
export default function Stand() {
  const { id } = useParams()
  const [datos, setDatos] = useState([])
  const [mensaje, setMensaje] = useState("")
  const [confetti, setConfetti] = useState(false)
  const [vt, setVt] = useState(false)
  const [nt, setNt] = useState(false)
  const [horario, setHorario] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })
  useEffect(() => {
    fetch(`https://conteo-de-votos-2025.vercel.app/stands/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Datos recibidos:", data)
        setDatos(data)
        console.log(datos)
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
        if (result.estado) {
          setVt(true)
          setConfetti(true)
          setTimeout(() => {
            setConfetti(false)
          }, 800000)
        } else {
          if (result.ya_voto) setNt(true)
          setVt(true)
          if (result.fuera_de_horario) setHorario(true)
        }
      })
  }

  const conf = () => {
    setConfetti(true)
  }

  return (
    <>
      {datos.id_stand ? (
        <div className={`cont ${vt || nt ? "contet" : ""}`}>
          {vt ? (
            <div className="igg srt">
              {nt || horario ? (
                <div className="ppp x">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              ) : (
                <div className="ppp v">
                  <i class="fa-solid fa-check"></i>
                </div>
              )}
              <h1 className="titulo mm">{mensaje}</h1>
              <p className="ccc slide-down">
                Expotec <span className="kll">2025</span>
              </p>
              <Link className="vermas" to="/stands">
                Ver mas stands
              </Link>
            </div>
          ) : (
            <>
              <div className="s">
                <Link className="xd" to={"/stands"}>
                  <nav>
                    <p className="exp">Expotec </p>{" "}
                    <p className="year"> 2025</p>
                  </nav>
                </Link>
              </div>

              <div className="info">
                <Icono especialidad={datos.orientacion} clase={"iccn"}></Icono>
                <h1 className="titulo slide-down">{datos.nombre}</h1>
                <p className="descripcion slide-down"> {datos.descripcion}</p>
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
                    <p className="dato slide-down">{datos.materia}</p>
                    <p className="inf slide-down">Materia</p>
                  </div>
                </div>
                <div className="dat2">
                  <div className="ic">
                    <i class="fa-solid fa-user"></i>
                  </div>
                  <div className="cont1">
                    <p className="dato slide-down">{datos.profesor}</p>
                    <p className="inf slide-down">Docente</p>
                  </div>
                </div>
              </div>
              <div className="btn-div">
                <button className="boton" onClick={votar}>
                  Votar
                </button>
              </div>
            </>
          )}
          {confetti ? (
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              gravity={0.2}
            />
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className="cont srt">
          <div className="igg">
            <h2 className="titulo mm slide-down">Cargando...</h2>
            <p className="slide-down">
              Expotec <span className="veinte">2025</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
