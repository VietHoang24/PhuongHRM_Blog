import React from 'react'

// components

import CardTable from '@/components/Cards/CardTable.js'

// layout for page

import Admin from 'layouts/Admin.js'

export default function Tables() {
  return (
    <>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <CardTable color="light" />
        </div>
        <div className="mb-12 w-full px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  )
}

Tables.layout = Admin
