import React, { useContext } from 'react';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from './common';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import { login } from '../../../../../state/actions';
import { axioswithAuth } from '../../../../../utils/axiosWithAuth';
import { useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const initialState = {
    username: '',
    email: '',
    password: '',
  };
  const Login = props => {
    const { push } = useHistory();
    const [login, setLogin] = useState(initialState);

    const handleChange = e => {
      e.preventDefault();
      setLogin({
        ...login,
        [e.target.name]: e.target.value,
      });
    };
  };

  const userLogin = e => {
    e.preventDefault();
    // props.loginAction(login)
    axiosWithAuth()
      .post('/login', login)
      .then(res => {
        localStorage.setItem('token', JSON.stringify(res.data.token));
        localStorage.setItem('userID', res.data.user.id);
        console.log({ res });
        props.loginAction(res);
        push('/teacher/edit/:id');
      })
      .catch(err => {
        console.log(err);
        alert(
          'Please enter a valid username and password, or register a new account.'
        );
      });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          name="username"
          onChange={handleChange}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={userLogin}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
const mapStateToProps = state => {
  console.log(state.user);
  return {
    username: state.user.username,
    isFetching: state.user.isFetching,
    error: state.user.error,
  };
};

export default withRouter(
  connect(mapStateToProps, { loginAction, registerAction })(Login)
);
