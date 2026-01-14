import React from 'react';

// 这里定义 Header 的样式，高度设为 70px 左右比较合适
const HEADER_HEIGHT = '70px';

export const Header: React.FC = () => {
  return (
    <>
      {/* 1. 占位块：防止 Header 盖住下面的内容 */}
      <div style={{ height: HEADER_HEIGHT, width: '100%' }} />

      {/* 2. 真正的 Header：固定定位 */}
      <header style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: HEADER_HEIGHT,
        backgroundColor: 'rgba(255, 255, 255, 0.95)', // 微微透明的白色背景
        backdropFilter: 'blur(8px)', // 毛玻璃效果
        borderBottom: '1px solid #e2e8f0',
        zIndex: 1000, // 确保在最上层
        display: 'flex',
        alignItems: 'center',
        padding: '0 40px',
        boxSizing: 'border-box',
        justifyContent: 'space-between'
      }}>
        
        {/* 左侧：Logo 图标 */}
        <img 
          src="https://github.com/SharedBBT/psa-assets/blob/main/ChatGPT%20Image%202025%E5%B9%B411%E6%9C%8819%E6%97%A5%2014_03_27.png?raw=true" 
          alt="Logo Icon"
          style={{ height: '40px', width: 'auto', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // 点击回到顶部
        />

        {/* 右侧：Slogan */}
        <span style={{ fontSize: '11px', color: '#666', letterSpacing: '0.5px', fontWeight: 'bold' }}>
          知のネットワークは、人間の能力を∞に伸ばす
        </span>
      </header>
    </>
  );
};