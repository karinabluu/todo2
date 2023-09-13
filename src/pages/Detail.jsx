import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

export default function Detail() {
  // navigate(-1) : 바로 이전 페이지로 이동
  const navigate = useNavigate();

  // useLocation은 Todo.jsx에서 useNavigate 함수를 통해 todo라는 데이터를 전달했는데
  // 그 todo 라는 데이터를 보기위해서 location.state를 사용함
  // {hash: "", key: "", pathname.."", state: {...}}
  const location = useLocation();
  console.log(location);
  const todo = location.state;

  // 아이디가 길어서 5자리까지 나오게 잘라주심
  const id = todo.id.slice(0, 3);

  return (
    <Container>
      <TodoContainer>
        <Header>
          <div>ID : {id}</div>
          <span onClick={() => navigate(-1)}>이전으로</span>
        </Header>
        <Title>{todo.title}</Title>
        <Content>{todo.content}</Content>
      </TodoContainer>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  height: 80px;
  -webkit-box-pack: justify;
  justify-content: space-between;
  padding: 0px 24px;
  -webkit-box-align: center;
  align-items: center;
  /* border-bottom: 1px solid gray; */

  div {
    font-weight: 500;
    /* padding: 10px; */
    height: 10px;
  }

  span {
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;

const TodoContainer = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Title = styled.div`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-left: 20px;
`;

const Content = styled.div`
  background-color: white;
  height: calc(50vh / 2);
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 10px;
  margin-left: 10px;
  display: black;
`;
