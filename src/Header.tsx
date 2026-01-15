import React from 'react';

// Header 高度保持不变
const HEADER_HEIGHT = '70px';

export const Header: React.FC = () => {
  return (
    <>
      {/* 1. 占位块 */}
      <div style={{ height: HEADER_HEIGHT, width: '100%' }} />

      {/* 2. Header Container */}
      <header className="app-header">
        
        {/* 左側：タイトルエリア */}
        <div 
          className="header-left"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* 上方小字：スマホでも一行を強制 */}
          <span className="header-subtitle">
            不確実な時代のリーダーのための
          </span>
          {/* 下方主标题 */}
          <h1 className="header-title">
            1Day Sprintシリーズ
          </h1>
        </div>

        {/* 右側：Sloganエリア */}
        <div className="header-right">
          <span className="slogan-text">
            知のネットワークは、
            <br className="mobile-break" /> {/* スマホでのみ有効になる改行 */}
            人間の能力を∞に伸ばす
          </span>
        </div>

        <style>{`
          /* --- PC (Default) Styles --- */
          .app-header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: ${HEADER_HEIGHT};
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(8px);
            border-bottom: 1px solid #e2e8f0;
            z-index: 1000;
            display: flex;
            align-items: center;
            padding: 0 40px;
            box-sizing: border-box;
            justify-content: space-between;
          }

          .header-left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            cursor: pointer;
          }

          .header-subtitle {
            font-size: 10px;
            color: #666;
            font-weight: bold;
            margin-bottom: 2px;
            line-height: 1;
            white-space: nowrap; /* 【重要】強制的に一行にする */
          }

          .header-title {
            font-size: 22px;
            font-weight: 900;
            margin: 0;
            color: #333;
            line-height: 1;
            letter-spacing: -0.02em;
            font-family: "Noto Sans JP", sans-serif;
            white-space: nowrap; /* タイトルも折り返さない */
          }

          .header-right {
            text-align: right;
          }

          .slogan-text {
            font-size: 11px;
            color: #666;
            letter-spacing: 0.5px;
            font-weight: bold;
            line-height: 1.4;
          }

          /* デフォルトでは改行タグを無効化（PC版は1行） */
          .mobile-break {
            display: none;
          }

          /* --- Mobile Styles --- */
          @media (max-width: 768px) {
            .app-header {
              padding: 0 15px; /* パディングを少し狭くしてスペース確保 */
            }

            .header-subtitle {
              font-size: 9px; /* スマホで一行に収めるため少し小さく */
            }

            .header-title {
              font-size: 18px; /* スマホ用にサイズ調整 */
            }

            .slogan-text {
              font-size: 10px; /* 少し小さく */
            }

            /* 【重要】スマホの時だけ改行を有効にする */
            .mobile-break {
              display: inline; 
            }
          }
        `}</style>
      </header>
    </>
  );
};