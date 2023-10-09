import { Link, Outlet } from 'react-router-dom';
import HeaderOne from '../HeaderOne';
import './styles.css';
export default function EnrollPage() {
    return (
        <>
            <HeaderOne />
            <main>
                <div className="main-container">
                    <p>Página de Inscrição</p>
                </div>
                <Link to='/promo-page'>
                    <div className="btn-navigate">
                        <p>Ver Promoção</p>
                    </div>
                </Link>
                <Outlet />
            </main>
        </>
    );
}