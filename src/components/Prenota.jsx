import { CreditCardIcon } from "@heroicons/react/outline/";

function Prenota() {
  return (
    <div className="flex flex-row justify-center text-xl m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-100 hover:duration-300 hover:opacity-50">
      <a href={"/workinprogress"}>
        <CreditCardIcon />
        Prenota il tuo posto
      </a>
    </div>
  );
}

export default Prenota;
