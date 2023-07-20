import React from "react";

const User = () => {
  return (
    <div className="w-full h-full">
      <table className="w-full h-auto text-center">
        <tr>
          <th>Item</th>
          <th>Location</th>
          <th>Journey Date</th>
          <th>Status</th>
          <th></th>
        </tr>

        <tbody>
          <tr>
            <td>Ajit Sharma</td>
            <td>Goa</td>
            <td>15th Aug 2023</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default User;
