import React from 'react';
import { 
    PRIMARY_COLORS, 
    SECONDARY_COLORS, 
    NEUTRAL_COLORS, 
    SE_ASIA_COLORS, 
    ILLUSTRATION_COLORS,
    HKTW_COLORS,
    SPECIAL_COLORS,
    COLOR_ASSETS_ZIP,
    TRANSLATIONS 
} from '../../constants';
import { Language, ColorSwatch } from '../../types';
import { Copy, Download, FileDown, Check, X } from 'lucide-react';

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

// Generates a simple PNG of the color and downloads it
const downloadColorSwatch = (color: ColorSwatch) => {
    const canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    if (ctx) {
        ctx.fillStyle = color.hex;
        ctx.fillRect(0, 0, 500, 500);
        
        // Convert to data URL
        const link = document.createElement('a');
        link.download = `SHOPLINE-${color.name.replace(/\s+/g, '-')}-${color.hex}.png`;
        link.href = canvas.toDataURL('image/png');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

const ColorCard: React.FC<{ color: ColorSwatch; lang: Language }> = ({ color, lang }) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(color.hex);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="group rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all bg-white flex flex-col">
            <div 
                className="h-32 w-full relative flex items-center justify-center" 
                style={{ backgroundColor: color.hex }}
            >
                {/* Download Button - Top Right */}
                <button 
                    onClick={() => downloadColorSwatch(color)}
                    className="absolute top-2 right-2 p-2 bg-white/90 backdrop-blur-sm rounded-full text-gray-600 hover:text-blue-600 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-all"
                    title="Download Swatch Image"
                >
                    <Download className="w-4 h-4" />
                </button>

                {/* Copy Button - Center */}
                <button 
                    onClick={handleCopy}
                    className="opacity-0 group-hover:opacity-100 transition-all absolute bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transform translate-y-2 group-hover:translate-y-0"
                    title="Copy HEX"
                >
                    {copied ? <span className="text-xs font-bold px-1">Copied!</span> : <Copy className="w-5 h-5" />}
                </button>
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <h3 className="font-bold text-gray-900">{color.name}</h3>
                    <p className="text-sm text-gray-500 mt-1 font-mono uppercase">{color.hex}</p>
                </div>
                <div className="mt-4 space-y-1 text-[10px] text-gray-400 font-mono">
                    {color.rgb && <div className="flex justify-between border-b border-gray-50 pb-1"><span>RGB</span><span>{color.rgb}</span></div>}
                    {color.cmyk && <div className="flex justify-between border-b border-gray-50 pb-1"><span>CMYK</span><span>{color.cmyk}</span></div>}
                    {color.pantone && <div className="flex justify-between"><span>PMS</span><span>{color.pantone}</span></div>}
                </div>
            </div>
        </div>
    );
};

const ZipDownloadCard: React.FC<{ lang: Language }> = ({ lang }) => {
    const t = TRANSLATIONS[lang];
    return (
        <div 
            onClick={() => window.location.href = COLOR_ASSETS_ZIP}
            className="flex items-center justify-between p-6 bg-blue-50 border border-blue-100 rounded-xl hover:border-blue-300 hover:shadow-md transition-all cursor-pointer group"
        >
            <div className="flex items-center gap-5">
                <div className="p-4 bg-blue-600 text-white rounded-lg shadow-sm group-hover:scale-105 transition-transform">
                    <FileDown className="w-8 h-8" />
                </div>
                <div>
                    <h3 className="font-bold text-gray-900 text-lg">{t.downloadAll}</h3>
                    <p className="text-sm text-blue-700 mt-1">ZIP • All Color Swatches (.ase, .png)</p>
                </div>
            </div>
            <button className="hidden md:block px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                Download
            </button>
        </div>
    );
};

