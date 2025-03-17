import React, { useState } from 'react';
import { Input, Button, Space, Card } from 'antd';
import { SearchOutlined, FilePptOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

const StyledCard = styled(Card)`
  margin-bottom: 24px;

  /* 平板设备 */
  @media (max-width: 1024px) {
    margin-bottom: 16px;
  }

  /* 手机设备 */
  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

const StyledSpace = styled(Space.Compact)`
  width: 100%;

  /* 手机设备 */
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 8px;

    .ant-input {
      width: 100%;
    }

    .ant-btn {
      width: 100%;
    }
  }
`;

interface UrlInputProps {
  onPreview: (url: string) => void;
  onGeneratePPT: (url: string) => void;
  loading?: boolean;
}

const UrlInput: React.FC<UrlInputProps> = ({ onPreview, onGeneratePPT, loading = false }) => {
  const [url, setUrl] = useState('');

  const handlePreview = () => {
    if (url) {
      onPreview(url);
    }
  };

  const handleGeneratePPT = () => {
    if (url) {
      onGeneratePPT(url);
    }
  };

  return (
    <StyledCard>
      <StyledSpace>
        <Input
          placeholder="请输入论文URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onPressEnter={handlePreview}
          disabled={loading}
        />
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handlePreview}
          loading={loading}
        >
          预览
        </Button>
        <Button
          type="primary"
          icon={<FilePptOutlined />}
          onClick={handleGeneratePPT}
          loading={loading}
        >
          生成PPT
        </Button>
      </StyledSpace>
    </StyledCard>
  );
};

export default UrlInput; 