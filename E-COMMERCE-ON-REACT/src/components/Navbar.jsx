import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div class="navbar bg-[lightblue]">
  <div class="flex-1">
    <a class="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>
            Parent
          </summary>
          <ul class="p-2 bg-base-100 rounded-t-none">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
            <li><Link to='product'>Product</Link></li>
            <li><Link to='product/:id'>SingleProduct</Link></li>
           
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
    </>
  )
}

export default Navbar