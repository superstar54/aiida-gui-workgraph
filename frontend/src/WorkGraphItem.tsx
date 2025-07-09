import React from 'react';

function WorkGraphItem({WorkFlowItem}) {
  return <WorkFlowItem pathType = 'workgraph' endPoint="/plugins/workgraph/api/workgraph" />;
}
export default WorkGraphItem;
