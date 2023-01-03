import React from 'react';
const list = [
  { id: 1, name: 'google', color: 'red' },
  { id: 2, name: 'Tencent', color: 'green' },
  { id: 1, name: 'apple', color: 'yellow' },
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
  };
  clickHandle = () => {
    console.log('类组件事件触发');
    // 不可以state直接赋值，要使用setState
    console.log(this.state);
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return <h2 onClick={this.clickHandle}>hello {this.state.count} </h2>;
  }
}

export default function About() {
  return (
    <>
      <ul>
        {list.map((l) => (
          <li style={{ color: l.color }}>{l.name}</li>
        ))}
      </ul>
      <Hello />
      <HelloComponent />
    </>
  );
}
