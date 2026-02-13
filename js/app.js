/**
 * Designo Ceilings - Navigation Control
 * Handles switching between About and nested Project categories.
 * Default Landing: Residential
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Designo Ceilings: Navigation system initialized.');

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    /**
     * Switch to a specific section
     * @param {string} sectionId - The ID of the section to show
     */
    function showSection(sectionId) {
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });

        // Show target section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }

        // Update active state in navigation
        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });

        // Scroll to top of main content
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Attach click events to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);

                // Update URL hash without jumping
                history.pushState(null, null, `#${sectionId}`);
            }
        });
    });

    // Project Modal Selectors
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-description');
    const modalGallery = document.getElementById('modal-project-gallery');
    const modalMeta = document.getElementById('modal-meta-description');

    // Project Data Store
    const projectsData = {
        'cover0': {
            title: 'Modern Custom LED Track Ceiling in Alexandria, Virginia Luxury Home',
            description: `This modern custom LED track ceiling design levels up the entire vibe of this luxury residential interior in Alexandria, Virginia. The clean recessed lighting lines add a sleek, architectural feel while keeping the space bright, airy, and high end. This type of custom ceiling is perfect for homeowners in Northern Virginia and Washington, DC who want a contemporary look that feels premium without being over the top. Designs like this are also trending in Potomac and Rockville, Maryland for modern home renovations that blend lighting, architecture, and luxury finishes into one cohesive statement.`,
            images: ['cover0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'],
            alt: 'Custom LED track ceiling installation in luxury residential home in Alexandria VA',
            // Backend SEO Tags (Not visible on page)
            keywords: ['custom ceiling Alexandria VA', 'modern ceiling Northern Virginia', 'LED track ceiling Washington DC', 'luxury residential ceiling Potomac MD', 'custom ceiling Rockville MD', 'modern ceiling design Arlington VA', 'high end home ceiling Washington DC'],
            localSEO: {
                location: 'Alexandria, VA',
                service: 'Custom Ceiling Installation',
                market: 'Residential',
                region: 'Northern Virginia / Washington, DC / Maryland'
            }
        },
        'cover1': {
            title: 'High-Gloss Stretch Ceiling with LED Track Lighting in Arlington, Virginia Home',
            description: `This high-gloss black stretch ceiling with integrated LED track lighting brings serious modern luxury energy to this residential living space in Arlington, Virginia. The reflective ceiling creates a dramatic mirror effect that visually opens up the room, while the clean linear lighting adds a sleek architectural edge. This type of custom ceiling design is trending across Northern Virginia and Washington, DC for homeowners who want their interiors to feel elevated, modern, and low-key iconic. Similar stretch ceiling installs are also gaining traction in Potomac and Rockville, Maryland for contemporary home upgrades that balance style and function.`,
            images: ['cover1.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'],
            alt: 'Glossy black stretch ceiling with LED track lighting in modern residential living room in Arlington VA',
            // Backend SEO Tags (Not visible on page)
            keywords: ['stretch ceiling Arlington VA', 'glossy ceiling Northern Virginia', 'custom ceiling Washington DC', 'LED track ceiling Alexandria VA', 'modern ceiling Potomac MD', 'luxury ceiling Rockville MD', 'residential ceiling design Washington DC'],
            localSEO: {
                location: 'Arlington, VA',
                service: 'Stretch Ceiling Installation',
                market: 'Residential',
                region: 'Northern Virginia / Washington, DC / Maryland'
            }
        },
        'cover2': {
            title: 'Geometric LED Track Ceiling Design in Potomac, Maryland Modern Home',
            description: `This custom geometric LED track ceiling brings a bold, architectural look to this modern residential living space in Potomac, Maryland. The clean linear lighting patterns create a high-end, design-forward vibe that instantly elevates the room while keeping the aesthetic minimal and luxe. Homeowners across Northern Virginia and Washington, DC are choosing ceiling designs like this to add visual interest without cluttering the space. This style of modern track ceiling is also trending in Arlington and Alexandria, Virginia, as well as Rockville, Maryland for luxury home renovations that feel fresh, intentional, and next-level.`,
            images: ['cover2.jpg', 'img9.jpg'],
            alt: 'Geometric LED track ceiling installation in modern residential living room in Potomac MD',
            // Backend SEO Tags (Not visible on page)
            keywords: ['custom ceiling Potomac MD', 'LED track ceiling Rockville MD', 'modern ceiling Washington DC', 'geometric ceiling Northern Virginia', 'luxury ceiling Arlington VA', 'custom ceiling Alexandria VA', 'residential ceiling design Maryland'],
            localSEO: {
                location: 'Potomac, MD',
                service: 'Custom Ceiling Design & Installation',
                market: 'Residential',
                region: 'Maryland / Northern Virginia / Washington, DC'
            }
        },
        'cover3': {
            title: 'Luxury Recessed LED Ceiling Design Concept in Washington, DC Penthouse',
            metaDescription: 'Luxury recessed LED ceiling design concept for a modern penthouse living room in Washington, DC, featuring integrated linear lighting and architectural tray ceiling detailing.',
            description: `This luxury recessed LED ceiling design concept brings a high-rise penthouse aesthetic to modern residential interiors in Washington, DC. The clean tray ceiling with integrated linear lighting creates soft ambient illumination while maintaining a sleek, architectural finish. This style of custom ceiling is trending across Northern Virginia, including Arlington and Alexandria, and is increasingly popular in Potomac and Rockville, Maryland for upscale residential renovations seeking a modern city-inspired look.`,
            images: ['cover3.jpg', 'img23.jpg', 'img24.jpg'],
            alt: 'Luxury recessed LED ceiling design concept in modern penthouse living room in Washington DC',
            // Backend SEO Tags (Not visible on page)
            keywords: ['luxury ceiling Washington DC', 'recessed LED ceiling Arlington VA', 'modern ceiling Northern Virginia', 'custom ceiling Potomac MD', 'penthouse ceiling Rockville MD', 'tray ceiling with LED lighting Alexandria VA', 'high-end residential ceiling Maryland'],
            localSEO: {
                location: 'Washington, DC',
                service: 'Design Concept / Rendering',
                market: 'Residential (Luxury Condo / Penthouse)',
                region: 'Washington, DC / Northern Virginia / Maryland'
            }
        },
        'cover4': {
            title: 'Modern LED Track Ceiling Installation in Arlington, Virginia Corporate Office',
            metaDescription: 'Modern LED track ceiling installation in Arlington, Virginia corporate office featuring recessed linear lighting and architectural ceiling design for contemporary commercial interiors.',
            description: `This modern LED track ceiling installation brings clean architectural energy to a high-end commercial interior in Arlington, Virginia. The recessed linear lighting creates a sleek and minimal aesthetic that complements floor-to-ceiling windows and contemporary structural elements. This type of custom ceiling is increasingly popular for corporate offices and premium commercial spaces across Northern Virginia and Washington, DC. Similar installations are trending in Rockville and Potomac, Maryland for professional office build-outs that require a polished, forward-thinking interior finish.`,
            images: ['cover4.jpg', 'img16.jpg', 'img18.jpg', 'img19.jpg', 'img20.jpg', 'img21.jpg', 'img22.jpg'],
            alt: 'Modern LED track ceiling installation in contemporary commercial office in Arlington VA',
            // Backend SEO Tags (Not visible on page)
            keywords: ['commercial ceiling Arlington VA', 'LED track ceiling Northern Virginia', 'modern office ceiling Washington DC', 'custom ceiling Rockville MD', 'architectural ceiling Potomac MD', 'corporate ceiling design Alexandria VA', 'commercial ceiling contractor Northern Virginia'],
            localSEO: {
                location: 'Arlington, VA',
                service: 'Custom Modern LED Track Ceiling',
                market: 'Commercial',
                region: 'Northern Virginia / Washington, DC / Maryland'
            }
        },
        'cover5': {
            title: 'Luxury Tray Ceiling with LED Cove Lighting – Residential Rendering in Washington, DC',
            metaDescription: 'This luxury tray ceiling rendering with soft LED cove lighting showcases a clean, modern ceiling design concept for high-end residential interiors in Washington, DC and Northern Virginia.',
            description: `This luxury tray ceiling rendering with integrated LED cove lighting presents a refined, modern ceiling concept designed for upscale residential interiors in Washington, DC. The recessed architectural ceiling detail creates a calm, elevated atmosphere ideal for living rooms and open-concept homes throughout Northern Virginia, including Arlington and Alexandria. Similar custom ceiling designs are trending in Potomac and Rockville, Maryland for homeowners seeking subtle architectural depth with a premium finish.`,
            images: ['cover5.jpg', 'img11.jpg', 'img12.jpg', 'img13.jpg', 'img14.jpg', 'img15.jpg'],
            alt: 'Luxury residential tray ceiling rendering with LED cove lighting in modern living room in Washington DC',
            // Backend SEO Tags (Not visible on page)
            keywords: ['luxury ceiling Washington DC', 'tray ceiling with LED lighting Northern Virginia', 'custom ceiling Arlington VA', 'modern ceiling Alexandria VA', 'residential ceiling design Potomac MD', 'LED cove ceiling Rockville MD', 'ceiling design rendering Maryland'],
            localSEO: {
                location: 'Washington, DC',
                service: 'Residential Rendering',
                market: 'Residential',
                region: 'Washington, DC / Northern Virginia / Maryland'
            }
        },
        'cover6': {
            title: 'Printed Backlit Stretch Ceiling Installation in Rockville, Maryland Auto Showroom',
            metaDescription: 'Printed backlit stretch ceiling installation in Rockville, Maryland automotive showroom featuring large-format luminous ceiling panels designed to evenly diffuse light and enhance modern commercial interiors across Maryland, Northern Virginia, and Washington, DC.',
            description: `This printed backlit stretch ceiling installation transforms a modern automotive showroom in Rockville, Maryland with clean, evenly diffused lighting that elevates the entire customer experience. The luminous ceiling panel creates a bright, premium atmosphere that enhances vehicle presentation while maintaining a spacious, high-end feel. Commercial ceiling systems like this are increasingly popular in Washington, DC and Northern Virginia, including Arlington and Alexandria. Similar backlit ceiling installations are also trending in Potomac, Maryland for commercial spaces seeking a modern architectural lighting statement.`,
            images: ['cover6.jpg', 'img25.jpg', 'img26.jpg'],
            alt: 'Printed backlit stretch ceiling installation in commercial auto showroom in Rockville MD',
            // Backend SEO Tags (Not visible on page)
            keywords: ['printed backlit ceiling Rockville MD', 'commercial ceiling Washington DC', 'backlit stretch ceiling Northern Virginia', 'showroom ceiling Arlington VA', 'modern commercial ceiling Alexandria VA', 'luminous ceiling Potomac MD', 'custom commercial ceiling Maryland'],
            localSEO: {
                location: 'Rockville, MD',
                service: 'Printed Backlit Stretch Ceiling Installation',
                market: 'Commercial',
                industry: 'Automotive Showroom',
                region: 'Maryland / Northern Virginia / Washington, DC'
            }
        },
        'cover7': {
            title: 'Modern LED Stretch Ceiling in Residential Dining Room – Northern Virginia',
            metaDescription: 'Modern LED stretch ceiling installation in a residential dining and kitchen space in Northern Virginia featuring integrated linear lighting and glossy architectural ceiling design for contemporary homes across DC and Maryland.',
            description: `This modern stretch ceiling with integrated LED light lines was installed in a contemporary residential dining and kitchen space in Northern Virginia. The glossy ceiling finish combined with custom linear lighting creates a clean, minimalist aesthetic that enhances both functionality and architectural design. Homeowners throughout Washington, DC, Maryland, and Northern Virginia are increasingly selecting LED stretch ceiling systems to introduce refined lighting accents and elevate interior spaces with sleek, modern detailing.`,
            images: ['cover7.jpg', 'img27.jpg', 'img28.jpg', 'img29.jpg', 'img30.jpg'],
            alt: 'modern LED stretch ceiling with linear lighting in residential dining room Northern Virginia',
            // Backend SEO Tags (Not visible on page)
            keywords: ['residential stretch ceiling Northern Virginia', 'modern LED ceiling Washington DC', 'custom ceiling design Maryland', 'kitchen stretch ceiling Arlington VA', 'dining room LED ceiling Alexandria VA', 'contemporary ceiling Potomac MD', 'glossy stretch ceiling installation DC'],
            localSEO: {
                location: 'Arlington, VA / Northern Virginia',
                service: 'Residential LED Stretch Ceiling',
                market: 'Residential',
                region: 'Northern Virginia / Washington, DC / Maryland'
            }
        },
        'cover8': {
            title: 'Mirrored Stretch Ceiling with LED Perimeter Lighting in Modern Home – Rockville, Maryland',
            metaDescription: 'Mirrored stretch ceiling installation with integrated LED perimeter lighting in a modern residential living space in Rockville, Maryland, delivering reflective luxury and contemporary architectural illumination for homes across DC and Northern Virginia.',
            description: `This custom mirrored stretch ceiling with integrated LED perimeter lighting transforms a modern residential living space into a sleek, high-end interior. The high-gloss reflective ceiling finish visually enhances ceiling height while recessed LED light lines create a clean architectural glow. Homeowners across Rockville, Potomac, Washington, DC, and Northern Virginia are increasingly selecting modern stretch ceiling systems to elevate living rooms with contemporary lighting and luxury finishes.`,
            images: ['cover8.jpg', 'img31.jpg', 'img32.jpg', 'img33.jpg', 'img34.jpg', 'img35.jpg', 'img36.jpg', 'img37.jpg'],
            alt: 'mirrored stretch ceiling with LED perimeter lighting in modern residential living room Maryland',
            // Backend SEO Tags (Not visible on page)
            keywords: ['mirrored stretch ceiling Maryland', 'residential LED ceiling Rockville MD', 'modern ceiling design Potomac MD', 'custom stretch ceiling Washington DC', 'luxury ceiling installation Northern Virginia', 'LED perimeter ceiling Alexandria VA', 'contemporary living room ceiling Arlington VA'],
            localSEO: {
                location: 'Rockville, MD / Maryland',
                service: 'Residential Mirrored Stretch Ceiling',
                market: 'Residential',
                region: 'Maryland / Northern Virginia / Washington, DC'
            }
        },
        'cover9': {
            title: 'Modern Geometric LED Ceiling Rendering for Luxury Homes – Northern Virginia & Washington DC',
            metaDescription: 'Modern geometric LED ceiling rendering featuring recessed light lines and a minimalist stretch ceiling concept designed for luxury homes across Washington, DC, Northern Virginia, and Maryland.',
            description: `This modern 3D ceiling rendering showcases sleek geometric LED light lines integrated into a minimalist stretch ceiling concept designed for high-end residential interiors. Contemporary ceiling designs like this are trending in luxury homes and modern renovations throughout Washington, DC, Northern Virginia, and Maryland, including Alexandria, Arlington, Potomac, and Rockville. It serves as inspiration for homeowners seeking bold architectural ceiling concepts with clean LED lighting integration.`,
            images: ['cover9.jpg', 'img40.jpg', 'img41.jpg', 'img42.jpg', 'img43.jpg', 'img44.jpg', 'img45.jpg', 'img46.jpg'],
            alt: 'modern geometric LED ceiling rendering for luxury living room',
            // Backend SEO Tags (Not visible on page)
            keywords: ['geometric LED ceiling design', 'modern ceiling rendering', 'custom LED ceiling Washington DC', 'luxury ceiling design Northern Virginia', 'stretch ceiling design Maryland', 'modern ceiling lighting Alexandria VA', 'ceiling design ideas Arlington VA', 'custom ceiling concepts Potomac MD'],
            localSEO: {
                location: 'Washington, DC / Northern Virginia',
                service: 'Modern Geometric LED Ceiling Rendering',
                market: 'Renderings / Design Concepts',
                region: 'Washington, DC / Northern Virginia / Maryland'
            }
        },
        'cover10': {
            title: 'Modern LED Perimeter Ceiling in Commercial Lobby – Washington DC, Maryland & Northern Virginia',
            metaDescription: 'Modern commercial lobby ceiling featuring recessed perimeter LED lighting and custom architectural ceiling design for office interiors across Washington, DC, Northern Virginia, and Maryland.',
            description: `This commercial lobby showcases a modern custom ceiling with recessed perimeter LED lighting, delivering a clean and sophisticated aesthetic for corporate and office interiors. This type of LED ceiling design is increasingly popular in office buildings, medical facilities, and professional commercial environments throughout Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Rockville. Our custom ceiling systems enhance lighting performance, architectural presence, and overall interior refinement for business spaces.`,
            images: ['cover10.jpg', 'img47.jpg', 'img48.jpg', 'img58.jpg', 'img59.jpg', 'img60.jpg'],
            alt: 'commercial lobby ceiling with recessed LED perimeter lighting',
            // Backend SEO Tags (Not visible on page)
            keywords: ['commercial ceiling design Washington DC', 'office lobby ceiling lighting', 'LED perimeter ceiling Northern Virginia', 'custom commercial ceilings Maryland', 'corporate interior ceiling design', 'stretch ceiling commercial installation', 'modern office ceiling lighting DC'],
            localSEO: {
                location: 'Washington, DC / Northern Virginia / Maryland',
                service: 'Commercial LED Perimeter Ceiling',
                market: 'Commercial',
                region: 'Washington, DC / Northern Virginia / Maryland'
            }
        },
        'cover11': {
            title: 'Modern Linear LED Ceiling Lighting in Residential Hallway – Northern Virginia, Washington DC & Maryland',
            metaDescription: 'Modern residential hallway featuring recessed linear LED ceiling lighting and integrated architectural detailing for luxury homes across Northern Virginia, Washington, DC, and Maryland.',
            description: `This modern residential hallway showcases custom recessed linear LED ceiling lighting integrated seamlessly into a minimalist architectural design. Clean light lines enhance both functionality and visual appeal, creating a sophisticated, contemporary atmosphere. Linear LED ceiling installations like this are increasingly popular in luxury homes and modern renovations throughout Northern Virginia, Washington, DC, and Maryland, including Alexandria, Arlington, Potomac, and Rockville. Our custom ceiling lighting systems elevate residential interiors with precision detailing and refined illumination.`,
            images: ['cover11.jpg', 'img51.jpg', 'img52.jpg', 'img53.jpg', 'img54.jpg', 'img55.jpg', 'img56.jpg', 'img57.jpg'],
            alt: 'modern residential hallway ceiling with recessed linear LED lighting',
            // Backend SEO Tags (Not visible on page)
            keywords: ['modern residential ceiling lighting', 'linear LED ceiling Northern Virginia', 'custom hallway ceiling Washington DC', 'recessed LED ceiling Maryland', 'luxury home ceiling design Arlington VA', 'contemporary ceiling lighting Alexandria VA'],
            localSEO: {
                location: 'Northern Virginia / Washington, DC / Maryland',
                service: 'Residential Linear LED Ceiling Lighting',
                market: 'Residential',
                region: 'Northern Virginia / Washington, DC / Maryland'
            }
        },
        'cover22': {
            title: 'Luxury Stretch Ceiling with Geometric LED Lighting – Alexandria VA, Washington DC & Potomac MD',
            metaDescription: 'Luxury residential foyer featuring a high-gloss stretch ceiling with geometric linear LED lighting, installed in upscale homes across Northern Virginia, Washington DC, and Maryland.',
            description: `This luxury residential foyer showcases a high-gloss stretch ceiling with integrated geometric LED lighting, creating a bold and modern architectural statement. Reflective ceiling panels visually enhance height and depth, while recessed linear light accents deliver clean, contemporary illumination. Custom stretch ceiling installations like this are increasingly popular in upscale homes across Alexandria, Arlington, Potomac, Rockville, and the greater Washington DC metropolitan area.`,
            images: ['cover22.jpg', 'img50.jpg'],
            alt: 'luxury stretch ceiling with geometric LED lighting in residential foyer',
            // Backend SEO Tags (Not visible on page)
            keywords: ['stretch ceiling Alexandria VA', 'modern LED ceiling Washington DC', 'luxury residential ceiling Potomac MD', 'geometric LED ceiling Northern Virginia', 'custom stretch ceilings Rockville MD', 'high gloss ceiling design Arlington VA'],
            localSEO: {
                location: 'Alexandria, VA / Washington DC / Potomac MD',
                service: 'Luxury Stretch Ceiling with Geometric LED Lighting',
                market: 'Residential',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover12': {
            title: 'Luxury Stretch Ceiling with LED Perimeter Lighting – Washington DC, Arlington VA & Bethesda MD',
            metaDescription: 'Luxury residential living and dining space featuring a custom stretch ceiling with perimeter LED cove lighting and modern linear accents, installed in upscale homes across Washington DC, Northern Virginia, and Maryland.',
            description: `This luxury residential living and dining area features a custom stretch ceiling with integrated perimeter LED cove lighting and modern linear light accents. The clean ceiling finish combined with architectural lighting creates an elegant, high-end atmosphere ideal for upscale homes and condominiums. Stretch ceiling installations like this are increasingly popular throughout Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Silver Spring, for homeowners seeking seamless finishes and refined lighting design.`,
            images: ['cover12.jpg', 'img61.jpg', 'img62.jpg', 'img63.jpg'],
            alt: 'luxury stretch ceiling with LED perimeter lighting in modern living room',
            // Backend SEO Tags (Not visible on page)
            keywords: ['stretch ceiling Washington DC', 'modern ceiling design Arlington VA', 'luxury LED ceiling Bethesda MD', 'custom ceiling lighting Northern Virginia', 'living room stretch ceiling Alexandria VA', 'perimeter LED ceiling Maryland'],
            localSEO: {
                location: 'Washington DC / Arlington VA / Bethesda MD',
                service: 'Luxury Stretch Ceiling with LED Perimeter Lighting',
                market: 'Residential',
                region: 'Washington DC / Northern Virginia / Maryland'
            }
        },
        'cover13': {
            title: 'Custom Stretch Ceiling with Circular LED Cove Lighting – Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This commercial indoor pool and spa features a custom stretch ceiling with circular architectural designs and integrated LED cove lighting. The curved ceiling layout enhances the luxury ambiance while providing soft, even illumination for hospitality and wellness spaces. Ideal for hotels, fitness centers, and luxury residential amenities in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.',
            description: `This commercial indoor pool and spa features a custom stretch ceiling with circular architectural designs and integrated LED cove lighting. The curved ceiling layout enhances the luxury ambiance while providing soft, even illumination for hospitality and wellness spaces. Ideal for hotels, fitness centers, and luxury residential amenities in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.`,
            images: ['cover13.jpg', 'img70.jpg', 'img71.jpg', 'img72.jpg', 'img74.jpg'],
            alt: 'custom stretch ceiling with circular LED lighting in indoor pool spa',
            // Backend SEO Tags (Not visible on page)
            keywords: ['commercial stretch ceiling Washington DC', 'pool ceiling design Northern Virginia', 'spa ceiling lighting Maryland', 'hotel ceiling installation Arlington VA', 'custom ceiling contractor Bethesda MD', 'architectural LED ceiling Tysons VA'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Commercial Stretch Ceiling Installation',
                market: 'Commercial / Hospitality',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover14': {
            title: 'Backlit Stretch Ceiling with Custom Sky Print – Residential Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This residential home theater features a custom backlit stretch ceiling with a printed sky design, creating a dramatic illuminated ceiling centerpiece. The LED lightbox ceiling provides even ambient lighting while adding a modern architectural statement to the room. Ideal for luxury homes, media rooms, and entertainment spaces in Washington, DC, Northern Virginia, and Maryland, including McLean, Alexandria, Bethesda, and Rockville.',
            description: `This residential home theater features a custom backlit stretch ceiling with a printed sky design, creating a dramatic illuminated ceiling centerpiece. The LED lightbox ceiling provides even ambient lighting while adding a modern architectural statement to the room. Ideal for luxury homes, media rooms, and entertainment spaces in Washington, DC, Northern Virginia, and Maryland, including McLean, Alexandria, Bethesda, and Rockville.`,
            images: ['cover14.jpg', 'img75.jpg', 'img76.jpg', 'img86.jpg'],
            alt: 'backlit stretch ceiling with custom sky print in home theater room',
            // Backend SEO Tags (Not visible on page)
            keywords: ['backlit stretch ceiling Washington DC', 'home theater ceiling Northern Virginia', 'printed stretch ceiling Maryland', 'LED lightbox ceiling McLean VA', 'custom ceiling design Bethesda MD', 'modern ceiling installation Rockville'],
            localSEO: {
                location: 'Washington DC Metropolitan Area',
                service: 'Backlit Stretch Ceiling with Custom Sky Print',
                market: 'Commercial (Residential Amenities)',
                region: 'Washington DC / Virginia / Maryland'
            }
        },
        'cover15': {
            title: 'Backlit Stretch Ceiling with Forest Sky Print – Commercial Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This commercial interior features a custom backlit stretch ceiling with a forest sky print, creating a bright, immersive ceiling feature that transforms the space with natural light effects. The illuminated ceiling panel adds a modern, calming atmosphere ideal for offices, wellness centers, clinics, hotels, and commercial interiors. Professional stretch ceiling installation services available in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, Silver Spring, and Rockville.',
            description: `This commercial interior features a custom backlit stretch ceiling with a forest sky print, creating a bright, immersive ceiling feature that transforms the space with natural light effects. The illuminated ceiling panel adds a modern, calming atmosphere ideal for offices, wellness centers, clinics, hotels, and commercial interiors. Professional stretch ceiling installation services available in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, Silver Spring, and Rockville.`,
            images: ['cover15.jpg', 'img80.jpg', 'img81.jpg', 'img82.jpg', 'img83.jpg', 'img84.jpg'],
            alt: 'backlit stretch ceiling with forest sky print in commercial interior',
            // Backend SEO Tags (Not visible on page)
            keywords: ['backlit stretch ceiling Washington DC', 'commercial stretch ceiling Northern Virginia', 'printed stretch ceiling Maryland', 'LED lightbox ceiling Arlington VA', 'custom ceiling design Bethesda MD', 'illuminated ceiling panels Silver Spring', 'modern commercial ceiling Rockville'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Commercial Backlit Forest Sky Print',
                market: 'Commercial',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover88': {
            title: 'Luxury Backlit Stretch Ceiling with Sky Print – Commercial Spa Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This luxury spa interior features a custom backlit stretch ceiling with a sky and cloud print, creating a relaxing, immersive ceiling experience. The illuminated ceiling panel enhances the ambiance of wellness centers, spas, hotels, and luxury commercial interiors by providing soft, even LED lighting and a striking architectural focal point. Ideal for premium commercial spaces in Washington, DC, Northern Virginia, and Maryland, including Tysons, Arlington, Bethesda, Rockville, and Silver Spring.',
            description: `This luxury spa interior features a custom backlit stretch ceiling with a sky and cloud print, creating a relaxing, immersive ceiling experience. The illuminated ceiling panel enhances the ambiance of wellness centers, spas, hotels, and luxury commercial interiors by providing soft, even LED lighting and a striking architectural focal point. Ideal for premium commercial spaces in Washington, DC, Northern Virginia, and Maryland, including Tysons, Arlington, Bethesda, Rockville, and Silver Spring.`,
            images: ['cover88.jpg', 'img97.jpg', 'img98.jpg'],
            alt: 'luxury backlit stretch ceiling with sky print in spa and wellness center',
            // Backend SEO Tags (Not visible on page)
            keywords: ['backlit stretch ceiling Washington DC', 'commercial stretch ceiling Northern Virginia', 'spa ceiling design Maryland', 'printed stretch ceiling Tysons VA', 'LED ceiling panels Arlington VA', 'custom ceiling installation Bethesda MD', 'luxury ceiling design Rockville MD', 'wellness center ceiling Silver Spring'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Luxury Commercial Backlit Sky Print',
                market: 'Commercial',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover16': {
            title: 'Backlit Stretch Ceiling with Sky Print – Commercial Lobby Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This modern commercial lobby features a custom backlit stretch ceiling with a realistic sky and cloud print, creating the illusion of natural daylight in an interior atrium. The illuminated ceiling panel enhances vertical architectural spaces such as hotel lobbies, office atriums, and luxury commercial buildings by adding depth, brightness, and a high-end visual focal point. Ideal for commercial ceiling installations in Washington, DC, Northern Virginia, and Maryland, including Tysons, Arlington, Bethesda, and Rockville.',
            description: `This modern commercial lobby features a custom backlit stretch ceiling with a realistic sky and cloud print, creating the illusion of natural daylight in an interior atrium. The illuminated ceiling panel enhances vertical architectural spaces such as hotel lobbies, office atriums, and luxury commercial buildings by adding depth, brightness, and a high-end visual focal point. Ideal for commercial ceiling installations in Washington, DC, Northern Virginia, and Maryland, including Tysons, Arlington, Bethesda, and Rockville.`,
            images: ['cover16.jpg', 'img100.jpg', 'img101.jpg', 'img102.jpg', 'img103.jpg', 'img104.jpg', 'img105.jpg', 'img106.jpg', 'img107.jpg'],
            alt: 'backlit stretch ceiling with sky print in commercial lobby atrium',
            // Backend SEO Tags (Not visible on page)
            keywords: ['backlit stretch ceiling Washington DC', 'commercial ceiling installation Northern Virginia', 'sky print stretch ceiling Maryland', 'lobby ceiling design Tysons VA', 'atrium ceiling lighting Arlington VA', 'custom printed ceiling Bethesda MD', 'LED lightbox ceiling Rockville MD', 'modern commercial ceiling Silver Spring'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Commercial Lobby Sky Print Backlit',
                market: 'Commercial',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover78': {
            title: 'Geometric LED Line Ceiling Design – Commercial Office Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This contemporary commercial office features a custom geometric LED line ceiling integrated into a stretch ceiling system, creating a clean, high-tech lighting pattern across the workspace. The illuminated linear ceiling design enhances brightness, improves visual comfort, and adds a bold architectural identity to modern office interiors. Ideal for corporate offices, coworking spaces, tech companies, and commercial interiors in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.',
            description: `This contemporary commercial office features a custom geometric LED line ceiling integrated into a stretch ceiling system, creating a clean, high-tech lighting pattern across the workspace. The illuminated linear ceiling design enhances brightness, improves visual comfort, and adds a bold architectural identity to modern office interiors. Ideal for corporate offices, coworking spaces, tech companies, and commercial interiors in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.`,
            images: ['cover78.jpg', 'img200.jpg', 'img201.jpg'],
            alt: 'geometric LED line ceiling in modern commercial office interior',
            // Backend SEO Tags (Not visible on page)
            keywords: ['LED line ceiling Washington DC', 'commercial office ceiling Northern Virginia', 'geometric stretch ceiling Maryland', 'modern office ceiling design Arlington VA', 'linear LED ceiling Tysons VA', 'corporate ceiling lighting Bethesda MD', 'custom office ceiling Silver Spring MD', 'contemporary ceiling installation Washington DC'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Commercial Geometric LED Line Ceiling',
                market: 'Commercial',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover99': {
            title: 'Glossy Stretch Ceiling with Geometric LED Light Frames – Commercial Restaurant Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This upscale commercial restaurant interior features a glossy stretch ceiling with custom geometric LED light frames, creating a sleek, modern atmosphere for dining spaces. The reflective ceiling surface enhances brightness and visual depth, while the integrated linear LED lighting delivers balanced illumination across the room. Ideal for restaurants, banquet halls, hotel dining areas, and hospitality venues in Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Rockville.',
            description: `This upscale commercial restaurant interior features a glossy stretch ceiling with custom geometric LED light frames, creating a sleek, modern atmosphere for dining spaces. The reflective ceiling surface enhances brightness and visual depth, while the integrated linear LED lighting delivers balanced illumination across the room. Ideal for restaurants, banquet halls, hotel dining areas, and hospitality venues in Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Rockville.`,
            images: ['cover99.jpg', 'img300.jpg', 'img301.jpg'],
            alt: 'glossy stretch ceiling with geometric LED lighting in modern restaurant interior',
            // Backend SEO Tags (Not visible on page)
            keywords: ['glossy stretch ceiling Washington DC', 'restaurant ceiling design Northern Virginia', 'commercial dining ceiling Maryland', 'LED geometric ceiling Arlington VA', 'modern restaurant ceiling Alexandria VA', 'hospitality ceiling installation Bethesda MD', 'custom LED ceiling Rockville MD', 'banquet hall ceiling Washington DC'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Glossy Restaurant Stretch Ceiling',
                market: 'Commercial',
                region: 'Northern Virginia / Washington DC / Maryland'
            }
        },
        'cover17': {
            title: 'Backlit Stretch Ceiling with Geometric LED Design – Luxury Bathroom Project in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This luxury residential bathroom features a custom backlit stretch ceiling with modern geometric LED light lines, creating a floating ceiling effect and high-end architectural statement. The illuminated ceiling design provides soft ambient lighting while enhancing the contemporary spa-like atmosphere of the space. Ideal for luxury homes, penthouses, and upscale residential renovations in Washington, DC, Northern Virginia, and Maryland, including McLean, Arlington, Bethesda, and Potomac.',
            description: `This luxury residential bathroom features a custom backlit stretch ceiling with modern geometric LED light lines, creating a floating ceiling effect and high-end architectural statement. The illuminated ceiling design provides soft ambient lighting while enhancing the contemporary spa-like atmosphere of the space. Ideal for luxury homes, penthouses, and upscale residential renovations in Washington, DC, Northern Virginia, and Maryland, including McLean, Arlington, Bethesda, and Potomac.`,
            images: ['cover17.jpg', 'img800.jpg', 'img801.jpg', 'img802.jpg'],
            alt: 'backlit stretch ceiling with geometric LED lighting in luxury residential bathroom',
            // Backend SEO Tags (Not visible on page)
            keywords: ['backlit stretch ceiling Washington DC', 'luxury bathroom ceiling Northern Virginia', 'LED stretch ceiling Maryland', 'modern ceiling design McLean VA', 'custom ceiling installation Bethesda MD', 'high end bathroom ceiling Potomac'],
            localSEO: {
                location: 'Washington, DC / Northern Virginia / Maryland',
                service: 'Backlit Stretch Ceiling with LED Geometry',
                market: 'Residential',
                region: 'Washington DC / Virginia / Maryland'
            }
        },
        'cover18': {
            title: 'Glossy Stretch Ceiling with LED Perimeter Lighting – Modern Commercial Office in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This modern commercial space features a high-gloss stretch ceiling with integrated LED perimeter lighting, creating a sleek reflective ceiling surface that enhances natural light and architectural depth. The illuminated ceiling design delivers a clean, contemporary look ideal for corporate offices, showrooms, design studios, and professional workspaces. Perfect for commercial interior projects in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.',
            description: `This modern commercial space features a high-gloss stretch ceiling with integrated LED perimeter lighting, creating a sleek reflective ceiling surface that enhances natural light and architectural depth. The illuminated ceiling design delivers a clean, contemporary look ideal for corporate offices, showrooms, design studios, and professional workspaces. Perfect for commercial interior projects in Washington, DC, Northern Virginia, and Maryland, including Arlington, Tysons, Bethesda, and Silver Spring.`,
            images: ['cover18.jpg', 'img900.jpg', 'img901.jpg'],
            alt: 'glossy stretch ceiling with LED perimeter lighting in modern commercial office',
            // Backend SEO Tags (Not visible on page)
            keywords: ['commercial stretch ceiling Washington DC', 'LED perimeter ceiling Northern Virginia', 'modern office ceiling Maryland', 'glossy ceiling installation Arlington VA', 'custom commercial ceiling Tysons VA', 'architectural ceiling design Bethesda MD'],
            localSEO: {
                location: 'Washington DC / Northern Virginia / Maryland',
                service: 'Commercial | Stretch Ceiling with Integrated LED Lighting',
                market: 'Commercial',
                region: 'Washington DC / Virginia / Maryland'
            }
        },
        'cover19': {
            title: 'High-Gloss Stretch Ceiling with LED Cove Lighting – Luxury Residential Living Room in Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This luxury residential living room features a high-gloss stretch ceiling with soft LED cove lighting, creating a reflective ceiling surface that enhances brightness and visual height. The illuminated ceiling design adds a refined architectural touch while delivering warm ambient lighting for everyday living and entertaining. Ideal for upscale homes, condos, and apartments in Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Silver Spring.',
            description: `This luxury residential living room features a high-gloss stretch ceiling with soft LED cove lighting, creating a reflective ceiling surface that enhances brightness and visual height. The illuminated ceiling design adds a refined architectural touch while delivering warm ambient lighting for everyday living and entertaining. Ideal for upscale homes, condos, and apartments in Washington, DC, Northern Virginia, and Maryland, including Arlington, Alexandria, Bethesda, and Silver Spring.`,
            images: ['cover19.jpg', 'img700.jpg', 'img701.jpg'],
            alt: 'high-gloss stretch ceiling with LED cove lighting in luxury living room',
            // Backend SEO Tags (Not visible on page)
            keywords: ['residential stretch ceiling Washington DC', 'glossy ceiling living room Northern Virginia', 'LED cove ceiling Maryland', 'luxury ceiling design Arlington VA', 'custom ceiling installation Alexandria VA', 'modern stretch ceiling Bethesda MD'],
            localSEO: {
                location: 'Washington, DC / Northern Virginia / Maryland',
                service: 'Residential | Stretch Ceiling with Perimeter LED Lighting',
                market: 'Residential',
                region: 'Washington DC / Virginia / Maryland'
            }
        },
        'cover21': {
            title: 'Glossy Stretch Ceiling with Recessed Lighting in Luxury Bedroom – Washington DC, Northern Virginia & Maryland',
            metaDescription: 'This modern residential bedroom features a glossy stretch ceiling with recessed perimeter lighting, creating a bright, open feel and reflecting natural daylight from the windows below. The clean ceiling design enhances the architectural detail of the space while adding soft ambient lighting for comfort and relaxation. Perfect for luxury homes, master bedrooms, and high-end residential interiors in Washington, DC, Northern Virginia, and Maryland, including Fairfax, Arlington, Bethesda, and Rockville.',
            description: `This modern residential bedroom features a glossy stretch ceiling with recessed perimeter lighting, creating a bright, open feel and reflecting natural daylight from the windows below. The clean ceiling design enhances the architectural detail of the space while adding soft ambient lighting for comfort and relaxation. Perfect for luxury homes, master bedrooms, and high-end residential interiors in Washington, DC, Northern Virginia, and Maryland, including Fairfax, Arlington, Bethesda, and Rockville.`,
            images: ['cover21.jpg', 'img2022.jpg'],
            alt: 'glossy stretch ceiling with recessed lighting in modern luxury bedroom',
            // Backend SEO Tags (Not visible on page)
            keywords: ['bedroom stretch ceiling Washington DC', 'luxury ceiling design Northern Virginia', 'custom ceiling bedroom Maryland', 'glossy ceiling installation Fairfax VA', 'modern stretch ceiling Rockville MD', 'recessed ceiling lighting Arlington VA'],
            localSEO: {
                location: 'Washington, DC / Northern Virginia / Maryland',
                service: 'Residential | Custom Stretch Ceiling (Rendering)',
                market: 'Renderings / Design Concepts',
                region: 'Washington DC / Virginia / Maryland'
            }
        }
    };

    /**
     * Open a project in detail view
     * @param {string} projectId - ID used to identify which project was clicked
     */
    window.openProject = function (projectId) {
        projectModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling

        const data = projectsData[projectId];

        if (data) {
            modalTitle.textContent = data.title;
            modalDesc.innerHTML = `<p>${data.description}</p>`;

            // Backend SEO Tags (Hidden)
            modalMeta.innerHTML = `
                <p>Meta Description: ${data.metaDescription || ''}</p>
                <p>Keywords: ${data.keywords.join(', ')}</p>
                <p>Local SEO: ${JSON.stringify(data.localSEO)}</p>
            `;

            // Populate Gallery
            modalGallery.innerHTML = '';
            data.images.forEach(imgName => {
                const imgContainer = document.createElement('div');
                imgContainer.className = 'gallery-item';

                const img = document.createElement('img');
                img.src = `images/${imgName}`;
                img.alt = data.alt || data.title;
                img.loading = 'lazy';
                // Preserve ratio is handled by CSS (object-fit: contain)

                img.onerror = function () {
                    // If image fails, remove the container entirely to avoid gray gaps
                    this.parentElement.remove();
                };

                imgContainer.appendChild(img);
                modalGallery.appendChild(imgContainer);
            });
        } else {
            console.warn(`Project data for ${projectId} not found.`);
            closeProject();
        }

        // Update URL hash
        history.pushState(null, null, `#project-${projectId}`);
    };

    /**
     * Close the project detail view
     */
    window.closeProject = function () {
        projectModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore scrolling

        // Return to the current section hash
        const activeLink = document.querySelector('.nav-link.active');
        const activeSection = activeLink ? activeLink.getAttribute('data-section') : 'residential';
        history.pushState(null, null, `#${activeSection}`);
    };

    // Handle initial landing or refresh
    const currentHash = window.location.hash.substring(1).toLowerCase();
    const validSections = ['about', 'residential', 'commercial', 'renderings', 'backlit'];

    if (validSections.includes(currentHash)) {
        showSection(currentHash);
    } else {
        // DEFAULT LANDING: Residential
        showSection('residential');
    }
});
