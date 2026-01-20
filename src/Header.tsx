import React from 'react';
// 【変更】アイコンを Download/Edit から Mail/List に変更
import { Mail, List } from 'lucide-react';

const HEADER_HEIGHT = '70px';

export const Header: React.FC = () => {
  return (
    <>
      <div style={{ height: HEADER_HEIGHT, width: '100%' }} />

      <header className="app-header">
        {/* 左侧：Logo + Text Group */}
        <div 
          className="header-left"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Logo (Hidden on mobile) */}
          <img 
            src="https://github.com/SharedBBT/psa-assets/blob/main/ChatGPT%20Image%202025%E5%B9%B411%E6%9C%8819%E6%97%A5%2014_03_27.png?raw=true" 
            alt="Aoba-BBT Logo"
            className="header-logo"
          />
          
          {/* Text Group */}
          <div className="header-text-group">
            <span className="header-subtitle">
              不確実な時代のリーダーのための
            </span>
            <h1 className="header-title">
              Aoba-BBT 1Day Sprintシリーズ
            </h1>
          </div>
        </div>

        {/* 右侧：Buttons */}
        <div className="header-right">
          {/* 1. お問合せ Button */}
          <button 
            className="header-btn secondary-btn" 
            onClick={() => window.open('https://www.bbt757.com/svlEnquete/jsp/user/top?id=f131eeaece2730e1d751341179494ca5', '_blank')}
          >
            <Mail size={16} />
            <span className="btn-text">お問合せ</span>
          </button>
          
          {/* 2. プログラム一覧 Button (Scroll) */}
          <button 
            className="header-btn primary-btn"
            onClick={() => {
              const listElement = document.getElementById('program-list');
              if (listElement) listElement.scrollIntoView({ behavior: 'smooth' });
              else window.scrollTo({ top: 500, behavior: 'smooth' });
            }}
          >
            <List size={16} />
            <span className="btn-text">プログラム一覧</span>
          </button>
        </div>

        <style>{`
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
            align-items: center;
            gap: 15px;
            cursor: pointer;
          }

          .header-logo {
            height: 40px;
            width: auto;
            object-fit: contain;
          }

          .header-text-group {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .header-subtitle {
            font-size: 10px;
            color: #666;
            font-weight: bold;
            margin-bottom: 2px;
            line-height: 1;
            white-space: nowrap;
          }

          .header-title {
            font-size: 20px;
            font-weight: 900;
            margin: 0;
            color: #333;
            letter-spacing: -0.02em;
            font-family: "Noto Sans JP", sans-serif;
            white-space: nowrap;
            line-height: 1.1;
          }

          .header-right {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .header-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: bold;
            font-size: 13px;
            cursor: pointer;
            transition: all 0.2s;
            font-family: "Noto Sans JP", sans-serif;
          }

          .secondary-btn {
            background-color: #f1f5f9;
            color: #475569;
            border: 1px solid #cbd5e1;
          }
          .secondary-btn:hover {
            background-color: #e2e8f0;
          }

          .primary-btn {
            background-color: #009fe8;
            color: white;
            box-shadow: 0 2px 5px rgba(0, 159, 232, 0.3);
          }
          .primary-btn:hover {
            background-color: #008ac9;
            transform: translateY(-1px);
          }

          /* --- Mobile Styles --- */
          @media (max-width: 768px) {
            .app-header {
              padding: 0 15px;
              height: 60px;
            }
            .header-left {
              gap: 0; 
            }
            .header-logo {
              display: none; 
            }
            .header-text-group {
              display: flex; 
            }
            .header-subtitle {
              font-size: 9px;
            }
            .header-title {
              font-size: 14px;
              max-width: none; 
              overflow: visible;
              white-space: normal; 
            }
            .header-right {
              gap: 8px;
            }
            .header-btn {
              padding: 6px 10px;
              font-size: 11px;
            }
            .btn-text {
              display: none;
            }
            .primary-btn .btn-text {
              display: block; 
            }
          }
          
          @media (max-width: 380px) {
             .header-title { font-size: 12px; }
          }
        `}</style>
      </header>
    </>
  );
};