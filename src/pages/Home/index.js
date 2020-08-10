import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import PageDefault from '../../components/PageDefault';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';


function Home() {
  return (
    <PageDefault>
      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo} 
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Esse é um dos meus planos para aposentadoria, ter vários aquários plantados e cuidar deles :)"
      />
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />
    </PageDefault>
  );
}

export default Home;
