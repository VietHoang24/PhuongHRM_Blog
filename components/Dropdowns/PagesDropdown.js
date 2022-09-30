import React from 'react'
import Link from 'next/link'
import { createPopper } from '@popperjs/core'

const PagesDropdown = () => {
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
        className="lg:hover:text-blueGray-200 text-blueGray-700 flex items-center px-3 py-4 text-xs font-bold uppercase lg:py-2 lg:text-white"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault()
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'block ' : 'hidden ') +
          'min-w-48 z-50 float-left list-none rounded bg-white py-2 text-left text-base shadow-lg'
        }
      >
        <span
          className={
            'text-blueGray-400 block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold'
          }
        >
          Admin Layout
        </span>
        <Link href="/admin/dashboard">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Dashboard
          </a>
        </Link>
        <Link href="/admin/settings">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Settings
          </a>
        </Link>
        <Link href="/admin/tables">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Tables
          </a>
        </Link>
        <Link href="/admin/maps">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Maps
          </a>
        </Link>
        <div className="border-blueGray-100 mx-4 my-2 h-0 border border-solid" />
        <span
          className={
            'text-blueGray-400 block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold'
          }
        >
          Auth Layout
        </span>
        <Link href="/auth/login">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Login
          </a>
        </Link>
        <Link href="/auth/register">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Register
          </a>
        </Link>
        <div className="border-blueGray-100 mx-4 my-2 h-0 border border-solid" />
        <span
          className={
            'text-blueGray-400 block w-full whitespace-nowrap bg-transparent px-4 pt-2 pb-0 text-sm font-bold'
          }
        >
          No Layout
        </span>
        <Link href="/landing">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Landing
          </a>
        </Link>
        <Link href="/profile">
          <a
            href="#pablo"
            className={
              'text-blueGray-700 block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal'
            }
          >
            Profile
          </a>
        </Link>
      </div>
    </>
  )
}

export default PagesDropdown
