import React from "react";
import { Component } from "react";
import {otpAuthResult} from '../functions/CommonCalls';
import { Link } from "react-router-dom";


export default class AuthResult extends Component{

    constructor(props){
        super(props)

        // get from props and set to state
        this.state = {
            guid: props.location.state.issuerGuid,
            tranId:props.location.state.tranId,
            userId:props.location.state.userId,
            password: props.location.state.password,
            resultValue:false,
            authMethod: null,
            status: null,
            errorCode: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {

        // dataItem.requestType = "Auth_Initiate";

        // console.log(dataItem)
        // console.log(dataItem.langCode.text)
        // console.log(dataItem.requestType)

        // alert(JSON.stringify(dataItem, null, 4));

        this.processForm(e)


    }
    processForm(e){
        const json ={
            guid : this.state.guid,
	        tranId : this.state.tranId,
	        userId : this.state.userId,
	        password : this.state.password
        }


        // this.setState({
        //     resultValue : "json"
        // })

        otpAuthResult(json).then(res=>{
            if(res.status===200){
                //taking the three values from response data and setting the resultValue true 
                //as a flag for table data display

                this.setState({
                    resultValue:true,
                    authMethod: res.data.authMethod,
                    status:res.data.status,
                    errorCode: res.data.errorCode
                })
                // show the result in some box
            }
        })
        
    }


    render(){
        return(
            <>
            
            <div
            style={{
                width: 780,
                marginTop: '140px',
                marginLeft: '200px',
                padding: '140px 100px',
                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.26), 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.08)'
            }}
            ><h1>AuthResult Page</h1>
               
               {/* showing the table as a response from backend since it will single row so no need for map  */}
                {this.state.resultValue &&
                <table>
                    <tr>
                        <td>Auth Method</td>
                        <td>Status</td>
                        <td>Error Code</td>

                    </tr>
                    <tr>
                        <td>{this.state.authMethod}</td>
                        <td>{this.state.status}</td>
                        <td>{this.state.errorCode}</td>
                    </tr>
                </table>
                }

                <button style={{marginTop:'10px' }} onClick={this.handleSubmit} >Process Auth_Result</button>

                <button> <Link to = "/">Home</Link></button>
            </div>
            </>
        )
    }
}