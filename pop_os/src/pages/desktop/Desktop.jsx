import Dock from "../../components/desktop/dock/Dock";
import Launcher from "../../components/desktop/launcher/Launcher";
import Panel from "../../components/desktop/panel/Panel";
import "./desktop.css";

export default function Desktop() {
  return (
    <div className="desktop">
      <Panel />
      <div className="desktop--wrapper">
        <div className="wallpaper">
          <div className="desktop--appSpace">
            <Launcher />
          </div>
        </div>
        <Dock />
      </div>
    </div>
  );
}
