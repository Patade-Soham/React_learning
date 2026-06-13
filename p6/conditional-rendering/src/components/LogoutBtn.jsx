const LogoutBtn = (props) => {
  return (
    <button onClick={() => props.setLogin(false)}>Logout</button>
  )
}

export default LogoutBtn
