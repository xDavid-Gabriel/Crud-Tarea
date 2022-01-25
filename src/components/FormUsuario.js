export default function FormUsuario({ value, actualizarInput, manejarSubmit }) {
  return (
    <div>
      <form
        className="p-3"
        onSubmit={(e) => {
          manejarSubmit(e);
        }}
      >
        <h1 className="mb-4">Ingrese los datos del trabajador</h1>
        <div className="my-3">
          <label className="form-label fw-bold">Nombre del trabajador</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            value={value.nombre}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="my-3">
          <label className="form-label fw-bold">Apellido del trabajador</label>
          <input
            type="text"
            className="form-control"
            name="apellido"
            value={value.apellido}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>
        <div className="my-3">
          <label className="form-label fw-bold">Area en el que trabajara</label>
          <input
            type="text"
            className="form-control"
            name="area"
            value={value.area}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="my-3">
          <label className="form-label fw-bold">Fecha de inicio</label>
          <input
            type="date"
            className="form-control"
            name="fecha_inicio"
            value={value.fecha}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <div className="my-3">
          <label className="form-label fw-bold">DNI</label>
          <input
            type="number"
            className="form-control"
            name="dni"
            value={value.dni}
            onChange={(e) => {
              actualizarInput(e);
            }}
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Guardar
        </button>
      </form>
    </div>
  );
}
