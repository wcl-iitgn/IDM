import React, { useState, useEffect } from 'react';
import Papa from "papaparse";


const DroughtTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTLl3ffx0cSFNJ87ynXoxo7AlYkUlpYHMyFQsMtp_5SiZi-NNJukxoeg06oeZJJgw/pub?output=csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data);
            }
        });
    }, []);
    var Col1Data = []
    var Col2Data = []
    var Col3Data = []
    var Col4Data = []
    var Col5Data = []
    var Col6Data = []

    if (data.length) {
        for (var i = 0; i < data.length; i++) {
            Col1Data.push(data[i].Var1)
            Col2Data.push(data[i].Var2)
            Col3Data.push(data[i].Var3)
            Col4Data.push(data[i].Var4)
            Col5Data.push(data[i].Var5)
            Col6Data.push(data[i].Var6)
        };
    }

    function addDays(days) {   
        if (data.length) {
            var date = data[0].Var7 + "/" + data[0].Var8 + "/" + data[0].Var9;
            var result = new Date(date);
            result.setDate(result.getDate() + days);
            return result.toDateString()
        } 
    }


    return (
        <div>
            <div className="data-table">
                <div className="item-heading">
                    <h2>
                        Drought Condition (Percentage Area)
                    </h2>
                </div>
                {data.length ? <table>
                    <tbody>
                        <tr>
                            <th>Time</th>
                            <th>None</th>
                            <th style={{ backgroundColor: 'yellow' }}>D0-D4</th>
                            <th style={{ backgroundColor: 'rgb(252, 214, 148)' }}>D1-D4</th>
                            <th style={{ backgroundColor: 'orange' }}>D2-D4</th>
                            <th style={{ backgroundColor: 'red' }}>D3-D4</th>
                            <th style={{ backgroundColor: 'brown' }}>D4</th>
                        </tr>
                        <tr>
                            <td>Current <br/>({addDays(0)})</td>
                            <td>{parseFloat(Col1Data[0]).toFixed(1)}</td>
                            <td>{parseFloat(Col2Data[0]).toFixed(1)}</td>
                            <td>{parseFloat(Col3Data[0]).toFixed(1)}</td>
                            <td>{parseFloat(Col4Data[0]).toFixed(1)}</td>
                            <td>{parseFloat(Col5Data[0]).toFixed(1)}</td>
                            <td>{parseFloat(Col6Data[0]).toFixed(1)}</td>

                        </tr>
                        <tr>
                            <td>Last Week  <br/>({addDays(-7)})</td>
                            <td>{parseFloat(Col1Data[1]).toFixed(1)}</td>
                            <td>{parseFloat(Col2Data[1]).toFixed(1)}</td>
                            <td>{parseFloat(Col3Data[1]).toFixed(1)}</td>
                            <td>{parseFloat(Col4Data[1]).toFixed(1)}</td>
                            <td>{parseFloat(Col5Data[1]).toFixed(1)}</td>
                            <td>{parseFloat(Col6Data[1]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>One Month Ago <br/>({addDays(-30)})</td>
                            <td>{parseFloat(Col1Data[2]).toFixed(1)}</td>
                            <td>{parseFloat(Col2Data[2]).toFixed(1)}</td>
                            <td>{parseFloat(Col3Data[2]).toFixed(1)}</td>
                            <td>{parseFloat(Col4Data[2]).toFixed(1)}</td>
                            <td>{parseFloat(Col5Data[2]).toFixed(1)}</td>
                            <td>{parseFloat(Col6Data[2]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>Three Month Ago <br/>({addDays(-90)})</td>
                            <td>{parseFloat(Col1Data[3]).toFixed(1)}</td>
                            <td>{parseFloat(Col2Data[3]).toFixed(1)}</td>
                            <td>{parseFloat(Col3Data[3]).toFixed(1)}</td>
                            <td>{parseFloat(Col4Data[3]).toFixed(1)}</td>
                            <td>{parseFloat(Col5Data[3]).toFixed(1)}</td>
                            <td>{parseFloat(Col6Data[3]).toFixed(1)}</td>
                        </tr>
                        <tr>
                            <td>One year Ago  <br/>({addDays(-365)})</td>
                            <td>{parseFloat(Col1Data[4]).toFixed(1)}</td>
                            <td>{parseFloat(Col2Data[4]).toFixed(1)}</td>
                            <td>{parseFloat(Col3Data[4]).toFixed(1)}</td>
                            <td>{parseFloat(Col4Data[4]).toFixed(1)}</td>
                            <td>{parseFloat(Col5Data[4]).toFixed(1)}</td>
                            <td>{parseFloat(Col6Data[4]).toFixed(1)}</td>
                        </tr>
                    </tbody>
                </table>


                    : <p className='Loading-tag'>Loading...</p>}

            </div>
        </div>
    )
}

export default DroughtTable