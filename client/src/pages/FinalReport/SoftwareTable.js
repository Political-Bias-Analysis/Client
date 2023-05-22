import React from 'react'
import { softwareRows } from './TableColumns'
import './FinalReport.css'

const SoftwareTable = () => {
  return (
    <div>
      <table className='table'>
        <tr >
          <th>Type</th>
          <th>Software</th>
          <th>Usage</th>
          <th>Issues/Frustrations</th>
        </tr>
        {softwareRows.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.type}</td>
              <td>
                <a href={val.url} target='_blank' rel="noreferrer noopener">
                  {val.software}
                </a>
              </td>
              <td>{val.usage}</td>
              <td>{val.issues}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

export default SoftwareTable