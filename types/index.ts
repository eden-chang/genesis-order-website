// 공통 타입 정의

export interface Page {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export interface MenuItem {
  title: string;
  href: string;
  icon?: string;
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    discord?: string;
    github?: string;
  };
}
