import React from "react";

export default function BackOfficeContent() {
  return (
    <div>
      <div className="back-office__btn-wrappers">
        <h1>Name of the choice</h1>
        <div className="back-office__list">
          <table>
            <th>
              <td>#</td>
              <td>Picture</td>
              <td>Name</td>
            </th>
            <tbody>
              <td>1</td>
              <td>Toto</td>
              <td>toto</td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
