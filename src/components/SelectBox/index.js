import './SelectBox.css'

const SelectBox = (props) => {
    // console.log(props.itens)

    return (
        <div className='SelectBox'>
            <label>{props.label}</label>
            <select onChange={event => props.onChanged(event.target.value)} required={props.required} value={props.value}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SelectBox