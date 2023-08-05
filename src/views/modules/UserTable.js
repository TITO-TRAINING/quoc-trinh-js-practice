function UserTable() {
  return `
    <table class="table table-success table-striped table-hover" id="example">
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
      <tfoot>
        <tr>
          <th>ID</th>
          <th>Fullname</th>
          <th>Age</th>
          <th>Location</th>
          <th>Phone NUmber</th>
          <th>GPA</th>
          <th>Action</th>
        </tr>
      </tfoot>
    </table>
  `;
}
export default UserTable