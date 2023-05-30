import { useState } from 'react';
import Banner from './components/Banner';
import Forms from './components/Forms';
import CardTeam from './components/CardTeam';
import Footer from './components/Footer';

function App() {

  const teams = [
    {
      name: 'Programação',
      colorPrimary: '#57C278',
      colorSecondary: '#D9F7E9'
    },
    {
      name: 'Front-End',
      colorPrimary: '#82CFFA',
      colorSecondary: '#E8F8FF'
    },
    {
      name: 'Data Science',
      colorPrimary: '#A6D157',
      colorSecondary: '#F0F8E2'
    },
    {
      name: 'Devops',
      colorPrimary: '#E06B69',
      colorSecondary: '#FDE7E8'
    },
    {
      name: 'UX e Design',
      colorPrimary: '#DB6EBF',
      colorSecondary: '#FAE9F5'
    },
    {
      name: 'Mobile',
      colorPrimary: '#FFBA05',
      colorSecondary: '#FFF5D9'
    },
    {
      name: 'Inovação e Gestão',
      colorPrimary: '#FF8A29',
      colorSecondary: '#FFEEDF'
    }
  ]

  const [employees, setEmployees] = useState([])

  const onNewEmployeeSubmited = (employee) => {
    // console.log(employee)
    debugger
    setEmployees([...employees, employee])
  }

  return (
    <div className="App">
      <Banner/>
      <Forms teams={teams.map(team => team.name)} onEmployeeSubmited={employee => onNewEmployeeSubmited(employee)}/>
      
      {teams.map(team => <CardTeam 
        key={team.name} 
        teamName={team.name} 
        colorPrimary={team.colorPrimary} 
        colorSecondary={team.colorSecondary}
        employees={employees.filter(employee => employee.team == team.name)}
      />)}

      <Footer />
      
    </div>
  );
}

export default App;
