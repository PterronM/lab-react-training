
function Greetings(props) {

    console.log(props.IdCard)
    // const lang = ["de","en","es","fr"]

  return (
    <div>
      {(props.lang === "de") ? <p>Hola en Aleman</p> : null}
      
    </div>
  )
}

export default Greetings
