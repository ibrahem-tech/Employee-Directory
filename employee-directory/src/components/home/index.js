import React, { Component } from "react";
import List from "../../list.json";
import Table from "../Table";

const styles = {
    divStyle: {
        width: "80%"
    },
    textStyle: {
        color: "#286489",
        fontSize: "20px",
        fontWeight: "bold"
    }
};
class SortAndF extends Component {
    state = {
        department: "",
        list: List
    };


    handleChange = event => {
        let value = event.target.value;

        this.setState({
            department: value
        });
    }

    handleSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        // filter by department
        const filteredList = List.filter(item => item.department === this.state.department);
        this.setState({
            list: filteredList
        });
    };

    // sort according to different choices
    sortList = (option) => {
        List.sort(function (a, b) {
            if (a[option] > b[option])
                return 1;
            else if (a[option] < b[option])
                return -1;

            return 0;
        });

        this.setState({
            list: List
        });
    }

    generateOptions = () => {
        let departmentArray = [];
        List.forEach(function (item) {
            if (!departmentArray.includes(item["department"])) {
                departmentArray.push(item["department"]);
            } 
        });

        departmentArray.sort();
        return departmentArray.map(item => {
           return <option>{item}</option>
        });
    };

    render() {
        return (
            <div className="pt-3 pb-3">
                <div className="mx-auto" style={styles.divStyle}>
                   <form className="form-inline">
                    <div className="form-group mb-4 pt-4">
                        <label htmlFor="department" style={styles.textStyle}>Filter By Department</label>
                        <select className="form-control ml-3" id="department" onChange={this.handleChange}>
                            <option defaultValue>Choose a department</option>
                            {this.generateOptions()}
                        </select>
                    </div>
                    <button type="submit" className="btn btn-info ml-4 my-auto" onClick={this.handleSubmit}>Submit</button>
                </form>
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <p className="mt-2" style={styles.textStyle}>Sort in ascending order by: </p>
                    <div className="btn-group ml-4" role="group" aria-label="sort options">
                        <button type="button" className="btn btn-info" onClick={() => this.sortList("firstName")}>First Name</button>
                        <button type="button" className="btn btn-info" onClick={() => this.sortList("lastName")}>Last Name</button>
                        <button type="button" className="btn btn-info" onClick={() => this.sortList("employeeID")}>Employee ID</button>
                        <button type="button" className="btn btn-info" onClick={() => this.sortList("department")}>Department</button>
                    </div>
                </div> 
                </div>
                
                <Table list={this.state.list} />
            </div>
        );
    }

}




export default SortAndF;