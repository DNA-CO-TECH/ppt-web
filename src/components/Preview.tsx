import React from 'react';
import { Card } from 'antd';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  height: 100%;
  overflow: auto;

  /* 平板设备 */
  @media (max-width: 1024px) {
    .ant-card-body {
      padding: 16px;
    }
  }

  /* 手机设备 */
  @media (max-width: 768px) {
    .ant-card-body {
      padding: 12px;
    }

    h1 {
      font-size: 1.5em;
    }

    h2 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

interface PreviewProps {
  content: string;
}

const Preview: React.FC<PreviewProps> = ({ content }) => {
  return (
    <StyledCard title="论文预览">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </StyledCard>
  );
};

export default Preview; 