import React from 'react'
import './NaveMenu.css'

function NavElement(props) {
   return (<li className="list-service">{props.array.name}{props.array.drop && (<ul className="list-menu">
       {


props.array.drop.map(el=> <li>{el}</li>)
       }</ul>)}</li>    )
}
export default NavElement