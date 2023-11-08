import React from "react"
import './styles.css'

export default function cardTeams({ teams }) {

    return (
        <>
            {teams &&
                teams.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='list-teams'>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}
