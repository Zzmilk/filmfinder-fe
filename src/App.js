import { Layout, Input, Space, Card, Row, Col, Rate, Pagination  } from "antd";
import { useState, useMemo } from 'react';
import styles from './app.module.css';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

function App() {
  const onSearch = value => console.log(value);
  const desc = useMemo(() => ['terrible', 'bad', 'normal', 'good', 'wonderful'], []);
  const [value, setValue] = useState(4);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content className={`${styles.contentHeight} ${styles.pd}`}>

          <Row className={styles.mb16} justify="center">
            <Space>
              <Input.Search
                placeholder="input movie name, description, or genre..."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                style={{width: '600px'}}
              />
            </Space>
          </Row>

          <Row justify="space-between" style={{ marginBottom: '16px' }}>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
          </Row>
          <Row justify="space-between" style={{ marginBottom: '16px' }}>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
            <Col>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
              >
                <div style={{marginBottom: '8px' }}>
                  <span>
                  <Rate tooltips={desc} onChange={setValue} value={value} />
                    {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                  </span>
                </div>

                <Meta title="Europe Street beat" description="www.instagram.com"/>
              </Card>
            </Col>
          </Row>

          <Row justify="end">
            <Pagination defaultCurrent={6} total={500}></Pagination>
          </Row>

        </Content>
        <Footer style={{ textAlign: 'center' }}>FilmFinder ©2020 Created by Zzmilk</Footer>
      </Layout>
    </>
  );
}

export default App;
