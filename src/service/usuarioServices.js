import axios from "axios"; //fetch pero mejor

const URL = "https://61d541b58df81200178a8f6f.mockapi.io/usuarios";

const obtenerUsuarios = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log(data);
    return data; //resolve
  } catch (error) {
    throw error; //reject
  }
};

const crearUsuario = async (nuevoUsuario) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    //axios siempre me va devolver la propiedad data, donde esta la rpta del servidor
    //axios cuando hace POST, PUT necesita no solo la URL
    //axios.post(URL, objACrear, {headers})
    const { data } = await axios.post(URL, nuevoUsuario, { headers });
    return data;
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarioPorId = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const editarusuarioPorId = async (id, obUsuarios) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };
    await axios.put(`${URL}/${id}`, obUsuarios, { headers });
    return; //resolve
  } catch (error) {
    throw error;
  }
};

const eliminarUsuario = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
    return "producto eliminado";
  } catch (error) {
    throw error;
  }
};
export {
  obtenerUsuarios,
  crearUsuario,
  obtenerUsuarioPorId,
  editarusuarioPorId,
  eliminarUsuario,
};
