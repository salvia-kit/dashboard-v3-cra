import { Link, useLocation } from 'react-router-dom';

import data from './data';

const style = {
  title: `font-normal mx-4 text-sm`,
  active: `bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500`,
  link: `duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500`,
};

export default function SidenavItems() {
  const { pathname } = useLocation();
  return (
    <ul>
      <li>
        {data.map((item) => (
          <Link to={item.link} key={item.title}>
            <span
              className={`${style.link} 
              ${item.link === pathname && style.active}`}
            >
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
