import React, { useEffect, useState } from 'react';
import { Row, Col, Card, message } from 'antd';
import styles from "../app.module.css";
import api from "../api";
import Header from './Cheader';

function MyPage(props) {

  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    api
      .get('/my_page/', {})
      .then(({ data }) => {
        if (data.success) {
          setUserInfo(data)
        } else {
          message.error(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  return <>
    <Header {...{ props }}></Header>
    <div style={{ width: '1024px', margin: '0 auto', marginTop: '20px' }}>
      <h1>{ userInfo.username }</h1>
      <h2>Reviews</h2>
      <div style={{height: '400px', overflowY: 'auto'}}>
        {
          (userInfo.top_reviews || []).map(({ movie_name, rating_number, review_comment }) => {
            return <div key={movie_name}>
              <Row>
                <Col span={8}><b>{ movie_name }</b></Col>
                <Col span={1} offset={15}><b>{ rating_number }</b></Col>
              </Row>
              <p>{ review_comment }</p>
            </div>
          })
        }
      </div>


      <Row>
        <Col span={8}><h1>WatchList</h1></Col>
        {/*<Col span={4} offset={12}><b>view & edit watchList</b></Col>*/}
      </Row>

      <Row justify="space-around" style={{marginBottom: '20px', width: '1024px', overflowX: 'auto'}}>
        {
          (userInfo.wishlist || []).map(({ name, poster = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png' }) => {
            return <Col key={name}>
              <Card
                hoverable
                className={styles.wd}
                cover={<img alt="example" src={poster}/>}
              >
                <Card.Meta title={name} description=""/>
              </Card>
            </Col>;
          })
        }
      </Row>
    </div>
  </>
}


export default MyPage;
