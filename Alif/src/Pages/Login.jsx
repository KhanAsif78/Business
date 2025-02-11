import styled from "styled-components";
import Button from "../component/Button";

const Login = () => {
  return (
    <Container>
      <Form>
        <h2>Login</h2>
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d0d0d;
`;

const Form = styled.div`
  background: #1a1a1a;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(156, 0, 255, 0.3);

  h2 {
    color: white;
    margin-bottom: 20px;
  }

  input {
    width: 100%;
    margin: 10px 0;
    padding: 12px;
  }

  button {
    width: 100%;
  }
`;
