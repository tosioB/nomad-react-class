import { useState } from "react";

function StudyTodoList_03() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const changeInput = (e) => {setTodo(e.target.value)}
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      return;
    }
    setTodo("");
    setTodos((prev) => {
      return [todo, ...prev]; // 앞에 추가
      // return [...prev, todo]; // 뒤에 추가
    });
  }

  return (
    <>
      <div className="container">
        <h1>My To Dos({todos.length})</h1>
        <form onSubmit={onSubmit}>
          <span className="inp-box">
            <input
              type="text"
              placeholder="Write your to do..."
              value={todo}
              onChange={changeInput}
            />
            <button type="submit" className="btn">Add To Do</button>
          </span>
        </form>

        <ul>
          {
            todos.map((item, index) => {
              return (
                <li key={index}>{item}</li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default StudyTodoList_03;