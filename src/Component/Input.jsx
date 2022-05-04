import React from 'react'

export default function Input({handleSubmit, handleChange, todoItem}) {


  return (
    <div>
        <input className='h-9 w-full my-5 focus:outline-none focus:ring-2 focus:ring-hijau rounded border border-slate-400' type="text" name='todoItem' placeholder=' Input something' value={todoItem} onChange={(e) => {handleChange(e)}}/>
        <button className='bg-hijau px-4 py-1 ring-2 ring-hijau rounded-md text-slate-800' type='submit ' onClick={() => handleSubmit()} >Add</button>
    </div>
  )
}
