import "./Principal.css"
import { AnimatedBackground } from "animated-backgrounds"
import { GradientBackground } from "react-gradient-animation"
export default function Principal() {
  return (
    <section className="principal">
      <div className="flll">
        <h1 className="slide-down">
          <span className="tt">Expotec</span> <span className="tn">2025</span>{" "}
        </h1>
        <h2>Escuela de Educación Secundaria Técnica Nro1</h2>
        <h3>Ing Jose Rafael Canton</h3>
      </div>
      <div className="r">
        <div className="redes">
          <button className="fbn">
            <a href="https://www.facebook.com/tecnicabrandsen/?locale=es_LA">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </button>
          <button className="ign">
            <a href="https://www.instagram.com/expotecnica1/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}
