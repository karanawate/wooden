import { useCallback, useState } from 'react';
import Images from './Images';
import TodoCreate from './TodoCreate';

const About  = () => {
  
    const bannerContainer  = {
        backgroundColor:'#373e98',
        height:'500px'   
    }

    const pageHeading = {
        color:'red',
        textAlign:'center',
        
        
    }
    
    return <div >
            <div style={bannerContainer}>
             <img src={Images.TopBannerImageg} style={{ width:'200px',height:'200px'}}/>
             <h5 style={pageHeading}>About page</h5>
            </div>
           </div>
}
export default About;