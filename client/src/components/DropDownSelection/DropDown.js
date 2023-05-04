import React from 'react'
import "./DropDown.css"

const DropDown = ({
  items, 
  getShowDropDown,
  setDropDown, 
  setDisplayValue,
  getDisplayValue }
  ) => {
  return (
    <div className='container'>
      <button
        onClick={() => setDropDown(!getShowDropDown())}
        className="select-button"
      >
        {getDisplayValue()}
      </button>

      {getShowDropDown() && 
        <div className='options-container'>
          <div className='inner-options-container'>
            <ul className="year-options">
              {items.map((value) => 
                <li 
                  onClick={() => {setDisplayValue(value); setDropDown(!getShowDropDown())}}
                  className="year-item"
                  key={value}
                >
                  {value}
                </li>)}
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default DropDown