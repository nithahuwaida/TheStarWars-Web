import React, { useEffect, useState} from 'react';
import { Layout, Row, Col, Card, Avatar, Result, Icon, Input} from 'antd';
import '../style/Content.css';
import iconFilm from '../image/film.png';
import ShowDetail from './ShowDetail';

const { Content } = Layout;
const { Meta } = Card;

const ContentLayout = ()=>{
    const [film, setFilm] = useState('')
    const fetchFilm = () => {
        fetch('https://cors-anywhere.herokuapp.com/https://swapi.co/api/films/', {
            method: 'GET',
        }).then(response => response.json())
        .then(json => setFilm(json.results))
    }
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetchFilm()
        }, 0);

        return () => clearTimeout(timeOut);
    }, []);
    console.log('film',film)
    return(
        <Layout className='layout-content'>
            <Content className="content" style={{background: 'white'}}>
                <Row style={{margin : '0px'}} gutter={[16, 16]} >
                    <Col className = 'col-listfilm' xs={24}>
                        <div className='content-card'>
                            <Icon type='search' className='icon-search'/>
                            <Input
                                placeholder={`Search film...`}
                                // value={input.search}
                                // onChange={handleChange("search")}
                                className= 'search'
                            />
                        </div>
                        { film.length !== 0 ? (film.map((item, index) => {
                            return(
                            <Col key={index} className="gutter-row" xs={8}>
                                <Card
                                    style={{ width: 400 }}
                                    actions={[
                                        <ShowDetail data={item}/>,
                                    ]}
                                >
                                    <Meta
                                    className='detail'
                                    avatar={<Avatar src={iconFilm} />}
                                    title={item.title}
                                    description={
                                        [
                                            <span style={{color: 'black'}}>Director:  {item.director} <br/></span>,
                                            <span style={{color: 'black'}}>Producer : {item.producer} <br/></span>,
                                            <span style={{color: 'black'}}>Date release : {item.release_date} <br/></span>,
                                        ]
                                    }
                                    />
                                </Card>
                            </Col>
                            )}))
                            :
                            (
                                <Result
                                status="404"
                                title="Gagal"
                                subTitle="Maaf, Data tidak ditemukan"
                                />
                            )
                        }
                    </Col>
                </Row>
            </Content>
        </Layout>
    )
}

export default ContentLayout;