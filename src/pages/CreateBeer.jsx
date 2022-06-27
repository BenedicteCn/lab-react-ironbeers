
import axios from "axios";
import { useState } from "react";          // <== IMPORT
import { useNavigate } from 'react-router-dom'

function CreateBeer() {
  const [name, setName] = useState("");     // <== ADD
  const [tagline, setTagline] = useState("");            // <== ADD
  const [description, setDescription] = useState("");            // <== ADD
  const [first_brewed, setFirstBrewed] = useState("");            // <== ADD
  const [brewers_tips, setBrewersTips] = useState("");            // <== ADD
  const [attenuation_level, setAttenuation] = useState("");            // <== ADD
  const [contibuted_by, setContributedBy] = useState("");            // <== ADD
  const [validationMessage, setValidationMessage] = useState('')
  const [hasCreatedBeer, setHasCreatedBeer] = useState(false)

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.length < 3) {
      setValidationMessage('Name is too short, must be 3 characters or more')
      return
    }

    axios({
      method: 'POST',
      url: "https://ih-beers-api2.herokuapp.com/beers/new",
      data:{
        name: name,
        tagline: tagline,
        attenuation_level: attenuation_level,
      }
    }).then(
      (response) => {
        setName('') //to clear the form
        navigate('/')

    }
    )
  }

  return (
    <div className="AddApartmentPage">
      <h3>Add New Apartment</h3>

      {/*    ADD   */}
      <form onSubmit = {handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {setName(e.target.value)
          setHasCreatedBeer(false)
          }}
          value={name}
        />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>First Brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={(e) => setFirstBrewed(e.target.value)}
          value={first_brewed}
        />

        <label>Brewers tips</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewersTips(e.target.value)}
          value={brewers_tips}
        />

        <label>Attenuation level</label>
        <input
          type="number"
          name="tagline"
          onChange={(e) => setAttenuation(e.target.value)}
          value={attenuation_level}
        />

        <label>Contributed by</label>
        <input
          type="text"
          name="contibuted_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contibuted_by}
        />

        <button type="submit">Create Apartment</button>

      </form>
      {validationMessage &&
      <p className='error'>{validationMessage}</p> }
      {hasCreatedBeer && (
        <p className='success'>Successfully registered!</p>
      )}
    </div>
  );
}

export default CreateBeer;
