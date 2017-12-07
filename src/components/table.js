import React from 'react';

function Table (){
    return (
        <table className="table" >
            <thead className="thead-inverse">
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </thead>
            <tbody>
                <tr>
                    <td>cats</td>
                    <td>food</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>cats1</td>
                    <td>food</td>
                    <td>99</td>
                </tr>
                <tr>
                    <td>cats2</td>
                    <td>food</td>
                    <td>100</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;