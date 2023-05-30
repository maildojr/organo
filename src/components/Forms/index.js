import { useState } from 'react'
import Button from '../Button'
import SelectBox from '../SelectBox'
import TextField from '../TextField'
import './Forms.css'

const Forms = (props) => {
    
    const [name, setName] = useState('')
    const [position, setPosition] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')


    const onSave = (event) => {
        event.preventDefault()
        // console.log('Form Submited =>', name, position, image, team)
        props.onEmployeeSubmited({
            name, 
            position, 
            image, 
            team
        })
        setName('')
        setPosition('')
        setImage('')
        setTeam('')
    }

    return (
        <section className='Forms'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para card de Funcionários:</h2>
                <TextField 
                    required={true} 
                    label='Nome' 
                    placeholder='Digite o nome'
                    value={name}
                    onChanged={value => setName(value)}
                />
                <TextField
                    required={true}
                    label='Cargo'
                    placeholder='Digite o cargo'
                    value={position}
                    onChanged={value => setPosition(value)}
                />
                <TextField 
                    label='Imagem' 
                    placeholder='Digite o endereço da imagem'
                    value={image}
                    onChanged={value => setImage(value)}    
                />
                <SelectBox
                    required={true}
                    label='Time'
                    itens={props.teams}
                    value = {team}
                    onChanged = {value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}


export default Forms