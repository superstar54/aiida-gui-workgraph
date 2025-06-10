import React from 'react';

function WorkGraphItem({WorkFlowItem}) {
  return <WorkFlowItem endPoint="http://localhost:8000/plugins/workgraph/api/workgraph" />;
}
export default WorkGraphItem;