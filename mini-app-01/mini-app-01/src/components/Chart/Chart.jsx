import React from 'react'
import './Chart.css'

import ChartBar from './ChartBar'


const Chart = props => {
    const DATAPointsValues = props.DATAPoints.map(DATAPoint => DATAPoint.value)
    const totalMaximum = Math.max(...DATAPointsValues)

    return (
        <div className="chart">
            {props.DATAPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />))}
        </div>
    )
}

export default Chart