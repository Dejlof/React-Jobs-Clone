import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override ={
    display:"block",
    margin:"100px auto"
}

const color ={
    color: "bg-blue-50"
}

const Spinner = ({loading}) => {
  return (
    <ClipLoader
    color={color}
    loading={loading}
    cssOverride={override}
    size={150}
  />
  )
}

export default Spinner
