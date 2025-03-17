import React from 'react';
import { Card, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styled from '@emotion/styled';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const StyledCard = styled(Card)`
  height: 100%;
  overflow: hidden;

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
  }
`;

const StyledSwiper = styled(Swiper)`
  height: 100%;
  padding: 20px;

  /* 平板设备 */
  @media (max-width: 1024px) {
    padding: 16px;
  }

  /* 手机设备 */
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const StyledSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;

  /* 平板设备 */
  @media (max-width: 1024px) {
    padding: 16px;
  }

  /* 手机设备 */
  @media (max-width: 768px) {
    padding: 12px;

    h2 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

const DownloadButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10;

  /* 手机设备 */
  @media (max-width: 768px) {
    top: 8px;
    right: 8px;
    padding: 4px 8px;
  }
`;

interface PPTSliderProps {
  slides: {
    title: string;
    content: string;
  }[];
  onDownload: () => void;
}

const PPTSlider: React.FC<PPTSliderProps> = ({ slides, onDownload }) => {
  return (
    <StyledCard title="PPT预览">
      <DownloadButton
        type="primary"
        icon={<DownloadOutlined />}
        onClick={onDownload}
      >
        下载PPT
      </DownloadButton>
      <StyledSwiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
      >
        {slides.map((slide, index) => (
          <StyledSlide key={index}>
            <div>
              <h2>{slide.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: slide.content }} />
            </div>
          </StyledSlide>
        ))}
      </StyledSwiper>
    </StyledCard>
  );
};

export default PPTSlider; 