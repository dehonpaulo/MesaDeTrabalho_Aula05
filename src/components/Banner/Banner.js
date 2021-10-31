import styles from './Banner.modules.css';

function Banner(props) {
    return (
        <div id="banner">
            {props.children}
        </div>
    );
}

export default Banner;