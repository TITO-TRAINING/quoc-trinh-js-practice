function Modal() {
  return `
<div class="modalCustom hide">
    <div class="overlay"></div>
    <div class="modalcontent">
        <div class="modalheader">
            <h5 class="modal-title">User Form</h5>
        </div>
        <div class="modal_body">
            <form class="form-group" action="javascript:void(0)">
                <input type="hidden" id="id">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" maxlength="100">
    
                <label for="age">Age</label>
                <input type="text" name="age" id="age" maxlength="100">
    
                <label for="location">Location</label>
                <input type="text" name="location" id="location" maxlength="100">
    
                <label for="phone">Phone</label>
                <input type="text" name="phone" id="phone" maxlength="100">
    
                <label for="gpa">GPA</label>
                <input type="text" name="gpa" id="gpa" maxlength="100">
    
                <button type="submit" class="btn btn-primary btn-save">Save changes</button>
            </form>
        </div>
    </div>
</div>
`;
}

export default Modal;
