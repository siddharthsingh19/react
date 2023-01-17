import React, { useEffect, useState } from 'react'

export default function Clock() {

    const [panelTime, setPanelTime] = useState();
    const [panelDate, setPanelDate] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setPanelTime(date.toLocaleTimeString())
            setPanelDate(date.toDateString())
        }, 1000);
    }, [])

  return (
    <div>{panelDate} {panelTime}</div>
  )
}
