import React from 'react'
import { useRouter } from 'next/router'



const Error = ({ error}:any) => {
  const router = useRouter()

  if (error) {
    return (
      <p></p>
    
    )
  }

  return null
}

export default Error