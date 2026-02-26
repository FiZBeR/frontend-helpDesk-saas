import { useState, useEffect } from "react";
import { getEquipos, deleteEquipo } from "../services/equipoServices";
import { useFecthEquipo } from "../../../hooks/useFecthEquipo";
import { UNSAFE_DataRouterContext, useNavigate } from "react-router-dom";

export const EquipoList = () => {
  const { data, isLoading, error } = useFecthEquipo();

  const [equipos, setEquipos] = useState([]);

  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
        console.log(id)
      const success = await deleteEquipo(id);

      if (success) {
        setEquipos((prevEquipos) =>
          prevEquipos.filter((equipo) => equipo.id !== id)
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data) {
        setEquipos(data.filter(d => d.estado !== 'dado_de_baja'));
    }
  }, [data]);

  if (isLoading)
    return <div className="p-8 text-white">Cargando inventario...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="flex-1 overflow-y-auto p-6 lg:p-10 bg-[#101322] h-full w-full">
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Inventario de Equipos
          </h1>
          <p className="text-[#929bc9] text-sm mt-1">
            Gestiona el hardware registrado en el sistema.
          </p>
        </div>
        <button
          onClick={() => navigate("/equipos/nuevo")}
          className="flex items-center justify-center h-10 px-6 rounded-lg bg-blue-600 hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all text-sm font-bold gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          Nuevo Equipo
        </button>
      </div>

      {/* Tabla Minimalista */}
      <div className="bg-[#161b30] border border-[#232948] rounded-xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#111422] border-b border-[#232948] text-xs uppercase tracking-wider text-[#929bc9]">
                <th className="p-4 font-semibold">Equipo</th>
                <th className="p-4 font-semibold">N° Serie</th>
                <th className="p-4 font-semibold">Tipo</th>
                <th className="p-4 font-semibold">Estado</th>
                <th className="p-4 font-semibold text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#232948]">
              {equipos.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-8 text-center text-[#929bc9]">
                    No hay equipos registrados.
                  </td>
                </tr>
              ) : (
                equipos.map((equipo) => (
                  <tr
                    key={equipo.id}
                    className="hover:bg-[#111422]/50 transition-colors group"
                  >
                    <td className="p-4">
                      <div className="text-sm font-semibold text-white">
                        {equipo.id}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-[#929bc9] font-mono">
                        {equipo.numero_serie}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-[#d1d5db] capitalize">
                        {equipo.tipo}
                      </div>
                    </td>
                    <td className="p-4">
                      {equipo.estado === "dado_de_baja" ? (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-red-900/30 text-red-400 border border-red-800/50">
                          Dado de baja
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-900/30 text-green-400 border border-green-800/50">
                          Activo
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-right">
                      {/* Deshabilitamos el botón si ya está dado de baja para UX defensiva */}
                      <button
                        onClick={() => handleDelete(equipo.id)}
                        disabled={equipo.estado === "dado_de_baja"}
                        className="p-2 text-[#5d6588] hover:text-red-400 rounded-md hover:bg-[#232948] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                        title={
                          equipo.estado === "dado_de_baja"
                            ? "Ya está dado de baja"
                            : "Dar de baja"
                        }
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          delete
                        </span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
