import { NavGroup, ColorSwatch, TypographyRule } from './types';
import { 
  LayoutTemplate, 
  Palette, 
  Type, 
  FileType,
  MessageSquare,
  Shapes,
  Camera,
  PenTool,
  Layers
} from 'lucide-react';

export const SHOPLINE_BLUE = '#0061ff';
export const LOGO_URL = 'https://i.postimg.cc/9XSTwTGX/SHOPLINE_LOGO.png';

export const TRANSLATIONS = {
  en: {
    title: 'Brand Guidelines',
    subtitle: 'The foundation of the SHOPLINE brand identity.',
    switchLang: '中文',
    searchPlaceholder: 'Search guidelines...',
    download: 'Download Assets',
    do: 'Do',
    dont: "Don't",
    clearSpace: 'Clear Space',
    minSize: 'Minimum Size',
    primaryColors: 'Primary Colors',
    primaryColorsDesc: 'Midnight Blue for logo only.',
    secondaryColors: 'Secondary Colors',
    secondaryColorsDesc: 'Our secondary colour palette was designed to complement our primary color. Applying our brand color palette will build brand awareness by creating a strong connection cross all of our brand touchpoints.',
    neutralColors: 'Neutral Colors',
    neutralColorsDesc: 'Mainly used for grayscale, or background text colour.',
    seAsiaColors: 'Border & SE Asia Market',
    illustrationColors: 'Illustration Colors',
    hktwColors: 'HK & Taiwan Market',
    hktwColorsDesc: 'Our secondary palette contains a variety of colours to keep the palette fresh and interesting.',
    specialColors: 'Special Colors',
    usageProportions: 'Color Usage Proportions',
    colorFilling: 'Color Filling Specifications',
    realWorld: 'Real World Applications',
    downloadAll: 'Download All Color Assets',
    typographyTitle: 'Typography',
    primaryFont: 'Primary Typeface',
    logoUsage: 'Logo Usage',
    logoDesc: 'The SHOPLINE logo is the most immediate representation of our company, our people, and our brand to the world.',
    colorDesc: 'Our color scheme centers around the core brand color Midnight Blue. The added Blue Ribbon and Flamingo add brightness and vitality to the overall look.',
    typeDesc: 'Typography plays a crucial role in communicating our brand tone. We use clean, geometric sans-serifs.',
  },
  zh: {
    title: '品牌规范手册',
    subtitle: 'SHOPLINE 品牌标识的基础指南。',
    switchLang: 'English',
    searchPlaceholder: '搜索指南...',
    download: '下载资源',
    do: '正确',
    dont: '错误',
    clearSpace: '安全空间',
    minSize: '最小尺寸',
    primaryColors: '原色',
    primaryColorsDesc: '仅限标志使用午夜蓝。',
    secondaryColors: '辅助颜色',
    secondaryColorsDesc: '我们的辅助配色方案旨在补充我们的核心品牌色。应用我们的品牌配色方案将通过在所有品牌接触点建立强有力的联系来建立品牌知名度。',
    neutralColors: '中性色',
    neutralColorsDesc: '主要用于灰度，或底层文字颜色。',
    seAsiaColors: '边境、东南亚市场常用颜色',
    illustrationColors: '插画常用颜色',
    hktwColors: '港台市场常用颜色',
    hktwColorsDesc: '我们的辅助调色板包含各种颜色，以保持色彩搭配的新鲜和有趣。',
    specialColors: '特殊颜色',
    usageProportions: '色彩使用比例',
    colorFilling: '颜色灌装规范',
    realWorld: '颜色实际应用',
    downloadAll: '下载所有颜色资源',
    typographyTitle: '字体',
    primaryFont: '主要字体',
    logoUsage: '标志使用',
    logoDesc: 'SHOPLINE 标志是我们公司、员工和品牌向世界展示的最直接形象。',
    colorDesc: '我们的配色方案一直以核心品牌色午夜蓝为中心。新增的蓝丝带色和弗拉明戈色则为整体增添了一抹明亮和活力。',
    typeDesc: '字体在传达我们的品牌基调方面起着至关重要的作用。我们使用干净的几何无衬线字体。',
  }
};

