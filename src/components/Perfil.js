import React from "react";

const Perfil = () => {

    /*Algumas linhas de estilo para esse componente. */    
    const stylePerfilCard = {
        width: '240px',
        height: '367px',
        padding: '25px',
        backgroundColor: "#7C4DFF",
        borderRadius: "30px",
        flexDirection: 'column'    
    }   
    const stylePlanner = {
        width: '240px',
        height: '143px',
        padding: '30px',
        backgroundColor: "#303F9F",
        borderRadius: "0px 0px 30px 30px",
        position: "relative",
        top: "-55px",
    }
    const styleImg = {
        width: "100px", 
        height: "100px", 
        borderRadius: "60px"
    }

    return (
        <div class="perfil">
            <div className="d-flex align-items-center" style={stylePerfilCard}>
                <img style={styleImg} src="images/image-jeremy.png" alt="" />
                <p style={{color: 'lightgrey'}}>Report for</p> <h1 style={{color: 'white'}}>Jeremy Robson</h1>
            </div>

            <div  style={stylePlanner}>
                <ul className="d-flex align-items-center" style={{flexDirection: 'column', position: 'relative', right: '17px', listStyleType: "none"}}>
                    <li style={{color: 'lightgrey', cursor: 'pointer'}}>Daily</li>
                    <li style={{color: 'lightgrey', cursor: 'pointer'}}>Weekly</li>
                    <li style={{color: 'lightgrey', cursor: 'pointer'}}>Monthly</li>
                </ul>
            </div>
        </div>
    )
}

export default Perfil;