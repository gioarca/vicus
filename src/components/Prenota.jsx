import { CreditCardIcon } from "@heroicons/react/outline/";

function Prenota() {
  return (
    <div className="flex flex-col justify-center items-center text-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/workinprogress"}>
        <CreditCardIcon className="flex flex-col justify-center items-center text-center h-auto" />
        <p className="flex flex-col justify-center items-center text-center">
          Scegli questo borgo
        </p>
      </a>
    </div>
  );
}

export default Prenota;
