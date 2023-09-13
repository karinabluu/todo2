import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 as uuid } from 'uuid';
import { addTodo } from '../redux/module/todos';

export default function InputForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  // console.log('title: ', title);
  // console.log('content : ', content);

  const handleTitleChange = (event) => {
    // console.log('onChange 동작중..');
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    // console.log('onChange 동작중..');
    setContent(event.target.value);
  };

  const handleClick = () => {
    // todo : 리덕스로 보낼 데이터
    const todo = { id: uuid(), title, content, isDone: false };
    // console.log('클릭 동작 중..');

    // dispatch를 이용해 todo(데이터)를 리덕스로 보낸다.
    dispatch(addTodo(todo));

    // 제목과 내용의 input에 있는 글자들을 초기화한다.
    setTitle('');
    setContent('');
  };

  return (
    <Container>
      <div>
        <span>제목</span>
        <input value={title} onChange={handleTitleChange} />
        <span>내용</span>
        <input value={content} onChange={handleContentChange} />
      </div>
      <button onClick={handleClick}>추가하기</button>
    </Container>
  );
}

// 1. InputForm 컴포넌트 대략적으로 만들기
// 2. styled component로 꾸며보고
// 3. input에 있는 '제목'과 '내용' 추가 하는 기능

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify; */
  /* justify-content: space-between; */

  .cvohld {
    font-size: 16px;
    font-weight: 700;
  }

  label {
    cursor: default;
  }

  span {
    margin-right: 20px;
    font-weight: bold;
  }

  input {
    margin-right: 20px;
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0px 12px;
  }

  button {
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: rgb(255, 255, 255);
    font-weight: 700;
    /* margin-left: 325px; */
  }
`;
