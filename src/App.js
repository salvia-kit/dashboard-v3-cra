import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages';
import TasksPage from './pages/admin/tasks';
import ReportsPage from './pages/admin/reports';
import DashboardLayout from './dashboard/layout';
import ProjectsPage from './pages/admin/projects';
import SettingsPage from './pages/admin/settings';
import CalendarPage from './pages/admin/calendar';
import TimeManagePage from './pages/admin/time-manage';
import DocumentationPage from './pages/admin/documentation';
import DashboardProvider from './dashboard/provider/context';

function App() {
  return (
    <Router>
      <DashboardProvider>
        <DashboardLayout>
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/admin/calendar" exact={true}>
              <CalendarPage />
            </Route>
            <Route path="/admin/documentation" exact={true}>
              <DocumentationPage />
            </Route>
            <Route path="/admin/projects" exact={true}>
              <ProjectsPage />
            </Route>
            <Route path="/admin/reports" exact={true}>
              <ReportsPage />
            </Route>
            <Route path="/admin/settings" exact={true}>
              <SettingsPage />
            </Route>
            <Route path="/admin/tasks" exact={true}>
              <TasksPage />
            </Route>
            <Route path="/admin/time-manage" exact={true}>
              <TimeManagePage />
            </Route>
          </Switch>
        </DashboardLayout>
      </DashboardProvider>
    </Router>
  );
}

export default App;
