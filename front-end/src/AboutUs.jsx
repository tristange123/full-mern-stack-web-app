import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'



/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs= props => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [url, setUrl] = useState("")
  const fetchAboutUs = () => {
    // setMessages([])
    // setLoaded(false)
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/messages`)
      .then(response => {
        const name = response.data.name
        const description response.data.description
        setName(messages)
        set
      })
      .catch(err => {
        const errMsg = JSON.stringify(err, null, 2) // convert error object to a string so we can simply dump it to the screen
        setError(errMsg)
      })
      .finally(() => {
        // the response has been received, so remove the loading icon
        setLoaded(true)
      })
  }
  return (
    <>
      <h1>About Us</h1>
      <p></p>
      <p>
        
      </p>
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs
