function Icono({ especialidad, clase }) {
  if (especialidad == "Programación" || especialidad == "programacion") {
    return (
      <div className={clase}>
        <i class="fa-solid fa-code"></i>
      </div>
    )
  } else if (
    especialidad == "Electromecánica" ||
    especialidad == "electromecanica"
  ) {
    return (
      <div className={clase}>
        <i class="fa-solid fa-gear"></i>
      </div>
    )
  } else if (especialidad == "Química" || especialidad == "quimica") {
    return (
      <div className={clase}>
        <i class="fa-solid fa-atom"></i>
      </div>
    )
  } else {
    return (
      <div className={clase}>
        <i class="fa-solid fa-graduation-cap"></i>
      </div>
    )
  }
}

export default Icono
