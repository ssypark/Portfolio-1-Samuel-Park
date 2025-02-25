import React, { useState, useEffect, useRef } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Import the Lightbox CSS
import 'yet-another-react-lightbox/plugins/captions.css'; // Import the Captions plugin CSS
import '../../../css/lightbox.css'; // Import your custom CSS
import { Captions } from 'yet-another-react-lightbox/plugins'; // Import the Captions plugin


const images = [
    // {
    //     src: '/gallery/illustrations/quasi.jpg',
    //     title: 'Quasi, 2017',
    //     caption: 'Ink on paper. 10.5x14 inches.'
    // },
    {
        src: '/gallery/illustrations/time.jpg',
        title: 'Would You Look at the Time!, 2016',
        caption: 'Watercolor and ink on paper. 11.25x15.5 inches.'
    },

    {
        src: '/gallery/illustrations/felix.jpg',
        title: 'Felix, 2016',
        caption: 'Plastic film and ink on paper. 7.5x9.5 inches.'
    },
    {
        src: '/gallery/illustrations/mickey.jpg',
        title: 'Mickey, 2015',
        caption: 'Ink on paper. 10x15 inches.'
    },
    {
        src: '/gallery/illustrations/whyyou.jpg',
        title: 'Why You Little!, 2016',
        caption: 'Ink and watercolor on paper. 7.5x9.5 inches.'
    },
    {
        src: '/gallery/illustrations/sundaysbest.jpg',
        title: 'Sunday\'s Best, 2015',
        caption: 'Ink on paper. 7.5x9.5 inches.'
    },
    {
        src: '/gallery/illustrations/sart.jpg',
        title: 'Sart Bimpson, 2015',
        caption: 'Watercolor and ink on paper. 15.5x11.5 inches.'
    },
    {
        src: '/gallery/illustrations/insidious.jpg',
        title: 'Insidious, 2013',
        caption: 'Ink and charcoal on paper. 30x40 inches.'
    },
    {
        src: '/gallery/illustrations/knowledge.jpg',
        title: 'Knowledge and Power, 2012',
        caption: 'Watercolor and ink on paper. 11x15 inches.'
    },
    {
        src: '/gallery/illustrations/yangban.jpg',
        title: 'Yangban (Aristocrat), 2012',
        caption: 'Ink on paper. 16x20 inches.'
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