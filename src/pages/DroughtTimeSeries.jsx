import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Plot from 'react-plotly.js';
import Papa from "papaparse";


const DroughtTimeSeries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        Papa.parse('https://docs.google.com/spreadsheets/d/e/2PACX-1vTKMBEf_Nw0wMC11pqIICU70PvOp0KCjsnM-8uy0aKj0i5Y8krCEd5tDsFOlXfuMw/pub?output=csv', {
            header: true,
            download: true,
            dynamicTyping: true,
            complete: (results) => {
                setData(results.data);
            }
        });
    }, []);

    var resultDate = [];
    var Var5Data = []
    var Var6Data = []
    var Var7Data = []
    var Var8Data = []
    var Var9Data = []

    if (data.length) {
        for (var i = 0; i < data.length; i++) {
            resultDate.push(data[i].Var1 + "-" + data[i].Var2 + "-" + data[i].Var3)
            Var5Data.push(data[i].Var5)
            Var6Data.push(data[i].Var6)
            Var7Data.push(data[i].Var7)
            Var8Data.push(data[i].Var8)
            Var9Data.push(data[i].Var9)
        };

        var trace1 = {
            name: 'D0-D4',
            x: resultDate,
            y: Var5Data,
            fill: 'tonexty',
            type: "scatter",
            mode: 'none',
            fillcolor: "yellow",
        }

        var trace2 = {
            name: 'D1-D4',
            x: resultDate,
            y: Var6Data,
            fill: 'tonexty',
            type: "scatter",
            mode: 'none',
            fillcolor: "rgb(252, 214, 148)",
        }
        var trace3 = {
            name: 'D2-D4',
            x: resultDate,
            y: Var7Data,
            fill: 'tonexty',
            type: "scatter",
            mode: 'none',
            fillcolor: "orange",
        }
        var trace4 = {
            name: 'D3-D4',
            x: resultDate,
            y: Var8Data,
            fill: 'tonexty',
            type: "scatter",
            mode: 'none',
            fillcolor: "red",
        }
        var trace5 = {
            type: "scatter",
            name: 'D4',
            x: resultDate,
            y: Var9Data,
            fill: 'tonexty',
            mode: 'none',
            fillcolor: "brown",
        }

    } 

    return (
        <div className='page_container'>
            <Helmet>
                <title>Drought Time Series | India Drought Monitor</title>
            </Helmet>
            <div className='main-container'>
                <div className="section-heading">
                    <h1>Drought Time Series</h1>
                </div>
                <div className="Timeseries-container">
                    {data.length ? 
                                  <Plot
                                  data={[trace5, trace4, trace3, trace2, trace1]}
                                  style={{ width: '100%' }}
                                  layout={{
                                      // width: 100, height: 500,
                                      title: 'Drought Affected Area in India (%)',
                                      xaxis: {
                                          autorange: true,
                                          // range: ['2022-01-1', '2022-12-31'],
                                          rangeselector: {
                                              buttons: [
                                                  {
                                                      count: 1,
                                                      label: '1 Month',
                                                      step: 'month',
                                                      stepmode: 'backward'
                                                  },
                                                  {
                                                      count: 3,
                                                      label: '3 Month',
                                                      step: 'month',
                                                      stepmode: 'backward'
                                                  },
                                                  {
                                                      count: 6,
                                                      label: '6 Month',
                                                      step: 'month',
                                                      stepmode: 'backward'
                                                  },
                                                  { step: 'all' }
                                              ]
                                          },
                                          rangeslider: { range: ['2021-07-14', '2022-12-31'] },
                                          type: 'date'
                                      },
                                      yaxis: {
                                          autorange: true,
                                          range: [0, 100],
                                          type: 'linear',
                                          title: 'Drought Area (%)'
                                      }
                                  }} /> 

                                  :<p className='Loading-tag'>Loading...</p>}
                </div>


            </div>
        </div>

    )
}

export default DroughtTimeSeries