import { Ticket as TicketT } from "@/types/ticketsPage";

function Ticket({
  priceSubtext,
  currentPrice,
  originalPrice,
  title,
  description,
}: TicketT) {
  return (
    <button
      className="border-2 border-dashed border-[#252525] rounded-lg p-8 mt-6 w-full text-start"
      aria-label={title}
    >
      <p className="font-light text-5xl">{title}</p>
      {description ? (
        <p className="mt-6 font-light text-2xl">{description}</p>
      ) : null}
      <p className="mt-8 text-2xl">
        {originalPrice ? <s>${originalPrice}</s> : null}
        &nbsp;
        <b>{currentPrice === 0 ? "Free" : `$${currentPrice}`}</b>
      </p>
      {priceSubtext ? <p className="mt-3">{priceSubtext}</p> : null}
    </button>
  );
}

export default Ticket;
