import styles from './Header.modules.css';

function Header() {
    return (
        <header>
            <h1>Lorem Ipsum</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">Sobre nós</a>
                    </li>
                    <li>
                        <a href="#">Serviços</a>
                    </li>
                    <li>
                        <a href="#">Contatos</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;