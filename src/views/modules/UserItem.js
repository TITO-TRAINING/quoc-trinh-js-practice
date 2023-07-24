function UserItem({ id, name, age, location, phone, gpa }) {
  return `
    <tr>
      <td>#${id}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${location}</td>
      <td>${phone}</td>
      <td>${gpa}</td>
      <td>
        <button class="action-btn btn-edit" data-id="${id}">
          <i class="ti-pencil-alt edit-icon" ></i>
        </button>
  
        <button class="action-btn btn-delete delete-icon" data-id="${id}">
          <i class="ti-trash"></i>
        </button>
      </td>
    </tr>
    `;
}

export default UserItem;
