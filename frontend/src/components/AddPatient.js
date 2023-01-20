import React, {useState} from "react"


export default function AddPatient(){



    return(

    <div className="container">

        <form>

            <div class="mb-3">
                <label for="f_name">Patient First Name</label>
                <input type="text" class="form-control" id="f_name" placeholder="First Name"/>
            </div>

            <div class="mb-3">
                <label for="l_name" >Patient Last Name</label>
                <input type="text" class="form-control" id="l_name" placeholder="Last Name"/>
            </div>

            <div class="mb-3">
                <label for="age" >Patient Age</label>
                <input type="text" class="form-control" id="age" placeholder="Age"/>
            </div>

            <div class="mb-3">
                <label for="address" >Patient's Address</label>
                <input type="text" class="form-control" id="address" placeholder="Address"/>
            </div>

            <div class="mb-3">
                <label for="phone_no" >Patient's Phone Number</label>
                <input type="text" class="form-control" id="phone_no" placeholder="Phone Number"/>
            </div>

            <div class="mb-3">
                <label for=" disease" >Disease</label>
                <input type="text" class="form-control" id="disease" placeholder="Disease"/>
            </div>

            <div class="mb-3">
                <label for="gender" >Gender</label>
                <input type="text" class="form-control" id="gender" placeholder="Gender"/>
            </div>



  <button type="submit" class="btn btn-primary">Submit</button>

</form>
</div>

    )


}