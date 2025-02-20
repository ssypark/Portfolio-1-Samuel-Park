import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the Lightbox CSS
import 'yet-another-react-lightbox/plugins/captions.css'; // Import the Captions plugin CSS
import '../../../css/lightbox.css'; // Import your custom CSS
import { Captions } from 'yet-another-react-lightbox/plugins'; // Import the Captions plugin


const images = [
    {
        src: '/gallery/tempest.jpg', // Use absolute path
        title: 'Tempest, 2015',
        caption: 'Acrylic on canvas. 60x48 inches.'
    },
    {
        src: '/gallery/cannonade.jpg', // Use absolute path
        title: 'Cannonade, 2015',
        caption: 'Acrylic on canvas. 36x72 inches.'
    },
    {
        src: '/gallery/cascades.jpg', // Use absolute path
        title: 'Cascades, 2015',
        caption: 'Acrylic on canvas. 40x16 inches.'
    },
    {
        src: '/gallery/duckgoof.jpg', // Use absolute path
        title: 'Duck Goof, 2016',
        caption: 'Acrylic and holographic film on canvas. 24x36 inches.'
    },
    {
        src: '/gallery/salvo.jpg', // Use absolute path
        title: 'Salvo, 2015',
        caption: 'Acrylic on canvas. 48x48 inches.'
    },
    {
        src: '/gallery/olive.jpg', // Use absolute path
        title: 'Olive, 2015',
        caption: 'Acrylic and oil on canvas. 16x40 inches.'
    }, 
    {
        src: '/gallery/tears.jpg', // Use absolute path
        title: 'Tears, 2015',
        caption: 'Acrylic on canvas. 48x36 inches.'
    }, 
    {
        src: '/gallery/flows.jpg', // Use absolute path
        title: 'Flows, 2015',
        caption: 'Acrylic on canvas. 48x48 inches.'
    },
    {
        src: '/gallery/untitled-pink.jpg', // Use absolute path
        title: 'Untitled, 2015',
        caption: 'Acrylic on canvas. 30x24 inches.'
    },
    {
        src: '/gallery/untitled.jpg', // Use absolute path
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
                    <div key={index} className="mb-4">
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