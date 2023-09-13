import { UseSelector, useSelector } from 'react-redux';
import Todo from './Todo';

export default function Todos() {
  // 리덕스에서 todo 데이터 불러오기
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <h2>Working.. 🔥</h2>
      {todos
        .filter((value) => !value.isDone)
        .map((value) => (
          <Todo key={value.id} todo={value} />
        ))}
      <h2>Done..! 🎉</h2>
      {todos
        .filter((value) => value.isDone)
        .map((value) => (
          <Todo key={value.id} todo={value} />
        ))}
    </div>
  );
}
