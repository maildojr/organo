import './TextField.css'

const TextField = (props) => {
    // console.log(props.label)

    const placeholderMod = `${props.placeholder}...`

    // let valor = ''
    // const [valor, setValor] = useState('')

    const onDigit = (event) => {
        props.onChanged(event.target.value)
    }

    return (
        <div className="TextField">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onDigit} required={props.required} placeholder={placeholderMod} />
        </div>
    )
}

export default TextField