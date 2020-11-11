import { Button, Layout, message, Row, Space, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import api from "../api";

const { Header } = Layout;

function logout(props) {
  api.get('/logout/')
    .then(({ data }) => {
      if (data.success) {
        localStorage.clear();
        props.history.push('/login');
      } else {
        message.error(data.msg);
      }
    })
    .catch((e) => {
      console.log(e);
    })
}

function Cheader({ props }) {

  return <Header>
    <Row justify="end">
      <Space>
        <Button type="link" onClick={() => props.history.push('/login')}>Login</Button>
        <Button type="link" onClick={() => logout(props)}>Logout</Button>
        <a onClick={ () => props.history.push('/myPage')}><Avatar  style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /></a>
        <span style={{ color: 'white' }}>{JSON.parse(localStorage.getItem('user')).username}</span>
      </Space>
    </Row>
  </Header>
}

export default Cheader
