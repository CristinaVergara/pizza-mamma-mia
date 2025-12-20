import { useParams, useNavigate } from 'react-router-dom';

const PizzaDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="pizza-detail-container">
      <h1>Detalle de Pizza #{id}</h1>
      <p>Esta página muestra los detalles de una pizza específica.</p>
      <p>En un proyecto completo aquí cargarías los datos de la pizza con ID: {id}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default PizzaDetail;