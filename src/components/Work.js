import React from "react";

export default function Work() {
    
    /*Definição de estilo do meu componente*/
    const bgWork = {
        width: '225px',
        height: '50px',
        backgroundColor: '#FF8A65',
        borderRadius: '15px 15px 0px 0px',
    }
    const styleCardWork = {
        width: '225px',
        height: '160px',
        backgroundColor: '#1A237E',
        borderRadius: '0px 0px 15px 15px',
        textAlign: 'center',
        position: 'relative',
        bottom: '3px'
    }
    return (
        <div>
            <div className="d-flex flex-row-reverse" style={bgWork}>
                <img className="p-2" style={{width: '59px', height: '59px'}} src="images/icon-work.svg" alt="Imagem relacionada ao trabalho"/>
            </div>

            <div style={styleCardWork}>
                <div style={{position: "relative", top: "18px"}}>
                    <p style={{color: 'white'}}><b>Work</b></p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <img className="mx-3 my-1" src="images/icon-ellipsis.svg" alt="Imagem relacionada expansão"/>
                    </div>
                    <h4 style={{color: 'white'}}>32hrs</h4>
                    <p style={{color: 'lightgrey'}}>Last Week - 36hrs</p>
                </div>
            </div>
        </div>
    )
}

