import { CreditCardIcon } from "@heroicons/react/outline/";

function Prenota() {
  return (
    <div className="flex justify-center items-center text-s m-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/workinprogress"}>
        <CreditCardIcon />
        <p className="flex justify-center items-center text-center">
          Scegli questo borgo
        </p>
      </a>
    </div>
  );
}

export default Prenota;
