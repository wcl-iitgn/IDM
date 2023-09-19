import React from 'react'
import '../index.css';

const Legend3 = () => {
    return (
        <>
            <div className="legend-panel">
                <div className="legend">
                    <div className="item-heading">
                        <h2>Streamflow Percentile</h2>
                    </div>
                    <div className="legend-item">
                        <p className="legend-color-value"> Low</p>
                        <p className="legend-color-value"> Medium</p>
                        <p className="legend-color-value"> High</p>
                    </div>
                    <div className="legend-color">
                        <i style={{backgroundColor: 'black'}}></i>
                        <i style={{backgroundColor: 'brown'}}></i>
                        <i style={{backgroundColor: 'red'}}></i>
                        <i style={{backgroundColor: 'orange'}} ></i>
                        <i style={{backgroundColor: 'yellow'}}></i>
                        <i style={{backgroundColor: 'white'}}></i>
                        <i style={{backgroundColor: '#B9F96E'}}></i>
                        <i style={{backgroundColor: '#B3D16E'}}></i>
                        <i style={{backgroundColor: '#3CBC3D'}}></i>
                        <i style={{backgroundColor: '#009E1E'}}></i>
                        <i style={{backgroundColor: '#6370F8'}}></i>
                        <i style={{backgroundColor: '#6370F8'}}></i>
                    </div>

                    <div className="legend-item">
                        <p className="legend-num-value"> 0</p>
                        <p className="legend-num-value"> 2</p>
                        <p className="legend-num-value"> 5</p>
                        <p className="legend-num-value"> 10</p>
                        <p className="legend-num-value"> 20</p>
                        <p className="legend-num-value"> 30</p>
                        <p className="legend-num-value"> 70</p>
                        <p className="legend-num-value"> 80</p>
                        <p className="legend-num-value"> 90</p>
                        <p className="legend-num-value"> 95</p>
                        <p className="legend-num-value"> 98</p>
                        <p className="legend-num-value"> 100</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Legend3
