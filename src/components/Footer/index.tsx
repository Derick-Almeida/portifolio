import { ThemeFooter } from "./style";

import { ImWhatsapp, ImLinkedin } from "react-icons/im";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <ThemeFooter>
      <span>Obrigado por acessar!</span>
      <div>
        <p>Contatos:</p>
        <a
          href="https://api.whatsapp.com/send?phone=+55+48999217517&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
          target="_blank"
          rel="noreferrer"
        >
          <ImWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/derick-almeida/"
          target="_blank"
          rel="noreferrer"
        >
          <ImLinkedin />
        </a>
        <a
          href="mailto=d.a.s2000silva14@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <AiTwotoneMail />
        </a>
      </div>
    </ThemeFooter>
  );
};

export default Footer;
