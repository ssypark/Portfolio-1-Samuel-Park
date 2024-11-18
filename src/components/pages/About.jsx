import avatar from "../../assets/avatar.jpg"

function About() {
    return(
    // Header Introduction
    <div className="bg-olive py-48 px-8">
        <div className="container mx-auto px-8 flex flex-col lg:flex-row items-center gap-8 mb-12 justify-between">
            <div className="lg:w-2/3 text-offwhite">
            <h1 className="text-5xl font-bold font-syne mb-6">About Me</h1>
            <p className="text-lg leading-relaxed mb-4">Hi, I'm Samuel. I'm a UX/UI designer with a background in fine arts, driven by a
            passion for creating meaningful, user-centered designs.</p>
            <p className="text-lg leading-relaxed">
            My work blends creativity with digital innovation, aiming to deliver designs that
        are not just visually compelling but also intuitive and impactful. I believe in
        making the digital world accessible and engaging for everyone.
            </p>
            </div>
            {/* Avatar Image */}
            <div className="lg:w-1/3 flex justify-center mb-8">
                <img 
                src={avatar} 
                alt="Profile Photo"
                className="rounded-full w-64 h-64 object-cover grayscale"
                 />
            </div>
        </div>

        <div className="bg-sage container flex justify-center items-center px-8 py-8 mx-auto rounded-lg">
            <div className="container mx-auto">

 <h1 className="text-5xl font-bold font-syne mb-6 text-ink">My Philosophy</h1>
            <p className="text-lg leading-relaxed mb-4">I see design as a bridge between creativity and functionality. I aim to create intuitive, adaptable, and user-centered experiences that not only solve problems but also tell a story. My background in fine arts shapes my visual style, while my focus on UX ensures that designs are accessible, inclusive, and engaging.</p>
            </div>
        </div>
    </div>
    
    )
}

export default About;