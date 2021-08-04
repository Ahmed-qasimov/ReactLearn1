import React from 'react';
import './imageList.css';
import Image from './image'

 
const Imagelist =(props) =>{
    const imagesp=props.images

    const ImageLink=imagesp.map((image) =>
    
            <div>
                <Image key={image.links.self} image={image} />
            </div>
    );
    return(
        <div className='image-list-container'>
           { ImageLink }
        </div>
    )
}

export default Imagelist; 