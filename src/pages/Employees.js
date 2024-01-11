import '../index.css';
import Employee from '../components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from '../components/AddEmployee';
import EditEmployee from '../components/EditEmployee';
import Header from '../components/Header';


function Employees() {
  const [employees,setEmployees] = useState (
    [
      {
      id:1,
      name:"John", 
      role:"Johns", 
      img:"https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/comedian-rodney-dangerfield-portrait-george-rose.jpg" },
      {
      id:2,
      name:"Bruce", 
      role:"Artist", 
      img:"https://tse4.mm.bing.net/th?id=OIP.HbUiR0BMVi2jU3jLZtNnqAHaF2&pid=Api&P=0&h=220" },
      {
      id:3,
      name:"Freddie", 
      role:"Rock Star", 
      img:"https://tse1.mm.bing.net/th?id=OIP.mBlYf_-ptQ7S0Ad6HB8AeQHaKc&pid=Api&P=0&h=220" },
      {
      id:4,
      name:"Magelani", 
      role:"Explorer", 
      img:"https://tse4.mm.bing.net/th?id=OIP.wxP9Ap6m0CHY8tH6WR61zAHaGL&pid=Api&P=0&h=220" },
      {
      id:5,
      name:"Robert",
       role:"Actor", 
       img:"https://tse1.mm.bing.net/th?id=OIP.G1Wa0-2VUyVP_EdnQfQzaQHaE7&pid=Api&P=0&h=220" },
      {
      id:6,
      name:"Leonardo", 
      role:"Painter", 
      img:"https://tse3.explicit.bing.net/th?id=OIP.FrFDT1dbtZeJ_QXPWqGxewHaJZ&pid=Api&P=0&h=220" }
    ]
  );

  function updateEmployee(id,newName,newRole){
    const updateEmployees = employees.map((employee) => {
      if (id == employee.id){
        return {...employee, name: newName, role: newRole};
      }
      return employee;
    });
    setEmployees(updateEmployees);
  }

  function newEmployee(name, role, img){
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img,
    };
    setEmployees([...employees,newEmployee]);
  }

  const showEmployees = true;
  return (
    <div className="" >
    {
      <div>                       
                <div className='flex flex-wrap justify-center'>
                {employees.map((employee) => {
                  const editEmployee  =  (     
                        <EditEmployee 
                        id={employee.id}
                        name={employee.name} 
                        role={employee.role} 
                        updateEmployee = {updateEmployee}
                        ></EditEmployee> );
                  return (<Employee
                   key = {employee.id}
                   id={employee.id}
                   name = {employee.name}
                   role={employee.role}
                   img={employee.img}
                   editEmployee={editEmployee}>
                  </Employee>)
                })}
                </div>
                <AddEmployee newEmployee = {newEmployee}>
                </AddEmployee>
      </div>
      }

    </div>
  );
}

export default Employees;
