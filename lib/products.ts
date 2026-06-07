export interface Product {
  id: string;
  name: string;
  description: string;
  price: number; // in cents (USD) — display only, actual price on vendor site
  image: string;
  affiliateUrl: string; // your affiliate tracking link
  category: string;
}

// ============================================================
// Affiliate Products Config
// Replace affiliateUrl with your own tracking links after approval
// ============================================================

export const products: Product[] = [
  {
    id: "aff_001",
    name: "Hostinger Web Hosting",
    description:
      "The best budget web hosting for beginners. Free domain + SSL certificate included. 1-click WordPress install with 24/7 support.",
    price: 199, // $1.99/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.hostinger.com/?REFERRALCODE=YOUR_CODE",
    category: "Hosting",
  },
  {
    id: "aff_002",
    name: "Namecheap Domain",
    description:
      "Register .com domains for just $5.98/year (first year). Free Whois privacy protection included. Cheaper than GoDaddy.",
    price: 598, // $5.98
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.namecheap.com/?aff=YOUR_ID",
    category: "Domain",
  },
  {
    id: "aff_003",
    name: "Canva Pro",
    description:
      "Create professional graphics, logos, and social media posts with drag-and-drop ease. Thousands of templates included.",
    price: 1299, // $12.99/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.canva.com/pro/?referrer=YOUR_CODE",
    category: "Design",
  },
  {
    id: "aff_004",
    name: "Notion Plus",
    description:
      "All-in-one workspace for notes, databases, and project management. Perfect for teams and personal productivity.",
    price: 1000, // $10/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.notion.so/pricing?referral=YOUR_CODE",
    category: "Productivity",
  },
  {
    id: "aff_005",
    name: "ConvertKit",
    description:
      "Email marketing platform built for creators. Newsletter, automation sequences, and audience segmentation made easy.",
    price: 2900, // $29/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://convertkit.com?ref=YOUR_ID",
    category: "Marketing",
  },
  {
    id: "aff_006",
    name: "SEMrush SEO Toolkit",
    description:
      "Complete SEO toolkit: keyword research, competitor analysis, site audit, and rank tracking. Essential for any website owner.",
    price: 11995, // $119.95/mo
    image: "/placeholder-product.jpg",
    affiliateUrl: "https://www.semrush.com/?ref=YOUR_ID",
    category: "SEO",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
