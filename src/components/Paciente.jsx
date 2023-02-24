const Paciente = ({ paciente, setPaciente, deletePaciente }) => {
  const { nombre, dueño, email, fecha, sintoma, id } = paciente;
  const handleDelete = () => {
    const respuesta = confirm("¿Deseas eliminar este paciente?");
    if (respuesta) {
      deletePaciente(id);
    }
  };
  return (
    <div className=" mx-5 bg-white shadow-xl px-5 py-10 rounded-xl my-5">
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""} <span className=" font-normal normal-case">{nombre}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Dueño: {""} <span className=" font-normal normal-case">{dueño}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Email: {""} <span className=" font-normal normal-case">{email}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Fecha alta: {""}{" "}
        <span className=" font-normal normal-case">{fecha}</span>
      </p>
      <p className=" font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {""}{" "}
        <span className=" font-normal normal-case">{sintoma}</span>
      </p>
      <div className=" flex mt-5 justify-evenly">
        <button
          onClick={() => setPaciente(paciente)}
          type="button"
          className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-full"
        >
          Editar
        </button>

        <button
          onClick={handleDelete}
          type="button"
          className=" py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-full"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
