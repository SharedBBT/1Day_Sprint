import React, { useState, useRef, useEffect } from 'react';
import { courses } from './data/data';
import { HomeView } from './HomeView';
import { DetailView } from './DetailView';
import { RealHomeView } from './RealHomeView';
import { Header } from './Header';
import { Footer } from './Footer'; // 【引入 Footer】

const OneDaySprintWebsite: React.FC = () => {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const listSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && event.state.courseId) {
        setSelectedCourseId(event.state.courseId);
      } else {
        setSelectedCourseId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToLineup = () => {
    listSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCourseClick = (id: number) => {
    window.history.pushState({ courseId: id }, '', `?course=${id}`);
    setSelectedCourseId(id);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    window.history.back();
  };

  const selectedCourse = courses.find(c => c.id === selectedCourseId);

  // --- Render Logic ---

  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. 全局常驻 Header */}
      <Header />

      {/* 2. 页面内容 (flex: 1 确保内容撑开) */}
      <div style={{ flex: 1 }}>
        {selectedCourseId && selectedCourse ? (
          // 详情页
          <DetailView course={selectedCourse} onBack={handleBackToList} />
        ) : (
          // 首页 + 列表页
          <div>
            <RealHomeView onScrollDown={scrollToLineup} />
            
            <div ref={listSectionRef}>
              <HomeView onSelectCourse={handleCourseClick} />
            </div>
          </div>
        )}
      </div>

      {/* 3. 全局常驻 Footer */}
      <Footer />
    </div>
  );
};

export default OneDaySprintWebsite;