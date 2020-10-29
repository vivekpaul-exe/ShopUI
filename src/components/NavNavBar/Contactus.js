import React from "react"
import styled from "styled-components"
// Add ONE BANNER OR A SIMPLE BAKCGROUND IMAGE WITH sOME FANCY WEBSITER LIKE mATERIAL -ui 
// aDD yOU R EMAIL aDDRESS AND pLACE nAME 






export class Contact_us extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName:null,
            LastName:null
        }
        this.handleClick =this.handleClick(this)
        this.handleSubmit = this.handleSubmit(this)
    }
    handleClick (e){
        // const value={[FirstName ,LastName]}
        //     this.setState({value:e.target.value})
        console.log("Yuo clicked")
    }
    handleSubmit(e){
        this.setState({value:e.target.value})
    }
    render(){
        return(
            <ContactWrapper>
                <div className ="co-container">
                  <form>   {/* onSubmit={handleSubmit}*/}
                        <label>Your First Name </label>
                        <input
                            type="text"
                            // value={this.state.FirstName}
                            name="firstName"
                        ></input>
                        <label>Your Last Name </label>
                        <input
                            type="text"
                            // value={this.state.LastName}
                            name="LastName"
                        />
                        <label>Your Email Account </label>
                        <input
                            type="text"
                            // value=
                            name="LastName"
                        />
                        <label>Your Problem </label>
                        <input
                            type="text"
                            // value="this.state."
                            name="LastName"
                        />
                        <label> Description </label>
                        <textarea></textarea>
                        <button className="Submission">Submit</button>
                       
                    </form>
                    

                
                   
            </div>
        </ContactWrapper>

        )
    }
}
const ContactWrapper = styled.div
`


`;
export default Contact_us