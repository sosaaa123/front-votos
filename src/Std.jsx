import Confetti from "react-confetti"
export default function Std() {
  return (
    <>
      <div className="cont">
        <div className="s">
          <nav>
            <p className="exp">Expotec </p> <p className="year"> 2025</p>
          </nav>
        </div>

        <div className="info">
          <Icono especialidad={datos.orientacion}></Icono>
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
              <p className="dato">{datos.materia}</p>
              <p className="inf">Materia</p>
            </div>
          </div>
          <div className="dat2">
            <div className="ic">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="cont1">
              <p className="dato">{datos.profesor}</p>
              <p className="inf">Docente</p>
            </div>
          </div>
        </div>
        <div className="btn-div">
          <button className="boton" onClick={votar}>
            Votar
          </button>
        </div>
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
    </>
  )
}
