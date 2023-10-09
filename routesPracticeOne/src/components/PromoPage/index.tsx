import { Link } from 'react-router-dom';
import HeaderOne from '../HeaderOne';
import './styles.css';
export default function PromoPage() {
    return (
        <>

        <HeaderOne />
            <div className="main-container">
                <p>Página de Promoção</p>
            </div>
            <Link to='/enrollment'>
            <div className="btn-navigate">
                <p>Quero Participar</p>
            </div>
            </Link>

        </>
    );
}