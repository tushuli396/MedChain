pragma solidity >=0.7.0 <0.9.0;

contract Hospital {

    uint public id;

    struct Patient { 
        uint pid;
        string firstname;
        string lastname;
        string gender;
        string phoneno;
        uint age;
        string bloodgroup;
    }

    struct Date {
        string date; 
        string desc;
        string report;
        string reportaddr;
    }    

    constructor() {
        id = 0;
    }
    
     mapping (uint => Patient) PatientList;
     mapping(uint => Date[]) History;

    function create_patient(string memory _firstname,string memory _lastname,string memory _gender,string memory _phoneno,uint _age,string memory _bloodgroup) public {
        id = id + 1;
        Patient memory new_patient = Patient(id,_firstname,_lastname,_gender,_phoneno,_age,_bloodgroup);
        PatientList[id] = new_patient;
       
    }

    function create_history(uint _id,string memory _date,string memory _desc,string memory _report,string memory _reportaddr) public {
        Date memory new_date = Date(_date,_desc,_report,_reportaddr);
        History[_id].push(new_date);
    }

    function retrieve_patient(uint _id) public view returns(Patient memory){
        return PatientList[_id];
    }

    function retrieve_history(uint _id) public view returns(Date[] memory){
        return History[_id];
    }
}

