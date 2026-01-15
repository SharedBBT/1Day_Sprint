import React from 'react';

export const Footer: React.FC = () => {
  const links = [
    { label: 'お問合せ', url: 'https://www.bbt757.com/svlEnquete/jsp/user/top?id=f131eeaece2730e1d751341179494ca5' },
    { label: 'プライバシーポリシー', url: 'https://aoba-bbt.com/privacy/' },
    { label: '利用規約', url: 'https://aoba-bbt.com/agreement/' },
    { label: '会社概要', url: 'https://aoba-bbt.com/aoba-bbt/#section03' },
  ];

  return (
    <footer style={{
      backgroundColor: '#f8fafc', // 非常淡的灰色背景
      borderTop: '1px solid #e2e8f0', // 顶部细线
      padding: '40px 20px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#64748b',
      marginTop: 'auto' // 确保在 Flex 布局中沉底
    }}>
      {/* Links Row */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        flexWrap: 'wrap', 
        marginBottom: '20px' 
      }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              textDecoration: 'none', 
              color: '#475569', 
              fontWeight: '500',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#009fe8'} // 悬停变蓝色
            onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Copyright Row */}
      <div>
        Copyright © Aoba-BBT All Rights Reserved.
      </div>
    </footer>
  );
};