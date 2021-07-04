import React from 'react';
import Logo from './components/Logo';
import { PostList } from './components/PostList';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => (
  <div>
  <GlobalStyle />
  <Logo />
  <PostList />
  </div>
)

export default App;
