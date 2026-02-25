import { useParams } from "react-router-dom";
import { useFetchID } from "../../../hooks/useFetchID";
import { useFetchIDComent } from "../../../hooks/useFetchIDComent";
import { Coment } from "../../comentarios/components/Coment";
import { HeaderComent } from "../../comentarios/components/HeaderComent";
import { FormComent } from "../../comentarios/components/FormComent";

export const TicketDetail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchID(id);
  const { dataComent, isLoadingComent, errorComent } = useFetchIDComent(id);
  console.log(data + "and coments: ", dataComent);

  if (isLoading) {
    return (
      <div className="p-10 text-white">Cargando detalles del ticket...</div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500">
        Error al cargar el ticket: {error.message || error}
      </div>
    );
  }

  if (!data) {
    return <div className="p-10 text-white">Ticket no encontrado.</div>;
  }

  return (
    <div className="flex h-full w-full">
      {/* Columna Izquierda: Detalles principales y Timeline (Adaptar código de Stitch) */}
      <div className="flex-1 overflow-y-auto ">
        {/* Aquí va el encabezado con el título y estado reales de tu 'ticket' */}
        <HeaderComent data={data} />
        {/* Aquí va el bloque del "Initial Request" que muestra la descripción original */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="max-w-4xl mx-auto">
            {/*  Timeline Container */}
            <div className="relative pl-6 sm:pl-10 space-y-8 py-8 px-8 mx-6 before:absolute before:inset-0 before:ml-4.75 sm:before:ml-9.75 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-[#232948] before:content-['']">
              {/*  Initial Request (Start) */}
              {dataComent?.map((coment) => (
                <Coment coment={coment} key={coment.id}/>
              ))}
            </div>
          </div>
          <FormComent ticket={id}/>
        </div>
      </div>
      {/* Columna Derecha: Metadata (Adaptar código de Stitch) */}
      <aside className="hidden xl:flex w-80 flex-col border-l border-[#232948] bg-[#111422] p-6 gap-6 overflow-y-auto">
        {/* Aquí mapeas la prioridad, equipo y fechas reales de tu 'ticket' */}
      </aside>
    </div>
  );
};
