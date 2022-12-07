import React from "react";

const SearchForm = () => {
  return (
    <section className="bg-neutral-500 p-2 m-2 rounded-[4px] self-center ">
      <h1 className="font-sans">Hae urheilijaa!</h1>
      <form className="flex flex-col gap-3">
        <input type="text" placeholder="Etunimi" />
        <input type="text" placeholder="Sukunimi" />
        <button className="bg-green-500 font-">Hae</button>
      </form>
    </section>
  );
};

export default SearchForm;
