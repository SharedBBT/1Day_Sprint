// src/data.ts (注意：这里只能放数据，不能放 <div>)

export type CourseType = '判断' | '変革' | 'AI×問題解決';

export interface Course {
  id: number;
  date: string;
  dayOfWeek: string;
  type: CourseType;
  title: string;
  subtitle: string;
  location: string;
  price: string;
  instructor: {
    name: string;
    role: string;
    description: string;
  };
  benefits: string[];
  recommendedFor: string[];
  description: string;
}

export const courses: Course[] = [
  {
    id: 1,
    date: '2/9',
    dayOfWeek: '月',
    type: '判断',
    location: '六番町',
    price: '78,000円',
    title: '財務判断 1Day Sprint',
    subtitle: '数字は「正解」を教えてくれない。\n判断の筋をつくる、財務の使い方。',
    description: '数字は「正解」を教えてくれない。不確実な状況でも判断ができる、財務の使い方を身につける1日。',
    benefits: [
      '数字を説明ではなく判断に使う視点',
      '「良さそう／不安」を言語化できる判断軸',
      '財務を“専門家任せ”にしない思考の土台'
    ],
    recommendedFor: [
      '数字を見て判断しているつもりだが、どこか腹落ちしていない方'
    ],
    instructor: {
      name: '大原 達朗',
      role: 'BBT大学経営学部長',
      description: '一般財団法人日本M&Aアドバイザー協会代表理事／会長'
    }
  },
  {
    id: 2,
    date: '2/24',
    dayOfWeek: '火',
    type: '変革',
    location: '麹町ラウンジ',
    price: '78,000円',
    title: '自己変革 1Day Sprint',
    subtitle: '変革は、組織の前に\nまず自分から始まる。',
    description: '変革は、組織の前にまず自分から始まる。無意識の思考パターンに気づき、次の一歩を選び直す1日。',
    benefits: [
      '自分の判断・反応のクセの可視化',
      'なぜ同じところで立ち止まるのかの理解',
      '変化に向けた「自分なりの問い」'
    ],
    recommendedFor: [
      '次の挑戦に踏み出したいが、どこかブレーキを感じている方'
    ],
    instructor: {
      name: '山本 伸一',
      role: 'Aoba-BBT リーダーシップ講師',
      description: ''
    }
  },
  {
    id: 3,
    date: '3/2',
    dayOfWeek: '月',
    type: '変革',
    location: '麹町ラウンジ',
    price: '78,000円',
    title: '関係性変革 1Day Sprint',
    subtitle: '成果は個人ではなく、\n関係性から生まれる。',
    description: '成果は個人ではなく、関係性から生まれる。対話の質を変え、組織が動き出す関わり方を体感する1日。',
    benefits: [
      '相手の反応が変わる聴き方・問い方',
      '摩擦や停滞が起きる理由の構造理解',
      '関係性を“扱えるもの”として捉える視点'
    ],
    recommendedFor: [
      '部下・同僚との関係性に、もどかしさを感じている方'
    ],
    instructor: {
      name: '山本 伸一',
      role: 'Aoba-BBT リーダーシップ講師',
      description: ''
    }
  },
  {
    id: 4,
    date: '3/5',
    dayOfWeek: '木',
    type: 'AI×問題解決',
    location: '麹町ラウンジ',
    price: '78,000円',
    title: 'AI×思考の構造化 1Day Sprint',
    subtitle: '問題は「解き方」より、\n「定義」で決まる。',
    description: '問題は「解き方」より「定義」で決まる。AIを使い、複雑な状況を構造化する思考を鍛える1日。',
    benefits: [
      '問題を整理し直す論点設計力',
      'AIを“答え出し”ではなく“思考の相棒”にする使い方',
      '課題が曖昧な状態から抜け出す手応え'
    ],
    recommendedFor: [
      '課題が多すぎて、どこから手をつけるべきか悩んでいる方'
    ],
    instructor: {
      name: '宇野 令一郎',
      role: 'Aoba-BBT 常務執行役員',
      description: 'BBT大学経営学部講師'
    }
  },
  {
    id: 5,
    date: '3/19',
    dayOfWeek: '木',
    type: 'AI×問題解決',
    location: '麹町ラウンジ',
    price: '78,000円',
    title: 'AI×実務で解く力 1Day Sprint',
    subtitle: '考えたことが、\n実行されなければ意味がない。',
    description: '考えたことが、実行されなければ意味がない。AIを使い、構想を行動計画に落とし込む1日。',
    benefits: [
      'アイデアを具体的なアクションに変える力',
      'AIを使った実行計画のつくり方',
      '「やることが決まらない」状態からの脱却'
    ],
    recommendedFor: [
      '考えはあるのに、行動に移しきれていない方'
    ],
    instructor: {
      name: '宇野 令一郎',
      role: 'Aoba-BBT 常務執行役員',
      description: 'BBT大学経営学部講師'
    }
  },
  {
    id: 6,
    date: '3/23',
    dayOfWeek: '月',
    type: '変革',
    location: '麹町ラウンジ',
    price: '78,000円',
    title: '組織変革 1Day Sprint',
    subtitle: '人は命令ではなく、\n「意味」で動く。',
    description: '人は命令ではなく、「意味」で動く。組織が動き続けるための、変革の原理を掴む1日。',
    benefits: [
      '組織が停滞する本当の理由の理解',
      'ビジョンや言葉が持つ推進力の再認識',
      '変革を“仕組み”として捉える視点'
    ],
    recommendedFor: [
      '変えたいのに、なぜか組織が動かないと感じている方'
    ],
    instructor: {
      name: '山本 伸一',
      role: 'Aoba-BBT リーダーシップ講師',
      description: ''
    }
  }
];