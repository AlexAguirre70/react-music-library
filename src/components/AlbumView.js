import {useState} from 'react'
import {useParams} from 'react-router-dom'

function AlbumView(){
    const {id}= useParams()
    const[albumData,setAlbumData] = useState([])
    return (
        <div>
            <h2>The Album ID is : {id}</h2>
            <p>This is the Album View</p>
        </div>
    )
}
export default AlbumView