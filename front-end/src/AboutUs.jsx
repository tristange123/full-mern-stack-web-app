import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'



/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs= props => {
    const [aboutUs, setAboutUs] = useState(null)
    const [url, setUrl] = useState("")
    const [error, setError] = useState("")
    
    useEffect(() => {
        const fetchAboutUs = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_SERVER_HOSTNAME}/aboutUs`,
                 
                )
                console.log(response)
                setAboutUs(response.data.aboutUs)
            } catch (err) {
                setError("Failed to load About Us information.")
            }
        }

        fetchAboutUs();
    }, [])
   
        
  return (
    <>
      <h1>About Us</h1>
      <h2>{aboutUs.name}</h2>

      <p>{aboutUs.description}</p>
      <img src = "/aboutUsImage.png"></img>
     
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
