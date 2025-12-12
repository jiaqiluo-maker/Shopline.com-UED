export type Language = 'en' | 'zh';

export type SectionId = 
  | 'logo' 
  | 'color' 
  | 'typography' 
  | 'wordmark-logo' 
  | 'wordmark-symbol' 
  | 'graphics' 
  | 'photography' 
  | 'illustration';

export interface NavItem {
  id: SectionId;
  labelEn: string;
  labelZh: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavGroup {
  titleEn: string;
  titleZh: string;
  items: NavItem[];
}

export interface ColorSwatch {
  name: string;
  hex: string;
  pantone?: string;
  cmyk?: string;
  rgb?: string;
  isDark?: boolean; // Text color on top
}

export interface TypographyRule {
  role: string;
  size: string;
  weight: string;
  lineHeight: string;
  exampleEn: string;
  exampleZh: string;
}
