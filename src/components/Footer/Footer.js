import styles from './Footer.modules.css';

function Footer({nomeDaEmpresa}) {
    return (
        <footer>
            <div id="rodape">
                <h2>{nomeDaEmpresa}</h2>
            </div>
        </footer>
    );
}

export default Footer;