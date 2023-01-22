// new fresh one
import React, { useState, useEffect } from "react";

function MarketData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMarketData();
    const interval = setInterval(getMarketData, 10000);
    return () => clearInterval(interval);
  }, []);

  const getMarketData = async () => {
    try {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,DOGE,XRP,SHIB&tsyms=USD"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!data) return <div>Loading...</div>;
  var btc = data.RAW.BTC.USD;
  var eth = data.RAW.ETH.USD;
  var doge = data.RAW.DOGE.USD;
  var xrp = data.RAW.XRP.USD;
  var shib = data.RAW.SHIB.USD;

  return (
    <div className="liveupdate">
      <table>
        <thead>
          <tr>
            <th>*</th>
            <th>Coin</th>
            <th>Price</th>
            <th>24h %</th>
            <th>24h Volume</th>
            <th>Market Cap</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div id="btcLogo">
                <img src={`https://cryptocompare.com${btc.IMAGEURL}`} />
              </div>
            </td>
            <td>
              <div id="btcSymbol">{btc.FROMSYMBOL.toLocaleString()}</div>
            </td>
            <td>
              <div id="btcPrice">
                {btc.PRICE.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div
                id="btcChange"
                className={
                  btc.CHANGEPCT24HOUR.toFixed(2).includes("-")
                    ? "negative"
                    : "positive"
                }
              >
                {btc.CHANGEPCT24HOUR.toFixed(2) + "%"}
              </div>
            </td>
            <td>
              <div id="btcVol">
                {btc.VOLUME24HOUR.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="btcCap">
                {btc.MKTCAP.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="btcTime">
                {new Date(btc.LASTUPDATE * 1000).toLocaleString()}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="ethLogo">
                <img src={`https://cryptocompare.com${eth.IMAGEURL}`} />
              </div>
            </td>
            <td>
              <div id="ethSymbol">{eth.FROMSYMBOL.toLocaleString()}</div>
            </td>
            <td>
              <div id="ethPrice">
                {eth.PRICE.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div
                id="ethChange"
                className={
                  eth.CHANGEPCT24HOUR.toFixed(2).includes("-")
                    ? "negative"
                    : "positive"
                }
              >
                {eth.CHANGEPCT24HOUR.toFixed(2) + "%"}
              </div>
            </td>
            <td>
              <div id="ethVol">
                {eth.VOLUME24HOUR.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="ethCap">
                {eth.MKTCAP.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="ethTime">
                {new Date(eth.LASTUPDATE * 1000).toLocaleString()}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="dogeLogo">
                <img src={`https://cryptocompare.com${doge.IMAGEURL}`} />
              </div>
            </td>
            <td>
              <div id="dogeSymbol">{doge.FROMSYMBOL.toLocaleString()}</div>
            </td>
            <td>
              <div id="dogePrice">
                {doge.PRICE.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div
                id="dogeChange"
                className={
                  doge.CHANGEPCT24HOUR.toFixed(2).includes("-")
                    ? "negative"
                    : "positive"
                }
              >
                {" "}
                {doge.CHANGEPCT24HOUR.toFixed(2) + "%"}
              </div>
            </td>
            <td>
              <div id="dogeVol">
                {doge.VOLUME24HOUR.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="dogeCap">
                {doge.MKTCAP.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="dogeTime">
                {new Date(doge.LASTUPDATE * 1000).toLocaleString()}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="xrpLogo">
                <img src={`https://cryptocompare.com${xrp.IMAGEURL}`} />
              </div>
            </td>
            <td>
              <div id="xrpSymbol">{xrp.FROMSYMBOL.toLocaleString()}</div>
            </td>
            <td>
              <div id="xrpPrice">
                {xrp.PRICE.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div
                id="xrpChange"
                className={
                  xrp.CHANGEPCT24HOUR.toFixed(2).includes("-")
                    ? "negative"
                    : "positive"
                }
              >
                {xrp.CHANGEPCT24HOUR.toFixed(2) + "%"}
              </div>
            </td>
            <td>
              <div id="xrpVol">
                {xrp.VOLUME24HOUR.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="xrpCap">
                {xrp.MKTCAP.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="xrpTime">
                {new Date(xrp.LASTUPDATE * 1000).toLocaleString()}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="shibLogo">
                <img src={`https://cryptocompare.com${shib.IMAGEURL}`} />
              </div>
            </td>
            <td>
              <div id="shibSymbol">{shib.FROMSYMBOL.toLocaleString()}</div>
            </td>
            <td>
              <div id="shibPrice">
                {shib.PRICE.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div
                id="shibChange"
                className={
                  shib.CHANGEPCT24HOUR.toFixed(2).includes("-")
                    ? "negative"
                    : "positive"
                }
              >
                {shib.CHANGEPCT24HOUR.toFixed(2) + "%"}
              </div>
            </td>
            <td>
              <div id="shibVol">
                {shib.VOLUME24HOUR.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="shibCap">
                {shib.MKTCAP.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </div>
            </td>
            <td>
              <div id="shibTime">
                {new Date(shib.LASTUPDATE * 1000).toLocaleString()}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MarketData;
