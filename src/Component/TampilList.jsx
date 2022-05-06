import React, { Fragment } from 'react'

export default function TampilList({value, handleChecked,handleRemove}) {

  return (
    <Fragment>
        <ul style={{ listStyle:"disc" }}>
        {value.map((e) => {
            return (
                <Fragment key={e.id}>
                    <li className="my-3">
                    <span className='text-2xl -right-4 transition duration-150 font-inter text-slate-800' 
                    style={{
                           textDecorationLine: e.isStatus ? "line-through" : "",
                           textDecorationThickness : e.isStatus ? "3px" : "",
                           fontStyle : e.isStatus ? "italic" : "",
                       }}>{e.todoItem}</span>
                    <button className='float-right mx-2 text-red-500 text-lg' onClick={() => {handleRemove(e.id)}}>X</button>
                    <button className='float-right mx-2 text-xl' name='isStatus' onClick={() => {handleChecked(e)}}>✓</button>
                    </li>
                </Fragment>
                
            )
        })}
        </ul>
    </Fragment>
  )
}
