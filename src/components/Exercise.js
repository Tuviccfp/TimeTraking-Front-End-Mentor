import React from "react";

export default function Exercise() {

    /*Definição de estilo do meu componente*/
    const bgExercise = {
        width: '225px',
        height: '50px',
        backgroundColor: '#81C784',
        borderRadius: '15px 15px 0px 0px'
    }
    const styleCardExercise = {
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
            <div className="d-flex flex-row-reverse" style={bgExercise}>
                <img className="p-2" src="images/icon-exercise.svg" alt="Imagem do card Exercise" style={{width: '62px', height: '62px'}} />
            </div>

            <div style={styleCardExercise}>
                <div style={{position: "relative", top: "15px"}}>
                    <p style={{color: 'white'}}><b>Exercise</b></p>
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                        <img className="mx-3 my-1" src="images/icon-ellipsis.svg" alt="Imagem relacionada a conteúdos extra ao card." />
                    </div>
                    <h4 style={{color: 'white'}}>4hrs</h4>
                    <p style={{color: 'lightgrey'}}>Last week - 5hrs</p>
                </div>
            </div>
        </div>
    )
}