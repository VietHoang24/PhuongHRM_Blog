import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Button, Modal, Form, Input, InputNumber, Row, Col } from 'antd'
import BasicInput from '@/components/antd/Input'
import { addArticleRequest } from 'api/article'

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
  const [modalText, setModalText] = useState('Content of the modal')
  const [form] = Form.useForm();
  const { mutate: addArticle, isLoading: isLoading } = addArticleRequest();
  const handleOk = () => {
    form.submit()
  }
  const handleCancel = () => {
    setOpen(false)
  }
  const onFinish = (values) => {
    addArticle(values)
    if(!isLoading) {
    } setOpen(false)
      props.refetch
  }
  console.log(process.env.SERVER_URL)
  return (
    <>
      <Modal
        title="Add Articles"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        width={1000}
        footer={[
          <Row justify='end'>
            <Button form="addArticlesForm" key="submit"   
              onClick={handleCancel}
            >
              Hủy
          </Button>
          <Button loading={isLoading} type= "primary" form="addArticlesForm" key="submit" htmlType="submit">
              Thêm
          </Button>
          </Row>
          
          ]}
        
      >
       {open&&<Form
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
              <BasicInput value= {form.getFieldValue("title")}
              
              label={"Tiêu đề"} required={true} name="title"  useLabel
              />
              <BasicInput label={"Tóm tắt"} required={true} name="sumary" useLabel type="textarea"
              />
              <BasicInput label={"Nội dung"} required={true} name="content"
               useLabel type="textarea"
               inputStyle={{height:"200px"}}
              />
               <BasicInput label={"Tags"} name="tag" useLabel
              />
               <BasicInput label={"Ảnh"}  name="image" useLabel
              />  
              <BasicInput label={"Tác giả"}  name="author" useLabel
              />
               <BasicInput label={"Slug"} name="slug" useLabel
              />
            </Col>
          </Row>
        </Form>}
      </Modal>
    </>
  )
}

export default AddArticleModal
