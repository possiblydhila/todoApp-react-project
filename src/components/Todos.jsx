import React from 'react'
import TodoItem from './TodoItem'

const Todos = ({ todos }) => {
    return (
      <div style={styles.container}>
        {todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />
        })}
      </div>
    )
  }
  
  const styles = {
    container: {
      width: '100%',
      margin: '0 auto',
    },
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