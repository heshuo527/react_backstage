import { Button, Card, Form, Input, message, Modal, Space, Table } from 'antd'
import React, { useState } from 'react'
import { PlusOutlined, SearchOutlined } from '@ant-design/icons'
import MyUpload from '../../components/MyUpload'


function MedicineCategories() {
  const [isShow, setIsShow] = useState(false)
  const [myForm] = Form.useForm() // 可以获取表单实例
  return (
    <>
      <Card
        title='药品分类'
        extra={
          <Button type='primary' icon={<PlusOutlined />} onClick={() => {
            setIsShow(true)
          }} />
        }
      >
        <Space direction='vertical' style={{ width: '100%' }}>
          <Form layout='inline' onFinish={(v) => {
            message.success('查询成功')
          }}>
            <Form.Item label='名字' name='name'>
              <Input placeholder='请输入关键字'></Input>
            </Form.Item>
            <Form.Item>
              <Button type='primary' icon={<SearchOutlined />}></Button>
            </Form.Item>
          </Form>
          <Table columns={[{
            title: '序号',
            width: 80
          }, {
            title: '名字'
          }, {
            title: '主图'
          }, {
            title: '简介'
          }, {
            title: '操作'
          }]}>

          </Table>
        </Space>
      </Card>
      <Modal title='编辑'
        // 点击遮罩层不关闭
        maskClosable={false}
        // 关闭model的时候清楚数据
        destroyOnClose
        open={isShow}
        onOk={() => {
          myForm.submit() // 手动触发表单的提交事件
        }}
        onCancel={() => setIsShow(false)}>
        <Form
          // 表单和modal一起使用的时候需要设置这个属性, 要不然管理窗口不会清空数据
          preserve={false}
          onFinish={(v) => {
            message.success('保存成功')
            console.log(v)
          }}
          labelCol={{ span: 3 }}
          form={myForm}
        >
          <Form.Item
            label='名字'
            name='名字'
            rules={[
              {
                required: true,
                message: '请输入名字'
              },
            ]}
          >
            <Input placeholder='请输入名字' />
          </Form.Item>
          <Form.Item label='主图'>
            <MyUpload />
          </Form.Item>
          <Form.Item label='简介' name='desc'>
            <Input.TextArea placeholder='请输入简介'></Input.TextArea>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default MedicineCategories
