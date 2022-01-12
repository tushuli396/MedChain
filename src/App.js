//import ReactDOM from 'react-dom';
import Login from './Login';
import Navbar from './components/navbar';
//import SearchPage from './components/searchbar';
//import PatientCard from './components/PatientCard';
import PatientList from  './PatientList';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
//import { AccordionButton } from 'react-bootstrap';
import About from './About'
import Home from './Home'
import Searchbar from './searchbar'
import './App.css';
import NewHistory from "./NewHistory"
import Register from './Register';
import React, { Component } from 'react'
// import ipfs from './ipfs';
import Web3 from 'web3';
import {CONTRACT_ADDRESS,CONTRACT_ABI} from './config.js'
import Create from './Create.js';
import Button from './Button';
import PatientCard from './PatientCard';
//import NewHistory from './NewHistory';

export default class App extends Component {

  

  constructor(props){
    super(props);
    this.state = {account:"",balance:undefined,patientCount:undefined,patientList:undefined,patientHistory:undefined,contract:[]};
    this.web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    this.hospital = new this.web3.eth.Contract(CONTRACT_ABI,CONTRACT_ADDRESS);
    this.setState({contract:this.hospital})
    this.addFunc = this.addFunc.bind(this);
    this.addHistory = this.addHistory.bind(this);
    
  }

  addFunc = async (firstname,lastname, gender, age, contact, bloodgroup) => {
    await this.hospital.methods.create_patient(firstname,lastname,gender,age,contact,bloodgroup).send({ from: this.state.account })
  }
  addHistory = async (id,date,desc,report,reportaddr) => {
    await this.hospital.methods.create_history(id,date,desc,report,reportaddr).send({ from: this.state.account })
    
  }


  async loadBlockchainData() {

  
    const accounts = await this.web3.eth.requestAccounts();
    
    this.setState({account:accounts[0]})
    const bal = this.web3.utils.fromWei(await this.web3.eth.getBalance(accounts[0]),'ether');
    this.setState({balance:bal})
    //  await this.hospital.methods.create_patient("rutvij","wa","Male","1234",20,"AB+").send({ from: this.state.account })
    // await this.hospital.methods.create_history(1,"2020/12/05","headache",['MRI'],['addr']).send({ from: this.state.account });
    // await this.hospital.methods.create_history(1,"2020/08/04","stomachache",['XRAY'],['addr2']).send({ from: this.state.account });
    // await this.hospital.methods.create_history(2,"2020/12/05","headache",['MRI'],['addr']).send({ from: this.state.account });
    const count = await this.hospital.methods.id().call();
    this.setState({patientCount:count});
    let newpatientList = [];
    console.log("patient count",count)

    for(let i = 0;i<this.state.patientCount;i++){
     
     newpatientList.push(await this.hospital.methods.retrieve_patient(i+1).call());
     
    }
    console.log(this.state.patientList)
    this.setState({patientList:newpatientList});
    console.log(this.state.patientCount);
    let newhistory = [];
    for(let i = 0;i<this.state.patientCount;i++){
     
      newhistory.push(await this.hospital.methods.retrieve_history(i+1).call());
      
     }

     this.setState({patientHistory:newhistory});
     console.log("patient list",this.state.patientList);
     console.log("history",this.state.patientHistory);
  }
 
  componentWillMount(){
    this.loadBlockchainData()
  }

  
  render() {
    return (
      <div>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Register">
            
            <Register />
          </Route>
          <Route exact path="/Create">
          <Navbar/>
          {/* <Link to="./PatientList" >Addd</Link> */}
          
            <Create addfunction={this.addFunc} /> 
            {/* <PatientList patientList={this.state.patientList} patientCount={this.state.patientCount}/> */}
          </Route>

          <Route exact path="/PatientCard">
          <Navbar/>
            
           
            <PatientCard/> 
            {/* <PatientList patientList={this.state.patientList} patientCount={this.state.patientCount}/> */}
          </Route>

          <Route exact path="/PatientList">

          <Navbar/>
            <Searchbar/>
            <Link to="./Create" className='pluspatient'>+ Patient </Link>
            <h3 style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif" , paddingLeft: "15px"}}>Address</h3>
            <h3 style={{fontWeight: " 1200" , fontSize: "16px" , fontFamily: "Poppins, sans-serif" , paddingLeft: "15px"}}>{this.state.account}</h3>
            <h3 style={{fontWeight: " 1200" , fontSize: "20px" , fontFamily: "Poppins, sans-serif" , paddingLeft: "15px"}}>Balance</h3>
            <h3 style={{fontWeight: " 1200" , fontSize: "16px" , fontFamily: "Poppins, sans-serif" , paddingLeft: "15px"}}>{this.state.balance} ETH</h3>
            {this.state.patientList && this.state.patientHistory?<PatientList patientL={this.state.patientList} patientC={this.state.patientCount} patientH={this.state.patientHistory}/>:"Loading patient data"} 
            
          </Route>
          { <Route exact path="/NewHistory/:id">
            <NewHistory addhistory={this.addHistory}/>
          </Route> }
          
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/Addhistory">
          <Navbar/>
            {this.state.patientList?<Searchbar pl={this.state.patientList}/>:"Loading search bar"}
            <NewHistory />
          </Route>
        </Switch>
        
      </Router>
      </div>
    )
  }
}






