import React from 'react';
// 【変更】Download -> Mail
import { Check, Target, Layers, ListFilter, Mail, ChevronRight, MapPin } from 'lucide-react';
import { courses, type CourseType } from './data/data';

interface HomeViewProps {
  onSelectCourse: (id: number) => void;
}

const getCourseColor = (type: CourseType): string => {
  switch (type) {
    case '財務': return '#009fe8'; // Blue
    case '変革': return '#00c4cc'; // Green
    case 'AI×問題解決':
    case 'AI×事業戦略': return '#9f7aea'; // Purple
    default: return '#009fe8';
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ onSelectCourse }) => {
  return (
    <div id="program-list" className="home-view-container" style={{ 
      fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif', 
      color: '#333',
      backgroundColor: '#ffffff',
      paddingBottom: '80px',
      overflowX: 'hidden',
      position: 'relative',
      zIndex: 10
    }}>
      
      {/* Main Container */}
      <div className="home-content-wrapper" style={{ 
        width: '100%', 
        boxSizing: 'border-box', 
        padding: '40px 40px 0' 
      }}>

        {/* 1. Banner Title */}
        <div className="banner-section">
          <div>
            <p style={{ color: '#666', marginBottom: '12px', fontSize: '15px', fontWeight: '500' }}>
              1Day Sprint シリーズ
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ width: '8px', height: '48px', backgroundColor: '#009fe8' }}></div>
              <h1 className="main-title">
                本シリーズの位置づけとラインナップ
              </h1>
            </div>
          </div>
        </div>

        {/* 2. Positioning Section */}
        <div className="positioning-box" style={{ 
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

          <div className="positioning-grid">
            <div className="pos-item">
              <div className="pos-icon"><Check size={22} /></div>
              <p className="pos-text">
                各テーマは単発参加可能な<br/>1日完結型プログラム
              </p>
            </div>
            <div className="pos-item">
              <div className="pos-icon"><Target size={22} /></div>
              <p className="pos-text">
                ご自身の「今、最も解決したい課題」<br/>に応じて選択
              </p>
            </div>
            <div className="pos-item">
              <div className="pos-icon"><Layers size={22} /></div>
              <p className="pos-text">
                複数受講により、判断・対話・実行が<br/>立体的につながる設計
              </p>
            </div>
          </div>
        </div>

        {/* 3. Program List Header */}
        <div style={{ marginBottom: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '10px' }}>
           <h2 style={{ fontSize: '26px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '12px', margin: 0 }}>
             <ListFilter size={28} color="#009fe8" />
             プログラム一覧（全6本）
           </h2>
           
           {/* 【変更】資料ダウンロード -> お問合せ */}
           <button 
             onClick={() => window.open('https://www.bbt757.com/svlEnquete/jsp/user/top?id=f131eeaece2730e1d751341179494ca5', '_blank')}
             className="pdf-dl-btn"
           >
             <Mail size={16} /> お問合せ
           </button>
        </div>

        {/* 4. Grid Layout - Course List */}
        <div className="course-grid" style={{ 
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
                className="course-card" 
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
                  minHeight: '160px'
                }}
              >
                <div style={{ width: '10px', backgroundColor: themeColor, flexShrink: 0 }}></div>
                <div className="course-card-content" style={{ flex: 1, padding: '24px 30px', display: 'flex', alignItems: 'center' }}>
                  
                  {/* Date */}
                  <div className="course-date-box" style={{ textAlign: 'center', marginRight: '30px', minWidth: '70px' }}>
                    <div style={{ fontSize: '12px', color: '#999', fontWeight: 'bold', marginBottom: '4px', letterSpacing: '1px' }}>DATE</div>
                    <div style={{ fontSize: '32px', fontWeight: '800', color: themeColor, lineHeight: '1' }}>{course.date}</div>
                    <div style={{ fontSize: '14px', color: '#666', marginTop: '6px', fontWeight: 'bold' }}>({course.dayOfWeek})</div>
                  </div>

                  {/* Info */}
                  <div className="course-info-box" style={{ flex: 1, paddingRight: '20px', borderRight: '1px dashed #eee' }}>
                    <div style={{ marginBottom: '12px' }}>
                      <span style={{ color: themeColor, backgroundColor: 'white', fontSize: '12px', fontWeight: 'bold', padding: '4px 10px', borderRadius: '6px', border: `1px solid ${themeColor}` }}>
                        {course.type}
                      </span>
                    </div>
                    <h3 className="course-title" style={{ fontSize: '20px', fontWeight: 'bold', lineHeight: '1.4', marginBottom: '0', color: '#2d3748', letterSpacing: '0.02em' }}>
                      {course.title}
                    </h3>
                  </div>

                  {/* Meta & Button */}
                  <div className="course-meta-box" style={{ textAlign: 'right', paddingLeft: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px', minWidth: '160px' }}>
                    
                    {/* Location */}
                    <div style={{ fontSize: '13px', color: '#718096', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}
                         onClick={(e) => {
                           e.stopPropagation(); 
                           window.open(course.mapUrl, '_blank');
                         }}
                    >
                       <MapPin size={14} /> {course.location} <span className="map-link" style={{textDecoration:'underline', color:themeColor, cursor:'pointer'}}>[地図]</span>
                    </div>
                    
                    <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#4a5568' }}>
                      {course.price} <span style={{ fontSize: '11px', fontWeight: 'normal', display: 'block', color: '#a0aec0' }}>(税込)</span>
                    </div>

                    {/* CTA Button */}
                    <button className="cta-button" style={{
                      marginTop: '8px',
                      backgroundColor: themeColor,
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '8px 12px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '4px'
                    }}>
                      詳細・お申し込み <ChevronRight size={14} />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* --- Desktop Default Styles --- */
        .home-content-wrapper {
          margin-top: -50px;
        }

        .course-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .course-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
        }
        
        .cta-button {
          transition: all 0.2s ease;
        }
        .cta-button:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
        }

        /* Inquiry Button Style */
        .pdf-dl-btn {
           background-color: #fff;
           color: #009fe8;
           font-size: 14px;
           padding: 8px 20px;
           border-radius: 6px;
           font-weight: bold;
           display: flex;
           align-items: center;
           gap: 8px;
           border: 2px solid #009fe8;
           cursor: pointer;
           transition: all 0.2s;
        }
        .pdf-dl-btn:hover {
           background-color: #e0f2fe;
           transform: translateY(-1px);
        }

        /* --- Layout Styles --- */
        .banner-section {
          margin-bottom: 50px;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .main-title {
          font-size: 36px;
          font-weight: bold;
          margin: 0;
          line-height: 1.2;
        }
        .positioning-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px;
        }
        .pos-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .pos-icon {
          background-color: #e0f2fe;
          padding: 10px;
          border-radius: 50%;
          color: #009fe8;
          flex-shrink: 0;
        }
        .pos-text {
          font-size: 15px;
          line-height: 1.7;
          color: #4a5568;
          font-weight: 500;
          margin: 0;
          word-break: break-word; 
        }

        /* --- Mobile Overrides --- */
        @media (max-width: 768px) {
          .home-content-wrapper {
            padding: 20px 20px 0 !important; 
            margin-top: 0 !important;
          }
          .banner-section {
            flex-direction: column; 
            align-items: flex-start;
            gap: 10px;
          }
          .main-title {
            font-size: 24px;
          }
          .positioning-box {
            padding: 20px !important;
          }
          .positioning-grid {
            grid-template-columns: 1fr; 
            gap: 20px;
          }
          .pos-text {
            font-size: 14px; 
          }
          .pos-text br {
            display: none; 
          }
          .course-grid {
            grid-template-columns: 1fr !important; 
          }
          .course-card-content {
            flex-direction: column;
            align-items: flex-start !important;
            padding: 20px !important;
            gap: 15px;
          }
          .course-date-box {
            margin-right: 0 !important;
            margin-bottom: 10px;
            text-align: left !important;
            display: flex;
            align-items: baseline;
            gap: 10px;
          }
          .course-info-box {
            padding-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px dashed #eee;
            padding-bottom: 15px;
            width: 100%;
          }
          .course-meta-box {
            padding-left: 0 !important;
            text-align: left !important;
            width: 100%;
            flex-direction: column !important; 
            align-items: stretch !important; 
            gap: 10px;
          }
          .course-title {
            font-size: 18px !important;
          }
          .course-card:hover {
            transform: none;
            box-shadow: 0 4px 6px rgba(0,0,0,0.01) !important;
          }
        }
      `}</style>
    </div>
  );
};