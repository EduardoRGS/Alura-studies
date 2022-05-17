import React from 'react';
import logo from './logo.svg';
import style from  './App.module.scss';
import Form from '../components/Form';
import List from '../components/List';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form></Form>
      <List></List>
    </div>
  );
}

export default App;
