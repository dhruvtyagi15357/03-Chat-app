import React from 'react'

const MessageSkeleton = () => {
  return (
    <div className="flex flex-col gap- w-full mb-2">
      <div className="flex gap-2 items-center">
        <div className="skeleton h-12 w-12 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-2">
          <div className="skeleton h-4 w-40"></div>
          <div className="skeleton h-4 w-64"></div>
        </div>
      </div>
      <div className="flex flex-row-reverse gap-2 items-center">
        <div className="skeleton h-12 w-12 rounded-full shrink-0"></div>
        <div className="skeleton h-4 w-64"></div>
      </div>
    </div>
  );
}

export default MessageSkeleton