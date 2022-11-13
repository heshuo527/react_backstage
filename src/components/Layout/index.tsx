import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
    DashboardFilled
} from '@ant-design/icons';
import { Breadcrumb, Dropdown, Layout, Menu, message } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../../img/logo.jpg'

const { Header, Sider, Content } = Layout;
const sideMenuData = [
    {
        key: '/admin/dashboard',
        icon: <DashboardFilled />,
        label: '看板',
    },
    {
        key: '/admin/medicine',
        icon: <VideoCameraOutlined />,
        label: '药品管理',
        children: [{
            label: '药品分类',
            key: '/admin/medicine/categories'
        }, {
            label: '药品信息',
            key: '/admin/medicine/list'
        }]
    },
    {
        key: '/admin/articles',
        icon: <UploadOutlined />,
        label: '文章管理',
        children: [{
            label: '文章分类',
            key: '/admin/articles/categories'
        }, {
            label: '文章信息',
            key: '/admin/articles/list'
        }]
    },
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: '会员信息',
    },
]

// 动态生成路由页面
const findOpenKeys = (key: string) => {
    const result: string[] = [];
    const findInfo = (arr: any) => {
        arr.forEach((item: any) => {
            if (key.includes(item.key)) {
                result.push(item.key);
                if (item.children) {
                    findInfo(item.children) // 使用递归的方法查找当前页面刷新之后的默认选中项
                }
            }
        });
    }
    findInfo(sideMenuData)
    return result
}

const MyLayout = ({ children }: any) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const { pathname } = useLocation() // 获取local中的数据
    const tmpOpenKeys = findOpenKeys(pathname)

    return (
        <Layout style={{ width: '100vw', height: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <img src={logo} alt="好大夫" />
                </div>
                <Menu
                    theme="light"
                    mode="inline"
                    defaultOpenKeys={tmpOpenKeys}
                    defaultSelectedKeys={tmpOpenKeys}
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                    items={sideMenuData}
                />
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                    <span className='app-title'>好大夫平台管理系统</span>
                    <Dropdown overlay={<Menu
                        onClick={({ key }) => {
                            if (key === 'logOut') {
                                navigate('/')
                            } else {
                                message.info('暂未开通')
                            }
                        }}
                        items={[{
                            label: '个人中心',
                            key: 'userCenter'
                        }, {
                            label: '退出',
                            key: 'logOut'
                        }]}
                    />}>
                        <img
                            src={logo}
                            style={{ width: '40px', float: 'right', borderRadius: '50%', margin: '10px 20px' }}
                        >
                        </img>
                    </Dropdown>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Breadcrumb>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>文章管理</Breadcrumb.Item>
                        <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                    </Breadcrumb>
                    {children}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MyLayout;