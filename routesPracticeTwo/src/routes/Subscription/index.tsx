
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Card from '../../components/Card';
import './styles.css';

export default function Subscription() {

    return (
        <>
            <main>
                <section>
                <h1 className="title">Faça sua inscrição!</h1>
                    <div className="container">
                        
                        <Card title="Página de Inscrição" />
                    </div>
                    <div className="dflex mt30 ml160">
                        <Link to="/promotion" >
                            <Button text="Ver Promoção" />
                        </Link>
                    </div>
                </section>
            </main>


        </>
    )
}