import React, { useState } from 'react';
import Layout from './components/Layout';
import UrlInput from './components/UrlInput';
import Preview from './components/Preview';
import ThinkingProcess from './components/ThinkingProcess';
import PPTSlider from './components/PPTSlider';
import styled from '@emotion/styled';
import { previewPaper, generatePPT, downloadPPT } from './mock/api';
import { message } from 'antd';

const LeftPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const RightPanel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const App: React.FC = () => {
  const [previewContent, setPreviewContent] = useState('');
  const [thinkingSteps, setThinkingSteps] = useState<string[]>([]);
  const [slides, setSlides] = useState<Array<{ title: string; content: string }>>([]);
  const [loading, setLoading] = useState(false);

  const handlePreview = async (url: string) => {
    try {
      setLoading(true);
      const result = await previewPaper(url);
      setPreviewContent(result.content);
    } catch (err) {
      message.error('预览失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const handleGeneratePPT = async (url: string) => {
    try {
      setLoading(true);
      const result = await generatePPT(url);
      setThinkingSteps(result.steps.map(step => step.content));
      setSlides(result.slides);
    } catch (err) {
      message.error('生成PPT失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const blob = await downloadPPT('');
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'presentation.pptx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (err) {
      message.error('下载失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <LeftPanel>
        <UrlInput 
          onPreview={handlePreview} 
          onGeneratePPT={handleGeneratePPT} 
          loading={loading}
        />
        <Preview content={previewContent} />
      </LeftPanel>
      <RightPanel>
        <ThinkingProcess steps={thinkingSteps} />
        <PPTSlider slides={slides} onDownload={handleDownload} />
      </RightPanel>
    </Layout>
  );
};

export default App;
