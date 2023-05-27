const SubmitForm = () => {
  return (
    <div>
        <form>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <button>Submit</button>
        </form>
    </div>
  )
}

export default SubmitForm