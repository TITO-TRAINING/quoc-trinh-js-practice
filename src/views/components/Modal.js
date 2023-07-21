function Modal() {
  return `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">User Form</h5>
            </div>
            <div class="modal-body">
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

                    
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
    </div>
</div>
</div>
`;
}

export default Modal;
