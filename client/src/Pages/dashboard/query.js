import { useState } from "react";
import { FormRow } from "../../Components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";

// To be removed

const initialState = {
  name: "",
  email: "",
};
const Query = () => {

  const [values] = useState(initialState);

    return ( <Wrapper>
                    
<form className="form" >

          <FormRow
            type="text"
            name="name"
            value={values.name}
           
            />

        <FormRow type= "email" 
                 name ="email" 
                 value={values.email}
                
                 />
        
        <div> 
                    <p> <pre>        
                </pre>   </p>
        </div>

                     <h4> QUERY</h4>
                    <textarea  name="message" rows="10" cols="30"></textarea>
              
        <button type="submit" className="btn btn-block" >
        submit message
        </button>

         
      </form>
    </Wrapper>
    
    )
}

export default Query
