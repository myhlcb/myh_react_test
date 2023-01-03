import { useNavigate } from 'react-router-dom';
export default function Login() {
    //登录跳转函数
  const navigate = useNavigate();
  const useSearch = false
  return (
    <div>
      <button onClick={()=>navigate(useSearch?'/about?id=1001':'/about/1001', { replace: true })}>
        跳转回about
      </button>
    </div>
  );
}
