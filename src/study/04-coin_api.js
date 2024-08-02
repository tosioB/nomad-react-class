import { useEffect, useState } from "react";

function StudyCoinApi() {
  const [loading, setLoading] = useState(true);
  const [conins, setCoins] = useState([]);
  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers') // API에서 암호화폐 시장 데이터를 가져오기 위해 HTTP GET 요청을 보냄
      .then((response) => response.json()) // fetch로부터 받은 응답을 JSON 형식으로 변환
      .then((response) => {
        setCoins(response); // 변환된 JSON 데이터를 상태 변수 coins에 저장
        setLoading(false); // 데이터 로딩이 완료되었으므로 로딩 상태를 false로 설정
      });
    }, []);
    console.log(conins)

  return (
    <>
      <div className="container">
        <h1>The Coins!({conins.length})</h1>
        <span className="sel-box">
          <select>
            { 
              loading ? <option>Loading...</option> : 
              conins.map((item, index) => {
                return (
                  <option key={index}>
                    {item.name}({item.symbol}) / ${item.quotes.USD.price}
                  </option>
                )
              })
            }
          </select>
        </span>
        
      </div>
    </>
  )
}

export default StudyCoinApi;