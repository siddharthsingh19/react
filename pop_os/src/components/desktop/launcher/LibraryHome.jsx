import React from "react";

export default function LibraryHome({app}) {
    console.log(app);
  return (
    <div className="launcher--centerPlacesItems">
      <img src={app.appIcon} alt="" className="finderAppLogos" />
      <p className="finder--AppName">{app.appName}</p>
    </div>
  );
}
