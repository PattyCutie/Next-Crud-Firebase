import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TodoCard from "../components/TodoCard";

import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "../firebase";
import UseFetchTodoList from "../hooks/fetchTodoList";

export default function UserDashboard() {
  const { userInfo, currentUser } = useAuth();
  //const [createTodo, setCreateTodo] = useState(false);
  const [todo, setTodo] = useState("");

  const [update, setUpdate] = useState(null)
  const [updatedValue, setUpdatedValue ] = useState('')
  
  //const [todoList, setTodoList] = useState([]);
  //console.log(todoList);
  // fetch todo list (hooks)
  const { todos, setTodos, loading, error } = UseFetchTodoList()
  //console.log(todos)

  // useEffect(() => {
  //   if (!userInfo || Object.keys(userInfo).length === 0) {
  //     setCreateTodo(true);
  //   }
  // }, [userInfo]);

  //create Todo
  async function handleCreateTodo() {
    if (!todo) {
      return;
    }
    const newKey = Object.keys(todos).length === 0
        ? 1
        : Math.max(...Object.keys(todos)) + 1;

    setTodos({ ...todos, [newKey]: todo });
    
    const useRef = doc(db, "users", currentUser.uid);
    await setDoc(useRef, {
      'todos': {
          [newKey]: todo,
        },
      },
      { merge: true } 
    );
    setTodo("");
  }

// update existing Todo 
  async function handleUpdate() {
    if (!updatedValue) {
      return
    }
    const newKey = update
    setTodos({...todos, [newKey]: updatedValue })
    const useRef = doc(db, 'users', currentUser.uid)
    await setDoc(useRef, {
      'todos': {
        [newKey] : updatedValue
      }
    }, {merge: true})

    setUpdate(null)
    setUpdatedValue('')
  }

//updating todo field  
function handleAddUpdated(todoKey) {
  return () => {
    console.log(todos[todoKey])
    console.log('this is adding updated todo task')
    setUpdate(todoKey)
    setUpdatedValue(todos[todoKey])
  }
}

// delete existing todo
function handleDelete(todoKey) {
  return async () => {
    const temObj = {...todos}
    delete temObj[todoKey]

    setTodos(temObj)
    const userRef = doc(db, 'users', currentUser.uid)
    await setDoc(userRef, {
      'todos' : {
        [todoKey] : deleteField()
      }
    }, {merge: true})
  }
}

  return (
    <div
      className="flex flex-col flex-1 w-full max-w-[65ch] gap-3 sm:gap-5
    mx-auto"
    >
     
        <div className="flex items-stretch">
          <input
            type="text"
            placeholder="Enter todo"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="rounded-l-lg outline-none p-3 text-base sm:text-lg 
          text-stone-500 flex-1"
          />
          <button
            onClick={handleCreateTodo}
            className="w-fit px-4 sm:px-6 py-2 sm:py-3 
          rounded-r-lg uppercase border-l-2 text-stone-100 font-bold
          border-stone-600 bg-stone-400 duration-300 hover:opacity-60"
          >
            Create
          </button>
        </div>
      

      
      {(userInfo && !loading) && (
        <>
          {Object.keys(todos).map((todo, i) => {

            return (
            <TodoCard 
            key={i}
            update={update}
            
            handleUpdate={handleUpdate}

            todoKey={todo}
            handleAddUpdated={handleAddUpdated}

            updatedValue={updatedValue}
            setUpdatedValue={setUpdatedValue}

            handleDelete={handleDelete}
            >
              {todos[todo]}
            </TodoCard>
              )
          })}
        </>
      )}
      {(userInfo && loading ) && (
        <div className="flex flex-1 gap-5 items-center justify-center">
          <div className="bg-white w-8 h-8 rounded-full animate-bounce" />
          <div className="bg-white w-8 h-8 rounded-full animate-bounce" />
          <div className="bg-white w-8 h-8 rounded-full animate-bounce" />
        </div>)}
        
      {/* {!createTodo && (
        <button
          onClick={() => setCreateTodo(true)}
          className="text-lg text-white uppercase border-2 rounded-lg py-2
      duration-300 text-center hover:opacity-60 font-bold"
        >
          create todo
        </button>
      )} */}
    </div>
  );
}
