function transformStudents(students){
    let passed = 0;
    let failed = 0;
    for (let i = 0; i < students.length; i++){
      let student = students[i];
      let sum = 0;
      for (let x = 0; x < student.grades.length; x++){
        sum += student.grades[x];
      }
      let average = Math.round(sum / student.grades.length);
      student.average = average;
      if (average >= 60){
        student.status = "passed";
        passed++;
      }else{
        student.status = "failed";
        failed++;}
    }
    return {
      transformed: students,
      summary: 
{passed: passed,
failed: failed}
      };
  }
  
  let students = [
    {"name": "Alice",
      "grades": [85, 90, 78]},
    
      {"name": "Bob",
      "grades": [50, 60, 55]},
   
      {"name": "Charlie",
      "grades": [72, 70, 77]},
  ];
  
  console.log(JSON.stringify(transformStudents(students), null, 2));