const ColorGuidelines: React.FC<Props> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <div className="space-y-20 animate-fade-in pb-20">
        {/* Intro */}
        <section className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{lang === 'en' ? 'Colors' : '色彩'}</h1>
            <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
                {t.colorDesc}
            </p>
        </section>

        {/* Primary Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.primaryColors}</h2>
            <p className="text-gray-600 max-w-4xl">{t.primaryColorsDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {PRIMARY_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* Secondary Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.secondaryColors}</h2>
            <p className="text-gray-600 max-w-4xl">{t.secondaryColorsDesc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {SECONDARY_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* Neutral Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.neutralColors}</h2>
            <p className="text-gray-600 max-w-4xl">{t.neutralColorsDesc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {NEUTRAL_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* SE Asia Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.seAsiaColors}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {SE_ASIA_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* Illustration Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.illustrationColors}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {ILLUSTRATION_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* HK/TW Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.hktwColors}</h2>
            <p className="text-gray-600 max-w-4xl">{t.hktwColorsDesc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                {HKTW_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* Special Colors */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.specialColors}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
                {SPECIAL_COLORS.map((c) => <ColorCard key={c.hex} color={c} lang={lang} />)}
            </div>
        </section>

        {/* Download Zip Card */}
        <div className="py-8">
            <ZipDownloadCard lang={lang} />
        </div>

        {/* Usage Proportions */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.usageProportions}</h2>
            <p className="text-gray-600 max-w-4xl">
                {lang === 'en' 
                    ? "This color scale chart provides a hierarchy to follow when using colors. The larger the color area, the more important it is, following a frequency gradient. The hierarchy visually reflects the three levels of color: Primary, Secondary, and Special." 
                    : "这个色彩比例图提供了使用颜色时要遵循的层次结构。颜色越大，越重要，使用频率梯度。层次结构在视觉上反映了颜色的三个层次：主要、次要和特殊。"}
            </p>
            <DownloadableImage src="https://i.postimg.cc/KzY9Vc4L/Usage_proportions2.png" alt="Color Usage Proportions" />
        </section>

        {/* Color Filling Specifications */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.colorFilling}</h2>
            
            {/* Do's */}
            <div className="grid md:grid-cols-2 gap-8">
                 <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/W349Kptz/Frame.png" alt="Correct Usage 1" className="border-4 border-green-500 rounded-xl" />
                    <div className="flex gap-2 text-green-700 font-bold items-center"><Check className="w-5 h-5"/> {t.do}</div>
                    <p className="text-sm text-gray-600">
                        {lang === 'en' 
                            ? "Graphic Color: Use extended brand colors for background and large area fills. Text Color: Use only white text on dark backgrounds." 
                            : "图形颜色：背景和大面积填充颜色使用扩展品牌颜色。文字颜色：背景调查仅使用白色文字。"}
                    </p>
                 </div>
                 <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/pTd07Vyh/Frame3.png" alt="Correct Usage 2" className="border-4 border-green-500 rounded-xl" />
                    <div className="flex gap-2 text-green-700 font-bold items-center"><Check className="w-5 h-5"/> {t.do}</div>
                    <p className="text-sm text-gray-600">
                        {lang === 'en' 
                            ? "Graphic Color: Use important brand extension colors for large fills, secondary colors for small fills. Text Color: Use dark blue brand color text on light backgrounds." 
                            : "图形颜色：大面积填充颜色使用重要品牌拓展颜色，小面积填充颜色使用次要颜色 文字颜色：浅色背景上使用深蓝色品牌颜色文字。"}
                    </p>
                 </div>
            </div>

            {/* Don'ts */}
            <div className="grid md:grid-cols-2 gap-8 mt-8">
                 <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/3RwL6rWx/Frame65.png" alt="Incorrect Usage 1" className="border-4 border-red-500 rounded-xl" />
                    <div className="flex gap-2 text-red-700 font-bold items-center"><X className="w-5 h-5"/> {t.dont}</div>
                    <p className="text-sm text-gray-600">
                        {lang === 'en' 
                            ? "Graphic Color: Uncoordinated background and graphic colors. Text Color: Do not use font colors similar to the background color." 
                            : "图形颜色：背景色与图形颜色搭配不协调，建议采用深浅对比，或同色系搭配。文字颜色：不要使用与背景颜色相近的字体颜色。"}
                    </p>
                 </div>
                 <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/QtM6PNV7/Frame5.png" alt="Incorrect Usage 2" className="border-4 border-red-500 rounded-xl" />
                    <div className="flex gap-2 text-red-700 font-bold items-center"><X className="w-5 h-5"/> {t.dont}</div>
                    <p className="text-sm text-gray-600">
                        {lang === 'en' 
                            ? "Graphic Color: Avoid bright colors for large backgrounds. Do not choose glaring or contrasting colors as background. Text Color: Do not create your own colors." 
                            : "图形颜色：避免使用鲜艳的颜色填充大背景。不要选择刺眼或对比色作为背景颜色。文字颜色：不要搭配自创颜色。"}
                    </p>
                 </div>
            </div>

            <DownloadableImage src="https://i.postimg.cc/9F9gL2Vh/Coverage.png" alt="Color Coverage" className="mt-8" />
        </section>

        {/* Real World Applications */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{t.realWorld}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/QtM6PNVV/相册_(1).png" alt="Photography Application" />
                    <p className="text-center font-medium text-gray-600">{lang === 'en' ? 'Photography' : '评估摄影'}</p>
                </div>
                <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/MTGs4ZX6/插画.png" alt="Illustration Application" />
                    <p className="text-center font-medium text-gray-600">{lang === 'en' ? 'Illustration' : '评估插画'}</p>
                </div>
                <div className="space-y-3">
                    <DownloadableImage src="https://i.postimg.cc/zBfdMD3B/3D.png" alt="3D Application" />
                    <p className="text-center font-medium text-gray-600">{lang === 'en' ? '3D Art' : '评价3D艺术'}</p>
                </div>
            </div>
        </section>
    </div>
  );
};

export default ColorGuidelines;