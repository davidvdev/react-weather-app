import React, {useState} from 'react'

const Form = (props) => {

    const [formData, setFormData] = useState({
        zip: null
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormData({ ...formData, [formData.zip]: null });
        props.handleSubmit(formData.zip)
    }

  

    return(
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder="zip code" name="zip" value={formData.zip} onChange={handleChange}/>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Form