import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import FormUsuario from "../components/FormUsuario";
import {
  obtenerUsuarioPorId,
  editarusuarioPorId,
} from "../service/usuarioServices";
// import { useNavigate } from "react-router";
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2";

export default function EditarUsuarioView() {
  const [value, setValue] = useState({
    nombre: "",
    apellido: "",
    area: "",
    fecha_inicio: "",
    dni: 0,
  });

  const { id } = useParams();

  // const navigate = useNavigate();
  const history = useHistory();

  const getProducto = async () => {
    try {
      const prodObtenido = await obtenerUsuarioPorId(id); //2. obtenemos el producto por su ID
      setValue(prodObtenido); //2.1 la rpta de mockapi la pongo en el estado
      //   console.log(prodObtenido);
    } catch (error) {
      console.log(error);
    }
  };

  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await editarusuarioPorId(id, value);
      await Swal.fire({
        icon: "success",
        title: "Exito",
        text: "Producto Editado Exitosamente",
      });
      // navigate("/");
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const actualizarInput = (e) => {
    console.log(e.target.name, e.target.value);
    setValue({
      ...value, //coginedo el estado de value, spreadoperator
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    getProducto();
  }, []);
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
