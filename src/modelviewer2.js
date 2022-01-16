import React from 'react'
import  "@google/model-viewer/dist/model-viewer";
import { Card } from 'antd';
import NameGetterContainer from './NameGetterContainer';

<script src="https://cdn.jsdelivr.net/lodash/4.16.4/lodash.min.js"></script>
// let xyz = nft.meta.name
// xyz = xyz.replace('#', '')
var globalNameArray=[];     //globally accessible array 
const createArray = ({nft}) =>{    //function to remove the # and add each nft to the global array
let xyz = nft.meta.name
xyz = xyz.replace('#', '')
globalNameArray.push(xyz)        //adds the current nft name stored in xyz into the globalNameArray
}

const ModelViewer2 = ({ nft }) => {
    let Names = nft.meta.name
     Names = Names.replace('#','')
    console.log (Names);
    console.log(typeof Names);
    let ModelNames =['Solarbots 20551', 'Solarbots 20790', 'Solarbots 25391' ]; // these will be my nft names 
    Array.isArray(Names);
    console.log(Array)
    
// 

// const ModelViewer2 = ({ nft }) => {
//     let ModelNames =['Solarbots 20551', 'Solarbots 20790', 'Solarbots 25391' ]; // these will be my nft names 
//         for(i=0;i<ModelNames.length;i++){        //iterate over each of the names in ModelNames
//         var search = ar1[i]
//             for(s=0;s<globalNameArray.length;s++){    //search the globalNameArray for the current model name
//                 if(search == globalNameArray[s]){
//                     var divs = document.createElement('div')
//                     divs.innerHTML = globalNameArray[s]
//                     document.body.appendChild(divs)
//                 } 
//             } //WOULD I PUT MY RETURN HERE???
//         }
//     }
    return (
       
        <div>
            <div class = "glow-on-hover" type = "button" id="card">
               {nft.meta.name}
               </div>  
        <div>
            
        </div>
        {/* <div class ="glow-on-hover" type = "button" id="card">
            {console.log(Array)}
        </div> */}
        <div>{globalNameArray}</div>
        <div id= "card"> <model-viewer
        
        src= {"/"+  + extension}
        ios-src={"/"+ Names + ".usdz"}
        poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar>

        </model-viewer>
        </div>
        </div>
        
   )
}

var Model = "astronaut"
var extension = ".glb"
export default ModelViewer2