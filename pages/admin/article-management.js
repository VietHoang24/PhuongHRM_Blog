import React from 'react'

// components

import CardArticles from '@/components/Cards/CardArticles/CardArticles'

// layout for page

import Admin from 'layouts/Admin.js'

export default function Tables() {
  return (
    <>
      <div className="mt-4 flex flex-wrap">
        <div className="mb-12 w-full px-4">
          <CardArticles color="light" />
        </div>
      </div>
    </>
  )
}

Tables.layout = Admin
