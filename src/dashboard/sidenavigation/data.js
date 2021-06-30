import HomeIcon from './icons/home';
import TasksIcon from './icons/tasks';
import ReportsIcon from './icons/reports';
import SettingsIcon from './icons/settings';
import CalendarIcon from './icons/calendar';
import ProjectsIcon from './icons/projects';
import TimeManageIcon from './icons/time-manage';
import DocumentationIcon from './icons/documentation';

const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'Projects',
    icon: <ProjectsIcon />,
    link: '/admin/projects',
  },
  {
    title: 'My tasks',
    icon: <TasksIcon />,
    link: '/admin/tasks',
  },
  {
    title: 'Calendar',
    icon: <CalendarIcon />,
    link: '/admin/calendar',
  },
  {
    title: 'Time manage',
    icon: <TimeManageIcon />,
    link: '/admin/time-manage',
  },
  {
    title: 'Reports',
    icon: <ReportsIcon />,
    link: '/admin/reports',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Documentation',
    icon: <DocumentationIcon />,
    link: '/admin/documentation',
  },
];

export default data;
