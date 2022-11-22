import React from "react";
import Exercise from "./components/Exercise";
import Perfil from "./components/Perfil";
import Play from "./components/Play";
import SelfCare from "./components/SelfCare";
import Social from "./components/Social";
import Study from "./components/Study";
import Work from "./components/Work";

export default function TimeTraking() {

    return (
        <div style={{}} className="d-flex justify-content-center align-item-center">
            <div className="d-flex justify-content-center">
                <div className="mx-3" style={{position: 'relative', top: '23px'}}><Perfil /></div>
            </div>

            <div className="d-flex justify-content-center" style={{flexDirection: 'column'}}>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3 my-2"><Work /></div>
                    <div className="mx-3 my-2"><Play /></div>
                    <div className="mx-3 my-2"><Study /></div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                    <div className="mx-3 my-2"><Exercise /></div >
                    <div className="mx-3 my-2"><Social /></div>
                    <div className="mx-3 my-2"><SelfCare /></div>
                </div>
            </div>
        </div>
    )
}