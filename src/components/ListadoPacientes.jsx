import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, deletePaciente }) => {
  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll ">
      {pacientes && pacientes.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">
            Listado Pacientes{" "}
          </h2>
          <p className=" text-xl mb-10 mt-5 text-center">
            Administra tus {""}
            <span className=" font-bold text-indigo-600">
              Pacientes y Citas
            </span>
          </p>

          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
              deletePaciente={deletePaciente}
            />
          ))}
        </>
      ) : (
        <>
          {" "}
          <h2 className=" font-black text-3xl text-center">
            No hay Pacientes{" "}
          </h2>
          <p className=" text-xl mb-10 mt-5 text-center">
            Comienza agregando {""}
            <span className=" font-bold text-indigo-600">
              Pacientes y Citas
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
