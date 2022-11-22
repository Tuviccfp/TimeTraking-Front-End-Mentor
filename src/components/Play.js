import React from "react";

export default function Play() {

    /*Definição de estilos abaixo:*/
    const bgPlay = {
        width: '225px',
        height: '50px',
        backgroundColor: '#81D4FA',
        borderRadius: '15px 15px 0px 0px',
    }
    const styleCardPlay = {
        width: '225px', 
        height: '160px',
        backgroundColor: '#1A237E',
        borderRadius: '0px 0px 15px 15px',
        textAlign: 'center',
        position: 'relative', 
    }
    return (
        <div>
            <div className="d-flex flex-row-reverse" style={bgPlay}>
                <img className="p-2"  src="images/icon-play.svg" alt="Imagem do card Play" style={{width: '62px', height: '62px'}}/>
            </div>

            <div id="teste" style={styleCardPlay}>
                <div style={{position: "relative", top: "15px"}}>
                    <p style={{color: 'white'}}><b>Play</b></p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <img className="mx-3 my-1" src="images/icon-ellipsis.svg" alt="" />
                    </div>
                    <h4 style={{color: 'white'}}>10hrs</h4>
                    <p style={{color: 'lightgrey'}}>Last week - 8hrs</p>
                </div>
            </div>
        </div>
    )
}