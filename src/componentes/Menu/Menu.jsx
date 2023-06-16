// STYLES
import styles from "./Menu.module.css";

// COMPONENTS
import MenuLink from "componentes/MenuLink/MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">Início</MenuLink>
        <MenuLink to="/blog">Blog</MenuLink>
      </nav>
    </header>
  );
}
