import { List, Avatar, message, Button } from 'antd';
import { useEffect, useState } from "react";
import api from "../api";
import Header from './Cheader';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];


function BlackList(props) {
  const [list, setList] = useState([]);

  const getBanList = () => {
    api
      .get('/my_page/my_bannedlist/')
      .then(({ data }) => {
        if (data.success) {
          setList(data);
        } else {
          message.error(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  };

  const removeBlack = (row) => {
    api
      .get('/my_page/my_bannedlist/remove_from_bannedlist/', { params: { "banned_user_id": row.id } })
      .then(({ data }) => {
        if (data.success) {
          getBanList();
        } else {
          message.error(data.msg);
        }
      })
      .catch((e) => {
        console.log(e);
      })
  };

  useEffect(() => getBanList(), []);

  return (
    <>
      <Header {...{ props }}></Header>
      <div style={{ width: '1024px', margin: '0 auto', marginTop: '20px' }}>
        <h1>My BlackList</h1>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[<Button key="list-loadmore-edit" onClick={removeBlack}>Remove</Button>]}
            >
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
export default BlackList;
