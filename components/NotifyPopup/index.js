import { CheckCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import { Modal } from 'antd'
import React from 'react'
import { Button } from 'antd'

// interface IProps {
//   status: 'success' | 'warning' | 'error';
//   title: string;
//   message: string;
//   visible: boolean;
//   className?: string;
//   closable?: boolean;
//   width?: string | number;
//   onCancel: () => void;
//   afterClose?: () => void;
//   onTryAgain?: () => void;
//   onDelete: () => void;
//   labelBtnDelete?: string;
//   loading?: boolean;
// }
const NotifyPopup = ({
  status,
  title,
  message,
  visible,
  width,
  onCancel,
  afterClose,
  className,
  closable,
  onTryAgain,
  onDelete,
  labelBtnDelete,
  loading,
}) => {
  return (
    <Modal
      closeIcon={<></>}
      width={width}
      open={visible}
      className={`mainModal ${className}`}
      footer={false}
      closable={closable}
      onCancel={onCancel}
      afterClose={afterClose}
    >
      {status === 'success' && (
        <div>
          <CheckCircleOutlined />
          <div> {title} </div>
          <div> {message} </div>
          <div>
            <Button title="Đóng" onClick={onCancel} />
          </div>
        </div>
      )}
      {status === 'error' && (
        <div>
          <ExclamationCircleOutlined />
          <div> {title} </div>
          <div> {message} </div>
          <div>
            <Button title="Hủy" onClick={onCancel} />
            <Button title="Thử Lại" onClick={onTryAgain} />
          </div>
        </div>
      )}
      {status === 'warning' && (
        <div>
          <ExclamationCircleOutlined />
          <div> {title} </div>
          <div> {message} </div>
          <div>
            <Button onClick={onCancel}>Hủy</Button>
            <Button onClick={onDelete} loading={loading}>
              {labelBtnDelete ?? <>Xóa</>}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  )
}
export default NotifyPopup
