import React from 'react';
import { Calendar, MapPin, ArrowLeft, CheckCircle, Lightbulb, Target, Clock, Banknote, ExternalLink } from 'lucide-react';
import { type Course, type CourseType } from './data/data';

interface DetailViewProps {
  course: Course;
  onBack: () => void;
}

const getCourseColor = (type: CourseType): string => {
  switch (type) {
    case '判断': return '#009fe8';
    case '変革': return '#00c4cc';
    case 'AI×問題解決': return '#9f7aea';
    default: return '#009fe8';
  }
};

export const DetailView: React.FC<DetailViewProps> = ({ course, onBack }) => {
  const themeColor = getCourseColor(course.type);

  return (
    <div style={{ 
      fontFamily: '"Noto Sans JP", "Helvetica Neue", Arial, sans-serif', 
      color: '#333', 
      backgroundColor: '#ffffff', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative'
    }}>
      
      {/* Navigation Button */}
      <button 
        onClick={onBack}
        style={{ 
          position: 'fixed', 
          top: '90px',   
          right: '40px', 
          zIndex: 9999, 
          backgroundColor: 'white', 
          border: '1px solid #e2e8f0', 
          borderRadius: '50px',
          padding: '10px 20px',
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          color: '#666',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)' 
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = themeColor;
          e.currentTarget.style.borderColor = themeColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#666';
          e.currentTarget.style.borderColor = '#e2e8f0';
        }}
      >
        <ArrowLeft size={22} /> プログラム一覧に戻る
      </button>

      {/* Main Content */}
      <div style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px', width: '100%' }}>
        
        {/* Hero / Title Section */}
        <div style={{ marginBottom: '50px', borderBottom: '1px solid #eee', paddingBottom: '30px' }}>
          <span style={{ color: themeColor, backgroundColor: 'white', border: `2px solid ${themeColor}`, padding: '6px 16px', borderRadius: '50px', fontWeight: 'bold', fontSize: '14px', display: 'inline-block', marginBottom: '20px' }}>
            {course.type}
          </span>
          <h1 style={{ fontSize: '40px', fontWeight: '900', margin: '0 0 20px 0', lineHeight: '1.3', color: '#1a202c' }}>
            {course.title}
          </h1>
          <p style={{ fontSize: '22px', fontWeight: 'bold', lineHeight: '1.6', color: themeColor }}>
            {course.subtitle.split('\n').map((line, i) => (
              <React.Fragment key={i}>{line}<br/></React.Fragment>
            ))}
          </p>
        </div>

        {/* Description Box */}
        <div style={{ backgroundColor: '#f8f9fa', padding: '32px', borderRadius: '12px', marginBottom: '60px', fontSize: '18px', lineHeight: '1.9', color: '#4a5568', borderLeft: `6px solid ${themeColor}` }}>
          {course.description}
        </div>

        {/* Target Audience */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: themeColor, padding: '8px', borderRadius: '50%', color: 'white' }}>
              <Target size={24} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>こんな人に特におすすめ</h2>
          </div>
          <div style={{ backgroundColor: `${themeColor}10`, border: `1px solid ${themeColor}30`, padding: '24px', borderRadius: '12px' }}>
             {course.recommendedFor.map((rec, idx) => (
               <div key={idx} style={{ fontSize: '18px', fontWeight: 'bold', color: '#2d3748', marginBottom: idx !== course.recommendedFor.length - 1 ? '15px' : '0', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                 <span style={{ color: themeColor }}>●</span>{rec}
               </div>
             ))}
          </div>
        </section>

        {/* Benefits */}
        <section style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: themeColor, padding: '8px', borderRadius: '50%', color: 'white' }}>
              <Lightbulb size={24} />
            </div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>得られること</h2>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {course.benefits.map((benefit, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px', fontSize: '18px', padding: '16px', backgroundColor: 'white', borderBottom: '1px solid #edf2f7' }}>
                <CheckCircle color={themeColor} size={24} style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ lineHeight: '1.6' }}>{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Instructor & Outline - Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          {/* Instructor */}
          <section>
             <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', borderLeft: `4px solid ${themeColor}`, paddingLeft: '12px', color: '#4a5568' }}>登壇講師</h2>
             <div style={{ display: 'flex', gap: '20px', alignItems: 'center', backgroundColor: '#fff', border: '1px solid #e2e8f0', padding: '20px', borderRadius: '12px' }}>
               
               {/* 头像区域：改成图片 */}
               <div style={{ 
                 width: '80px', 
                 height: '80px', 
                 borderRadius: '50%', 
                 overflow: 'hidden', // 确保图片圆形裁剪
                 flexShrink: 0,
                 border: '1px solid #e2e8f0'
               }}>
                 <img 
                   src={course.instructor.image} 
                   alt={course.instructor.name}
                   style={{
                     width: '100%',
                     height: '100%',
                     objectFit: 'cover', // 保持比例填充
                     objectPosition: 'center top' // 稍微靠上对齐，保证人脸居中
                   }} 
                 />
               </div>

               <div>
                 <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>{course.instructor.name}</h3>
                 <p style={{ color: themeColor, fontWeight: 'bold', fontSize: '13px', marginBottom: '6px' }}>{course.instructor.role}</p>
                 <p style={{ fontSize: '12px', color: '#718096', lineHeight: '1.4' }}>{course.instructor.description}</p>
               </div>
             </div>
          </section>

          {/* Outline */}
          <section>
             <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', borderLeft: `4px solid ${themeColor}`, paddingLeft: '12px', color: '#4a5568' }}>開催概要</h2>
             <table style={{ width: '100%', borderCollapse: 'collapse' }}>
               <tbody>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '100px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> 日程</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     {course.date} <span style={{ fontSize: '14px', fontWeight: 'normal' }}>({course.dayOfWeek})</span>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '100px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 時間</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     10:00 - 17:00
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '100px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> 会場</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     <a href={course.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: themeColor, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                       {course.location}
                       <ExternalLink size={14} />
                     </a>
                   </td>
                 </tr>
                 <tr style={{ borderBottom: '1px solid #edf2f7' }}>
                   <th style={{ textAlign: 'left', padding: '16px 8px', width: '100px', color: '#718096', fontSize: '14px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Banknote size={16} /> 価額</div>
                   </th>
                   <td style={{ padding: '16px 8px', fontWeight: 'bold', fontSize: '16px' }}>
                     {course.price}
                   </td>
                 </tr>
               </tbody>
             </table>
          </section>
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '40px', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '16px' }}>
          <button style={{ 
            backgroundColor: themeColor, color: 'white', border: 'none', padding: '22px 80px', borderRadius: '50px', 
            fontSize: '20px', fontWeight: 'bold', cursor: 'pointer', boxShadow: `0 10px 20px -5px ${themeColor}60`, 
            transition: 'transform 0.2s', width: '100%', maxWidth: '500px' 
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
          >
            この講座に申し込む
          </button>
          <div style={{ marginTop: '20px', fontSize: '13px', color: '#718096', lineHeight: '1.6' }}>
            <p>※定員に達し次第、締め切りとなります</p>
            <p>※開催日2日前以降のキャンセルは、全額ご負担いただきます。</p>
            <p>※最少催行人数5名に満たなかった場合、中止とさせていただき受講料全額を返金いたします。</p>
          </div>
        </div>

      </div>
      
    </div>
  );
};