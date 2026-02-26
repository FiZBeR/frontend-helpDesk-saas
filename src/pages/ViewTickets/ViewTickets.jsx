import { TicketList } from "../../features/tickets/components/TicketList";

export const ViewTickets = () => {
    return (
        <div className="flex-1 overflow-y-auto p-8 bg-background-light dark:bg-background-dark">
          <section className="mx-auto max-w-7xl">
            <div>
              <TicketList />
            </div>
          </section>
        </div>
      );
}
