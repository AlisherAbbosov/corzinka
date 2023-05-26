import React from "react";
import languages from "../../Localization/Localization";
import { Context as LanguageContext } from "../../Context/Localization/Localization";
import { Context as SavedContext } from "../../Context/SavedProducts/SavedProducts";

function Saved() {
  const { lang } = React.useContext(LanguageContext);
  const { saved, setSaved } = React.useContext(SavedContext);
  return (
    <div className="saved">
      {saved.length == 0 ? (
        <>no found</>
      ) : (
        <div>
          <h1 className="saved__title">{languages[lang].saved.title}</h1>
        </div>
      )}
    </div>
  );
}

export default Saved;
