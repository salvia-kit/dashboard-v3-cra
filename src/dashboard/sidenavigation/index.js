import SidenavItems from './items';
import SidenavHeader from './header';
import css from './index.module.css';
import { useToggle } from '../provider/context';

const style = {
  mobilePosition: {
    left: 'left-0',
    right: 'right-0',
  },
  container: `pb-32 lg:pb-6`,
  close: `hidden lg:block lg:w-64 lg:z-auto`,
  open: `w-8/12 absolute z-40 sm:w-5/12 lg:hidden`,
  default: `bg-white h-screen overflow-y-auto top-0 lg:relative`,
};

export default function SideNavigation({ mobilePosition }) {
  const { open, ref } = useToggle();
  return (
    <aside
      ref={ref}
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
       ${open ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
}
