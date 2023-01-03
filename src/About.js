import React from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { Son1, Son2 } from './Son';
const list = [
  { id: 1, name: 'google', color: 'red' },
  { id: 2, name: 'Tencent', color: 'green' },
  { id: 3, name: 'apple', color: 'yellow' },
];
// 函数组件
function Hello() {
  const clickHandle = (e, msg) => {
    //阻止默认行为
    e.preventDefault();
    console.log('事件触发', e, msg);
  };
  return <h1 onClick={(e) => clickHandle(e, 'this is msg')}>hello </h1>;
}
// 类组件
class HelloComponent extends React.Component {
  // state 固定写死
  state = {
    count: 0,
    message: '父组件msg',
  };
  getSonMsg = (msg) => {
    console.log(`get son msg:${msg}`);
    this.setState({ message: msg });
  };
  clickHandle = () => {
    console.log('类组件事件触发');
    // 不可以state直接赋值，要使用setState
    console.log(this.state);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2 onClick={this.clickHandle}>hello {this.state.count}</h2>
        <Son1 msg={this.state.message} newMsg={this.state.message} />
        <Son2 sendMsg={this.getSonMsg} />
      </div>
    );
  }
}

export default function About() {
  const [searchParams] = useSearchParams();
  const params = useParams();
  console.log(searchParams, 111, params, searchParams.get('id'), params.id);
  return (
    <>
      <ul>
        {list.map((l) => (
          <li key={l.id} style={{ color: l.color }}>
            {l.name}
          </li>
        ))}
      </ul>
      <Hello />
      <HelloComponent />
    </>
  );
}
