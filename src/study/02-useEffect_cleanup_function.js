import { useEffect, useState } from 'react';

function StudyUseEffectCleanUpFunction() {
  const [showing, setShowing] = useState(false);
  const showingOnClick = () => {setShowing((prev) => !prev)}

  return (
    <>
      <div className='container'>
        {showing ? <Hello /> : null}
        <button type='button' className='btn' onClick={showingOnClick}>{showing ? 'Hide' : 'Show'}</button>
      </div>
    </>
  );
}

export default StudyUseEffectCleanUpFunction;

function Hello() {
  useEffect(() => { // 컴포넌트가 생성 될 때 실행
    console.log("컴포넌트가 생성 될 때 실행");
    return () => { // Cleanup function
      console.log("컴포넌트가 사라질 때 실행");
    }
  }, []);
  return <h1>Hello</h1>
}