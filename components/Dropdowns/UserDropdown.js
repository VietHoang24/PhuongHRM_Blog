import React from 'react'
import { createPopper } from '@popperjs/core'

const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
  const btnDropdownRef = React.createRef()
  const popoverDropdownRef = React.createRef()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: 'bottom-start',
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  return (
    <>
      <a
        className="text-blueGray-500 block"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        <div className="flex items-center">
          <span className="bg-blueGray-200 inline-flex h-12 w-12 items-center justify-center rounded-full text-sm text-white">
            <img
              alt="..."
              className="w-full rounded-full border-none align-middle shadow-lg"
              src="/img/team-1-800x800.jpg"
            />
          </span>
        </div>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'min-w-48 z-50 float-left list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <div className="border-blueGray-100 my-2 h-0 border border-solid" />
        <a
          href="#pablo"
          className={
            'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
          }
          onClick={(e) => e.preventDefault()}
        >
          Seprated link
        </a>
      </div>
    </>
  )
}

export default UserDropdown
