import { Layout, Input, Space, Card, Row, Col, Rate, Pagination, message } from "antd";
import { useState, useMemo } from 'react';
import styles from './app.module.css';
import { useEffect } from "react";
import api from './api';
import './css/common.css';

const { Header, Footer, Content } = Layout;
const { Meta } = Card;

function getSlicedArr(arr, len = 5) {
  let movies = [];

  while (arr.length >= len) {
    movies.push(arr.slice(0, len));
    arr = arr.slice(len);
  }

  if (arr.length !== 0) {
    movies.push(arr);
  }

  console.log(movies);
  return movies
}

function genRows(allRowData, desc, setValue, value) {
  return allRowData.map((singleRow) => {
    return <>
      <Row key={singleRow} justify="space-between" style={{ marginBottom: '16px' }} className="main-list">
        {
          singleRow.map(({ name, poster, mid }) => {
            return (
              <Col key={mid}>
                <Card
                  hoverable
                  className={styles.wd}
                  cover={<img alt="example" src={poster} />}
                >
                  <div style={{marginBottom: '8px' }}>
                    <span><Rate tooltips={desc} onChange={setValue} value={value} />{value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}</span>
                  </div>
                  <Meta title={name}/>
                </Card>
              </Col>
            );
          })
        }
      </Row>
    </>
  });
}

function App() {
  const onSearch = value => console.log(value);
  const desc = useMemo(() => ['terrible', 'bad', 'normal', 'good', 'wonderful'], []);
  const [value, setValue] = useState(4);
  const [moves, setMovies] = useState([]);

  useEffect(() => {
    api.get('/movies/')
      .then(({ data }) => {
        console.log(data);
        if (data.success) {
          setMovies(data.movies);
        } else {
          message.error(data.msg);
        }
      })
      .catch((e) => console.log(e))
  }, []);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content className={`${styles.contentHeight} ${styles.pd} main-list`}>
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
          { genRows(getSlicedArr(moves), desc, setValue, value) }
        </Content>
        <Footer style={{ textAlign: 'center' }}>FilmFinder ©2020 Created by Zzmilk</Footer>
      </Layout>
    </>
  );
}

export default App;
