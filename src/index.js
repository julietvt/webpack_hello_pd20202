import styles from './css/style.css';
const p = document.createElement('p');
p.classList.add(styles.font_style);
p.innerText = 'Hello, Webpack!';
document.body.append(p);
