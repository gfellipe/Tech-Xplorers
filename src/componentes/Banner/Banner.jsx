import styles from "./Banner.module.css";
import banner from "assets/banner.jpg";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Tech-Xplorers!</h1>

        <p className={styles.paragrafo}>
          Bem-vindo ao Tech-Xplorers, o destino definitivo para os apaixonados
          por tecnologia e exploração digital! Portanto, esteja preparado para
          embarcar nesta aventura fascinante. :)
        </p>
      </div>
      <div className={styles.imagem}>
        <img className={styles.banner} src={banner} aria-hidden={true} alt="" />
      </div>
    </div>
  );
}
