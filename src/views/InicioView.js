import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

export default function InicioView() {
  return (
    <section className="container overflow-hidden">
      <div className="my-4 my-md-0 row align-items-center min-vh-100">
        <div className="col-12 col-md-6" data-aos="fade-right">
          <h1 className="display-2">
            Agrega a tus <br />
            <span className="font-serif mx-2 text-degradado">trabajadores</span>
            <br />
            facilmente
          </h1>
          <p className="my-4 text-gray">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it{" "}
          </p>
          <button className="boton d-flex justify-content-center align-items-center">
            {" "}
            <Link
              to="/login"
              className="font-serif text-white text-decoration-none"
            >
              Logeate
            </Link>
          </button>
        </div>
        <div className="mt-4 mt-md-0 col-12 col-md-6" data-aos="fade-up">
          <img className="img-fluid" src={imagenes.img1} alt="Trabajador" />
        </div>
      </div>
    </section>
  );
}