export const NAV_GROUPS: NavGroup[] = [
  {
    titleEn: 'Basics',
    titleZh: '基础知识',
    items: [
      { id: 'logo', labelEn: 'Logo', labelZh: '标识', icon: LayoutTemplate },
      { id: 'color', labelEn: 'Color', labelZh: '颜色', icon: Palette },
      { id: 'typography', labelEn: 'Typography', labelZh: '排版', icon: Type },
    ]
  },
  {
    titleEn: 'Sub-brand',
    titleZh: '子品牌',
    items: [
      { id: 'wordmark-logo', labelEn: 'Sub-brand Logo', labelZh: '子品牌标志', icon: Layers },
      { id: 'wordmark-symbol', labelEn: 'Sub-brand Symbol', labelZh: '子品牌符号', icon: MessageSquare },
    ]
  },
  {
    titleEn: 'Visual Language',
    titleZh: '视觉语言',
    items: [
      { id: 'graphics', labelEn: 'Graphic Devices', labelZh: '图形设备', icon: Shapes },
      { id: 'photography', labelEn: 'Photography', labelZh: '摄影', icon: Camera },
      { id: 'illustration', labelEn: 'Illustration', labelZh: '插图', icon: PenTool },
    ]
  }
];

export const COLOR_ASSETS_ZIP = 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/YLc8/guidelines-colors-20251211.zip';

export const PRIMARY_COLORS: ColorSwatch[] = [
  { name: 'Midnight', hex: '#00142d', rgb: '0, 20, 45', cmyk: '100, 55, 0, 80', pantone: '282U / 282C', isDark: true },
];

export const SECONDARY_COLORS: ColorSwatch[] = [
  { name: 'Green Vogue', hex: '#052855', rgb: '5, 40, 85', cmyk: '95, 55, 0, 65', pantone: '295U / 295C', isDark: true },
  { name: 'Athens Gray', hex: '#f7f8f9', rgb: '247, 248, 249', cmyk: '1, 0, 0, 2', pantone: 'TBD', isDark: false },
  { name: 'Blue Ribbon', hex: '#0061ff', rgb: '0, 97, 255', cmyk: '80, 55, 0, 0', pantone: '2175U / 2387C', isDark: true },
  { name: 'Flamingo', hex: '#fe7200', rgb: '254, 114, 0', cmyk: '0, 55, 100, 0', pantone: '151U / 1505C', isDark: true },
];

