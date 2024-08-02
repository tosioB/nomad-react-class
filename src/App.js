import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

// page
import StudyUseEffect from './study/01-useEffect'; // 01
import StudyUseEffectCleanUpFunction from './study/02-useEffect_cleanup_function'; // 02
import StudyTodoList_03 from './study/03-todoList'; // 03
import StudyCoinApi from './study/04-coin_api'; // 04
import StudyMovieApi from './study/05-movie_api'; // 05
import StudyCustomHookFetch from './study/06-custom_hook_useFetch'; // 98

// components folder

// routes folder
import StudyMovieApiDetail from './routes/05-Detail'; // 05-detail

function App() {
  const [lnbShow, setLnbShow] = useState(false);
  const handleLnbToggle = () => {
    setLnbShow((prev) => !prev);
  }

  return (
    <>
      <div className='lnb'>
        <div className={lnbShow ? 'lnb-list active' : 'lnb-list'}>
          <Link to='/' title='Main'>Main</Link>
          {/* <Link to='/99-컴포넌트명(url)' title='99-파일명'>99-파일명</Link> */}
          <Link to='/01-StudyUseEffect' title='01-useEffect'>01-useEffect</Link>
          <Link to='/02-StudyUseEffectCleanUpFunction' title='02-useEffect_cleanup_function'>02-useEffect_cleanup_function</Link>
          <Link to='/03-StudyTodoList_03' title='03-todoList'>03-todoList</Link>
          <Link to='/04-StudyCoinApi' title='04-coin_api'>04-coin_api</Link>
          <Link to='/05-StudyMovieApi' title='05-movie_api'>05-movie_api</Link>
          <Link to='/06-StudyCustomHookFetch' title='06-custom_hook_useFetch'>06-custom_hook_useFetch</Link>
        </div>
        <LnbBtn lnbShow={lnbShow} handleLnbToggle={handleLnbToggle} />
      </div>

      {/* Routes */}
      <Routes>
        <Route path='/' element={<div className='container'>메인</div>} />
        {/* <Route path='/99-컴포넌트명(url)' element={<컴포넌트명 />} /> */}
        <Route path='/01-StudyUseEffect' element={<StudyUseEffect />} />
        <Route path='/02-StudyUseEffectCleanUpFunction' element={<StudyUseEffectCleanUpFunction />} />
        <Route path='/03-StudyTodoList_03' element={<StudyTodoList_03 />} />
        <Route path='/04-StudyCoinApi' element={<StudyCoinApi />} />
        <Route path='/05-StudyMovieApi' element={<StudyMovieApi />} />
        <Route path='/06-StudyCustomHookFetch' element={<StudyCustomHookFetch />} />

        {/* routes folder */}
        <Route path='/05-StudyMovieApi/detail/:id' element={<StudyMovieApiDetail />} />
      </Routes>
    </>
  )
}

export default App;

function LnbBtn({ lnbShow, handleLnbToggle }) {
  return (
    <button
      type='button'
      className='lnb-btn'
      onClick={() => handleLnbToggle()}
    >
      {lnbShow ? '닫기' : '열기'}
    </button>
  )
}