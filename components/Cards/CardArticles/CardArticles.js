import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { IoMdAddCircleOutline } from 'react-icons/io'
// components
import { Space, Table, Tag } from 'antd';

import TableDropdown from 'components/Dropdowns/TableDropdown.js'
import { addArticleRequest, deleteArticleRequest, getArticle } from 'api/article'
import ArticleModal from './ArticleModal'
import { Modal } from 'antd'
import MenuOptions from '@/components/MenuOpstions';
import { notification } from 'antd';
import NotifyPopup from '@/components/NotifyPopup';


export default function CardTable({ color }) {
  const { data: dataList, refetch } = getArticle()
  console.log('data là: ', dataList?.data)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal,setOpenEditModal]= useState(false)
  const refDeleteArticle = useRef();
  const [visibleDelete,setVisibleDelete]=useState(false)
  const columns = [
    {
      title: 'Tiêu đề',
      dataIndex: 'title',
      key: 'name',
      render: (text) => <a onClick={()=>setOpenEditModal(true)}>{text}</a>,
    },
    {
      title: 'Tóm tắt',
      dataIndex: 'sumary',
      key: 'age',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags?.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
  
            if (tag === 'loser') {
              color = 'volcano';
            }
  
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'date',
      key: 'address',
    },
  
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      // align:"right",
      render: ( record) => {
        let actions = [
          {
            key: "edit",
            label: "Sửa bài viết",
          },
          {
            key: "delete",
            label: <span className='text-red-500 w-[100px]'>Xóa bài viết</span>,
          },
        ];
        return<MenuOptions 
          trigger={['hover']}
          items={actions}
          itemSelected={record}
          itemHandler={handleAction}

        />         
      }
  
    },
  ];
  const handleAction = (
    e,
    itemSelected,
  ) => {
    switch (e.key) {
      case "edit": {
        setOpenEditModal(true)
        refDeleteArticle.current = itemSelected;
        break;
      }
      case "delete": {
        setVisibleDelete(true)
        refDeleteArticle.current = itemSelected;
      }
    }
  };
  const { mutate: deleteArticle, isLoading: isLoadingDelete } = deleteArticleRequest({    
    onSuccess: () => {
      notification.success({message:"Xóa thành công"})
      refetch()
    },
    onError: () => {
      notification.error({message:"Xóa không thành công"})
      
    },
  })
  const handleDelete= ()=>{
    let itemSelected=refDeleteArticle.current;
    deleteArticle({id:itemSelected._id})
    setVisibleDelete(false)
  }
  const handleOpenAddModal=()=>{
    console.log("ahhuh")
    setOpenAddModal(true);
  }
  const { mutate: addArticle, isLoading: isLoadingAdd } = addArticleRequest({    
    onSuccess: () => {
    refetch()
  },
  onError: error => {
    console.log(error)
  },});

  const onFinishAdd = (values) => {
    addArticle(values)
    if(!isLoadingAdd) {
      setOpenAddModal(false)
    }
  }
  return (
    <>
      <div
        className={
          'relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg h-[700px]' +
          (color === 'light' ? 'text-blueGray-700 bg-white' : 'bg-blueGray-700 text-white')
        }
        // style={{height:"500px", overflow:"hidden"}}
      >
        <div className="mb-0 rounded-t border-0 px-4 py-3">
          <div className="flex flex-wrap items-center">
            <div className="relative flex w-full max-w-full flex-1 flex-grow items-center justify-between px-4">
              <h3
                className={
                  'text-lg font-semibold ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                Quản lý bài viết
              </h3>
              <div className="cursor-pointer">
                <IoMdAddCircleOutline size="30px" color="#1e293b" onClick={handleOpenAddModal} />
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          
          <Table columns={columns} dataSource={dataList?.data}
            // scroll={{  y: 800 }}
          />
        </div>
        {openAddModal&&<ArticleModal 
          title="Thêm bài viết"
          open={openAddModal} 
          setOpen={setOpenAddModal} 
          refetch={refetch} 
          onFinish={onFinishAdd}
          isLoading={isLoadingAdd}
        />}
        {openEditModal&&<ArticleModal 
          title="Sửa bài viết"
          open={openEditModal} 
          setOpen={setOpenEditModal} 
          refetch={refetch}
          data={refDeleteArticle.current}
        />}
        <NotifyPopup 
        title="Bạn có chắc sẽ xóa bài viết?"
        message="Bài viết sẽ bị xóa vĩnh viễn"
        // status={NOTIFY_POPUP_STATUS.WARNING}
        onDelete={handleDelete}
        onCancel={() => {
          setVisibleDelete(false);
        }}
        visible={visibleDelete}
        status="warning"
        loading={isLoadingDelete}
      />
      </div>{' '}
    </>
  )
}

CardTable.defaultProps = {
  color: 'light',
}

CardTable.propTypes = {
  color: PropTypes.oneOf(['light', 'dark']),
}
