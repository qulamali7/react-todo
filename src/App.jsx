import "./index.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { useState } from "react";

function App() {


  const [todo, settodo] = useState([])
  let [inputvalue, setinputvalue] = useState("")
  const arr = [...todo]
  console.log(arr);
  const submit = (e) => {
    e.preventDefault()
    if (todo !== "") {
      settodo([...arr, inputvalue]);
      setinputvalue("")
    }
  };
  const close = (e) => {
    e.preventDefault()
    settodo(false)
  }

  return (
    <div className="todo">
      <form action="" onSubmit={submit}>
        <input type="text" placeholder="Add task" onChange={(e) => setinputvalue(e.target.value)} value={inputvalue} />
        <button>Add</button>
      </form>
      {todo &&
        <ul>
          {arr.map(x =>
            <React.Fragment key={x}>
              <li>{x}<FontAwesomeIcon icon={faCircleXmark} onClick={close} className="icon" /></li>
            </React.Fragment>
          )}
        </ul>


      }

    </div>
  );
}

export default App;
