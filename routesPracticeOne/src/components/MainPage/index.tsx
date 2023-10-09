import { Link, Outlet } from 'react-router-dom';
import HeaderOne from '../HeaderOne';
import './styles.css';
export default function MainPage() {
    return (
        <>
            <HeaderOne />
            <main>
                <div className="main-container">
                    <p>Página Inicial</p>
                </div>
                <Link to="/promo-page">
                    <div className="btn-navigate">
                        <p>Ver promoção</p>
                    </div>
                </Link>
                <Outlet />
            </main>
        </>
    );
}