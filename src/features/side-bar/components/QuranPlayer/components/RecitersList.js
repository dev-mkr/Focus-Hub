import React from "react";
import Button from "components/Button";
import quranRadioUrls from "data/quranRadioUrls.json";

const ReciterList = ({ setReciter }) => {
  return (
    <ul
      dir="rtl"
      className="max-h-[22rem] overflow-auto flex flex-col pt-3.5 reciters-list"
      style={{ "--scrollbar-width": "7px" }}
    >
      {quranRadioUrls.map((reciter, index) => {
        return (
          <Button
            onClick={(e) => {
              setReciter(reciter);
              const selectedReciter = document.querySelector(".selected-reciter");
              selectedReciter && selectedReciter.classList.remove("selected-reciter");
              e.target.classList.add("selected-reciter");
            }}
            accessability={`تشغيل ${reciter.name}`}
            className={`border-b border-base basis-full ${
              index === quranRadioUrls.length - 1 && "mb-20"
            }`}
            key={reciter.id}
          >
            <li key={reciter.id} reciter-id={reciter.id} className="text-start py-4 pr-2">
              {reciter["name"]}
            </li>
          </Button>
        );
      })}
    </ul>
  );
};

export default React.memo(ReciterList);
