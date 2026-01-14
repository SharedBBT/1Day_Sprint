import React from 'react';
import { Hourglass, Link2Off, RefreshCw, Users, Check, ChevronDown } from 'lucide-react';

interface RealHomeViewProps {
  onScrollDown: () => void;
}

export const RealHomeView: React.FC<RealHomeViewProps> = ({ onScrollDown }) => {
  return (
    <div style={{ 
      fontFamily: '"Noto Sans JP", sans-serif', 
      color: '#333',
      backgroundColor: '#fff',
      height: '100vh',         
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between', 
      padding: '2vh 4vw',      
      boxSizing: 'border-box',
      overflow: 'hidden'       
    }}>

      {/* --- Header Section (Compact) --- */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', height: '15%' }}>
        <div>
          <p style={{ fontSize: '14px', color: '#666', fontWeight: 'bold', marginBottom: '4px' }}>
            不確実な時代のリーダーのための
          </p>
          <h1 style={{ fontSize: '36px', fontWeight: '900', lineHeight: '1', marginBottom: '8px', letterSpacing: '-0.02em' }}>
            1Day Sprintシリーズ
          </h1>
          <div style={{ 
            backgroundColor: '#2563eb', color: 'white', display: 'inline-block',
            padding: '4px 16px', borderRadius: '50px', fontWeight: 'bold', fontSize: '13px'
          }}>
            2026年2–3月 ｜ 春の芽吹きに向けた集中トレーニング
          </div>
        </div>
        <div style={{ textAlign: 'right' }}>
           {/* 画像を削除しました */}
           <p style={{ fontSize: '10px', color: '#666', fontWeight: 'bold', marginTop: '10px' }}>
             
           </p>
        </div>
      </header>

      {/* --- Main Content (Compact Grid) --- */}
      <main style={{ 
        flex: 1, 
        display: 'flex', 
        gap: '30px', 
        alignItems: 'stretch',
        height: '75%', 
        marginTop: '1vh'
      }}>
        
        {/* Left: Why Now? */}
        <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          
          {/* 【修正】marginTop を 50px に変更 */}
          <h2 style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            marginBottom: '15px', 
            marginTop: '50px', // 50pxに更新
            borderBottom: '3px solid #009fe8', 
            display: 'inline-block', 
            paddingBottom: '4px' 
          }}>
            なぜ、いま1Day Sprintなのか
          </h2>

          <p style={{ fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', color: '#4a5568' }}>
            環境変化が激しい時代、リーダーに求められるのは「正解を出す力」ではなく、考え、判断し、動き続ける力です。しかし現実には多くの課題があります。
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
            {[
              { icon: Hourglass, text: '忙しさの中で立ち止まって考える時間が取れない' },
              { icon: Link2Off, text: '学びが点在し、行動につながらない' },
              { icon: RefreshCw, text: '組織や環境の変化に思考が追いつかない' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: '#f8fafc', padding: '10px 15px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ backgroundColor: '#94a3b8', padding: '6px', borderRadius: '50%', color: 'white', display: 'flex' }}>
                  <item.icon size={16} />
                </div>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#334155' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Action Box */}
          <div 
            onClick={onScrollDown}
            style={{ 
              backgroundColor: '#e0f2fe', border: '2px solid #009fe8', borderRadius: '10px',
              padding: '15px', textAlign: 'center', cursor: 'pointer', transition: 'all 0.2s',
              color: '#0077b6', fontWeight: 'bold', fontSize: '16px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,159,232,0.2)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
             「1日で、思考と行動のスイッチを入れ直す」<br/>ための集中型トレーニング
          </div>
        </div>

        {/* Right: Target */}
        <div style={{ flex: '0.8', display: 'flex', flexDirection: 'column' }}>
          <div style={{ 
            border: '2px solid #cbd5e1', borderRadius: '12px', padding: '25px',
            position: 'relative', height: '100%', backgroundColor: 'white',
            display: 'flex', flexDirection: 'column', justifyContent: 'center'
          }}>
            <div style={{ 
              position: 'absolute', top: '-14px', left: '-2px', backgroundColor: '#2563eb',
              color: 'white', padding: '4px 20px', borderRadius: '0 20px 20px 0',
              fontWeight: 'bold', fontSize: '12px', letterSpacing: '1px'
            }}>
              TARGET
            </div>

            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Users size={24} color="#2563eb" />
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', margin: 0 }}>想定受講者</h3>
              </div>
              <div style={{ width: '80%', height: '1px', backgroundColor: '#e2e8f0', margin: '10px auto 0' }}></div>
            </div>

            <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#64748b', marginBottom: '5px' }}>
              変化の大きい環境で、
            </p>
            <p style={{ fontSize: '20px', fontWeight: 'bold', color: '#009fe8', lineHeight: '1.4', marginBottom: '30px' }}>
              意思決定と組織づくりを担う<br/>マネジャー 〜 次世代リーダー層
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {['現場の課題解決をリードする方', '変革の起点となる方', 'AI時代の新しいリーダーシップを模索中の方'].map((txt, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#475569', fontWeight: '500' }}>
                  <Check color="#009fe8" size={18} strokeWidth={3} /> {txt}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* --- Footer / Scroll Indicator --- */}
      <div style={{ height: '8%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
         <button 
           onClick={onScrollDown}
           style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#94a3b8', animation: 'bounce 2s infinite' }}
         >
           <span style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '2px' }}>ラインナップを見る</span>
           <ChevronDown size={24} />
         </button>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-5px);}
          60% {transform: translateY(-3px);}
        }
      `}</style>
    </div>
  );
};