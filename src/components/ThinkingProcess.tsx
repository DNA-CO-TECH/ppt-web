import React from 'react';
import { Card, Timeline } from 'antd';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  height: 100%;
  overflow: auto;
`;

interface ThinkingProcessProps {
  steps: string[];
}

const ThinkingProcess: React.FC<ThinkingProcessProps> = ({ steps }) => {
  const items = steps.map(step => ({
    children: step
  }));

  return (
    <StyledCard title="思考过程">
      <Timeline items={items} />
    </StyledCard>
  );
};

export default ThinkingProcess; 