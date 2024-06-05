import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
    return (
      <div>
        {todos.map((todo) => {
        //   return <p key={todo.id}>{todo.title}</p>
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    )
  }
// const Todos = (props) => {
//     return (
//       <div>
//         {props.todos.map((todo) => {
//           return <p key={todo.id}>{todo.title}</p>
//         })}
//       </div>
//     )
//   }

export default Todos