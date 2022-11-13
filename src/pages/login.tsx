import React from 'react'
import { Button, Card, Col, Form, Input, message, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import logo from '../img/logo.jpg'

export default function Login() {
  const navigate = useNavigate()
  return (
    <Row>
      <Col
        md={{
          span: 8,
          push: 8,
        }}
        xs={{
          span: 22,
          push: 1,
        }}
      >
        <img
          src={logo}
          style={{
            display: 'block',
            margin: '20px auto',
            borderRadius: '16px',
            width: '200px',
          }}
        />
        <Card
          title='好大夫平台管理系统'
        >
          <Form labelCol={{
            md: {
              span: 4
            }
          }}
            onFinish={(v) => {
              console.log(v);
              message.success('登录成功')
              navigate('/admin/dashboard  ')
            }}
          >
            <Form.Item label='用户名' name='useName' rules={[
              {
                required: true,
                message: '请输入用户名',
              }
            ]}>
              <Input placeholder='请输入用户名!' />
            </Form.Item>
            <Form.Item label='密码' name='Password' rules={[
              {
                required: true,
                message: '请输入密码',
              }
            ]}>
              <Input placeholder='请输入密码!' />
            </Form.Item>
            <Form.Item>
              <Button
                htmlType='submit'
                type='primary'
                style={{
                  display: 'block',
                  width: '5vw',
                  margin: '8px auto',
                }}
              >登录</Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  )
}
