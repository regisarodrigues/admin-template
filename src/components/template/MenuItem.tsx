import Link from 'next/link';

interface MenuItemPros {
  texto: string;
  icone: any;
  url?: string;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemPros) {
  function renderizarLink() {
    return (
      <a
        className={`
        flex flex-col justify-center items-center h-20 w-20
        ${props.className} dark:text-gray-200 text-gray-600
      `}
      >
        {props.icone}
        <span className={`text-xs font-light `}>{props.texto}</span>
      </a>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
    >
      {props.url ? (
        <Link href={props.url}>{renderizarLink()}</Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
