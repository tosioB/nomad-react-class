import '../assets/07-todoList.scss'
import { useEffect, useRef, useState } from "react";

function StudyTodoList_07() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);

  function handleForm(e){
    e.preventDefault();
  }

  function addTodos(){ // 할 일 추가
    if(inputRef.current.value === '') {
      alert('할 일을 입력하세요.');
    } else {
      const newTodo = inputRef.current.value;
      const newTodos = [...todos, {id: Number(new Date()), content: newTodo, complete: false}];
      setTodos(newTodos);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  }

  useEffect(() => { // 로컬스토리지의 할 일 목록 가져오기
    const localGetTodos = localStorage.getItem('myTodos');
    const parseTodos = JSON.parse(localGetTodos);
    setTodos(parseTodos);
  }, []);

  useEffect(() => { // 로컬스토리지에 할 일 목록 저장하기
    const jsonTodos = JSON.stringify(todos);
    localStorage.setItem('myTodos', jsonTodos);
  }, [todos]);

  return (
    <div className="container">
      <div className="todo-list-wrap">
        <form onSubmit={handleForm}>
          <span className='inp-box'>
            <input type='text' ref={inputRef} />
          </span>
          <button
            type="submit"
            className='btn'
            onClick={addTodos}
          >
            추가
          </button>
        </form>
        <ul className='todo-list'>
          {
            todos.map((todo) => {
              return(
                <Todo key={todo.id} todos={todos} setTodos={setTodos} todo={todo} />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default StudyTodoList_07;

function Todo({ todos, setTodos, todo }) {
  const editInputRef = useRef(null);
  const [editStatus, setEditStatus] = useState(false);

  function editTodos() { // 할 일 수정
    if (editInputRef.current.value === '') {
      alert('할 일을 입력하세요.')
    } else {
      setTodos((prev) => {
        return prev.map((e) => {
          return e.id === todo.id ? {...e, content: editInputRef.current.value} : e
        });
      });
      setEditStatus(false);
    }
  }

  function completeTodos() { // 할 일 완료상태 만들기
    setTodos((prev) => {
      return prev.map((e) => {
        return e.id === todo.id ? {...e, complete: !e.complete} : e
      })
    });
  }

  return (
    <li>
      <p className={todo.complete ? 'content complete' : 'content'}>
        {todo.content}
        {
          editStatus ?
          <span className='inp-box'>
            <input type="text" className="edit-input" ref={editInputRef} />
            <button type='button' className='btn small circle cancel-btn' onClick={() => {setEditStatus(false)}}>x</button>
          </span> :
          ''
        }
      </p>
      <div className="btn-box">
        <EditBtn editStatus={editStatus} setEditStatus={setEditStatus} editTodos={editTodos} />
        <DelBtn todos={todos} setTodos={setTodos} todo={todo} />
        <CompleteBtn completeTodos={completeTodos} />
      </div>
    </li>
  )
}

function DelBtn({ todos, setTodos, todo }) {
  return (
    <button
      type="button"
      className="btn del-btn"
      onClick={() => {
        const filterTodos = todos.filter((e) => {
          return e.id !== todo.id
        });
        setTodos(filterTodos);
      }}
    >
        삭제
    </button>
  )
}

function EditBtn({ editStatus, setEditStatus, editTodos }) {
  return (
    <>
      {
        editStatus ?
        <button
        type="button"
        className="btn edit-btn"
        onClick={editTodos}
      >
        수정완료
      </button> :
      <button
        type="button"
        className="btn edit-btn"
        onClick={() => {setEditStatus(true)}}
      >
        수정
      </button>
      }
    </>
  )
}

function CompleteBtn({ completeTodos }) {
  return (
    <button
      type="button"
      className="btn complete-btn"
      onClick={completeTodos}
    >
      완료
    </button>
  )
}