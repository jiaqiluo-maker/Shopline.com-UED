import React from 'react';
import { TRANSLATIONS } from '../../constants';
import { Language } from '../../types';
import { Download, Check, X, FileDown } from 'lucide-react';

interface Props {
  lang: Language;
}

// Helper to download images
const downloadUrl = async (url: string, name: string) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
        // Fallback for CORS issues or other errors
        window.open(url, '_blank');
    }
};

const DownloadableImage: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = "" }) => {
    return (
        <div className={`relative group ${className}`}>
            <img src={src} alt={alt} className="w-full h-auto rounded-xl border border-gray-100 shadow-sm transition-shadow hover:shadow-md" />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    const filename = src.split('/').pop() || 'image.png';
                    downloadUrl(src, filename);
                }}
                className="absolute top-4 right-4 p-2.5 bg-white text-gray-700 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-blue-50 hover:text-blue-600 focus:opacity-100 transform scale-95 group-hover:scale-100"
                title="Download Image"
            >
                <Download className="w-5 h-5" />
            </button>
        </div>
    );
};

const FileDownloadCard: React.FC<{ title: string; format: string; url: string; size?: string }> = ({ title, format, url, size }) => (
    <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all group cursor-pointer" onClick={() => window.location.href = url}>
        <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-blue-100 transition-colors">
                <FileDown className="w-6 h-6" />
            </div>
            <div>
                <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{title}</h3>
                <p className="text-xs text-gray-500 uppercase">{format} {size && `• ${size}`}</p>
            </div>
        </div>
        <button 
            className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all"
        >
            Download
        </button>
    </div>
);

