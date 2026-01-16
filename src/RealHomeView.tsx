import React from 'react';
import { Hourglass, Link2Off, RefreshCw, Users, Check, ChevronDown } from 'lucide-react';

interface RealHomeViewProps {
  onScrollDown: () => void;
}

export const RealHomeView: React.FC<RealHomeViewProps> = ({ onScrollDown }) => {
  return (
    <div className="real-home-container" style={{ 
      fontFamily: '"Noto Sans JP", sans-serif', 
      color: '#333',
      backgroundColor: '#fff',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start', 
      boxSizing: 'border-box',
      overflowX: 'hidden'
    }}>

      {/* --- Top Section --- */}
      <div className="top-badge-section" style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        height: 'auto', 
        paddingBottom: '20px'
      }}>
        <div style={{ 
          backgroundColor: '#2563eb', 
          color: 'white', 
          display: 'inline-block',
          padding: '6px 20px', 
          borderRadius: '50px', 
          fontWeight: 'bold', 
          fontSize: '15px',
          boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)'
        }}>
          多忙なマネジャーが1日で変わる
        </div>
      </div>

      {/* --- Main Content --- */}
      <main className="main-content">
        
        {/* Left: Why Now? */}
        <div className="left-column">
          
          <h2 className="section-title">
            なぜ、いま1Day Sprintなのか
          </h2>

          <p className="description-text">
            環境変化が激しい時代、リーダーに求められるのは「正解を出す力」ではなく、考え、判断し、動き続ける力です。しかし現実には多くの課題があります。
          </p>

          <div className="problem-list">
            {[
              { icon: Hourglass, text: '忙しさの中で立ち止まって考える時間が取れない' },
              { icon: Link2Off, text: '学びが点在し、行動につながらない' },
              { icon: RefreshCw, text: '組織や環境の変化に思考が追いつかない' }
            ].map((item, i) => (
              <div key={i} className="problem-item">
                <div style={{ backgroundColor: '#94a3b8', padding: '6px', borderRadius: '50%', color: 'white', display: 'flex', flexShrink: 0 }}>
                  <item.icon size={16} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#334155' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Box */}
          <div 
            onClick={onScrollDown}
            className="action-box"
          >
             「1日で、思考と行動のスイッチを入れ直す」<br/>ための集中型トレーニング
          </div>
        </div>

        {/* Right: Target */}
        <div className="right-column">
          <div className="target-box">
            <div className="target-badge">
              TARGET
            </div>

            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Users size={24} color="#2563eb" />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>想定受講者</h3>
              </div>
              <div style={{ width: '80%', height: '1px', backgroundColor: '#e2e8f0', margin: '8px auto 0' }}></div>
            </div>

            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#64748b', marginBottom: '5px' }}>
              変化の大きい環境で、
            </p>
            <p className="target-main-text">
              意思決定と組織づくりを担う<br/>マネジャー 〜 次世代リーダー層
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['現場の課題解決をリードする方', '変革の起点となる方', 'AI時代の新しいリーダーシップを模索中の方'].map((txt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>
                  <Check color="#009fe8" size={18} strokeWidth={3} flex-shrink={0} /> {txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* --- Footer / Scroll Indicator --- */}
      <div className="scroll-indicator">
         <button 
           onClick={onScrollDown}
           style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#94a3b8' }}
           className="bounce-animation"
         >
           <span style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '2px' }}>ラインナップを見る</span>
           <ChevronDown size={24} />
         </button>
      </div>

      <style>{`
        /* --- Desktop Styles --- */
        .real-home-container {
          min-height: 100vh;
          /* 【修正】PC版：顶部留 15px */
          padding: 15px 4vw 2vh; 
          overflow: hidden;
        }
        .main-content {
          flex: 1;
          display: flex;
          gap: 30px;
          align-items: stretch;
          height: auto;
          margin-top: 0;
        }
        .left-column {
          flex: 1.2;
          display: flex;
          flex-direction: column;
          justify-content: flex-start; 
        }
        .right-column {
          flex: 0.8;
          display: flex;
          flex-direction: column;
        }
        .section-title {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 12px;
          margin-top: 0px;
          border-bottom: 3px solid #009fe8;
          display: inline-block;
          padding-bottom: 4px;
          align-self: flex-start;
        }
        .description-text {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #4a5568;
        }
        .problem-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 15px;
        }
        .problem-item {
          display: flex;
          align-items: center;
          gap: 12px;
          background-color: #f8fafc;
          padding: 8px 15px;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        .action-box {
          background-color: #e0f2fe;
          border: 2px solid #009fe8;
          border-radius: 10px;
          padding: 12px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #0077b6;
          font-weight: bold;
          font-size: 16px;
        }
        .action-box:hover {
           transform: translateY(-2px);
           box-shadow: 0 4px 10px rgba(0,159,232,0.2);
        }

        .target-box {
          border: 2px solid #cbd5e1;
          border-radius: 12px;
          padding: 20px;
          position: relative;
          height: 100%;
          background-color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .target-badge {
          position: absolute;
          top: -14px;
          left: -2px;
          background-color: #2563eb;
          color: white;
          padding: 4px 20px;
          border-radius: 0 20px 20px 0;
          font-weight: bold;
          font-size: 12px;
          letter-spacing: 1px;
        }
        .target-main-text {
          font-size: 20px;
          font-weight: bold;
          color: #009fe8;
          line-height: 1.4;
          margin-bottom: 25px;
        }
        .scroll-indicator {
          height: auto;
          padding-top: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .bounce-animation {
          animation: bounce 2s infinite;
        }

        /* --- Mobile Styles --- */
        @media (max-width: 768px) {
          .real-home-container {
            height: auto; 
            min-height: 100vh;
            /* 【維持】スマホ版は 0px のまま（前回の設定） */
            padding: 0 20px 20px; 
            overflow: visible;
          }
          .top-badge-section {
             margin-top: 10px; 
          }
          .main-content {
            flex-direction: column;
            gap: 30px;
            margin-bottom: 40px;
          }
          .left-column, .right-column {
            flex: auto;
          }
          .section-title {
            font-size: 20px;
          }
          .problem-item {
            padding: 12px;
          }
          .target-box {
            height: auto;
            padding: 25px 20px;
          }
          .action-box:hover {
            transform: none;
            box-shadow: none;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-5px);}
          60% {transform: translateY(-3px);}
        }
      `}</style>
    </div>
  );
};