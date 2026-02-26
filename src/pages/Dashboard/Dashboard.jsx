import { GeneralEstadisticas } from "../../features/estadisticas/components/GeneralEstadisticas";

export const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <section className="mx-auto max-w-7xl">
        <div>
          <GeneralEstadisticas />
        </div>
      </section>
    </div>
  );
};
