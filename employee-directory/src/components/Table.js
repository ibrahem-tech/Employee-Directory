import React from "react";

const styles = {
  thead: {
    background: "#8bdae3"
  }
};

function Table(props) {
  return (
    <table className="table table-striped">
      <thead style={styles.thead}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Employee ID</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Department</th>
        </tr>
      </thead>
      <tbody>
          {props.list.map(item => (
            <tr key={item.id}>
              <th scope="row">{item.id}</th>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.employeeID}</td>
              <td>{item.phone}</td>
              <td>{item.department}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}


export default Table;