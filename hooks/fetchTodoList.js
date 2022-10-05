import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

export default function UseFetchTodoList() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    async function fetchTodoList() {
      try {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            //console.log(docSnap.data())
            setTodos(docSnap.data().todos)
        } else {
          setTodos({})
        }
        
      } catch (err) {
        setError('Fail to load todos')
      } finally {
        setLoading(false)
      }
    }
    fetchTodoList()
  }, []);
  return { loading, error, todos, setTodos};
}
