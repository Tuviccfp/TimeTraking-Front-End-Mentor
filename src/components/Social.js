import React from "react";

export default function Social() {
    
    /*Definição de estilo do meu componente*/
    const bgSocial = {
        width: '225px',
        height: '50px',
        backgroundColor: '#9575CD',
        borderRadius: '15px 15px 0px 0px',
    }
    const styleCardSocial = {
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
            <div className="d-flex flex-row-reverse" style={bgSocial}>
                <img className="p-2" style={{width: '59px', height: '59px'}} src="images/icon-Social.svg" alt="Imagem relacionada ao trabalho"/>
            </div>

            <div style={styleCardSocial}>
                <div style={{position: "relative", top: "15px"}}>
                    <p style={{color: 'white'}}><b>Social</b></p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <img className="mx-3 my-1" src="images/icon-ellipsis.svg" alt="Imagem relacionada expansão"/>
                    </div>
                    <h4 style={{color: 'white'}}>5hrs</h4>
                    <p style={{color: 'lightgrey'}}>Last Week - 10hrs</p>
                </div>
            </div>
        </div>
    )
}