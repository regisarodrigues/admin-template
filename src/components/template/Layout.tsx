import useAppData from '../../data/hook/useAppData';
import Cabecalho from './Cabecalho';
import Conteudo from './Conteudo';
import MenuLateral from './MenuLateral';

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema, alternarTema } = useAppData();

  return (
    <div className={`${tema} flex h-screen w-screen`}>
      <MenuLateral />
      <div className={`dark:bg-gray-800 bg-gray-300 flex flex-col w-full p-7 `}>
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
