import ItemForm from './ItemForm'
import {useState} from 'react'
import {Link} from 'react-router-dom'
import './Add.css'

function Add() {
    const [data, setData] = useState("")

    if(data){
        return (
            <div className='Add-div'>
                <p>{data.name} added!</p>
                <p>Note: Please allow inifinite time to have the {data.item} added we currently have no actual database!</p>
                <Link to="/">Home</Link>
            </div>
        )
    }
    return <ItemForm setData={setData}/>
}

export default Add;
