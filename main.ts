//Part 1: Employee Data

//Challenge:
//1. Design a type alias named Employee to represent an employee object with properties like name (string), department (string), and role (string).

type Employee = {
    name: string;
    department: string;
    role: string;
  };
  
  let employee: Employee = {
    name: "Javeria",
    department: "Physiotherapy",
    role: "Doctor",
  };
  console.log(employee);
  console.log(employee.department);

//2. Include an optional nested object named contact to hold phone and email information (if provided).

type Contact = {
    phone: string;
    email: string;
  };
  
  type Employ = {
    name: string;
    department: string;
    role: string;
    contact?: Contact; 
  };
  
  let employ: Employ = {
    name: "Javeria",
    department: "Physiotherapy",
    role: "Doctor",
  contact: {
      phone: "333333333",
      email: "javaria1@gmail.com",
    },
  };

  console.log(employ);
  console.log(employ.contact);

//3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or "Intern".

type Cont = {
    phone: string;
    email: string;
  };
  
  type Role = 'Manager' | 'Engineer' | 'Intern';
  
  type Emp = {
    name: string;
    department: string;
    role: Role;
  };
  
  let employee1: Employee = {
    name: "Amna",
    department: "Marketing",
    role: "Manager",
  };
  
  let employee2: Employee = {
    name: "Fatima",
    department: "Engineering",
    role: "Engineer",
  };
  
  let employee3: Employee = {
    name: "Anaya",
    department: 'HR',
    role: 'Intern',
  };
  console.log(employee1);
  console.log(employee2);
  console.log(employee3);

//4. Make the skills property an optional array of strings for listing an employee's skills (if any).

type Contacts = {
    phone: string;
    email: string;
  };
  
  type Roles = 'Manager' | 'Engineer' | 'Intern';
  
  type Empl = {
    name: string;
    department: string;
    role: Role;
    contact?: Contact;
    skills?: string[];
  };
  
  let employ1: Employ = {
    name: "Amna",
    department: "Marketing",
    role: "Manager",
  };
  
  let employ2: Employ = {
    name: "Fatima",
    department: "Engineering",
    role: "Engineer",
    contact: {
      phone: "333333333",
      email: "fatima1@gmail.com",
    },
  };
  
  let employ3: Empl = {
    name: "Anaya",
    department: 'HR',
    role: 'Intern',
    skills: ['communication', 'teamwork', 'leadership'],
  };
  
  console.log(employee1);
  console.log(employee2);
  console.log(employee3);