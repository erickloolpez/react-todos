import React, { Component } from 'react';
import { TodoContextProvider } from '../Context'
import './index.css'
import { Layout } from '../Components/Layout'
import { TodoTitle } from '../Components/TodoTitle'
import { TodoInput } from '../Components/TodoInput'
import { TodoList } from '../Components/TodoList'
import { TodoButton } from '../Components/TodoButton'


class App extends Component {
  render() {
    return (
      <TodoContextProvider>
        <Layout>
          <TodoTitle />
          <TodoInput />
          <TodoList/>
          <TodoButton />
        </Layout>
      </TodoContextProvider>
    );
  }
}

export default App;
