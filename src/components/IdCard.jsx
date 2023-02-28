
function IdCard(props) {
  
    const{lastName,firstName,gender,heigth,birth,picture} = props
   

  return (
    <div>
    <img src={picture} alt="img" width="100px"/>
    <p>FristName: {firstName}</p>
    <p>Last name: {lastName}</p>
    <p>Gender: {gender}</p>
    <p>Height: {heigth}</p>
    <p>Birth: {birth.toDateString()}</p>
    </div>
  )
}

export default IdCard
