function UserTable() {
  return `
    <div class="table-title">
      <h1>User Management</h1>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
            <th>ID</th>
            <th>Fullname</th>
            <th>Age</th>
            <th>Location</th>
            <th>Phone NUmber</th>
            <th>GPA</th>
            <th>Action</th>
        </tr>
      </thead>
      <tbody class="users-list">

      </tbody>
    </table>
    `;
}
export default UserTable;
