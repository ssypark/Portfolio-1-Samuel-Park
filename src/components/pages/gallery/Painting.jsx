import React, { useState, useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the Lightbox CSS
import 'yet-another-react-lightbox/plugins/captions.css'; // Import the Captions plugin CSS
import '../../../css/lightbox.css'; // Import your custom CSS
import { Captions } from 'yet-another-react-lightbox/plugins'; // Import the Captions plugin


const images = [
    {
        src: '../../public/gallery/tempest.jpg',
        title: 'Tempest, 2015',
        caption: 'Acrylic on canvas. 60x48 inches.'
    },
    {
        src: '../../public/gallery/cannonade.jpg',
        title: 'Cannonade, 2015',
        caption: 'Acrylic on canvas. 36x72 inches.'
    },
    {
        src: '../../public/gallery/cascades.jpg',
        title: 'Cascades, 2015',
        caption: 'Acrylic on canvas. 40x16 inches.'
    },
    {
        src: '../../public/gallery/duckgoof.jpg',
        title: 'Duck Goof, 2016',
        caption: 'Acrylic and holographic film on canvas. 24x36 inches.'
    },
    {
        src: '../../public/gallery/salvo.jpg',
        title: 'Salvo, 2015',
        caption: 'Acrylic on canvas. 48x48 inches.'
    },
    {
        src: '../../public/gallery/olive.jpg',
        title: 'Olive, 2015',
        caption: 'Acrylic and oil on canvas. 16x40 inches.'
    }, 
    {
        src: '../../public/gallery/tears.jpg',
        title: 'Tears, 2015',
        caption: 'Acrylic on canvas. 48x36 inches.'
    }, 
    {
        src: '../../public/gallery/flows.jpg',
        title: 'Flows, 2015',
        caption: 'Acrylic on canvas. 48x48 inches.'
    },
    {
        src: '../../public/gallery/untitled-pink.jpg',
        title: 'Untitled, 2015',
        caption: 'Acrylic on canvas. 30x24 inches.'
    },
    {
        src: '../../public/gallery/untitled.jpg',
        title: 'Untitled, 2013',
        caption: 'Acrylic on canvas. 48x96 inches.'
    },

    // Add more images as needed
];

function Painting() {
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    return (
        <div>
            <div className="columns-1 sm:columns-2 lg:columns-3   gap-4">
                {images.map((image, index) => (
                    <div key={index} className="mb-4 break-before-avoid">
                        <img
                            className="w-full object-cover rounded-sm cursor-pointer"
                            src={image.src}
                            alt={image.title}
                            onClick={() => openLightbox(index)}
                        />
                    </div>
                ))}
            </div>
            {isOpen && (
                <Lightbox
                    open={isOpen}
                    close={() => setIsOpen(false)}
                    slides={images.map((image) => ({
                        src: image.src,
                        title: image.title,
                        description: image.caption,
                    }))}
                    index={photoIndex}
                    onIndexChange={setPhotoIndex}
                    plugins={[Captions]} 
                    captions={{
                        showTitle: true,
                        showDescription: true,
                    }}
                />
            )}
        </div>
    );
}

export default Painting;