import React from "react"
import './styles.css'
import teams from '../../data/teams'


export default function cardTeams() {

    return (
        <>
            {teams && teams.map(team => team.map((item, index) => {
                return <div key={index}>

                    <div className="card-teams">
                        <div className="image-teams-card"><img src={item.image} />
                            <div className="title-teams-card"><p>{item.name}</p></div>
                        </div>
                    </div>


                </div>
            }))}
        </>
    )
}
