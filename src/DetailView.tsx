import React from 'react';
import { Calendar, MapPin, User, ArrowLeft, CheckCircle, Lightbulb, Target } from 'lucide-react';
// 引入数据类型 (不需要引入 COLORS，避免未使用的警告)
import { type Course, type CourseType } from './data/data';

interface DetailViewProps {
  course: Course;
  onBack: () => void;
}

// 为了防止 import 报错，我们在本地也定义一次颜色逻辑，保持和 HomeView 一致
const getCourseColor = (type: CourseType): string => {
  switch (type) {
    case '判断': 
      return '#009fe8'; // 蓝色
    case '変革': 
      return '#00c4cc'; // 青绿色
    case 'AI×問題解決': 
      return '#9f7aea'; // 紫色
    default: 
      return '#009fe8';
  }
};

export const DetailView: React.FC<DetailViewProps> = ({ course, onBack }) => {
  // 获取当前课程的主题色
  const themeColor = getCourseColor(course.type);

  return (
    <div style={{ 
      fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif', 
      color: '#333', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* 1. Navigation Bar (Sticky) */}
      <div style={{ 
        position: 'sticky', 
        top: 0, 
        backgroundColor: 'rgba(255,255,255,0.98)', 
        borderBottom: '1px solid #e2e8f0', 
        padding: '15px 20px',
        zIndex: 100,
        boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
         <button 
           onClick={onBack}
           style={{ 
             background: 'none', 
             border: 'none', 
             display: 'flex', 
             alignItems: 'center', 
             gap: '8px', 
             cursor: 'pointer',
             fontSize: '15px',
             fontWeight: 'bold',
             color: '#666',
             padding: '8px 0'
           }}
           onMouseEnter={(e) => e.currentTarget.style.color = themeColor}
           onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
         >
           <ArrowLeft size={18} /> プログラム一覧に戻る
         </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, maxWidth: '900px', margin: '0 auto', padding: '60px 24px', width: '100%' }}>
        
        {/* 2. Hero / Title Section */}
        <div style={{ marginBottom: '50px', borderBottom: '1px solid #eee', paddingBottom: '30px' }}>
          {/* Badge */}
          <span style={{ 
            color: themeColor, 
            backgroundColor: 'white', 
            border: `2px solid ${themeColor}`, 
            padding: '6px 16px', 
            borderRadius: '50px', 
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'inline-block',
            marginBottom: '20px'
          }}>
            {course.type}
          </span>

          {/* Title */}
          <h1 style={{ 
            fontSize: '40px', 
            fontWeight: '900', 
            margin: '0 0 20px 0', 
            lineHeight: '1.3',
            color: '#1a202c'
          }}>
            {course.title}
          </h1>

          {/* Subtitle */}
          <p style={{ 
            fontSize: '22px', 
            fontWeight: 'bold', 
            lineHeight: '1.6', 
            color: themeColor 
          }}>
            {course.subtitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}<br/>
              </React.Fragment>
            ))}
          </p>
        </div>

        {/* 3. Description Box */}
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '32px', 
          borderRadius: '12px', 
          marginBottom: '60px',
          fontSize: '18px',
          lineHeight: '1.9',
          color: '#4a5568',
          borderLeft: `6px solid ${themeColor}`
        }}>
          {course.description}
        </div>

        {/* 4. Target Audience (参照PDF布局，放在前面) */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ 
              backgroundColor: themeColor, 
              padding: '8px', 
              borderRadius: '50%', 
              color: 'white' 
            }}>
              <Target size={24} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>こんな人に特におすすめ</h2>
          </div>
          
          <div style={{ 
            backgroundColor: `${themeColor}10`, // 10% opacity hex
            border: `1px solid ${themeColor}30`,
            padding: '24px', 
            borderRadius: '12px' 
          }}>
             {course.recommendedFor.map((rec, idx) => (
               <div key={idx} style={{ 
                 fontSize: '18px', 
                 fontWeight: 'bold', 
                 color: '#2d3748',
                 marginBottom: idx !== course.recommendedFor.length - 1 ? '15px' : '0',
                 display: 'flex',
                 alignItems: 'flex-start',
                 gap: '10px'
               }}>
                 <span style={{ color: themeColor }}>●</span>
                 {rec}
               </div>
             ))}
          </div>
        </section>

        {/* 5. Benefits (得られること) */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ 
              backgroundColor: themeColor, 
              padding: '8px', 
              borderRadius: '50%', 
              color: 'white' 
            }}>
              <Lightbulb size={24} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>得られること</h2>
          </div>
          
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {course.benefits.map((benefit, idx) => (
              <li key={idx} style={{ 
                display: 'flex', 
                alignItems: 'flex-start', 
                gap: '16px', 
                marginBottom: '16px',
                fontSize: '18px',
                padding: '16px',
                backgroundColor: 'white',
                borderBottom: '1px solid #edf2f7'
              }}>
                <CheckCircle color={themeColor} size={24} style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ lineHeight: '1.6' }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* 6. Instructor */}
          <section>
             <h2 style={{ 
               fontSize: '20px', 
               fontWeight: 'bold', 
               marginBottom: '20px', 
               borderLeft: `4px solid ${themeColor}`, 
               paddingLeft: '12px',
               color: '#4a5568'
             }}>
               登壇講師
             </h2>
             <div style={{ 
               display: 'flex', 
               gap: '20px', 
               alignItems: 'center', 
               backgroundColor: '#fff', 
               border: '1px solid #e2e8f0',
               padding: '20px',
               borderRadius: '12px'
             }}>
               <div style={{ 
                 width: '80px', 
                 height: '80px', 
                 backgroundColor: '#edf2f7', 
                 borderRadius: '50%', 
                 display: 'flex', 
                 justifyContent: 'center', 
                 alignItems: 'center', 
                 color: '#a0aec0',
                 flexShrink: 0
               }}>
                 <User size={40} />
               </div>
               <div>
                 <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>{course.instructor.name}</h3>
                 <p style={{ color: themeColor, fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>{course.instructor.role}</p>
                 <p style={{ fontSize: '12px', color: '#718096', lineHeight: '1.4' }}>{course.instructor.description}</p>
               </div>
             </div>
          </section>

          {/* 7. Outline (Table) */}
          <section>
             <h2 style={{ 
               fontSize: '20px', 
               fontWeight: 'bold', 
               marginBottom: '20px', 
               borderLeft: `4px solid ${themeColor}`, 
               paddingLeft: '12px',
               color: '#4a5568'
             }}>
               開催概要
             </h2>
             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
               <tbody>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '80px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> 日程</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     {course.date} <span style={{ fontSize: '14px', fontWeight: 'normal' }}>({course.dayOfWeek})</span>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '80px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> 会場</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>{course.location}</td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '80px', color: '#718096', fontSize: '14px' }}>
                     价格
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     {course.price} <span style={{ fontSize: '12px', fontWeight: 'normal', color: '#718096' }}>(税別)</span>
                   </td>
                 </tr>
               </tbody>
             </table>
          </section>
        </div>

        {/* 8. CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '16px' }}>
          <button style={{ 
            backgroundColor: themeColor, 
            color: 'white', 
            border: 'none', 
            padding: '22px 80px', 
            borderRadius: '50px', 
            fontSize: '20px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            boxShadow: `0 10px 20px -5px ${themeColor}60`, // Colored shadow
            transition: 'transform 0.2s',
            width: '100%',
            maxWidth: '500px'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            この講座に申し込む
          </button>
          <p style={{ marginTop: '20px', fontSize: '14px', color: '#718096' }}>
            ※定員に達し次第、締め切りとなります
          </p>
        </div>

      </div>

      {/* Footer */}
      <div style={{ 
        textAlign: 'center', 
        padding: '30px', 
        color: '#a0aec0', 
        fontSize: '12px', 
        borderTop: '1px solid #edf2f7',
        marginTop: 'auto'
      }}>
           Copyright © Aoba-BBT All Rights Reserved.
      </div>
    </div>
  );
};