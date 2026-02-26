import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createEquipo } from '../services/equipoServices';

export const NewEquipo = () => {
    const [numeroSerie, setNumeroSerie] = useState('');
    const [tipo, setTipo] = useState('');
    const [estado, setEstado] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const equipoData = {
          numero_serie: numeroSerie,
          tipo,
          estado
        };
  
        console.log(equipoData);
        const success = await createEquipo(equipoData);
  
        if (success) {
          navigate("/equipos", { replace: true });
        } else {
          console.log("Error al crear el equipo, revisa tu consola");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleConfirm = (e) => {
      e.preventDefault();
      const equipoData = {
        numeroSerie,
        tipo,
        estado
      };
      console.log('Equipo Data:', equipoData);
    };
  
    return (
      <div className="w-full max-w-130 mx-auto">
        {/*<!-- Card -->*/}
        <div className="bg-white dark:bg-[#191e33] rounded-xl shadow-xl border border-gray-200 dark:border-[#323b67] overflow-hidden">
          {/*<!-- Header Section -->*/}
          <div className="px-8 pt-10 pb-6 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
              <span className="material-symbols-outlined text-3xl">bug_report</span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-900 dark:text-white mb-2">
              Crear Equipo
            </h1>
            <p className="text-gray-500 dark:text-[#929bc9] text-sm">
              Client Portal Access for Hardware Inventory
            </p>
          </div>
          {/*<!-- Form Section -->*/}
          <div className="px-8 pb-10">
            <form
              action="#"
              className="flex flex-col gap-5"
              method="POST"
              onSubmit={handleSubmit}
            >
              {/*<!-- Equipo -->*/}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-white"
                  for="numeroSerie"
                >
                  Numero de Serie
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                    <span className="material-symbols-outlined text-[20px]">
                      label
                    </span>
                  </span>
                  <input
                    className="w-full h-12 pl-10 pr-4 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-[#5b6488] focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                    id="numeroSerie"
                    name="numeroSerie"
                    placeholder="Numero de Serie del Equipo"
                    required
                    type="text"
                    value={numeroSerie}
                    onChange={(e) => {
                      setNumeroSerie(e.target.value);
                    }}
                  />
                </div>
              </div>
              
              {/*<!-- Tipo -->*/}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-white"
                  for="tipo"
                >
                  Tipo del Hardware
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                    <span className="material-symbols-outlined text-[20px]">
                    hardware
                    </span>
                  </span>
                  <select
                    className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                    id="tipo"
                    name="tipo"
                    value={tipo}
                    onChange={(e) => {
                      setTipo(e.target.value);
                    }}
                  >
                    <option value='laptop'>
                      Selecciona un tipo de Hardware
                    </option>
                    <option value="laptop">Laptop</option>
                    <option value="monitor">Monitor</option>
                    <option value="servidor">Servidor</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-[#929bc9]">
                    <span className="material-symbols-outlined text-[20px]">
                      expand_more
                    </span>
                  </span>
                </div>
              </div>
              
              {/*<!-- Estado -->*/}
              <div className="flex flex-col gap-2">
                <label
                  className="text-sm font-medium text-gray-700 dark:text-white"
                  for="estado"
                >
                  Estado del Hardware
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-[#929bc9]">
                    <span className="material-symbols-outlined text-[20px]">
                    hov
                    </span>
                  </span>
                  <select
                    className="w-full h-12 pl-10 pr-10 rounded-lg bg-gray-50 dark:bg-[#111422] border border-gray-200 dark:border-[#323b67] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm appearance-none cursor-pointer"
                    id="estado"
                    name="estado"
                    value={estado}
                    onChange={(e) => {
                      setEstado(e.target.value);
                    }}
                  >
                    <option value='operativo'>
                      Selecciona un estado
                    </option>
                    <option value="operativo">Operativo</option>
                    <option value="en_reparacion">En Reparacion</option>
                  </select>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400 dark:text-[#929bc9]">
                    <span className="material-symbols-outlined text-[20px]">
                      expand_more
                    </span>
                  </span>
                </div>
              </div>
              {/*<!-- Submit Button -->*/}
              <button
                className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 py-3.5 px-8 text-sm font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90 hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-[#191e33]"
                type="submit"
              >
                Create Ticket
              </button>
            </form>
          </div>
          {/*<!-- Bottom decorative line -->*/}
          <div className="h-1 w-full bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
      </div>
    );
}
