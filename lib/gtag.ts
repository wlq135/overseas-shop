// Google Analytics 4 事件追踪工具
// 在 .env.local 中配置 NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// 发送页面浏览事件（通常在路由切换时调用）
export function pageview(url: string) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag("config", GA_ID, {
    page_path: url,
  });
}

// 发送自定义事件
type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value?: number;
};

export function event({ action, category, label, value }: GTagEvent) {
  if (typeof window === "undefined" || !GA_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

// 联盟点击事件快捷函数
export function trackAffiliateClick(productId: string, productName: string) {
  event({
    action: "affiliate_click",
    category: "engagement",
    label: `${productId} - ${productName}`,
  });
}

// 声明全局 gtag 类型
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js",
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
