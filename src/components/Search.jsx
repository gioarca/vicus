import { useState } from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-center m-2 float-center sm:col-span-4">
        <div className="mt-2 max-w-5xl sm:max-w-80">
          <div className="flex rounded-full shadow-sm ring-2 ring-inset ring-black focus-within:ring-2 focus-within:ring-inset focus-within:ring-black sm:max-w-80">
            <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
              Borgo:
            </span>
            <input
              onChange={(e) => setInput(e.target.value)}
              type="text"
              value={input}
              className="block flex-1 border-1 bg-transparent py-4 pl-3 ml-3 placeholder:text-black text-black focus:ring-0 sm:text-sm sm:leading-6 transition ease-in delay-100 focus:bg-grey"
              placeholder="Inserisci il nome"
            ></input>
            <a href={"/searched/" + input}>
              <SearchIcon className="h-8 m-3 flex items-center justify-center float-right" />
            </a>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Search;
