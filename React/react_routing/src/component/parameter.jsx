import React from 'react'
import { useNavigate, useNavigation, useParams } from 'react-router-dom'

const parameter = () => {
  const {id}=useParams()
  return (
    <div>
param:{id}
      
    </div>
  )
}

export default parameter
