import React from 'react';
import '../style/Dashboard.css';
import { Layout,Typography} from 'antd';
import Logo from '../image/starwars.png';
import ContentLayout from './Content.js';

const { Header, Content} = Layout;
const { Title } = Typography;

const DashboardLayout = () =>{
    return (
        <Layout className="layout">
            <Header>
                <img className='logo' src={Logo} alt='logo'/>
                <Title className='title'>Star Wars Series</Title>
            </Header>
            <Content>
                <ContentLayout/>
            </Content>
        </Layout>
    )
}

export default DashboardLayout;