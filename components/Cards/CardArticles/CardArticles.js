import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IoMdAddCircleOutline } from 'react-icons/io'
// components

import TableDropdown from 'components/Dropdowns/TableDropdown.js'
import { getArticle } from 'pages/api/article'
import AddArticleModal from './AddArticleModal'
import { Modal } from 'antd'

export default function CardTable({ color }) {
  const { data: dataList } = getArticle()
  console.log('data là: ', dataList?.data)
  const [open, setOpen] = useState(false)
  return (
    <>
      <div
        className={
          'relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow-lg ' +
          (color === 'light' ? 'text-blueGray-700 bg-white' : 'bg-blueGray-700 text-white')
        }
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
                <IoMdAddCircleOutline size="30px" color="#1e293b" onClick={() => setOpen(true)} />
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="w-full border-collapse items-center bg-transparent">
            <thead>
              <tr>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  Tiêu đề
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  Tóm tắt
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  Tag
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  Ngày tạo
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                >
                  Completion
                </th>
                <th
                  className={
                    'whitespace-nowrap border border-l-0 border-r-0 border-solid px-6 py-3 text-left align-middle text-xs font-semibold uppercase ' +
                    (color === 'light'
                      ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
                      : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
                  }
                ></th>
              </tr>
            </thead>
            <tbody>
              {dataList?.data.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                      <span
                        className={
                          'ml-3 font-bold ' +
                          +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                        }
                      >
                        {item.title}
                      </span>
                    </th>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {item.sumary}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {item.tag?.map((tagItem) => {
                        ;<span>{tagItem}</span>
                      })}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      {item.date}
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                      <div className="flex items-center">
                        <span className="mr-2">60%</span>
                        <div className="relative w-full">
                          <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                            <div
                              style={{ width: '60%' }}
                              className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                      <TableDropdown />
                    </td>
                  </tr>
                )
              })}
              <tr>
                <th className="flex items-center whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-left align-middle text-xs">
                  <span
                    className={
                      'ml-3 font-bold ' + +(color === 'light' ? 'text-blueGray-600' : 'text-white')
                    }
                  >
                    Tại sao tôi lại yêu em
                  </span>
                </th>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                  Đây là tác phẩm của tiểu thuyết gia Hoàng Quốc Việt
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                  ahihi
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                  22/12/2000
                </td>
                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 align-middle text-xs">
                  <div className="flex items-center">
                    <span className="mr-2">60%</span>
                    <div className="relative w-full">
                      <div className="flex h-2 overflow-hidden rounded bg-red-200 text-xs">
                        <div
                          style={{ width: '60%' }}
                          className="flex flex-col justify-center whitespace-nowrap bg-red-500 text-center text-white shadow-none"
                        ></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td></td>

                <td className="whitespace-nowrap border-t-0 border-l-0 border-r-0 p-4 px-6 text-right align-middle text-xs">
                  <TableDropdown />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <AddArticleModal open={open} setOpen={setOpen} />
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
