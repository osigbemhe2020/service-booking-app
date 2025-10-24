import React from 'react'
import TopHead from './TopHead'

type RecProps = {
    body: string;
    fname: string;
    role: string;
}

const Recomendation = ({body,fname,role}:RecProps) => {
  return (
    <div>
        <div></div>
        <div>
            <p>{body}</p>
        </div>
        <div>
           <h4>{fname}</h4>
           <p>{role}</p>
        </div>
    </div>
  )

    }

const Recomendations = () => {
  return (
    <div>
        <TopHead
         heading=''
         subheading=''
        />
        <Recomendation
         body=''
         fname=''
         role=''
        />
          <Recomendation
         body=''
         fname=''
         role=''
        />
         <Recomendation
         body=''
         fname=''
         role=''
        />
    </div>
  )
}

export default Recomendations