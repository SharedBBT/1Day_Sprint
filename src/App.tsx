import React, { useState, useRef } from 'react';
import { courses } from './data/data';
import { HomeView } from './HomeView';
import { DetailView } from './DetailView';
import { RealHomeView } from './RealHomeView';
import { Header } from './Header'; // 【引入新组件】

const OneDaySprintWebsite: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const listSectionRef = useRef<HTMLDivElement>(null);

  const scrollToLineup = () => {
    listSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCourseClick = (id: number) => {
    setSelectedCourseId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedCourseId(null);
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  // --- Render Logic ---

  return (
    <div style={{ width: '100%' }}>
      {/* 1. 全局常驻 Header */}
      <Header />

      {/* 2. 页面内容 */}
      {selectedCourseId && selectedCourse ? (
        // 详情页
        <DetailView course={selectedCourse} onBack={handleBackToList} />
      ) : (
        // 首页 + 列表页
        <div>
           {/* 注意：RealHomeView 里面可能还有旧的 Header 代码。
             如果你想让 RealHomeView 也用这个全局 Header，
             你需要去 RealHomeView.tsx 里把 <header>...</header> 删掉。
           */}
          <RealHomeView onScrollDown={scrollToLineup} />
          
          <div ref={listSectionRef}>
            <HomeView onSelectCourse={handleCourseClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default OneDaySprintWebsite;