
const CarDetails = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>Detalhes do carro:</h1>
        <p>Marca: {brand}</p>
        <p>KM: {km}</p>
        <p>Cor: {color}</p>
        {newCar&& <p>Este carro é novo!!</p>}
    </div>
    
  )
}

export default CarDetails