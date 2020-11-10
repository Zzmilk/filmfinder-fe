import React, { useEffect } from 'react';
import { Row, Col, Card, message } from 'antd';
import styles from "../app.module.css";
import api from "../api";


function MyPage(props) {

  useEffect(() => {
    api
      .get('/my_page/', {})
      .then(({ data }) => {
        if (data.success) {
          console.log(data);
        } else {
          message.error(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  return <>
    <div style={{ width: '1024px', margin: '0 auto', marginTop: '20px' }}>
      <h1>Jonsnow1234</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
        probare, quae sunt a te dicta? Refert tamen, quo modo.
      </p>

      <h2>Reviews</h2>
      <div style={{height: '400px', overflowY: 'auto'}}>
        <Row>
          <Col span={8}><b>Tenet</b></Col>
          <Col span={1} offset={15}><b>4.0</b></Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>

        <Row>
          <Col span={8}><b>Tenet</b></Col>
          <Col span={1} offset={15}><b>4.0</b></Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>

        <Row>
          <Col span={8}><b>Tenet</b></Col>
          <Col span={1} offset={15}><b>4.0</b></Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>

        <Row>
          <Col span={8}><b>Tenet</b></Col>
          <Col span={1} offset={15}><b>4.0</b></Col>
        </Row>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
        </p>
      </div>


      <Row>
        <Col span={8}><h1>WatchList</h1></Col>
        <Col span={4} offset={12}><b>view & edit watchList</b></Col>
      </Row>

      <Row justify="space-around">
        <Col span={7}>
          <Card
            hoverable
            className={styles.wd}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
          </Card>
        </Col>
        <Col span={7}>
          <Card
            hoverable
            className={styles.wd}
            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
          >
            <Card.Meta title="Europe Street beat" description="www.instagram.com"/>
          </Card>
        </Col>
        <Col span={7}>
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


export default MyPage;