const LogoGuidelines: React.FC<Props> = ({ lang }) => {
  // Content Data
  const content = {
    intro: {
        title: lang === 'en' ? 'Logo' : '标识',
    },
    variations: [
        { src: 'https://i.postimg.cc/j5H9nKFF/1_1_LOGO白底.png', label: lang === 'en' ? 'Full Color Logo' : '全彩标志' },
        { src: 'https://i.postimg.cc/763cJDWj/1_2_LOGO深蓝底.png', label: lang === 'en' ? 'Reverse White Logo' : '反向白色标志' },
        { src: 'https://i.postimg.cc/ZR8gvZMG/Frame_14.png', label: lang === 'en' ? 'Neutral Color Logo' : '中性色标志' },
        { src: 'https://i.postimg.cc/B6TyPsVz/Frame_21.png', label: lang === 'en' ? 'Symbol' : '符号（主要用于手机、网页标签）' },
    ],
    downloads: {
        title: lang === 'en' ? 'Logo Assets' : 'Logo 文件下载',
        files: [
            { title: 'SHOPLINE-Logo', format: 'ZIP', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251212/4xPC/SHOPLINE_Logo_%286%29.zip' },
            { title: 'SHOPLINE-Logo-Vector', format: 'EPS', url: 'https://pic4.fukit.cn/autoupload/AOPlz_F9vA1htssbUdr8a8kJiVcdDX0rG09M-a0gARI/20251211/O0pg/SHOPLINE_LOGO_2.eps' },
        ]
    },
    symbolism: {
        title: lang === 'en' ? 'Symbolism' : '象征',
        desc: lang === 'en'
            ? "To better demonstrate the professionalism and strength of the SHOPLINE brand, the angle of each line in the logo has been carefully crafted by designers through precise aesthetic calculations. The 'Logo' is tilted upward at a 45-degree angle, symbolizing SHOPLINE's spirit of standing together with the business world, riding the wind and waves, forging ahead, and striding forward to meet a better future."
            : "为了更好地展现SHOPLINE品牌的专业性和实力，标志中每条线条的角度都由设计师经过精准的美学计算精心雕琢。“标志”以45度角向上倾斜，象征着SHOPLINE与商界同舟共济、乘风破浪、勇往直前、昂首阔步迎接美好未来的精神。",
        img: 'https://i.postimg.cc/Hxw2F9dC/logo制作规范展示.png'
    },
    iconUsage: {
        title: lang === 'en' ? 'Symbol Usage' : '符号使用',
        desc: lang === 'en'
            ? "On mobile devices, the SHOPLINE launch icon needs to occupy 75% of the icon display area to be displayed more clearly."
            : "在移动设备上，SHOPLINE 启动图标需要占据图标显示区域的 75% 才能更清晰地显示。",
        img1: 'https://i.postimg.cc/Ss6rHfkk/SHOPLINE_logo规范8.png',
        img2: 'https://i.postimg.cc/FRyZwVNH/SHOPLINE_logo规90范.png'
    },
    clearSpace: {
        title: lang === 'en' ? 'Clear Space' : '空旷空间',
        desc: lang === 'en'
            ? "To ensure the integrity and clarity of the SHOPLINE logo, it must be separated from other logos or body text and other competitive graphic elements that may conflict with, crowd, or weaken the overall effect of the logo. Leave enough white space around the logo, which is the same height as the SHOPLINE symbol. Sufficient headroom should be left around the symbol, and the headroom height should be twice the height of the tag hole cover."
            : "为确保 SHOPLINE 标志的完整性和清晰度，必须将其与可能与标志冲突、拥挤或削弱标志整体效果的其他标志或正文等竞争性图形元素分开。在标志周围留出足够的空白空间，该空间与 SHOPLINE 符号的高度相同。符号周围应留出足够的净空，净空高度应为标签孔盖高度的两倍。",
        img: 'https://i.postimg.cc/26Qwg7r6/尺寸规范.png'
    },
    minSize: {
        title: lang === 'en' ? 'Minimum Size' : '最小尺寸',
        desc: lang === 'en'
            ? "To maintain maximum clarity at all times, the logo width should not be less than 100 pixels or 3.8 cm, and the symbol width should be at least 16 pixels or 0.6 cm."
            : "为始终保持最大清晰度，徽标的宽度不应小于 100 像素或 3.8 厘米，而符号的宽度应至少为 16 像素或 0.6 厘米。",
        img: 'https://i.postimg.cc/VLgYmxDQ/Scale.png'
    },
    colors: {
        title: lang === 'en' ? 'Logo Colors' : '标志颜色',
        desc: lang === 'en'
            ? "The SHOPLINE logo has three color schemes: deep blue, neutral, and white. The deep blue version is used for white or light backgrounds, and the white version is used for dark backgrounds. The neutral version is used less frequently, but if used, ensure sufficient contrast between the logo color and the background color to clearly display the SHOPLINE logo. The most commonly used color code for the deep blue SHOPLINE logo is #00142D."
            : "SHOPLINE 标志有三种配色方案：深蓝色、中性色和白色。深蓝色版本用于白色或浅色背景，白色版本用于深色背景。中性色版本使用较少，但如果使用，务必确保标志颜色与背景颜色之间有足够的对比度，以便清晰显示 SHOPLINE 标志。深蓝色 SHOPLINE 标志最常用的颜色代码是 #00142D。",
        img: 'https://i.postimg.cc/xCvRB3Yg/Color.png'
    },
    usagePriority: {
        title: lang === 'en' ? 'Logo Usage Priority' : '标志使用优先级',
        desc: lang === 'en'
            ? "We recommend prioritizing the deep blue logo design style on a light background. This style should be used whenever possible to maintain consistency in the company's visual image on different occasions. The priority order of logo color usage is: Deep Blue > White > Neutral."
            : "我们建议优先采用浅色背景上的深蓝色标志设计风格。应尽可能使用此风格，以保持公司在不同场合视觉形象的一致性。标志颜色使用的优先顺序如下：深蓝色 > 白色 > 中性色。",
        basic: {
            title: lang === 'en' ? 'Basic' : '基本的',
            desc: lang === 'en' ? 'Most commonly used to represent our brand.' : '它最常用于代表我们的品牌，因为它包含了最多的信息，既有富有表现力的符号，也有信息丰富的文字商标。',
            img: 'https://i.postimg.cc/sXYcb4y0/Frame_7858.png'
        },
        secondary: {
            title: lang === 'en' ? 'Secondary' : '次要',
            desc: lang === 'en' ? 'Least frequently used, typically for mobile apps.' : '使用频率最低，通常用于移动应用',
            img: 'https://i.postimg.cc/k4QcLv9j/Frame_7859.png'
        }
    },
    bgControl: {
        title: lang === 'en' ? 'Background Control' : '背景控制',
        desc: lang === 'en'
            ? "To ensure the SHOPLINE brand logo is clear and eye-catching on different backgrounds, contrast is crucial. Enhance the contrast between the logo and the background to ensure it is easy to recognize."
            : "为了确保SHOPLINE品牌标识在不同背景下都能清晰醒目，标识与背景的对比度至关重要。建议在深色背景上使用白色标识，在浅色背景上使用深蓝色标识，以及在纯色背景上使用标识。增强标识与背景的对比度，确保其易于识别。",
        correct: [
            { img: 'https://i.postimg.cc/Vs2G30RL/Frame_7843.png', label: lang === 'en' ? 'High Contrast' : '背景与标志形成鲜明对比' },
            { img: 'https://i.postimg.cc/MH8sd0kt/Frame_7845.png', label: lang === 'en' ? 'Low Saturation Image' : '背景图像饱和度低' },
            { img: 'https://i.postimg.cc/qBWb96Lh/Frame_7844.png', label: lang === 'en' ? 'Clean Background' : '背景内容更简洁明了' },
        ],
        incorrect: [
            { img: 'https://i.postimg.cc/2jgcPLwv/Frame_7846.png', label: lang === 'en' ? 'Complex Background' : '背景过于复杂' },
            { img: 'https://i.postimg.cc/4yT8BvCL/Frame_7847.png', label: lang === 'en' ? 'Blurred Background' : '模糊的背景图像' },
            { img: 'https://i.postimg.cc/SQHTwYrm/Frame_78481.png', label: lang === 'en' ? 'Low Contrast' : '背景颜色与标志颜色过于相似' },
        ]
    },
    placement: {
        title: lang === 'en' ? 'Placement' : '标志位置',
        desc: lang === 'en'
            ? "Depending on the format and content of the application, placing the logo in a corner or center is acceptable. The preferred position is always the top corner."
            : "根据应用程序的格式和内容，logo 放置在角落或中心位置都是可以接受的。首选位置始终是顶部角落。如果无法做到这一点或会影响设计布局，则可以使用中心或底部角落。",
        img: 'https://i.postimg.cc/L8rR08bx/Placement.png'
    },
    symbolPlacement: {
        title: lang === 'en' ? 'Symbol Placement' : '符号放置',
        desc: lang === 'en'
            ? "The table below outlines the size and position of the symbol in horizontal and vertical layouts:"
            : "符号的位置取决于其单独使用时的具体应用场景。下表概述了符号在水平和垂直布局中的大小和位置：",
        img: 'https://i.postimg.cc/L4yQWGk5/Symbol_Placement.png'
    },
    watermark: {
        title: lang === 'en' ? 'Security Watermark' : '安全水印',
        desc: lang === 'en' ? "A symbol using #F7F8F9 placed in the middle of the document." : "安全水印是一个使用 #F7F8F9 颜色的符号，放置在文档的中间。",
        img: 'https://i.postimg.cc/Y2XDPTNH/Security_watermark.png'
    },
    lockups: {
        title: lang === 'en' ? 'Logo and Tagline' : '标志和标语',
        img: 'https://i.postimg.cc/brF622YS/Lockups.png'
    },
    slogans: {
        title: lang === 'en' ? 'Slogans by Region' : '各地区使用的口号',
        list: lang === 'en' ? [
            "Be part of the solution, no matter the problem.",
            "Make it work, then make it better.",
            "Teamwork / Excellence / Communication",
            "With great teams and culture, we can conquer the world.",
            "Team and employees always come first.",
            "Our success is built on the success of our merchants.",
            "Empowering merchants to succeed anywhere.",
            "Merchant success is our success."
        ] : [
            "无论遇到什么问题，都要成为解决方案的一部分。",
            "先让它运转起来，然后再让它变得更好。",
            "团队合作/追求卓越/积极沟通",
            "凭借优秀的团队和企业文化，我们就能征服世界。",
            "团队和员工永远是第一位的。",
            "我们的成功建立在商家的成功之上。",
            "助力商家在任何地方取得成功",
            "商户的成功就是我们的成功"
        ]
    },
    cobranding: {
        title: lang === 'en' ? 'Co-branding in Partnerships' : '合作伙伴关系中的联合品牌推广',
        img: 'https://i.postimg.cc/T2kNsBV7/文字类logo.png'
    },
    socialMedia: {
        title: lang === 'en' ? 'Social Media Icons' : '社交媒体图标',
        desc: lang === 'en' 
            ? "App icons are designed individually according to platform requirements."
            : "应用程序图标均根据各个平台的要求进行单独设计。以下两种显示样式较为常用：当显示范围为圆形时，徽标将不留边距。当显示区域为正方形或圆角正方形时，标志应在各个方向留出适当的边距，占据总空间的 75%。",
        img1: 'https://i.postimg.cc/NGNCnZ8t/Social_Icon1.png',
        construction: 'https://i.postimg.cc/NGNCnZ8G/Social_icon_construction.png',
        platforms: 'https://i.postimg.cc/v8P2KCr2/Logo_in_social_media_platforms.png'
    }
  };

  return (
    <div className="space-y-20 animate-fade-in pb-20">
      {/* Intro */}
      <section className="space-y-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{content.intro.title}</h1>
        
        {/* Layout: Vertical Stack (Top-Bottom), Images Enlarge */}
        <div className="flex flex-col gap-12 mt-8">
            {content.variations.map((v, i) => (
                <div key={i} className="space-y-4">
                    <DownloadableImage src={v.src} alt={v.label} className="w-full shadow-lg" />
                    <p className="text-lg text-gray-500 font-medium">{v.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Downloads */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900">{content.downloads.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.downloads.files.map((file, i) => (
                <FileDownloadCard key={i} {...file} />
            ))}
        </div>
      </section>

      {/* Symbolism */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.symbolism.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.symbolism.desc}</p>
        <DownloadableImage src={content.symbolism.img} alt={content.symbolism.title} className="max-w-4xl" />
      </section>

      {/* Symbol Usage */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.iconUsage.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.iconUsage.desc}</p>
        <div className="grid md:grid-cols-2 gap-8">
             <DownloadableImage src={content.iconUsage.img1} alt="Mobile Icon 75% Rule" />
             <DownloadableImage src={content.iconUsage.img2} alt="Icon Applications" />
        </div>
      </section>

      {/* Clear Space & Min Size - Changed to Vertical Layout */}
      <div className="flex flex-col gap-20">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.clearSpace.title}</h2>
            <p className="text-gray-600 leading-relaxed">{content.clearSpace.desc}</p>
            <DownloadableImage src={content.clearSpace.img} alt="Clear Space" />
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.minSize.title}</h2>
            <p className="text-gray-600 leading-relaxed">{content.minSize.desc}</p>
            <DownloadableImage src={content.minSize.img} alt="Minimum Size" />
          </section>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.colors.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.colors.desc}</p>
        <DownloadableImage src={content.colors.img} alt="Logo Colors" className="max-w-4xl" />
      </section>

      {/* Usage Priority */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.usagePriority.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.usagePriority.desc}</p>
        <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
                <DownloadableImage src={content.usagePriority.basic.img} alt="Basic Usage" />
                <h3 className="font-bold">{content.usagePriority.basic.title}</h3>
                <p className="text-sm text-gray-500">{content.usagePriority.basic.desc}</p>
            </div>
            <div className="space-y-2">
                <DownloadableImage src={content.usagePriority.secondary.img} alt="Secondary Usage" />
                <h3 className="font-bold">{content.usagePriority.secondary.title}</h3>
                <p className="text-sm text-gray-500">{content.usagePriority.secondary.desc}</p>
            </div>
        </div>
      </section>

      {/* Background Control */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.bgControl.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.bgControl.desc}</p>
        
        {/* Do's */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {content.bgControl.correct.map((item, i) => (
                <div key={i} className="space-y-2">
                    <div className="relative border-4 border-green-500 rounded-lg overflow-hidden">
                         <img src={item.img} alt={item.label} className="w-full h-auto block" />
                         <div className="absolute top-2 left-2 bg-green-500 text-white p-1 rounded-full shadow-sm">
                            <Check className="w-4 h-4" />
                         </div>
                    </div>
                    <p className="text-sm text-green-700 font-bold flex items-center gap-2">
                        {lang === 'en' ? 'Do' : '正确'}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                </div>
            ))}
        </div>

        {/* Don'ts */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {content.bgControl.incorrect.map((item, i) => (
                <div key={i} className="space-y-2">
                     <div className="relative border-4 border-red-500 rounded-lg overflow-hidden">
                         <img src={item.img} alt={item.label} className="w-full h-auto block" />
                         <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded-full shadow-sm">
                            <X className="w-4 h-4" />
                         </div>
                    </div>
                    <p className="text-sm text-red-700 font-bold flex items-center gap-2">
                        {lang === 'en' ? "Don't" : '错误'}
                    </p>
                    <p className="text-xs text-gray-500 font-medium">{item.label}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Placement & Symbol Placement - Changed to Vertical Layout */}
      <div className="flex flex-col gap-20">
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.placement.title}</h2>
            <p className="text-gray-600 leading-relaxed">{content.placement.desc}</p>
            <DownloadableImage src={content.placement.img} alt="Placement" />
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.symbolPlacement.title}</h2>
            <p className="text-gray-600 leading-relaxed">{content.symbolPlacement.desc}</p>
            <DownloadableImage src={content.symbolPlacement.img} alt="Symbol Placement" />
        </section>
      </div>

      {/* Watermark & Lockups - Changed to Vertical Layout */}
      <div className="flex flex-col gap-20">
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.watermark.title}</h2>
            <p className="text-gray-600 leading-relaxed">{content.watermark.desc}</p>
            <DownloadableImage src={content.watermark.img} alt="Watermark" />
        </section>
        <section className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.lockups.title}</h2>
            <DownloadableImage src={content.lockups.img} alt="Lockups" />
        </section>
      </div>

      {/* Slogans */}
      <section className="space-y-6">
         <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.slogans.title}</h2>
         <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
             <ul className="grid md:grid-cols-2 gap-4 list-disc pl-5">
                 {content.slogans.list.map((slogan, i) => (
                     <li key={i} className="text-gray-700">{slogan}</li>
                 ))}
             </ul>
         </div>
      </section>

      {/* Co-branding */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.cobranding.title}</h2>
        <DownloadableImage src={content.cobranding.img} alt="Co-branding" />
      </section>

      {/* Social Media */}
      <section className="space-y-8">
         <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-2">{content.socialMedia.title}</h2>
         <p className="text-gray-600 max-w-4xl leading-relaxed">{content.socialMedia.desc}</p>
         
         <div className="space-y-8">
            <DownloadableImage src={content.socialMedia.img1} alt="Social Icons" />
            <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                    <DownloadableImage src={content.socialMedia.construction} alt="Social Construction" />
                    <p className="text-sm text-gray-500 text-center">{lang === 'en' ? 'Construction Guide' : '制作规范'}</p>
                </div>
                <div className="space-y-2">
                    <DownloadableImage src={content.socialMedia.platforms} alt="Social Platforms" />
                    <p className="text-sm text-gray-500 text-center">{lang === 'en' ? 'Platform Examples' : '平台示例'}</p>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
};

export default LogoGuidelines;