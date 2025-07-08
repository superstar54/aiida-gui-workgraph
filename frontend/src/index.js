import WorkGraphTable from './WorkGraphTable';
import WorkGraphItem from './WorkGraphItem';
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';


const plugin = {
  id: 'workgraph',
  title: 'workgraph',
  version: '0.0.1',
  description: 'AiiDA GUI WorkGraph plugin',
  sideBarItems: {
    "workgraph": {"label": "WorkGraph",
      "path": "/workgraph",
      "icon": faProjectDiagram},
  },
  homeItems: {
    "workgraph": {"label": "WorkGraph", "path": "/workgraph"},
  },
  routes: {
          "/workgraph": WorkGraphTable,
          "/workgraph/:pk/*": WorkGraphItem,
        },
  dataView: {},
};

export default plugin;
