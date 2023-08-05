function Modal() {
  return `
<div class="modalCustom hide">
    <div class="overlay"></div>
    <div class="modalcontent">
        <div class="modal_body">
            <form class="form-group" id="form-group" action="javascript:void(0)">
                <input type="hidden" id="id">
                <div class="form-input">
                    <label style="min-width: 61px; color: rgb(231, 222, 222); !important;" for="name">Name</label>
                    <input type="text" class="input" name="name" id="name" maxlength="100" >
                    <span class="form-message"></span>
                </div>
    
                <div class="form-input">
                    <label style="min-width: 61px; color: rgb(231, 222, 222); !important;" for="age">Age</label>
                    <input type="text" class="input" name="age" id="age" maxlength="100" >
                    <span class="form-message"></span>
                </div>
    
                <div class="form-input">
                    <label style="min-width: 61px; color: rgb(231, 222, 222); !important;" for="location">Location</label>
                    <input type="text" class="input" name="location" id="location" maxlength="100" >
                    <span class="form-message"></span>
                </div>
    
                <div class="form-input">
                    <label style="min-width: 61px; color: rgb(231, 222, 222); !important;" for="phone">Phone</label>
                    <input type="text" class="input" name="phone" id="phone" maxlength="100" >
                    <span class="form-message"></span>
                </div>
    
                <div class="form-input">
                    <label style="min-width: 61px; color: rgb(231, 222, 222); !important;" for="gpa">GPA</label>
                    <input type="text" class="input" name="gpa" id="gpa" maxlength="100" >
                    <span class="form-message"></span>
                </div>

                <button type="submit" class="btn btn-primary btn-save">Save</button>
                <button type="button" class="btn btn-primary btn-update hide">Update</button>
            </form>
    </div>
</div>
`;
}

export default Modal;
