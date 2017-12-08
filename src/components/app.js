import React from 'react';
import Table from './table';

const students = [
  {
    student: "Holder",
    course: "kisses",
    grade: 100
  },
  {
    student: "Shrody",
    course: "biting",
    grade: 100
  },
  {
    student: "Catlus",
    course: "cat wheel running",
    grade: 100
  }
];


function App(){
  return (
    //<h1>Muh first React functionl component or sumthin</h1>
    <div className={'container'}>
      <h1>SGT</h1>
      <Table data = {students} />
    </div>
  )
}

export default App;