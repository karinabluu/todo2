import styled from 'styled-components';
import { removeTodo, updateTodo } from '../redux/module/todos';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  // 또 다른 페이지로 이동하기 위해 사용하는 react-router의 함수
  const navigate = useNavigate();

  return (
    <Container>
      <div onClick={() => navigate(`detail/${todo.id}`, { state: todo })}>
        상세보기
      </div>
      <h2>{todo.title}</h2>
      <p>{todo.content}</p>
      <button className="redBtn" onClick={() => dispatch(removeTodo(todo.id))}>
        삭제하기
      </button>
      <button
        className="greenBtn"
        onClick={() => dispatch(updateTodo(todo.id))}
      >
        {todo.isDone ? '취소' : '완료'}
      </button>
    </Container>
  );
}

const Container = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px;

  div {
    color: blue;
  }

  .redBtn {
    border: 1px solid red;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
    margin-right: 10px;
  }

  .greenBtn {
    border: 1px solid green;
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
