import React from "react";

export default function Study() {

    /*Definição de estilo do meu componente*/
    const bgStudy = {
        width: '225px',
        height: '50px',
        backgroundColor: '#F48FB1',
        borderRadius: '15px 15px 0px 0px'
    }
    const styleCardStudy = {
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
            <div className="d-flex flex-row-reverse" style={bgStudy}>
                <img className="p-2" src="images/icon-study.svg" alt="Imagem do card study" style={{width: '62px', height: '62px'}} />
            </div>

            <div style={styleCardStudy}>
                <div style={{position: "relative", top: "17px"}}>
                    <p style={{color: 'white'}}><b>Study</b></p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <img className="mx-3 my-1" src="images/icon-ellipsis.svg" alt="Imagem relacionada a conteúdos extra ao card." />
                    </div>
                    <h4 style={{color: 'white'}}>4hrs</h4>
                    <p style={{color: 'lightgrey'}}>Last week - 7hrs</p>
                </div>
            </div>
        </div>
    )
}