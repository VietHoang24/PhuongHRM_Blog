import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, Form, Input, InputNumber, Row, Col } from 'antd'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}
const AddArticleModal = (props) => {
  const { open, setOpen } = props
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')

  const showModal = () => {
    setOpen(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }

  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
          layout="vertical"
          compact
        >
          <Row>
            <Col span={24}>
              <Form.Item
                name={['user', 'name']}
                label="Name"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                  {
                    type: 'email',
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={['user', 'age']}
                label="Age"
                rules={[
                  {
                    type: 'number',
                    min: 0,
                    max: 99,
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item name={['user', 'website']} label="Website">
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'introduction']} label="Introduction">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
              <Form.Item label="Field A" required tooltip="This is a required field">
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item
                label="Field B"
                tooltip={{
                  title: 'Tooltip with customize icon',
                }}
              >
                <Input placeholder="input placeholder" />
              </Form.Item>
              <Form.Item>
                <Button type="primary">Submit</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default AddArticleModal
