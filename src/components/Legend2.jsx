import React from 'react'
import '../index.css';

const Legend2 = () => {
  return (
    <>
            <div className="legend-panel">
            <div className="legend">
                <div className="item-heading">
                    <h2>Drought Categories</h2>
                </div>
                <div className="legend-item">
                    <p className="legend-color-value"> Drought Recovers</p>
                    <p className="legend-color-value"> Drought Persists</p>
                </div>
                <div className="legend-color">
                    <i  style={{backgroundColor: '#99CCFF'}}></i>
                    <i  style={{backgroundColor: '#FF9999'}}></i>
                </div>
            </div>
        </div>
        </>
  )
}

export default Legend2