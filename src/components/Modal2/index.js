import { useEffect, useState } from 'react';
import { TrashCan } from '../images';
import './indexM2.css'

 function TrashModal() {
    
    return (
        <div className='TrashModal' style={{width: 240, height: 48, backgroundColor: '#E4E6E7', borderRadius: 12, gap: 18.11}}>
            <button style={{border: 'none', backgroundColor: '#E4E6E7'}} className='Trash'>
                <img src={TrashCan}/>
            </button>
            <p>Move to Trash</p>
        </div>
    );
}

export default TrashModal;