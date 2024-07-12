import '../IconSwitch/IconSwitch.css'

export const IconSwitch = ({icon, onSwitch}) => {
  return (
    <>
        <div className='material-icons' onClick={onSwitch}>{icon}</div>
    </>
  )
}
