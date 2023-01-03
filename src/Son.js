import React from 'react';

 export function Son1(props) {
  return <div>Son1子组件:{props.msg}</div>;
}
export class Son2 extends React.Component {
  render() {
    return <button onClick={()=>{
        return this.props.sendMsg('son2 send msg')
    }}>Son2子组件</button>;
  }
}
