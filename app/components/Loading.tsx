import React from 'react'
import { Spinner } from '@nextui-org/react'
const Loading = ({label="Loading..."}) => {
  return (
          <div className="flex w-full justify-center">
      <Spinner label={label} color="secondary" labelColor="danger" />
    </div>
  )
}

export default Loading
