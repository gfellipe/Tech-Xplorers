import styles from "./Blog.module.css";

import PostModelo from "componentes/PostModelo/PostModelo";
import fotoCapa from "assets/capa-blog.jpg";
import fotoBlog from "assets/foto-blog.jpg";

export default function Blog() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Blog">
      <h3 className={styles.subtitulo}>Bem vindo ao TechXplorers!</h3>

      <img
        src={fotoBlog}
        alt="Criança em frente a varias telas."
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Tecnologia: Inovação Impulsionando o Futuro
      </p>
      <p className={styles.paragrafo}>
        Vivemos em uma era repleta de avanços tecnológicos que transformam
        constantemente a maneira como interagimos com o mundo ao nosso redor.
        Desde a Revolução Industrial até a era digital, a tecnologia tem sido um
        poderoso motor impulsionador do progresso humano. Neste artigo,
        exploraremos como a tecnologia está moldando o nosso presente e o
        futuro, abrangendo diversas áreas, desde a inteligência artificial até a
        realidade virtual.
      </p>
      <p className={styles.paragrafo}>
        A inteligência artificial (IA) tem desempenhado um papel fundamental em
        nossas vidas, revolucionando indústrias e simplificando tarefas
        cotidianas. Os algoritmos de IA têm a capacidade de aprender e se
        adaptar, permitindo que máquinas realizem tarefas que antes eram
        exclusivas dos seres humanos. Dos assistentes virtuais aos carros
        autônomos, a IA está se tornando cada vez mais presente em nossa
        sociedade. Com o poder da IA, podemos processar grandes quantidades de
        dados, extrair insights valiosos e desenvolver soluções inovadoras para
        problemas complexos.
      </p>
      <p className={styles.paragrafo}>
        A tecnologia também tem desempenhado um papel essencial na área da
        saúde. A telemedicina, por exemplo, tem se mostrado uma solução viável
        para fornecer assistência médica a pessoas em áreas remotas, além de
        agilizar o atendimento e reduzir custos. Além disso, a tecnologia
        wearable, como relógios inteligentes e dispositivos de monitoramento de
        saúde, permite que as pessoas monitorem seus sinais vitais em tempo
        real, incentivando um estilo de vida mais saudável e facilitando o
        diagnóstico precoce de doenças.
      </p>
      <p className={styles.paragrafo}>
        A realidade virtual (VR) e a realidade aumentada (AR) têm transformado a
        forma como experimentamos o entretenimento e o aprendizado. Com
        dispositivos VR, podemos nos transportar para ambientes virtuais
        imersivos, explorar novos mundos e vivenciar experiências únicas. A AR,
        por sua vez, sobreposta ao mundo real, oferece possibilidades infinitas
        para jogos interativos, treinamento profissional e até mesmo decoração
        de interiores. Essas tecnologias estão aproximando as pessoas e
        proporcionando novas formas de interação social, independentemente da
        distância física.
      </p>
      <p className={styles.paragrafo}>
        No entanto, é importante lembrar que a tecnologia é uma ferramenta que
        deve ser utilizada com responsabilidade e ética. À medida que avançamos,
        é necessário considerar os impactos sociais, ambientais e de privacidade
        de novas tecnologias. A inclusão digital também é um desafio a ser
        enfrentado, garantindo que todos tenham acesso igualitário aos
        benefícios que a tecnologia pode proporcionar.
      </p>
      <p className={styles.paragrafo}>
        Em suma, a tecnologia é um fator-chave que impulsiona o progresso humano
        em todas as esferas da vida. Estamos vivendo em um momento emocionante,
        repleto de oportunidades e desafios.
      </p>
    </PostModelo>
  );
}
