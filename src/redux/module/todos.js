import { v4 as uuid } from 'uuid';

const initialState = [
  {
    id: uuid(),
    title: '리액트',
    content: '리액트를 배워봅시다',
    isDone: false,
  },
  {
    id: uuid(),
    title: '리액트2',
    content: '리액트2를 배워봅시다',
    isDone: true,
  },
];

const TODO_ADD = 'todos/TODO_ADD';
const TODO_UPDATE = 'todos/TODO_UPDATE';
const TODO_REMOVE = 'todos/TODO_REMOVE';

export const addTodo = (payload) => {
  return { type: TODO_ADD, payload };
};

export const removeTodo = (payload) => {
  return { type: TODO_REMOVE, payload };
};

export const updateTodo = (payload) => {
  return { type: TODO_UPDATE, payload };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    // todo 추가할 때
    case TODO_ADD:
      // 기본 데이터에다가 새로 추가된 데이터(action.payload)를 추가
      state = [...state, action.payload];
      return state;

    // todo를 지울 때
    case TODO_REMOVE:
      // Todo 컴포넌트로부터 받은 id를 이용해서 id와 일치하지 않는 todo들을 반환
      // action.payload : Todo 컴포넌트로부터 받은 id
      return state.filter((item) => {
        return item.id !== action.payload;
      });

    // todo 상태를 변경할 때 완료 -> 취소, 취소 -> 완료
    case TODO_UPDATE:
      return state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });

    default:
      return state;
  }
};

export default todos;
