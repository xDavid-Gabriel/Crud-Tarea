import { useState, useEffect } from "react";
import { obtenerUsuarios, eliminarUsuario } from "../service/usuarioServices";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ListaUsuariosView() {
  const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async () => {
    try {
      const usuariosObtenidos = await obtenerUsuarios();
      setUsuarios(usuariosObtenidos);
    } catch (error) {
      console.log(error);
    }
  };

  const verificarEliminar = async (id) => {
    const respuesta = await Swal.fire({
      icon: "warning",
      title: "Desea eliminar al usuario?",
      text: "Esta acción es irreversible",
      showConfirmButton: true,
      showDenyButton: true,
      confirmButtonText: "Sí, Eliminar",
      denyButtonText: "No, Cancelar",
    });
    // console.log(respuesta);
    if (respuesta.isConfirmed) {
      try {
        await eliminarUsuario(id);
        await Swal.fire({
          icon: "success",
          title: "Producto eliminado!",
        });
        getUsuarios();
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div className="container">
      <h1>Trabajadores registrados</h1>

      <table className="table my-4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Area</th>
            <th>Fecha de inicio</th>
            <th>DNI</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(
            ({ nombre, apellido, area, fecha_inicio, dni, id }, i) => (
              <tr key={i}>
                {/* RECUERDEN: el key es para identificar, elementos, generados de un arreglo */}
                <td>{nombre}</td>
                <td>{apellido}</td>
                <td>{area}</td>
                <td>{fecha_inicio}</td>
                <td>{dni}</td>
                <td>
                  <Link
                    to={`/editarusuario/${id}`}
                    className="editar text-white me-3"
                  >
                    Editar
                  </Link>
                  <button
                    className="btn btn-danger text-white "
                    onClick={() => {
                      verificarEliminar(id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <button className="boton ms-2 my-2">
        <Link
          to="/crearusuario"
          className="text-decoration-none font-serif text-white"
        >
          Agregar trabajador
        </Link>
      </button>
    </div>
  );
}
