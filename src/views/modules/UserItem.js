function UserItem({ id, name, age, location, phone, gpa }) {
  return `
    <tr key=${id}>
      <td>#${id}</td>
      <td>${name}</td>
      <td>${age}</td>
      <td>${location}</td>
      <td>${phone}</td>
      <td>${gpa}</td>
      <td>
        <button class="btn btn-edit position-relative z-index-3" data-id="${id}">
        Edit
        </button>
  
        <button class="action-btn btn-delete delete-icon" data-id="${id}" >
        Delete
        </button>
      </td>
    </tr>
    `;
}

export default UserItem;
