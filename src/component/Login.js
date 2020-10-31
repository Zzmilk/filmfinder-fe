import { Card, Form, Input,Checkbox, Button } from 'antd';
import styles from '../css/login.module.css';


const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 25 },
};
const tailLayout = {
  wrapperCol: {  span: 32 },
};

function Login() {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.bg}>
      <Card title="Login" bordered={false} style={{ width: 400 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit" className={styles.wp100}>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;