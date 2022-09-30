import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, Form, Input, InputNumber, Row, Col } from 'antd'
import BasicInput from '@/components/antd/Input'

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

const ArticleModal = (props) => {
  const { open, setOpen, title, onFinish, isLoading, data } = props
  const [form] = Form.useForm()
  const handleOk = () => {
    form.submit()
  }
  console.log('value form là: ', form.defaultValue)
  const handleCancel = () => {
    setOpen(false)
  }

  return (
    <>
      <Modal
        key={'modal-add-articles hihi'}
        title={title}
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Row justify="end" key={"row ne hihi"}>
            <Button form="addArticlesForm" key="submit" onClick={handleCancel}>
              Hủy
            </Button>
            <Button
              loading={isLoading}
              type="primary"
              form="addArticlesForm"
              key="submit"
              htmlType="submit"
            >
              Lưu
            </Button>
          </Row>,
        ]}
      >
        {
          <Form
            {...layout}
            name="addArticlesForm"
            onFinish={onFinish}
            validateMessages={validateMessages}
            layout="vertical"
            compact
            form={form}
          >
            <Row>
              <Col span={24}>
                <BasicInput
                  initialValueForm={data?.title}
                  label={'Tiêu đề'}
                  required={true}
                  name="title"
                  useLabel
                />
                <BasicInput
                  initialValueForm={data?.sumary}
                  label={'Tóm tắt'}
                  required={true}
                  name="sumary"
                  useLabel
                  type="textarea"
                />
                <BasicInput
                  initialValueForm={data?.content}
                  label={'Nội dung'}
                  required={true}
                  name="content"
                  useLabel
                  type="textarea"
                  inputStyle={{ height: '200px' }}
                />
                <BasicInput label={'Tags'} name="tag" useLabel initialValueForm={data?.tags} />
                <BasicInput label={'Ảnh'} name="image" useLabel initialValueForm={data?.tags} />
                <BasicInput
                  label={'Tác giả'}
                  name="author"
                  useLabel
                  initialValueForm={data?.tags}
                />
                <BasicInput label={'Slug'} name="slug" useLabel initialValueForm={data?.author} />
              </Col>
            </Row>
          </Form>
        }
      </Modal>
    </>
  )
}

export default ArticleModal
