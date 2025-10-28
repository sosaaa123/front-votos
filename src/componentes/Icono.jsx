function Icono({ especialidad }) {
  if (especialidad == "Programacion") {
    return (
      <div className="icono">
        <i class="fa-solid fa-desktop"></i>
      </div>
    )
  } else if (especialidad == "Electromecanica") {
    return (
      <div className="icono">
        <i class="fa-solid fa-gear"></i>
      </div>
    )
  } else if (especialidad == "Quimica") {
    return (
      <div className="icono">
        <i class="fa-solid fa-atom"></i>
      </div>
    )
  } else {
    return (
      <div className="icono">
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
    )
  }
}

export default Icono
