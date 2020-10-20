import React, { useState, useEffect} from "react";
import {List} from '@material-ui/core';

const request = require("request");

export default function FinnhubTest() {
  const [stocks, setStocks] = useState([]);
  let stocksCall;

  useEffect(() => {
    request(
      "https://finnhub.io/api/v1/stock/symbol?exchange=US&token=bu76jmf48v6rajd4sij0",
      { json: true },
      (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        //console.log(body.url);
        //console.log(body.explanation);
        console.log(res.body);
        stocksCall = res.body;
        console.log('stocksCall',stocksCall);
  
        setStocks(stocksCall);
        
      }
    );
  },[])

  const test = () => {
    console.log(stocks[0].symbol);
  }

  //const stocksList = stocksCall.map(stock => <h2>{stock}</h2>)
  //console.log({stocksCall});

  return <div>
      <button onClick={test}>TEST</button>
  </div>;
}
