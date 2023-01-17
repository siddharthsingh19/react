import "./launcher.css";
import finderHome from "../../../assets/Icons/finder/go-home-symbolic.svg";
import finderFolder from "../../../assets/Icons/finder/sidebar-places-symbolic.svg";
import finderCreateFolder from "../../../assets/Icons/finder/folder-new-symbolic.svg";

import { FinderApps } from "../../../assets/data";
import LibraryHome from "./LibraryHome";

export default function Launcher() {
  return (
    <div className="launcher">
      <div className="launcher--wrapper">
        <div className="launcher--top">
          <input
            type="text"
            autoFocus
            placeholder="Type to search"
            className="finder--searchBox"
          />
        </div>

        <div className="launcher--center">
          <div className="launcher--centerPlaces">
            {FinderApps.map((a) => (
             <LibraryHome key={a.id} app={a} />
            ))}
          </div>
        </div>

        <hr />

        <div className="launcher--bottom">
          <div className="launcher--bottomPlaces">
            <div className="launcher--bottomPlacesItems">
              <img src={finderHome} alt="" className="finderFolderLogos" />
              <p>Library Home</p>
            </div>
            <div className="launcher--bottomPlacesItems">
              <img src={finderFolder} alt="" className="finderFolderLogos" />
              <p>System</p>
            </div>
            <div className="launcher--bottomPlacesItems">
              <img src={finderFolder} alt="" className="finderFolderLogos" />
              <p>Office</p>
            </div>
            <div className="launcher--bottomPlacesItems">
              <img src={finderFolder} alt="" className="finderFolderLogos" />
              <p>Utilities</p>
            </div>
            <div className="launcher--bottomPlacesItems">
              <img
                src={finderCreateFolder}
                alt=""
                className="finderFolderLogos"
              />
              <p>Create Folder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
