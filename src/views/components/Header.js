function Header() {
  return `
<div class="header-wrapper">
    <div class="input">
      <i class="fa-solid fa-magnifying-glass d-flex align-items-center p-2" id="icon"></i>
      <input type="text" class="rounded-right" id="input-search">
    </div>
    <button type="button" class="btn btn-warning btn-add">
        Add User
    </button>
</div>
`;
}

export default Header;
