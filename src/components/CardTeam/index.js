import CardEmployee from '../CardEmployee'
import './CardTeam.css'

const CardTeam = (props) => {
    return (
        (props.employees.length > 0) && <section className='CardTeam' style={{ backgroundColor: props.colorSecondary }}>
            <h3 style={{ borderColor: props.colorPrimary }}>
                {props.teamName}
            </h3>
            <div className='Employees'>
                {props.employees.map(employee => <CardEmployee bgColor={props.colorPrimary} key={employee.name} name={employee.name} position={employee.position} image={employee.image}/>)}
            </div>
        </section>
    )
}

export default CardTeam