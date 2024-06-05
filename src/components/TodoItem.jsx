import React, { useState } from 'react';
import '../App.css';
// Definisikan function toggleCompleted di sini
const toggleCompleted = () => {
    console.log('toggleCompleted function is called')
  }

  const deleteTodo = () => {
    console.log('deleteTodo function is called')
  }
// Menerima function toggleCompleted sebagai sebuah prop
const TodoItem = ({ todo, toggleCompleted, deleteTodo }) => {
    const getTodoTitleStyle = () => {
      if (todo.completed === true) {
        return { textDecoration: 'line-through' }
      } else {
        return { textDecoration: 'none' }
      }
    
    }

    

  
    return (
        <div style={styles.todoItem}>
          <input
            type="checkbox"
            style={styles.checkbox}
            //  Memberikan id dari todo sebagai argument
            onChange={() => toggleCompleted(todo.id)}
          />
          <p style={getTodoTitleStyle()}>{todo.title}</p>
          <button 
            style={styles.button} 
            onClick={() => deleteTodo(todo.id)}>X</button>
        </div>
      )
  }
  
  const styles = {
    todoItem: {
      borderTop: '1px solid #f4f4f4',
      borderBottom: '1px solid #f4f4f4',
      fontSize: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
    },
    checkbox: {
      height: '18px',
      width: '18px',
      marginRight: '20px'
    },
    button: {
      backgroundColor: '#BB0000',
      color: '#fff',
      height: '30px',
      width: '30px',
      borderRadius: '100%',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      marginLeft: '20px'
  },
  }

export default TodoItem