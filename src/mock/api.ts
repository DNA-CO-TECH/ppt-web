import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

export interface PaperPreview {
  title: string;
  content: string;
}

export interface ThinkingStep {
  step: string;
  content: string;
}

export interface Slide {
  title: string;
  content: string;
}

export const previewPaper = async (url: string): Promise<PaperPreview> => {
  // 模拟API调用
  return {
    title: '示例论文标题',
    content: `
      <h1>示例论文标题</h1>
      <p>这是一篇示例论文的内容...</p>
      <h2>研究背景</h2>
      <p>研究背景内容...</p>
    `
  };
};

export const generatePPT = async (url: string): Promise<{
  steps: ThinkingStep[];
  slides: Slide[];
}> => {
  // 模拟API调用
  return {
    steps: [
      { step: '分析论文结构', content: '正在分析论文的整体结构...' },
      { step: '提取关键信息', content: '提取论文中的关键信息...' },
      { step: '生成PPT大纲', content: '根据提取的信息生成PPT大纲...' },
      { step: '优化内容展示', content: '优化PPT内容的展示方式...' }
    ],
    slides: [
      {
        title: '论文标题',
        content: '<h1>示例论文标题</h1><p>作者信息</p>'
      },
      {
        title: '研究背景',
        content: '<h2>研究背景</h2><p>研究背景内容...</p>'
      },
      {
        title: '研究方法',
        content: '<h2>研究方法</h2><p>研究方法内容...</p>'
      }
    ]
  };
};

export const downloadPPT = async (url: string): Promise<Blob> => {
  // 模拟API调用
  return new Blob(['PPT内容'], { type: 'application/vnd.openxmlformats-officedocument.presentationml.presentation' });
};

export default api; 