import TodoItem from "../TodoItem";

function TodosTable({ todos, onModal }) { 
    return (
        todos.length === 0 ?
        <p>No todos so far...</p> :
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => {
              return (<TodoItem key={todo.id}
                id={todo.id}
                name={todo.name}
                description={todo.description}
                isDone={todo.isDone}
                onModal={onModal}
              />);
            })}
          </tbody>
        </table>          
    );
}

export default TodosTable;