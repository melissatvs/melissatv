import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/melissa-logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/melissatvs">
        <img className="Logo" src={Logo} alt="Melissa Logo"></img>
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
