import axios from 'axios'
import React, { createContext, useState } from 'react'

const nubelAiContext = createContext(null)

const NubelAiContextProvider = (props) => {

    const [QnA, setQnA] = useState([]) 
    const [isLoading, setIsLoading] = useState(false)

    async function getAnswer(input){
        setIsLoading(true)
        try{
            const res = await axios({
                url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC0sNAb2KDYnBdj6SUAm9PQSw2NBR0BaBw',
                method: 'post',
                data: {
                  contents: [
                    {"parts":[{"text":input}]}
                  ]
                }
              })
        
              setQnA((prevQnA) => {
                const newEntry = {
                    question: input,
                    answer: res['data']['candidates'][0]['content']['parts'][0]['text']
                }
        
                return [...prevQnA, newEntry]
              })
        }catch(err){
            console.error('Error while fetching data', err)
        }finally{
            setIsLoading(false)
        }

     }

    const contextValue = {
        QnA,
        getAnswer, 
        isLoading
    }

  return (
    <nubelAiContext.Provider value={contextValue}>
        {props.children}
    </nubelAiContext.Provider>
  )
}

export  {NubelAiContextProvider, nubelAiContext}