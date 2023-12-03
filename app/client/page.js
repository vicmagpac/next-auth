"use client"

import React from 'react'

import { useSession } from 'next-auth/react'

const Client = () => {
  const { data: session } = useSession({
    required: true
  });

  return (
    <div>Page security client</div>
  )
}

export default Client