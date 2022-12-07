import React, { useState } from "react";

const AddForm = () => {
  const [urheilijaTiedot, setUrheilijaTiedot] = useState({
    etunimi: "",
    sukunimi: "",
    kutsumanimi: "",
    syntymapaiva: "",
    paino: "",
    kuvalinkki: "",
    laji: "",
    saavutukset: "",
  });

  const handleChange = (event) => {
    setUrheilijaTiedot({
      ...urheilijaTiedot,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <section className="bg-neutral-500 p-2 m-2 rounded-[4px] self-center">
      <h1 className="font-sans">Lisää urheilija!</h1>
      <form className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Etunimi"
          name="etunimi"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Sukunimi"
          name="sukunimi"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Kutsumanimi"
          name="kutsumanimi"
          onChange={handleChange}
        />
        <input type="date" name="syntymapaiva" onChange={handleChange} />
        <input
          type="text"
          placeholder="Paino"
          name="paino"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Kuvalinkki"
          name="kuvalinkki"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Laji"
          name="laji"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Saavutukset"
          name="saavutukset"
          onChange={handleChange}
        />
        <button className="bg-green-500 font-">Hae</button>
      </form>
    </section>
  );
};

export default AddForm;
