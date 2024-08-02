import useFetch from '../hooks/06-custom_hook_useFetch';  // useFetch 커스텀 훅을 가져옵니다.
import '../assets/06-custom_hook_useFetch.css';

const dogUrl = 'https://dog.ceo/api/breeds/image/random';  // 강아지 사진을 가져올 API 주소
const catUrl = 'https://api.thecatapi.com/v1/images/search';  // 고양이 사진을 가져올 API 주소

function StudyCustomHookFetch() {
  // 강아지 데이터 fetch custom Hooks
  const {
    data: dogData, // 강아지 데이터를 담는 변수
    loading: dogLoading, // 강아지 데이터 로딩 상태를 나타내는 변수
    fetchData: dogFetchData, // 강아지 데이터를 가져오는 함수
  } = useFetch(dogUrl); // useFetch 훅을 사용하여 강아지 데이터를 가져옵니다.

  // 고양이 데이터 fetch custom Hooks
  const {
    data: catData, // 고양이 데이터를 담는 변수
    loading: catLoading, // 고양이 데이터 로딩 상태를 나타내는 변수
    fetchData: catFetchData, // 고양이 데이터를 가져오는 함수
  } = useFetch(catUrl); // useFetch 훅을 사용하여 고양이 데이터를 가져옵니다.

  return (
    <>
      <div className='container'>
        <div className='animal-gallery'>
          <div className='title-box'>
            <h1> Animal gallery</h1>
            <p>
              애니멀 갤러리에 오신 여러분 환영합니다.<br />
              각 버튼을 클릭하여 사진을 업데이트 해보세요.
            </p>
          </div>
          <div className='animal-box'>
            <div className="dog-box">
              <div className='text-box'>
                <h2> 🐶 Dog Zone</h2>
                <button 
                  type='button'
                  className='btn'
                  onClick={() => dogFetchData(dogUrl)}
                >
                  new Dog
                </button>
              </div>
              <div className='img-box'>
                {
                  dogLoading ? (
                    <p className="loading">Loading . . .</p>  // 데이터 로딩 중 표시할 메시지
                  ) : (
                    dogData && <img src={dogData.message} alt="dog" />  // 강아지 이미지 표시
                  )
                }
              </div>
            </div>
            <div className="cat-box">
              <div className='text-box'>
                <h2>🐱Cat Zone</h2>
                <button
                  type='button'
                  className='btn'
                  onClick={() => catFetchData(catUrl)}
                >
                  new Cat
                </button>
              </div>
              <div className='img-box'>
                {
                  catLoading ? (
                    <p className="loading">Loading . . .</p>  // 데이터 로딩 중 표시할 메시지
                  ) : (
                    catData && <img src={catData[0].url} alt="cat" />  // 고양이 이미지 표시
                  )
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudyCustomHookFetch;
