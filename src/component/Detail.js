import React from 'react';
import { Descriptions, Row, Col, Comment, Button, Avatar, Card, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styles from "../app.module.css";

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <Input.TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

function Detail() {
  return <>
    <div style={{ width: '1024px', margin: '0 auto' }}>
      <Row>
        <Col span={5} flex>
          <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt="" style={{ width: '100%', height: '100%' }}/>
        </Col>
        <Col span={19}>
          <Descriptions title="File Detail" column={1} bordered>
            <Descriptions.Item label="Film Name">The Dark Knight</Descriptions.Item>
            <Descriptions.Item label="Director">Christopher Nolan</Descriptions.Item>
            <Descriptions.Item label="Genre">Action Crime, Drama</Descriptions.Item>
            <Descriptions.Item label="Cast">Christion Bale, Heath Ledger, Aaron Eckhart</Descriptions.Item>
            <Descriptions.Item label="Average Rating">4.6</Descriptions.Item>
            <Descriptions.Item label="">
              <Button type="primary">Add to Wishlist</Button>
            </Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <h1>Description</h1>
        </Col>
        <Col>
          <p>
            Set witthin a year after the events of Batman Beqins (2005] Bgtman, L ieutenant
            James Gordon, and new District Attorney Harvey Dent successfully beain to
            round up the criminals that plaque Gotham City, until a mysterious chd sddistic
            criminal" mastermind known only as‘The Joker" oppears in Gotham, creatinq a new
            wave of chaos. Batman's struqgle oqpinst The Joker becomes deeply personal.
            Forcinq him to "confront ever Ything'he believes' and improve his technidlogy to
            stop him A love trionale develobs between Bruce Wavre, Dent, and Rachef
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <h1>Reviews</h1>
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
        <Col>
          <Comment
            author={<a>Han Solo</a>}
            avatar={
              <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
            }
            content={
              <p>
                We supply a series of design principles, practical patterns and high quality design
                resources (Sketch and Axure), to help people create their product prototypes beautifully
                and efficiently.
              </p>
            }
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Comment
            avatar={
              <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
              />
            }
            content={
              <Editor
                onChange={() => {}}
                onSubmit={() => {}}
                submitting={() => {}}
                value={{}}
              />
            }
          />
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <h1>Similar Movies</h1>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginBottom: '16px' }}>
        <Col>
          <Card
            hoverable
            className={styles.wd}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            className={styles.wd}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
          </Card>
        </Col>
        <Col>
          <Card
            hoverable
            className={styles.wd}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
          </Card>
        </Col>
      </Row>
    </div>
  </>
}


export default Detail;
