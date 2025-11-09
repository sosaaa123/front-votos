import "./Principal.css"
import { AnimatedBackground } from "animated-backgrounds"
import { GradientBackground } from "react-gradient-animation"
export default function Principal() {
  return (
    <section className="principal">
      <AnimatedBackground></AnimatedBackground>

      <div>
        <h1>Expotec 2025</h1>
        <h2>Escuela de Educación Secundaria Técnica Nro1</h2>
        <h3>Ing Jose Rafael Canton</h3>
      </div>
      <div className="r">
        <div className="redes">
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
      </div>
    </section>
  )
}
