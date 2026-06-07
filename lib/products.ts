export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents (USD) — 展示用，实际价格在第三方
  image: string;
  affiliateUrl: string; // 联盟推广链接
  category: string;
}

// ============================================================
// 联盟产品配置
// 把 affiliateUrl 替换为你自己的联盟链接即可
// ============================================================

export const products: Product[] = [
  {
    id: "aff_001",
    name: "Hostinger Web Hosting",
    description:
      "建独立站必备：便宜好用的海外主机，送免费域名+SSL证书。1-click安装WordPress，24/7客服。",
    price: 199, // $1.99/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.hostinger.com/?REFERRALCODE=YOUR_CODE",
    category: "建站工具",
  },
  {
    id: "aff_002",
    name: "Namecheap Domain",
    description:
      "注册.com域名只要$5.98/年（首年），赠送Whois隐私保护。比GoDaddy便宜一半。",
    price: 598, // $5.98
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.namecheap.com/?aff=YOUR_ID",
    category: "域名",
  },
  {
    id: "aff_003",
    name: "Canva Pro",
    description:
      "设计小白也能做出专业海报/Logo/社交媒体图。海量模板，拖拽即用。",
    price: 1299, // $12.99/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.canva.com/pro/?referrer=YOUR_CODE",
    category: "设计工具",
  },
  {
    id: "aff_004",
    name: "Notion Plus",
    description:
      "All-in-one工作空间，笔记、数据库、项目管理全搞定。团队协作神器。",
    price: 1000, // $10/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.notion.so/pricing?referral=YOUR_CODE",
    category: "效率工具",
  },
  {
    id: "aff_005",
    name: "ConvertKit",
    description:
      "邮件营销工具，适合做Newsletter、自动化邮件序列、用户分层。创作者首选。",
    price: 2900, // $29/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://convertkit.com?ref=YOUR_ID",
    category: "营销工具",
  },
  {
    id: "aff_006",
    name: "SEMrush SEO Toolkit",
    description:
      "SEO分析神器：关键词研究、竞品分析、网站审计、排名追踪。做独立站必装。",
    price: 11995, // $119.95/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.semrush.com/?ref=YOUR_ID",
    category: "SEO工具",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