export const NEUTRAL_COLORS: ColorSwatch[] = [
  { name: 'Midnight', hex: '#00142d', rgb: '0, 20, 45', cmyk: '100, 55, 0, 80', isDark: true },
  { name: 'Big Stone', hex: '#1f3147', rgb: '31, 49, 71', cmyk: '56, 31, 0, 72', isDark: true },
  { name: 'Fiord', hex: '#3e4d60', rgb: '62, 77, 96', cmyk: '35, 20, 0, 62', isDark: true },
  { name: 'Shuttle Gray', hex: '#5d6a7a', rgb: '93, 106, 122', cmyk: '24, 13, 0, 52', isDark: true },
  { name: 'Storm Gray', hex: '#7c808b', rgb: '124, 128, 139', cmyk: '11, 8, 0, 45', isDark: true },
  { name: 'Chateau Green', hex: '#929ba4', rgb: '146, 155, 164', cmyk: '11, 5, 0, 36', isDark: false },
  { name: 'Iron', hex: '#b1b7be', rgb: '177, 183, 190', cmyk: '7, 4, 0, 25', isDark: false },
  { name: 'Athens Gray', hex: '#d0d3d8', rgb: '208, 211, 216', cmyk: '4, 2, 0, 15', isDark: false },
  { name: 'Athens Gray Light', hex: '#eff0f1', rgb: '239, 240, 241', cmyk: '1, 0, 0, 5', isDark: false },
  { name: 'White', hex: '#ffffff', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', isDark: false },
];

export const SE_ASIA_COLORS: ColorSwatch[] = [
  { name: 'Denim', hex: '#1657d9', rgb: '22, 87, 217', cmyk: '90, 60, 0, 15', isDark: true },
  { name: 'Blue Ribbon', hex: '#356dff', rgb: '53, 109, 255', cmyk: '79, 57, 0, 0', isDark: true },
  { name: 'Blue Ribbon Light', hex: '#3a7dff', rgb: '58, 125, 255', cmyk: '77, 51, 0, 0', isDark: false },
  { name: 'Shocking Orange', hex: '#f86140', rgb: '248, 97, 64', cmyk: '0, 61, 74, 3', isDark: false },
  { name: 'California', hex: '#fe9e0f', rgb: '254, 158, 15', cmyk: '0, 38, 94, 0', isDark: false },
  { name: 'Shamrock', hex: '#35c08e', rgb: '53, 192, 142', cmyk: '72, 0, 26, 25', isDark: false },
  { name: 'Granny Apple', hex: '#d6fae7', rgb: '214, 250, 231', cmyk: '14, 0, 8, 2', isDark: false },
  { name: 'Forget Me Not', hex: '#ffebe7', rgb: '255, 235, 231', cmyk: '0, 8, 9, 0', isDark: false },
  { name: 'Beach', hex: '#ffedc9', rgb: '255, 237, 201', cmyk: '0, 7, 21, 0', isDark: false },
  { name: 'Beach Light', hex: '#e2f0ff', rgb: '226, 240, 255', cmyk: '0, 7, 21, 0', isDark: false },
];

export const ILLUSTRATION_COLORS: ColorSwatch[] = [
  { name: 'Dodger Blue', hex: '#2c98ff', rgb: '44, 152, 255', isDark: false },
  { name: 'Malibu', hex: '#70baff', rgb: '112, 186, 255', isDark: false },
  { name: 'Zumthor', hex: '#c2e1ff', rgb: '194, 225, 255', isDark: false },
  { name: 'Periwinkle', hex: '#97a9ff', rgb: '151, 169, 255', isDark: false },
  { name: 'Periwinkle 2', hex: '#c2ccff', rgb: '194, 204, 255', isDark: false },
  { name: 'Periwinkle 3', hex: '#ebeeff', rgb: '235, 238, 255', isDark: false },
  { name: 'Picton Blue', hex: '#32cce6', rgb: '50, 204, 230', isDark: false },
  { name: 'Charlotte', hex: '#a4e8f4', rgb: '164, 232, 244', isDark: false },
  { name: 'Charlotte 2', hex: '#dbf6fb', rgb: '219, 246, 251', isDark: false },
  { name: 'Shamrock', hex: '#52dca5', rgb: '82, 220, 165', isDark: false },
  { name: 'Magic Mint', hex: '#88e7c1', rgb: '136, 231, 193', isDark: false },
  { name: 'White Ice', hex: '#ccf5e4', rgb: '204, 245, 228', isDark: false },
  { name: 'Dandelion', hex: '#ffd75c', rgb: '255, 215, 92', isDark: false },
  { name: 'Crème Brûlée', hex: '#ffe699', rgb: '255, 230, 153', isDark: false },
  { name: 'White Barley', hex: '#fff5d6', rgb: '255, 245, 214', isDark: false },
  { name: 'Texas Rose', hex: '#ffa457', rgb: '255, 164, 87', isDark: false },
  { name: 'Peach Orange', hex: '#ffc999', rgb: '255, 201, 153', isDark: false },
  { name: 'Karry', hex: '#ffe9d6', rgb: '255, 233, 214', isDark: false },
  { name: 'Bittersweet', hex: '#f9806e', rgb: '249, 128, 110', isDark: false },
  { name: 'Rose Bud', hex: '#fcbbb1', rgb: '252, 187, 177', isDark: false },
  { name: 'Cinderella', hex: '#fdddd8', rgb: '253, 221, 216', isDark: false },
];

export const HKTW_COLORS: ColorSwatch[] = [
  { name: 'Spindle', hex: '#afcde6', rgb: '175, 205, 230', cmyk: '24, 11, 0, 10', isDark: false },
  { name: 'Tony Pink', hex: '#eaa795', rgb: '234, 167, 149', cmyk: '0, 29, 36, 8', isDark: false },
  { name: 'Chalky', hex: '#efd593', rgb: '239, 213, 147', cmyk: '0, 11, 38, 6', isDark: false },
  { name: 'Fringy Flower', hex: '#a1d9ac', rgb: '161, 217, 172', cmyk: '26, 0, 21, 15', isDark: false },
  { name: 'Portage', hex: '#92a2f1', rgb: '146, 162, 241', cmyk: '39, 33, 0, 5', isDark: false },
];

export const SPECIAL_COLORS: ColorSwatch[] = [
  { name: 'Cornflower Blue', hex: '#538be5', rgb: '83, 139, 229', cmyk: '64, 39, 0, 10', isDark: false },
  { name: 'Hawkes Blue', hex: '#bed5fa', rgb: '190, 213, 250', cmyk: '24, 15, 0, 2', isDark: false },
  { name: 'Link Water', hex: '#e6edfa', rgb: '230, 237, 250', cmyk: '8, 5, 0, 2', isDark: false },
  { name: 'Porsche', hex: '#e59453', rgb: '229, 148, 83', cmyk: '0, 35, 64, 10', isDark: false },
  { name: 'Apricot', hex: '#fad9be', rgb: '250, 217, 190', cmyk: '0, 13, 24, 2', isDark: false },
  { name: 'Linen', hex: '#faefe6', rgb: '250, 239, 230', cmyk: '0, 4, 8, 2', isDark: false },
  { name: 'New York Pink', hex: '#dc8888', rgb: '220, 136, 136', cmyk: '0, 38, 38, 14', isDark: false },
  { name: 'Zinwaldite', hex: '#efc7bc', rgb: '239, 199, 188', cmyk: '0, 17, 21, 6', isDark: false },
  { name: 'Zinwaldite Light', hex: '#f4e6e3', rgb: '244, 230, 227', cmyk: '0, 17, 21, 6', isDark: false },
  { name: 'Indian Khaki', hex: '#c1a88a', rgb: '193, 168, 138', cmyk: '0, 13, 28, 24', isDark: false },
  { name: 'Sidecar', hex: '#f2e2bb', rgb: '242, 226, 187', cmyk: '0, 7, 23, 5', isDark: false },
  { name: 'Merino', hex: '#f5efe2', rgb: '245, 239, 226', cmyk: '0, 2, 8, 4', isDark: false },
  { name: 'Silver Tree', hex: '#8ac0a0', rgb: '138, 192, 160', cmyk: '28, 0, 17, 25', isDark: false },
  { name: 'Padova', hex: '#c1ecd3', rgb: '193, 236, 211', cmyk: '18, 0, 11, 7', isDark: false },
  { name: 'Panache', hex: '#e4f3ea', rgb: '228, 243, 234', cmyk: '6, 0, 4, 5', isDark: false },
  { name: 'Horizon', hex: '#618ca9', rgb: '97, 140, 169', cmyk: '43, 17, 0, 34', isDark: false },
  { name: 'Spindle', hex: '#cfe1f0', rgb: '207, 225, 240', cmyk: '14, 6, 0, 6', isDark: false },
  { name: 'Link Water', hex: '#eff5fa', rgb: '239, 245, 250', cmyk: '4, 2, 0, 2', isDark: false },
  { name: 'Blue Bell', hex: '#737fba', rgb: '115, 127, 186', cmyk: '38, 32, 0, 27', isDark: false },
  { name: 'Perano', hex: '#bac4f3', rgb: '186, 196, 243', cmyk: '23, 19, 0, 5', isDark: false },
  { name: 'Periwinkle Gray', hex: '#e2e5f5', rgb: '226, 229, 245', cmyk: '8, 7, 0, 4', isDark: false },
];

export const TYPOGRAPHY_RULES: TypographyRule[] = [
  { role: 'H1 Display', size: '48px', weight: 'Bold (700)', lineHeight: '1.2', exampleEn: 'Global Smart Commerce', exampleZh: '全球智慧建站平台' },
  { role: 'H2 Heading', size: '32px', weight: 'SemiBold (600)', lineHeight: '1.3', exampleEn: 'Empower your business', exampleZh: '赋能您的跨境生意' },
  { role: 'Body Text', size: '16px', weight: 'Regular (400)', lineHeight: '1.5', exampleEn: 'SHOPLINE provides a complete commerce platform.', exampleZh: 'SHOPLINE 提供完整的全链路商业平台。' },
];