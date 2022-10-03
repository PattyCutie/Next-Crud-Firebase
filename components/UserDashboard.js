import React, { useEffect, useState } from "react";
import { useAuth, userInfo } from "../context/AuthContext";
import TodoCard from "./TodoCard";

export default function UserDashboard() {
  const { userInfo } = useAuth();
  const [createTodo, setCreateTodo] = useState(false);
  const [todo, setTodo] = useState("");

  const [todoList, setTodoList] = useState([]);

  console.log(todoList)

  useEffect(() => {
    if (!userInfo || Object.keys(userInfo).length === 0) {
      setCreateTodo(true);
    }
  }, [userInfo]);

  function handleCreateTodo() {
    if (!todo) {
      return;
    }
    const newKey =
      Object.keys(todoList).length === 0
        ? 1
        : Math.max(...Object.keys(todoList)) + 1;

    setTodoList({ ...todoList, [newKey]: todo });
    setTodo('')
  }

  return (
    <div
      className="flex flex-col w-full max-w-[65ch] gap-3 sm:gap-5
    mx-auto"
    >
      {createTodo && (
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
      )}
      {userInfo && (
      <>
      {Object.keys(todoList).map((todo, i) => {
        return (
          <TodoCard key={i}>
            {todoList[todo]}
          </TodoCard>
        )
      })}
      </>
      )}
      {!createTodo && (
        <button
          onClick={() => setCreateTodo(true)}
          className="text-lg text-white uppercase border-2 rounded-lg py-2
      duration-300 text-center hover:opacity-60 font-bold"
        >
          create todo
        </button>
      )}
    </div>
  );
}
