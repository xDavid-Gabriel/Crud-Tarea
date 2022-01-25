import { useState } from "react";
import { crearUsuario } from "../service/usuarioServices";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

import FormUsuario from "../components/FormUsuario";
import Swal from "sweetalert2";

export default function CrearUsuarioView() {
  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
    area: "",
    fecha_inicio: "",
    dni: 0,
  });

  // const navigate = useNavigate();
  const history = useHistory();

  const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value, //cogiendo el estado de value, spreadoperator
      [e.target.name]: e.target.value,
    });
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    //Siempre intenten indicar al usuario que esta pasando o que a ocurrido
    try {
      await crearUsuario({ ...value });
      //despues de que haya terminado de crear el producto

      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Usuario Creado!",
        // showConfirmButton: false, //es para que no me muestre un boton de cierre
        // timer: 2000, //ms
      });
      //antes de dirigime a navigate
      // navigate("/");
      history.push("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <FormUsuario
        value={value}
        actualizarInput={actualizarInput}
        manejarSubmit={manejarSubmit}
      />
    </div>
  );
}
