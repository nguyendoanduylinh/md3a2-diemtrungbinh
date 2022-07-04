let students = [
  {
    name: "Ha",
    gender: "female",
    point: 8,
  },
  {
    name: "Huy",
    gender: "male",
    point: 9,
  },
  {
    name: "Hung",
    gender: "male",
    point: 7,
  },
  {
    name: "Phuong",
    gender: "female",
    point: 6,
  },
  {
    name: "Huyen",
    gender: "female",
    point: 10,
  },
  {
    name: "Long",
    gender: "male",
    point: 5,
  },
  {
    name: "Luan",
    gender: "male",
    point: 10,
  },
  {
    name: "Linh",
    gender: "female",
    point: 8,
  },
];

let males = [];
let females = [];

for (let student of students) {
  if (student.gender === "male") {
    males.push(student);
  } else if (student.gender === "female") {
    females.push(student);
  }
}

function calculateMale() {
  let total = 0;
  for (let male of males) {
    total += male.point;
  }
  return total / males.length;
}
console.log(`Average of males: ${calculateMale()}`);

function calculateFemale() {
  let total = 0;
  for (let female of females) {
    total += female.point;
  }
  return total / females.length;
}
console.log(`Average of females: ${calculateFemale()}`);
