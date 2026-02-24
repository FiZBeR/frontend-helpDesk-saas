import { useParams } from "react-router-dom";
import { useFetchID } from "../../../hooks/useFetchID";

export const TicketDetail = () => {
  console.log("Cargando componente");
  const { id } = useParams();
  console.log("ID: " + id);
  const { data, isLoading, error } = useFetchID(id);

  console.log(data);

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
      {" "}
      {/* Contenedor base que reemplaza al main */}
      <p className="text-black">Hola Detalle</p>
      {/* Columna Izquierda: Detalles principales y Timeline (Adaptar código de Stitch) */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Aquí va el encabezado con el título y estado reales de tu 'ticket' */}
        {/* Aquí va el bloque del "Initial Request" que muestra la descripción original */}

        {/* (Ignora los demás mensajes del timeline de Stitch por ahora, tu API no soporta comentarios aún) */}
      </div>
      {/* Columna Derecha: Metadata (Adaptar código de Stitch) */}
      <aside className="hidden xl:flex w-80 flex-col border-l border-[#232948] bg-[#111422] p-6 gap-6 overflow-y-auto">
        {/* Aquí mapeas la prioridad, equipo y fechas reales de tu 'ticket' */}
      </aside>
    </div>
  );
};
