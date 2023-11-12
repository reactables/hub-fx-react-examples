import { EventTickets as EventTickets$, EventTypes } from '@hub-fx/examples';
import { TicketService } from './ticket.service';
import { useReactable } from './Hooks/useReactable';

const EventTickets = () => {
  const {
    state,
    actions: { selectEvent, setQty },
  } = useReactable(EventTickets$(TicketService.getPrice));

  return (
    <>
      <h1>Event Prices!</h1>
      <div className="event-tickets">
        {state && (
          <>
            <div className="event-tickets__event-select">
              <label>Select an Event: </label>
              <select
                id="event-selection"
                value={state.controls.selectedEvent}
                onChange={(e) => selectEvent(e.currentTarget.value as EventTypes)}
              >
                <option value="Chili Cook Off">Chili Cook Off</option>
                <option value="Grammar Rodeo">Grammar Rodeo</option>
                <option value="Itchy And Scratchy Movie">Itchy And Scratchy Movie</option>
              </select>
            </div>
            <div className="event-tickets__qty">
              <label>Qty:</label>
              <input
                id="qty"
                type="number"
                onChange={(e) => setQty(+e.currentTarget.value)}
                value={state.controls.qty}
              />
            </div>
            <div className="event-tickets__price-info">
              {state.calculating ? (
                <span>Calculating ...</span>
              ) : (
                <div>
                  <b>Price Total: ${state.price}</b>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default EventTickets;
