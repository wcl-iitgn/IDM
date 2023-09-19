import React, { useState, useEffect } from 'react';
import Papa from "papaparse";

const DateFunction = ({ days }) => {
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


  if (data.length) {
    var date = data[0].Var7 + "/" + data[0].Var8 + "/" + data[0].Var9;
  }

  var result = new Date(date);
  result.setDate(result.getDate() + days);


  // console.log(result.toDateString())


  // return result.toDateString()
  return (
    <div className='date-function'>
        {data.length ? <p>{result.toDateString()}</p> : <p>Loading...</p>}
    </div>
)
  
}


export default DateFunction
