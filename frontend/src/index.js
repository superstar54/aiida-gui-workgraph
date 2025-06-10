import WorkGraphTable from './WorkGraphTable';
import WorkGraphItem from './WorkGraphItem';
import SchedulerTable from './SchedulerTable';
import SchedulerDetail from './SchedulerDetail';
import { faProjectDiagram, faClock } from '@fortawesome/free-solid-svg-icons';


const plugin = {
  id: 'workgraph',
  title: 'workgraph',
  version: '0.0.1',
  description: 'AiiDA GUI WorkGraph plugin',
  sideBarItems: {
    "workgraph": {"label": "WorkGraph",
      "path": "/workgraph",
      "icon": faProjectDiagram},
    "scheduler": {"label": "Scheduler",
      "path": "/scheduler",
      "icon": faClock},
  },
  homeItems: {
    "workgraph": {"label": "WorkGraph", "path": "/workgraph"},
    "scheduler": {"label": "Scheduler", "path": "/scheduler"},
  },
  routes: {
          "/workgraph": WorkGraphTable,
          "/workgraph/:pk/*": WorkGraphItem,
          "/scheduler": SchedulerTable,
          "/scheduler/:name": SchedulerDetail,
        },
  dataView: {},
};

export default plugin;
