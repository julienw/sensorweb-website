import * as React from 'react';
const { default: styled } = require<any>('styled-components');

import FacebookAuthProvider from '../auth/facebook';

const Button = styled.button`
  color: white;
  background-color: #3b5998;
`;

interface Props {
}

export default class FacebookLoginButton extends React.Component<Props, undefined> {
  render() {
    return <Button onClick={() => new FacebookAuthProvider().startLoginProcess()}>
      Login using Facebook
    </Button>;
  }
}
