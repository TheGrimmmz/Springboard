import React, {useState} from 'react'
import {v4 as uuid} from "uuid"
import './NewMemeForm.css'

const DEFAULT_FORM = {
    url: "",
    topText: "",
    bottomText: ""
}

function NewMemeForm({addMeme}){
    const [form, setForm] = useState(DEFAULT_FORM)

    function handleSubmit(e){
        e.preventDefault();
        addMeme({...form, id: uuid()});
        setForm(DEFAULT_FORM);
    }

    function handleChange(e){
        const {name, value} = e.target;
        setForm(f=>({...f, [name]: value}));
    }

    return (
        <id>
            <h2>New Meme</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='url'>Image URL</label>
                <input type='text' name='url' id='formUrl' onChange={handleChange} value={form.url}/>
                <label htmlFor='toText'>Top Text</label>
                <input type='text' name='topText' id='formTopText' onChange={handleChange} value={form.topText}/>
                <label htmlFor='bottomtext'>Bottom Text</label>
                <input type='text' name='bottomText' id='formBottomText' onChange={handleChange} value={form.bottomText}/>
                <button>Generate</button>
            </form>
        </id>
    )
}

export default NewMemeForm;
