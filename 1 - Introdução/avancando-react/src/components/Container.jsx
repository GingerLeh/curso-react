
const Container = ({children, myValue}) => {
  return (
    <>
        <div><h1>Testando o container</h1></div>
        <p>{myValue}</p>
        {children}
    </>
  )
}

export default Container