import React from 'react'

import { redirect } from 'next/navigation';

import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route';

const Server = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin')
  }

  return (
    <div>Page security server</div>
  )
}

export default Server