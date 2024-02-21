import React from 'react'
import Table from './Table'
import {postData} from './data'
function Dashboard() {
  return (
    <div className='flex flex-col gap-4'>
        <div className='flex p-4 flex-row justify-between'>
   <div>Overview</div>
   <div className='bg-white border border-gray-300 rounded-sm'><button className='flex flex-row items-center px-2 mr-2'>Last month </button></div>
        </div>
<div className='flex flex-row justify-between'>
<div>Posts</div>
<div><button>Create</button></div>
</div>
 <div>
    <Table posts={postData}/>
 </div>
    </div>
  )
}

export default Dashboard