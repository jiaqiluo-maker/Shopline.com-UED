import React from 'react';
import { Language } from '../../types';
import { Download } from 'lucide-react';

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

const PhotographyGuidelines: React.FC<Props> = ({ lang }) => {
  const content = {
    intro: {
        title: lang === 'en' ? 'Photography' : '摄影',
        desc: lang === 'en' 
            ? "SHOPLINE uses images in a way that makes us stand out in the world of UI screenshots and illustrations. These images are designed to evoke empathy by using metaphors, making it easier for users to understand our product features."
            : "SHOPLINE 使用图像的方式使我们在 UI 截图和插画的世界中脱颖而出。这些图像旨在通过使用隐喻来唤起共鸣，使用户更容易理解我们的产品功能。"
    },
    portraits: {
        title: lang === 'en' ? 'Portraits' : '人像',
        desc1: lang === 'en'
            ? "When cropping and using portrait images, remember to leave space in the direction the person is facing and capture their natural breathing and vitality. Avoid cropping out the head, hands, feet, or other body parts that convey emotions."
            : "在裁剪和使用人像时，请注意在人物视线方向留出空间，捕捉其自然的气息与活力。避免裁剪掉头部、手脚等传达情感的关键部位。",
        desc2: lang === 'en'
            ? "Choose medium and close-up shots for the scene, which display the character's movements, expressions and clothing details while considering the surrounding environment. Medium or close-up shots effectively convey emotions and values."
            : "拍摄场景应选择中景和特写，在展示人物动作、神态及服饰细节的同时，兼顾周围环境。中景或特写能有效传递情感与价值观。",
        img: "https://i.postimg.cc/vH5PpBkB/Photographing_people.png"
    },
    contextual: {
        title: lang === 'en' ? 'Contextualised Images' : '情境化图像',
        desc: lang === 'en'
            ? "Authenticity is crucial when selecting images to represent our user profiles. Observing a user's life is a way to conduct user profile research holistically. Hence, contextualised images can help us understand users’ lifestyle and values while capturing moments that represent their lives."
            : "在选择代表用户画像的图片时，真实性至关重要。观察用户的生活是全方位进行用户画像研究的途径。因此，情境化图像有助于我们理解用户的生活方式与价值观，捕捉他们生活的真实瞬间。",
        img: "https://i.postimg.cc/25y788cw/Genuine_and_inclusive_portraits.png"
    },
    combination: {
        title: lang === 'en' ? 'Multiple Image Combination' : '多图组合',
        desc: lang === 'en'
            ? "When using a combination of images, make sure each photo has a consistent tone. This enhances the user's perception that the images belong together and have a shared aesthetic. Group pictures by matching people, objects and scenery to convey the intended message and concept."
            : "使用组图时，请确保每张照片色调统一。这能增强用户对图片整体感和共同美学的认知。通过搭配人物、物体和场景对图片进行分组，以传达预期的信息与概念。",
        images: [
            "https://i.postimg.cc/yxsJxL6s/Artful_scenes.png",
            "https://i.postimg.cc/sXtk4LG3/Combine_Photography.png"
        ]
    }
  };

  return (
    <div className="space-y-20 animate-fade-in pb-20">
      {/* Intro */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">{content.intro.title}</h1>
        <p className="text-xl text-gray-500 max-w-4xl leading-relaxed">
          {content.intro.desc}
        </p>
      </section>

      {/* Portraits */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.portraits.title}</h2>
        <div className="text-gray-600 max-w-4xl leading-relaxed space-y-4">
            <p>{content.portraits.desc1}</p>
            <p>{content.portraits.desc2}</p>
        </div>
        <DownloadableImage src={content.portraits.img} alt="Portraits Guidelines" />
      </section>

      {/* Contextualised Images */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.contextual.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.contextual.desc}</p>
        <DownloadableImage src={content.contextual.img} alt="Contextualised Images" />
      </section>

      {/* Multiple Image Combination */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900 pb-2 border-b border-gray-100">{content.combination.title}</h2>
        <p className="text-gray-600 max-w-4xl leading-relaxed">{content.combination.desc}</p>
        <div className="flex flex-col gap-10">
             {content.combination.images.map((img, i) => (
                 <DownloadableImage key={i} src={img} alt={`Image Combination ${i + 1}`} />
             ))}
        </div>
      </section>

    </div>
  );
};

export default PhotographyGuidelines;