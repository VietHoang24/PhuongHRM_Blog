import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space } from 'antd';
// export interface MenuOptionsProps {
//   trigger: ['click' | 'hover' | 'contextMenu'];
//   items: ItemType[];
//   icon?: React.ReactNode;
//   title?: string;
//   itemSelected?: object;
//   itemHandler: (e: MenuInfo, itemSelected?: any) => void;
//   placement?: PLACEMENT;
// }

// export interface ItemType {
//   key: string;
//   label: string | ReactNode;
// }

const 

MenuOptions = (props) => {
  const getItemHandler = (e) => {
    props.itemHandler(e, props.itemSelected);
  };
  const menu = (
    <Menu
      items={props.items}
      onClick={(e) => {
        e.domEvent.stopPropagation();
        getItemHandler(e);
      }}
    />
  );
  return (
    <Dropdown
      overlay={menu}
      trigger={props.trigger}
      placement={props.placement || "bottomLeft"}
    >
      <span onClick={(e) => e.stopPropagation()}>
        <Space className="cursor-pointer">
          {props.icon || <MoreOutlined />}
        </Space>
      </span>
    </Dropdown>
  );
};
export default MenuOptions;
