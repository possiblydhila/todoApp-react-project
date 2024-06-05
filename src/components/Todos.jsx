import React from 'react'
import TodoItem from './TodoItem'

// Menerima function toggleCompleted sebagai sebuah prop
const Todos = ({ todos, toggleCompleted, deleteTodo }) => {
    return (
      <div style={styles.container}>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              // Teruskan function toggleCompleted ke component TodoItem
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </div>
    )
  }
  
  const styles = {
    container: {
      width: '40%',
      margin: '0 auto',
    //   padding: '0px 100px 0px 100px'
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