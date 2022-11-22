import React from "react";

export default function SelfCare() {
    
    /*Definição de estilo do meu componente*/
    const bgSelfCare = {
        width: '225px',
        height: '50px',
        backgroundColor: '#FFD54F',
        borderRadius: '15px 15px 0px 0px',
    }
    const styleCardSelfCare = {
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
            <div className="d-flex flex-row-reverse" style={bgSelfCare}>
                <img className="p-2" style={{width: '59px', height: '59px'}} src="images/icon-self-care.svg" alt="Imagem relacionada ao trabalho"/>
            </div>

            <div style={styleCardSelfCare}>
                <div style={{position: "relative", top: "17px"}}>
                    <p style={{color: 'white'}}><b>SelfCare</b></p>
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