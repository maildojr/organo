import './CardEmployee.css'

const CardEmployee = ({ name, image, position, bgColor }) => {
    return (
        <div className='colaborador'>
            <div className='card-header' style={{ backgroundColor: bgColor }}>
                <img src={image} alt="Foto Colaborador" />
            </div>
            <div className='card-footer'>
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    )
}

export default CardEmployee