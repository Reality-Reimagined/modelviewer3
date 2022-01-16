import React from 'react'
import ModelViewer2 from './modelviewer2'



const ModelViewerContainer = ({ nfts }) => {
    
    return (
        <div>
            {nfts.map((nft, index) => {
                return <ModelViewer2 nft={nft} key={index}/>
                //return <App2 nft={nft} key={index}/>
                
                
            })}
            
        </div>
        
    )
}

export default ModelViewerContainer
