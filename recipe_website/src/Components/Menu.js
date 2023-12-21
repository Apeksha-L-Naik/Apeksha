import '../styles/Menu.css'
import React from 'react'
import {MenuList} from '../helpers/MenuList'
import MenuItem from '../Components/MenuItem'

const Menu = () => {
  return (
    <>
      <div className='menu'>
        <h3 className='menuTitle'>Our menu</h3>
        <div className='menuList'>
          {MenuList.map((menuItem,key)=>{
            return <MenuItem 
            key={key}
            image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Menu