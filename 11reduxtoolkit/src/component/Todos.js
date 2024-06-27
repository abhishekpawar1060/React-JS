import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";

function Todos(){

    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()
    
    console.log(todos);
    return(
        <>
            <div>Todos</div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.text}
            

                <button
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"

                onClick={() => dispatch(removeTodo(todo.id))}
                >delete</button>
            </div>    

            ))}
        </>

    )
}

export default Todos