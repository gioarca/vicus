import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

function Arrow() {
  return (
    <div className="flex justify-center items-center text-xl m-12 w-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50">
      <a href={"/loginSuccess"}>
        <ArrowCircleLeftIcon />
        <p className="flex justify-center items-center text-center">Indietro</p>
      </a>
    </div>
  );
}

export default Arrow;
