import '../style.css';
//import './Table.css';
import React from 'react';

function Table() {
  return <div>
    <table>
      <tr>
        <th>Month</th>
        <th>Day</th>
        <th>Time</th>
        <th>DMV Staff</th>
      </tr>
      <tr>
        <td>Nov</td>
        <td>17</td>
        <td>5:00PM</td>
        <td>Peter Smith</td>
      </tr>
      <tr>
        <td>Nov</td>
        <td>18</td>
        <td>9:00AM</td>
        <td>Lucas Potter</td>
      </tr>
    </table>
  </div>;
}

export default Table;