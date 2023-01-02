import React from 'react';
const list = [
  { id: 1, name: 'google', color: 'red' },
  { id: 2, name: 'tencent', color: 'green' },
  { id: 1, name: 'apple', color: 'yellow' },
];
// 函数组件
function Hello() {
  const clickHandle = () => {
    console.log('事件触发');
  };
  return <h1 onClick={clickHandle}>hello </h1>;
}
// 类组件
class HelloComponent extends React.Component {
  clickHandle() {
    console.log('类组件事件触发');
  }
  render() {
    return <h2 onClick={this.clickHandle}>hello </h2>;
  }
}

export default function App() {
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
