import  React from 'react'
// for ssr errors
const Errors = ({error}:any) => {

    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  return (


    <div>Errors</div>
  )
}

export default Errors