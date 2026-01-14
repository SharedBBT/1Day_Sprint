import React from 'react';
import { Check, Target, Layers, Calendar, ListFilter } from 'lucide-react';
import { courses, type CourseType } from './data/data';

interface HomeViewProps {
  onSelectCourse: (id: number) => void;
}

const getCourseColor = (type: CourseType): string => {
  switch (type) {
    case '判断': return '#009fe8';
    case '変革': return '#00c4cc';
    case 'AI×問題解決': return '#9f7aea';
    default: return '#009fe8';
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ onSelectCourse }) => {
  return (
    <div style={{ 
      fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif', 
      color: '#333',
      backgroundColor: '#ffffff',
      // minHeight 也不需要 100vh 了，因为它只是页面的一部分
      paddingBottom: '80px',
      overflowX: 'hidden'
    }}>
      
      {/* ⚠️ 原来的 Header 代码已删除，由 App.tsx 统一引入 */}

      {/* Main Container */}
      <div style={{ 
        width: '100%', 
        boxSizing: 'border-box', 
        padding: '40px 40px 0' // 上方增加 padding，因为去掉了内部 Header
      }}>

        {/* 1. Banner 标题区域 */}
        <div style={{ 
          marginBottom: '50px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-end' 
        }}>
          {/* 左侧：标题组 */}
          <div>
            <p style={{ color: '#666', marginBottom: '12px', fontSize: '15px', fontWeight: '500' }}>
              1Day Sprint シリーズ
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              
              {/* 蓝色竖线 */}
              <div style={{ width: '8px', height: '48px', backgroundColor: '#009fe8' }}></div>
              
              <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0, lineHeight: '1.2' }}>
                本シリーズの位置づけとラインナップ
              </h1>
            </div>
          </div>

          {/* 右侧：AOBA-BBT Logo */}
          <img 
            src="https://github.com/SharedBBT/psa-assets/blob/main/image%20(11).png?raw=true" 
            alt="AOBA-BBT Logo"
            style={{ height: '150px', objectFit: 'contain', marginBottom: '0px' }} 
          />
        </div>

        {/* 2. Positioning Section */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          borderRadius: '16px', 
          padding: '40px', 
          marginBottom: '60px', 
          border: '1px solid #edf2f7'
        }}>
          <h2 style={{ 
            fontSize: '20px', 
            fontWeight: 'bold', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px',
            marginBottom: '30px',
            color: '#2d3748'
          }}>
            <Layers size={24} color="#009fe8" /> 本シリーズの位置づけ
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '40px' 
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#e0f2fe', padding: '10px', borderRadius: '50%', color: '#009fe8', flexShrink: 0 }}>
                <Check size={22} />
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', fontWeight: '500', margin: 0 }}>
                各テーマは単発参加可能な<br/>1日完結型プログラム
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#e0f2fe', padding: '10px', borderRadius: '50%', color: '#009fe8', flexShrink: 0 }}>
                <Target size={22} />
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', fontWeight: '500', margin: 0 }}>
                ご自身の「今、最も解決したい課題」<br/>に応じて選択
              </p>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <div style={{ backgroundColor: '#e0f2fe', padding: '10px', borderRadius: '50%', color: '#009fe8', flexShrink: 0 }}>
                <Layers size={22} />
              </div>
              <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#4a5568', fontWeight: '500', margin: 0 }}>
                複数受講により、判断・対話・実行が<br/>立体的につながる設計
              </p>
            </div>
          </div>
        </div>

        {/* 3. Program List Header */}
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
           <h2 style={{ fontSize: '26px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
             <ListFilter size={28} color="#009fe8" />
             プログラム一覧（全6本）
           </h2>
           <div style={{
             backgroundColor: '#3b82f6', color: 'white', fontSize: '13px', padding: '6px 16px',
             borderRadius: '30px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '6px',
             boxShadow: '0 2px 5px rgba(59, 130, 246, 0.3)'
           }}>
             <Calendar size={14} /> 開催日順
           </div>
        </div>

        {/* 4. Grid Layout - 课程列表 */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(550px, 1fr))', 
          gap: '30px' 
        }}>
          {courses.map((course) => {
            const themeColor = getCourseColor(course.type);
            return (
              <div 
                key={course.id}
                onClick={() => onSelectCourse(course.id)}
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'stretch',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.01)',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  minHeight: '160px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = themeColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.01)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                <div style={{ width: '10px', backgroundColor: themeColor, flexShrink: 0 }}></div>
                <div style={{ flex: 1, padding: '24px 30px', display: 'flex', alignItems: 'center' }}>
                  
                  <div style={{ textAlign: 'center', marginRight: '30px', minWidth: '70px' }}>
                    <div style={{ fontSize: '12px', color: '#999', fontWeight: 'bold', marginBottom: '4px', letterSpacing: '1px' }}>DATE</div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: themeColor, lineHeight: '1' }}>{course.date}</div>
                    <div style={{ fontSize: '14px', color: '#666', marginTop: '6px', fontWeight: 'bold' }}>({course.dayOfWeek})</div>
                  </div>

                  <div style={{ flex: 1, paddingRight: '20px', borderRight: '1px dashed #eee' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ color: themeColor, backgroundColor: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px', border: `1px solid ${themeColor}` }}>
                        {course.type}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '0', color: '#2d3748', letterSpacing: '0.02em' }}>
                      {course.title}
                    </h3>
                  </div>

                  <div style={{ textAlign: 'right', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px', minWidth: '120px' }}>
                    <div style={{ fontSize: '13px', color: '#718096', fontWeight: '500' }}>@{course.location}</div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4a5568' }}>
                      {course.price} <span style={{ fontSize: '11px', fontWeight: 'normal', display: 'block', color: '#a0aec0' }}>(税別)</span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '80px', color: '#cbd5e0', fontSize: '12px', borderTop: '1px solid #f7fafc', paddingTop: '30px' }}>
          Copyright © Aoba-BBT All Rights Reserved.
        </div>
      </div>
    </div>
  );
};