import { Form, Input, InputNumber } from 'antd'
import { LabelTooltipType } from 'antd/lib/form/FormItemLabel'

const BasicInput = (props) => {
  let InputContent

  switch (props.type) {
    case 'number':
      InputContent = (
        <InputNumber
          type={props.type}
          placeholder={props.placeholder}
          prefix={props.prefix}
          className={`rounded bg-white ${props.className}`}
          value={props.value}
          id={props.id}
          addonAfter={props.addonAfter}
          addonBefore={props.addonBefore}
          bordered={props.bordered}
          defaultValue={props.defaultValue}
          status={props.status}
          maxLength={props.maxLength}
          disabled={props.disabled}
          onPressEnter={props.onPressEnter}
          onChange={props.onChange}
          size="large"
          style={props.inputStyle}
          min={props.min}
          max={props.max}
        />
      )

      break
    case 'password':
      InputContent = (
        <Input.Password
          placeholder={props.placeholder}
          className={`rounded bg-white ${props.className}`}
          readOnly={props.readOnly}
          disabled={props.disabled}
          size="large"
          prefix={props.prefix}
          suffix={props.suffix}
          style={props.inputStyle}
          onChange={props.onChange}
        />
      )
      break
    case 'textarea':
      InputContent = (
        <Input.TextArea
          placeholder={props.placeholder}
          className={`rounded bg-white ${props.className}`}
          value={props.value}
          id={props.id}
          allowClear={props.allowClear}
          bordered={props.bordered}
          defaultValue={props.defaultValue}
          status={props.status}
          maxLength={props.maxLength}
          disabled={props.disabled}
          onPressEnter={props.onPressEnter}
          onChange={props.onChange}
          size="large"
          style={props.inputStyle}
        />
      )
      break
    default:
      InputContent = (
        <Input
          type={props.type}
          placeholder={props.placeholder}
          prefix={props.prefix}
          className={`rounded bg-white ${props.className}`}
          value={props.value}
          id={props.id}
          addonAfter={props.addonAfter}
          addonBefore={props.addonBefore}
          allowClear={props.allowClear}
          bordered={props.bordered}
          defaultValue={props.defaultValue}
          status={props.status}
          maxLength={props.maxLength}
          disabled={props.disabled}
          suffix={props.suffix}
          onPressEnter={props.onPressEnter}
          onChange={props.onChange}
          size="large"
          style={props.inputStyle}
        />
      )
  }
  return (
    <Form.Item
      label={props.useLabel ? props.label : ''}
      colon={props.colon || false}
      name={props.name}
      rules={[
        {
          required: props?.required,
          message: `Xin vui lòng nhập ${props.label} !`,
        },
      ]}
      className={props.classNameFormItem}
      initialValue={props.initialValueForm}
      tooltip={props.tooltip}
      noStyle={props.noStyle}
      dependencies={props.dependencies}
      validateFirst={props.validateFirst}
    >
      {InputContent}
    </Form.Item>
  )
}
export default BasicInput
