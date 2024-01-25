for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
      console.log(studentReport[i]);
    }
}

  
let i = 0;
while (i < studentReport.length) {
  if (studentReport[i] < LIMIT) {
    console.log(studentReport[i]);
  }
  i++;
}


studentReport.forEach(value => {
    if (value < LIMIT) {
      console.log(value);
    }
});
  

for (let index in studentReport) {
    if (studentReport[index] < LIMIT) {
      console.log(studentReport[index]);
    }
  }

  
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

for (let i = 0; i < DAYS; i++) {
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + i);
    const dayName = dayNames[futureDate.getDay()];
    console.log(dayName);
}
  