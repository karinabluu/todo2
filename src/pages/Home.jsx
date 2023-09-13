import InputForm from '../component/InputForm';
import styled from 'styled-components';
import Todos from '../component/Todos';

export default function Home() {
  return (
    <Container>
      <Header>
        희정's Todo List<div>React</div>
      </Header>

      <InputForm />
      <Todos />
    </Container>
  );
}

const Header = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 60px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 20px;
  margin-bottom: 24px;
`;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
