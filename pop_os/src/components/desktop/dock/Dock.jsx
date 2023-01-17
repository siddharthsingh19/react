import './dock.css'
import launcherIcon from '../../../assets/Icons/pop-cosmic-launcher.svg'
import workspacesIcon from '../../../assets/Icons/pop-cosmic-workspaces.svg'
import applicationsIcon from '../../../assets/Icons/pop-cosmic-applications.svg'
import filesIcon from '../../../assets/Icons/system-file-manager.svg'
import terminalIcon from '../../../assets/Icons/utilities-terminal.svg'
import firefoxIcon from '../../../assets/Icons/firefox.svg'


export default function Dock() {
  return (
    <div className='dock'>
        <div className="dock--wrapper">
            <div className="dock--items">

                <div className="dock--itemsIcons">
                <img src={launcherIcon} alt="" className='dock--icons' />
                </div>

                <div className="dock--itemsIcons">
                <img src={workspacesIcon} alt="" className='dock--icons' />
                </div>

                <div className="dock--itemsIcons">
                <img src={applicationsIcon} alt="" className='dock--icons' />
                </div>

                <div className="dock--itemsIcons">
                <img src={firefoxIcon} alt="" className='dock--icons' />
                </div>

                <div className="dock--itemsIcons">
                <img src={filesIcon} alt="" className='dock--icons' />
                </div>

                <div className="dock--itemsIcons">
                <img src={terminalIcon} alt="" className='dock--icons' />
                </div>
                
                
            </div>
        </div>
    </div>
  )
}
