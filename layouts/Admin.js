import React from 'react'

// components

import AdminNavbar from 'components/Navbars/AdminNavbar.js'
import Sidebar from 'components/Sidebar/Sidebar.js'
import HeaderStats from 'components/Headers/HeaderStats.js'
import FooterAdmin from 'components/Footers/FooterAdmin.js'
import { ThemeProvider } from 'next-themes'
export default function Admin({ children }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme={'light'}>
        <Sidebar />
        <div className="bg-blueGray-100 relative md:ml-64">
          <AdminNavbar />
          {/* Header */}
          <HeaderStats />
          <div className="-m-24 mx-auto w-full px-4 md:px-10">
            {children}
            <FooterAdmin />
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}
