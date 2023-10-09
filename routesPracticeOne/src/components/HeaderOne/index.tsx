import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderOne() {

    return (
        <header>
            <div className="header-section">
                <Link to="/" >
                    <p>MeuSite</p>
                </Link>
            </div>
        </header>
    );
}
