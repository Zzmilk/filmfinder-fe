import { Layout, Input, Space, Card, Row, Col, Rate } from "antd";
import styles from './app.module.css';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

function App() {
  const onSearch = value => console.log(value);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content className={`${styles.contentHeight} ${styles.pd}`}>

          <Row className={styles.mb16}>
            <Space>
              <Input.Search
                placeholder="input search text"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
              />
            </Space>
          </Row>

          <Row justify="space-between" style={{ marginBottom: '16px' }}>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
{/*                <span>
                  <Rate tooltips={desc} onChange={this.handleChange} value={value} />
                                  {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                </span>*/}
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
          </Row>

          <Row justify="space-between" style={{ marginBottom: '16px' }}>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
          </Row>


        </Content>
        <Footer style={{ textAlign: 'center' }}>FilmFinder ©2020 Created by Zzmilk</Footer>
      </Layout>
    </>
  );
}

export default App;
