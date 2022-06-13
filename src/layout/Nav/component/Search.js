import { useState } from 'react'
import SearchLogo from '../../../assets/images/Search-Icon.svg'

export const Search = ({ theme }) => {
  const [value, setValue] = useState('')

  //submit input

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      setValue('')
    }
  }
  //handle inputs
  const handleInput = (e) => {
    setValue(e.target.value)
  }
  return (
    <form>
      <div>
        <img src={SearchLogo} alt="HomeLogo" />
      </div>

      <input
        type="text"
        name="search"
        onKeyDown={onKeyDown}
        placeholder="Find cards anywhere"
        value={value}
        onChange={handleInput}
      ></input>
    </form>
  )
}
