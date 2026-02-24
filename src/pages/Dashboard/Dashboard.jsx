import { TicketList } from "../../features/tickets/components/TicketList";
import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
      <section className="mx-auto max-w-7xl">
        <div>
          <TicketList />
        </div>
      </section>
    </div>
  );
};
