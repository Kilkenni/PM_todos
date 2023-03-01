const TodoItem = ({ id, name, description, isDone, onModal }) => {
  return (
    <tr onClick={() => onModal(id)}>
      <td><span>{id}</span></td>
      <td><span>{name}</span></td>
      <td><span>{description}</span></td>
      <td>{isDone? "Done" : "Not done"}</td>
    </tr>
    );
}

export default TodoItem;