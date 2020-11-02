import { Descriptions, Row, Col } from 'antd';


function Detail(props) {




  return <>

    <Row>
      <Col span={18}>
        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" style={{width: '200px', height: '200px'}}/>
      </Col>
      <Col span={4}>
        <Descriptions title="User Info" column={1} bordered>
          <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
          <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
          <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
          <Descriptions.Item label="Remark">empty</Descriptions.Item>
          <Descriptions.Item label="Address">
            No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
      </Col>
    </Row>
  </>
}


export default Detail;
