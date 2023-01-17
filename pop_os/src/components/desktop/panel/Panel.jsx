import Clock from './clock/Clock'
import './panel.css'

export default function Panel() {


  return (
    <div className='panel'>
        <div className="panel--wrapper">
            <div className="panel--left">
                <p className='panel--workspaces'>Workspaces</p>
                <p className='panel--applications'>Applications</p>
            </div>
            <div className="panel--center">
                <Clock />
            </div>
            <div className="panel--right">
                <p>right wala</p>
            </div>
        </div>
    </div>
  )
}
