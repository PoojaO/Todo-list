import React, {useState} from 'react' /*remeber to but ,*/
import { threadId } from 'worker_threads'
import TodoForm from './TodoForm'

function TodoList() {
              const[todos, setTodos] = useState([])

              const addTodo = todo => {
                            if (!todo.text || /^\s*$/.test(todo.text)) {
                              return
                            }

              const completeTodo = id => {
                                          let updatedTodos = todos.map(todo => {
                                            if (todo.id === id) {
                                              todo.isComplete = !todo.isComplete;
                                            }
                                            return todo;
                                          });
                                          setTodos(updatedTodos);
                                        };

                                        return (
                                          <>
                                            <h1>What's the Plan for Today?</h1>
                                            <TodoForm onSubmit={addTodo} />
                                            <Todo
                                              todos={todos}
                                              completeTodo={completeTodo}
                                              removeTodo={removeTodo}
                                              updateTodo={updateTodo}
                                            />
                                          </>
                                        );
                                      };
                            return(
                            <div>
                            <h1>Whats the plan for today</h1>
                            <TodoForm/>
                            </div>
              
                            )

export default TodoList;