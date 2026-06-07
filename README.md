# 🌍 海外联盟营销独立站

纯前端静态站，**零后端、零支付、零成本**。用户点击按钮跳转到联盟链接，成交后你拿佣金。

## 功能
- ✅ 商品展示落地页
- ✅ 联盟链接跳转（点击即跳第三方）
- ✅ 分类筛选
- ✅ 响应式设计
- ✅ 可部署到 Vercel / Netlify / Cloudflare Pages（全部免费）

## 快速开始

```bash
npm install
npm run dev
```

## 部署到 Vercel（免费）

```bash
# 1. 推送到 GitHub
git init
git add .
git commit -m "init affiliate store"
# 创建GitHub仓库后 push

# 2. 在 Vercel 导入项目
# https://vercel.com → Add New Project → Import Git Repo
# Framework Preset 选 Next.js
# Deploy
```

## 配置联盟链接

编辑 `lib/products.ts`，把 `affiliateUrl` 换成你的联盟链接：

```ts
affiliateUrl: "https://www.hostinger.com/?REFERRALCODE=YOUR_CODE"
```

### 常用联盟平台注册

| 平台 | 注册地址 | 佣金 | 适合推广 |
|-----|---------|------|---------|
| **Hostinger** | [hostinger.com/affiliates](https://www.hostinger.com/affiliates) | 60% | 建站主机 |
| **Namecheap** | [namecheap.com/affiliates](https://www.namecheap.com/affiliates/) | 高达35% | 域名 |
| **Canva** | [canva.com/affiliates](https://www.canva.com/affiliates/) | 高达$36/订阅 | 设计工具 |
| **ConvertKit** | [convertkit.com/affiliate](https://convertkit.com/affiliate) | 30%终身 | 邮件营销 |
| **SEMrush** | [berush.com](https://berush.com) | 40%终身 | SEO工具 |
| **Amazon Associates** | [affiliate-program.amazon.com](https://affiliate-program.amazon.com/) | 1-10% | 综合 |
| **ClickBank** | [clickbank.com](https://www.clickbank.com/) | 50-75% | 数字课程 |

## 推广获客

1. **TikTok/Instagram Reels**：做"3个做独立站必装的工具"类短视频
2. **Reddit**：在 r/entrepreneur / r/sidehustle 分享你的工具清单
3. **SEO**：写评测文章，比如"Hostinger vs SiteGround 2024"
4. **Pinterest**：做信息图 pinning 联盟链接

## 扩展
- 接入 Google Analytics 追踪点击
- 添加邮件订阅（用 ConvertKit 免费版）
- A/B 测试不同文案
