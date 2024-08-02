import { useEffect, useState } from 'react';

function StudyUseEffect() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");

  const counterOnClick = () => setCounter((prev) => prev + 1);
  const inputOnChange = (event) => setKeyword(event.target.value);

  useEffect(() => { // 화면이 처음에 로드 될 때 실행
    console.log("화면이 처음에 로드 될 때 실행");
  }, []);

  useEffect(() => { // counter의 상태가 변할 때 실행
    console.log("counter의 상태가 변할 때 실행");
  }, [counter]);

  useEffect(() => { // keyword의 상태가 변할 때 실행
    console.log("keyword의 상태가 변할 때 실행");
  }, [keyword]);

  useEffect(() => { // keyword와 counter의 상태가 변할 때 실행
    console.log("keyword와 counter의 상태가 변할 때 실행");
  }, [keyword, counter]);

  return (
    <>
      <div className='container'>
      <span className='inp-box'>
          <input type='text' placeholder='Search here...' value={keyword} onChange={inputOnChange} />
        </span>

        <div>
          <h1>{counter}</h1>
          <button type='button' className='btn' onClick={counterOnClick}>click me</button>
        </div>
      </div>
    </>
  );
}

export default StudyUseEffect;