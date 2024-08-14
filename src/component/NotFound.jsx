import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const redirect = useNavigate()

    setTimeout(() => {
        redirect("/")
    }, 1000)
  return (
    <div>NotFound</div>
  )
}

export default NotFound