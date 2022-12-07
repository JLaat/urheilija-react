import React from "react";

const UrheilijaCard = () => {
  return (
    <div className="grid grid-rows-2 h-[500px] bg-[url('https://seura.fi/wp-content/uploads/2012/12/Sepporaty1s_548.jpg')] bg-no-repeat rounded-[10px] p-3 m-3 self-center items-center text-center">
      <div>
        <h1 className="text-xl">Seppo räty, keihäänheitto</h1>
        <div className="flex justify-center items-center gap-2">
          <p className="flex-1">
            1972 <br /> Paino: 89
          </p>
        </div>
      </div>
      <div>
        <h1>Saavutukset</h1>
        <p>MM Kulta 1975</p>
        <button className="bg-red-500 p-2 rounded-md">Poista</button>
        <button className="bg-yellow-500 p-2 rounded-md">Muokkaa</button>
      </div>
    </div>
  );
};

export default UrheilijaCard;
