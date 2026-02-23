/**
 * Designo Ceilings - Navigation & Gallery Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('Designo Ceilings: Luxury Gallery System Initialized.');

    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.content-section');

    function showSection(sectionId) {
        sections.forEach(section => section.classList.remove('active'));
        const targetSection = document.getElementById(sectionId);
        if (targetSection) targetSection.classList.add('active');

        navLinks.forEach(link => {
            if (link.getAttribute('data-section') === sectionId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Mobile Menu Toggle Logic
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const sidebar = document.querySelector('.sidebar');

    function toggleMobileMenu() {
        const isActive = mobileMenuToggle.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        sidebar.classList.toggle('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
                history.pushState(null, null, `#${sectionId}`);

                // Auto-close menu on mobile
                if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });

    // Project Modal & Drawer Logic
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-description');
    const modalGallery = document.getElementById('modal-project-gallery');



    const sortProjectImages = (images) => {
        if (!images || images.length <= 1) return images;

        const getCategory = (img) => {
            if (img.category) return img.category;
            const content = ((img.alt || '') + ' ' + (img.src || '')).toLowerCase();
            if (content.includes('stair') || content.includes('railing') || content.includes('steps')) return 'staircase';
            if (content.includes('kitchen') || content.includes('island') || content.includes('cabinet') || content.includes('appliance') || content.includes('fridge') || content.includes('stove') || content.includes('sink') || content.includes('faucet')) return 'kitchen';
            const ceilingKeywords = ['ceiling', 'led', 'lighting', 'backlit', 'tray', 'coffered', 'stretch', 'detail', 'architectural'];
            if (ceilingKeywords.some(kw => content.includes(kw))) return 'ceiling';
            return 'general';
        };

        const getQuality = (img) => {
            if (img.quality) return img.quality;
            const content = ((img.alt || '') + ' ' + (img.src || '')).toLowerCase();
            const highQualityKeywords = ['hero view', 'main interior', 'elite', 'striking', 'luxury', 'pattern', 'detail', 'premium', 'sharp', 'finish'];
            if (highQualityKeywords.some(kw => content.includes(kw))) return 'high';
            return 'low';
        };

        const ranking = { 'ceiling': 1, 'general': 2, 'staircase': 3, 'kitchen': 4 };

        return [...images].sort((a, b) => {
            const catA = getCategory(a);
            const catB = getCategory(b);
            const qualA = getQuality(a);
            const qualB = getQuality(b);

            // Level 1: Ceiling + High Quality
            const isEliteA = (catA === 'ceiling' && qualA === 'high');
            const isEliteB = (catB === 'ceiling' && qualB === 'high');

            if (isEliteA && !isEliteB) return -1;
            if (isEliteB && !isEliteA) return 1;

            // Level 2-5: Strictly by Category Rank
            if (ranking[catA] !== ranking[catB]) {
                return ranking[catA] - ranking[catB];
            }

            // Level 6: Tie-break by quality
            if (qualA === 'high' && qualB !== 'high') return -1;
            if (qualB === 'high' && qualA !== 'high') return 1;

            return 0;
        });
    };

    const projectsData = {
        'gloss-glow': {
            title: 'Elite High-Gloss Luminous Ceiling',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Interior</span>
                <span><i class="fas fa-eye"></i> High-Gloss Finish</span>
            </div>
            <p>A masterfully executed high-gloss stretch ceiling installation that combines exceptional reflectivity with modern architectural aesthetics. The mirror-like surface creates a stunning 'glow' effect by amplifying natural and artificial light, significantly expanding the visual volume of the interior space.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Superior high-reflectivity gloss membrane</li>
                    <li>Luminous architectural light diffusion</li>
                    <li>Seamless monolithic ceiling surface</li>
                    <li>Moisture resistant and anti-static</li>
                    <li>Precision-tensioned edge detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'glow.jpg', alt: 'Elite High-Gloss Luminous Ceiling - Hero View', category: 'ceiling', quality: 'high' }
            ]
        },
        'gloss-glo': {
            title: 'Modern High-Gloss Interior Ceiling',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-eye"></i> High-Gloss Finish</span>
            </div>
            <p>A sophisticated high-gloss stretch ceiling installation designed to enhance spatial depth and architectural clarity. The reflective membrane provides a mirror-like finish that amplifies ambient light and creates a clean, monolithic ceiling plane.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-reflectivity mirror finish membrane</li>
                    <li>Integrated architectural lighting</li>
                    <li>Seamless monolithic ceiling plane</li>
                    <li>Advanced light-reflection properties</li>
                    <li>Precision-engineered installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'glo.jpg', alt: 'Modern High-Gloss Interior Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'glo1.jpg', alt: 'Glossy ceiling detail 1', category: 'ceiling', quality: 'high' },
                { src: 'glo2.jpg', alt: 'Glossy ceiling detail 2', category: 'ceiling', quality: 'high' }
            ]
        },
        'gloss-add1': {
            title: 'Elite Residential Gloss Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-eye"></i> High-Gloss Finish</span>
            </div>
            <p>A stunning high-gloss stretch ceiling installation that redefines interior volume through exceptional reflectivity. The mirror-like finish maximizes natural light and creates a sophisticated architectural focal point, ideal for modern luxury living environments.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-reflectivity mirror finish membrane</li>
                    <li>Integrated architectural lighting</li>
                    <li>Seamless monolithic ceiling surface</li>
                    <li>Advanced light-reflective properties</li>
                    <li>Precision-tensioned edge detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'add1.jpg', alt: 'Elite Residential Gloss Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'add2.jpg', alt: 'Gloss ceiling reflective detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'matte-add4': {
            title: 'Modern Residential Matte Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential Matte</span>
            </div>
            <p>A pristine execution of our museum-grade matte stretch ceiling system. This installation provides a seamless, monolithic finish that perfectly diffuses light and elevates the architectural character of the home without the maintenance or imperfections of traditional materials.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Seamless monolithic ceiling plane</li>
                    <li>Premium museum-grade matte finish</li>
                    <li>Architectural lighting integration</li>
                    <li>Precision-engineered perimeter detailing</li>
                    <li>Maintenance-free luxury surface</li>
                </ul>
            </div>`,
            images: [
                { src: 'add4.jpg', alt: 'Modern Residential Matte Ceiling - Hero View', category: 'ceiling', quality: 'high' }
            ]
        },
        'matte-hero': {
            title: 'Premium Residential Matte Ceiling Collection',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residential</span>
                <span><i class="fas fa-home"></i> Residential Matte</span>
            </div>
            <p>A sophisticated collection of premium matte stretch ceiling installations, showcasing the perfect balance of minimalist aesthetics and architectural precision. These installations feature museum-grade matte membranes that provide a flawless, non-reflective finish, ideal for modern luxury living spaces.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Premium museum-grade matte membrane</li>
                    <li>Seamless monolithic ceiling plane</li>
                    <li>Integrated architectural lighting details</li>
                    <li>Non-reflective architectural finish</li>
                    <li>Precision-engineered installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'gllo5.jpg', alt: 'Premium Residential Matte Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'gllo4.jpg', alt: 'Matte ceiling detail view 1', category: 'ceiling', quality: 'high' },
                { src: 'gllo3.jpg', alt: 'Matte ceiling detail view 2', category: 'ceiling', quality: 'high' },
                { src: 'gllo.jpg', alt: 'Matte ceiling detail view 3', category: 'ceiling', quality: 'high' }
            ]
        },
        'rend-hero': {
            title: 'Architectural Rendering Collection',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Conceptual Design</span>
                <span><i class="fas fa-drafting-compass"></i> Rendering</span>
            </div>
            <p>A curated collection of photorealistic architectural renderings showcasing stretch ceiling concepts across residential and commercial environments. These high-fidelity visualizations demonstrate design possibilities before installation, highlighting material finishes, lighting integration, and spatial composition.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Photorealistic architectural visualization</li>
                    <li>Advanced lighting simulation</li>
                    <li>Material and finish previsualization</li>
                    <li>Spatial composition studies</li>
                    <li>Design-to-installation accuracy</li>
                </ul>
            </div>`,
            images: [
                { src: 'rend.jpg', alt: 'Architectural Rendering Collection - Hero View', category: 'rendering', quality: 'high' },
                { src: 'rend1.jpg', alt: 'Architectural rendering detail 1', category: 'rendering', quality: 'high' },
                { src: 'rend2.jpg', alt: 'Architectural rendering detail 2', category: 'rendering', quality: 'high' },
                { src: 'rend3.jpg', alt: 'Architectural rendering detail 3', category: 'rendering', quality: 'high' },
                { src: 'rend4.jpg', alt: 'Architectural rendering detail 4', category: 'rendering', quality: 'high' },
                { src: 'rend5.jpg', alt: 'Architectural rendering detail 5', category: 'rendering', quality: 'high' }
            ]
        },
        'bathroom-hero': {
            title: 'Modern Luxury Bathroom Matte Ceiling',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Home</span>
                <span><i class="fas fa-bath"></i> Residential Bathroom</span>
            </div>
            <p>A sophisticated matte stretch ceiling installation designed for a high-end residential bathroom. The seamless moisture-resistant membrane provides a clean, architectural finish that complements modern luxury fixtures and lighting.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Premium museum-grade matte membrane</li>
                    <li>Moisture-resistant architectural finish</li>
                    <li>Seamless monolithic ceiling plane</li>
                    <li>Integrated luxury lighting detail</li>
                    <li>Precision-engineered installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'bathroom0.jpg', alt: 'Modern Luxury Bathroom Matte Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'bathroom.jpg', alt: 'Bathroom ceiling detail view', category: 'ceiling', quality: 'high' },
                { src: 'bathroom3.jpg', alt: 'Bathroom lightning and finish detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'lines-hero': {
            title: 'Elite Residential Architectural Lines Ceiling',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Home</span>
                <span><i class="fas fa-home"></i> Residential Matte</span>
            </div>
            <p>This sophisticated residential installation showcases the power of precision-engineered architectural lines to define and elevate an interior space. Featuring a seamless matte finish and integrated high-end illumination, this project demonstrates a masterclass in modern ceiling design.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Signature architectural line integration</li>
                    <li>Premium museum-grade matte membrane</li>
                    <li>Continuous perimeter LED lighting channels</li>
                    <li>Seamless high-end architectural finish</li>
                    <li>Precision-engineered structural framing</li>
                </ul>
            </div>`,
            images: [
                { src: 'lines.jpg?v=20260221', alt: 'Elite Residential Architectural Lines Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'lines2.jpg', alt: 'Architectural lines ceiling detail 2', category: 'ceiling', quality: 'high' },
                { src: 'lines3.jpg', alt: 'Architectural lines ceiling detail 3', category: 'ceiling', quality: 'high' },
                { src: 'lines4.jpg', alt: 'Architectural lines ceiling detail 4', category: 'ceiling', quality: 'high' },
                { src: 'lines5.jpg', alt: 'Architectural lines ceiling detail 5', category: 'ceiling', quality: 'high' },
                { src: 'lines6.jpg', alt: 'Architectural lines ceiling detail 6', category: 'ceiling', quality: 'high' },
                { src: 'lines7.jpg', alt: 'Architectural lines ceiling detail 7', category: 'ceiling', quality: 'high' },
                { src: 'lines8.jpg', alt: 'Architectural lines ceiling detail 8', category: 'ceiling', quality: 'high' },
                { src: 'lines9.jpg', alt: 'Architectural lines ceiling detail 9', category: 'ceiling', quality: 'high' }
            ]
        },
        'condo-hero': {
            title: 'Modern High-Rise Condominium Ceiling System',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury High-Rise</span>
                <span><i class="fas fa-building"></i> Residential Condominium</span>
            </div>
            <p>A sophisticated high-gloss stretch ceiling system designed specifically for luxury high-rise condominium environments. The mirror-finish membrane amplified natural light and visually extended the ceiling height, while integrated LED perimeter lighting provided a seamless, modern architectural glow.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-gloss reflective mirror finish</li>
                    <li>Integrated LED perimeter illumination</li>
                    <li>Seamless monolithic ceiling plane</li>
                    <li>Height-optimization installation system</li>
                    <li>Modern minimalist architectural detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover11.jpg', alt: 'Modern Stretch Ceiling Installation in Arlington, Virginia - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img52.jpg', alt: 'High-gloss stretch ceiling detail', category: 'ceiling', quality: 'high' },
                { src: 'img53.jpg', alt: 'Integrated LED perimeter lighting in luxury condo', category: 'ceiling', quality: 'high' },
                { src: 'cover13.jpg', alt: 'Waterfront condominium geometric LED ceiling', category: 'ceiling', quality: 'high' },
                { src: 'img55.jpg', alt: 'Geometric LED ceiling layout', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover0': {
            title: 'Modern Luxury Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-check-circle"></i> Licensed &amp; Permitted</span>
            </div>
            <p>A fully permitted, architecturally designed ceiling installation in Washington, DC featuring layered recessed profiles, continuous perimeter LED channels, and precision-level drywall finishing. Every element was engineered for structural integrity, code compliance, and a seamless, high-end result that defines the living and dining space.</p>
            <div class="project-features">
                <h2>Project Scope &amp; Technical Details</h2>
                <ul>
                    <li>Full permit procurement and coordination</li>
                    <li>Licensed electrical system integration</li>
                    <li>Structural framing for multi-level recessed profiles</li>
                    <li>Precision-cut linear LED lighting channels</li>
                    <li>Level 5 museum-grade drywall finishing</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover0.jpg', alt: 'Modern Luxury Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img5.jpg', alt: 'Precision lighting channels in modern ceiling Washington, DC' },
                { src: 'img2.jpg', alt: 'Modern recessed ceiling with integrated LED lighting Washington, DC' },
                { src: 'img1.jpg', alt: 'Custom architectural ceiling design Washington, DC' },
                { src: 'img4.jpg', alt: 'High-end residential ceiling design Washington, DC' },
                { src: 'img3.jpg', alt: 'Licensed ceiling contractor Washington, DC installation' },
                { src: 'img6.jpg', alt: 'Contemporary ceiling installation Washington, DC' }
            ]
        },
        'cover1': {
            title: 'Luxury Custom Ceiling Installation in Arlington, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Arlington, Virginia</span>
                <span><i class="fas fa-bolt"></i> Integrated Lighting</span>
            </div>
            <p>Installed for a luxury residential property in Arlington, Virginia, this ceiling combines double-height structural framing with recessed architectural lighting and seamless minimalist detailing. The scope required precise coordination between structural, electrical, and finish trades to deliver a bold, refined result across an expansive interior.</p>
            <div class="project-features">
                <h2>Premium Features &amp; Services</h2>
                <ul>
                    <li>Double-height structural ceiling framing</li>
                    <li>Custom recessed architectural lighting</li>
                    <li>Seamless transition detailing</li>
                    <li>Specialty drywall finishing for high-visibility areas</li>
                    <li>Full site management and architectural coordination</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover1.jpg', alt: 'Luxury Custom Ceiling Installation in Arlington, Virginia - Main Interior' },
                { src: 'img9.jpg', alt: 'Architectural ceiling lines and minimalist detailing Arlington VA' },
                { src: 'img7.jpg', alt: 'Double-height custom ceiling design Arlington VA' },
                { src: 'img8.jpg', alt: 'Modern recessed lighting in high-end residential ceiling Arlington' },
                { src: 'img12.jpg', alt: 'Modern luxury custom ceiling finishing detail Arlington' },
                { src: 'img10.jpg', alt: 'Licensed residential ceiling contractor Arlington Northern Virginia' }
            ]
        },
        'cover2': {
            title: 'Contemporary LED Ceiling Detail in Washington, D.C.',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, D.C.</span>
                <span><i class="fas fa-building"></i> Contemporary Detail</span>
                <span><i class="fas fa-award"></i> Premium Finish</span>
            </div>
            <p>A precision ceiling installation in Washington, D.C. defined by clean geometry, architectural linear LED integration, and a museum-grade level 5 drywall finish. The design prioritizes symmetry and restraint — no exposed fixtures, no visual clutter — delivering a minimalist interior where the lighting itself is the architectural feature.</p>
            <div class="project-features">
                <h2>Licensed Contractor D.C. Metro Area</h2>
                <ul>
                    <li>Minimalist recessed ceiling profiles</li>
                    <li>Architectural linear LED integration</li>
                    <li>Full code-compliant electrical work</li>
                    <li>Seamless level 5 finishing</li>
                    <li>Integrated smart-home lighting capability</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover2.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Architectural Perspective' },
                { src: 'img17.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Symmetrical Lighting Design' },
                { src: 'img19.jpg', alt: 'Contemporary LED Ceiling Detail in Washington, D.C. - Minimalist Recessed Design' },
                { src: 'img15.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Modern Ceiling Lighting' },
                { src: 'img13.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Linear Lighting Layout' },
                { src: 'img18.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - High-End Architectural Finish' },
                { src: 'img14.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Precision Finishing' },
                { src: 'img16.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Recessed Ceiling Frame' }
            ]
        },
        'cover3': {
            title: 'Geometric LED Coffered Ceiling Installation in Potomac, Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Potomac, Maryland</span>
                <span><i class="fas fa-cube"></i> Geometric Design</span>
                <span><i class="fas fa-lightbulb"></i> Custom LED System</span>
            </div>
            <p>Executed in Potomac, Maryland, this coffered ceiling installation features a modern geometric layout with integrated low-voltage LED lighting, high-precision mitered corners, and synchronized lighting control. The result is a ceiling with genuine architectural character — structured, refined, and built to the highest residential standard.</p>
            <div class="project-features">
                <h2>Specialized Architectural Details</h2>
                <ul>
                    <li>Custom coffered ceiling framing</li>
                    <li>Low-voltage linear LED integration</li>
                    <li>Synchronized lighting control systems</li>
                    <li>High-precision mitered corners and edges</li>
                    <li>Luxury paint application for architectural depth</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover3.jpg', alt: 'Geometric LED Coffered Ceiling Installation in Potomac, Maryland - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img20.jpg', alt: 'Modern coffered ceiling with geometric LED lighting pattern Potomac', category: 'ceiling', quality: 'high' },
                { src: 'img22.jpg', alt: 'Residential room interior with architectural ceiling background Potomac', category: 'general', quality: 'low' },
                { src: 'img21.jpg', alt: 'Luxury living room interior design Potomac MD', category: 'general', quality: 'low' },
                { src: 'img23.jpg', alt: 'High-end residential room furniture and interior design Potomac', category: 'general', quality: 'low' },
                { src: 'img25.jpg', alt: 'Precision framing for custom LED ceiling construction progress', category: 'general', quality: 'low' },
                { src: 'img24.jpg', alt: 'Geometric LED lighting pattern detail Potomac Maryland', category: 'kitchen', quality: 'low' },
                { src: 'img26.jpg', alt: 'Contemporary ceiling installation with stairs and railing detail Potomac MD', category: 'staircase', quality: 'low' }
            ]
        },
        'cover4': {
            title: 'Minimalist Linear LED Ceiling Installation in McLean, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> McLean, Virginia</span>
                <span><i class="fas fa-layer-group"></i> Linear LED Design</span>
                <span><i class="fas fa-award"></i> Premium Finish</span>
            </div>
            <p>Designed for a high-end residential interior in McLean, Virginia, this ceiling installation features multiple evenly-spaced linear LED runs set within a recessed perimeter framework. The lighting layout was carefully mapped to deliver uniform brightness across the entire space, with clean transitions and a seamless drywall finish that meets luxury construction standards.</p>
            <div class="project-features">
                <h2>Custom Ceiling &amp; LED Lighting Contractor Serving the DMV</h2>
                <ul>
                    <li>Lighting layout planning for modern linear LED ceilings</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Precise framing and build-out for recessed ceiling designs</li>
                    <li>Smooth drywall finishing with clean transitions</li>
                    <li>Professional installation delivering a luxury, high-end result</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover4.jpg', alt: 'Minimalist Linear LED Ceiling Installation in McLean, Virginia - Hero View' },
                { src: 'img30.jpg', alt: 'Symmetrical LED ceiling lighting design' },
                { src: 'img33.jpg', alt: 'Luxury ceiling finishing and LED placement' },
                { src: 'img27.jpg', alt: 'Modern linear LED ceiling layout McLean Virginia' },
                { src: 'img28.jpg', alt: 'Custom architectural lighting integration McLean' },
                { src: 'img29.jpg', alt: 'Precision recessed ceiling detailing Northern VA' },
                { src: 'img31.jpg', alt: 'High-end residential ceiling contractor McLean' },
                { src: 'img32.jpg', alt: 'Contemporary ceiling installation Potomac DMV' }
            ]
        },
        'cover5': {
            title: 'Modern Architectural Ceiling Installation in Arlington, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Arlington, Virginia</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>A geometric recessed ceiling with perimeter cove lighting and integrated LED channels, installed in a luxury residential interior in Arlington, Virginia. The design introduces architectural interest and layered illumination without overwhelming the space — precision-framed and finished to a minimalist luxury standard with full code compliance.</p>
            <div class="project-features">
                <h2>Licensed &amp; Code-Compliant Ceiling Contractor in Northern Virginia</h2>
                <ul>
                    <li>Required permits obtained when necessary</li>
                    <li>Coordination with local inspectors</li>
                    <li>Electrical wiring installed or upgraded to current building codes</li>
                    <li>Precision framing for recessed and architectural ceiling layouts</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'img34.jpg', alt: 'Geometric recessed ceiling design Arlington VA' },
                { src: 'img35.jpg', alt: 'Integrated linear LED lighting installation Arlington' },
                { src: 'img38.jpg', alt: 'Luxury minimalist ceiling design and precision lighting' },
                { src: 'img36.jpg', alt: 'Custom architectural ceiling transitions and cove lighting' },
                { src: 'img37.jpg', alt: 'Licensed ceiling contractor Northern Virginia residential project' }
            ]
        },
        'cover6': {
            title: 'Contemporary Stretch Ceiling Installation in Potomac, Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Potomac, Maryland</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>A high-gloss stretch ceiling with a suspended circular LED ring and perimeter cove lighting, installed in a luxury home in Potomac, Maryland. The reflective membrane creates a dramatic visual depth, amplifying the centered statement fixture and transforming an ordinary room into a polished, hotel-quality interior. Installed with a seamless, joint-free finish and full electrical coordination.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Ceiling Contractor Serving Maryland &amp; DC</h2>
                <ul>
                    <li>Proper mounting system installation for stretch ceiling membranes</li>
                    <li>Coordination with licensed electricians for circular LED ring lighting</li>
                    <li>Code-compliant electrical connections</li>
                    <li>Clean, seamless stretch finish with no visible joints</li>
                    <li>Professional project management from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover6.jpg?v=20260219', alt: 'Contemporary Stretch Ceiling Installation in Potomac, Maryland - Hero View' },
                { src: 'img39.jpg', alt: 'High-gloss stretch ceiling with circular LED ring Potomac' },
                { src: 'img40.jpg', alt: 'Luxury architectural ceiling lighting feature' }
            ]
        },
        'cover7': {
            title: 'Modern LED Recessed Ceiling Installation in Washington, D.C.',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, D.C.</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>A recessed drywall ceiling with a centered geometric LED detail and continuous perimeter LED strip lighting, completed in a Washington, D.C. residence. The installation was engineered to frame the dining zone precisely, with symmetrical LED placement, proper structural framing, and clean transitions that give the space a composed, high-end finish.</p>
            <div class="project-features">
                <h2>Licensed &amp; Code-Compliant Ceiling Contractor in Washington, D.C.</h2>
                <ul>
                    <li>Proper structural framing for recessed ceiling systems</li>
                    <li>Integrated LED channel planning and precise layout execution</li>
                    <li>Electrical wiring installed to current building codes</li>
                    <li>Required permits obtained when necessary</li>
                    <li>Clean, professional finishing with seamless lighting transitions</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover7.jpg', alt: 'Modern LED Recessed Ceiling Installation in Washington, D.C. - Hero View' },
                { src: 'img44.jpg', alt: 'Symmetrical recessed ceiling lighting design' },
                { src: 'img41.jpg', alt: 'Geometric recessed ceiling with linear LED dining area' },
                { src: 'img42.jpg', alt: 'Integrated perimeter LED lighting Washington DC' },
                { src: 'img43.jpg', alt: 'Custom architectural ceiling detailing modern home' }
            ]
        },

        'cover9': { images: [{ src: 'img40.jpg' }, { src: 'img41.jpg' }, { src: 'img42.jpg' }, { src: 'img43.jpg' }, { src: 'img44.jpg' }] },
        'cover10': {
            title: 'Modern Luxury Ceiling Installation in McLean, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> McLean, Virginia</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>A minimalist recessed ceiling with continuous perimeter LED lighting and a suspended circular fixture, installed in a luxury residence in McLean, Virginia. The design layers depth and soft ambient glow into an otherwise clean ceiling plane, with structural framing, full electrical integration, and seamless finishing completed to code.</p>
            <div class="project-features">
                <h2>Licensed &amp; Permitted Ceiling Contractor in Northern Virginia</h2>
                <ul>
                    <li>Required permits pulled when necessary</li>
                    <li>Coordination with local inspectors</li>
                    <li>Electrical wiring installed or upgraded to meet current building codes</li>
                    <li>Precision framing for recessed and architectural ceiling systems</li>
                    <li>Clean, seamless installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover10.jpg', alt: 'Modern Luxury Ceiling Installation in McLean, Virginia - Hero View' },
                { src: 'img49.jpg', alt: 'Architectural recessed ceiling with linear LED McLean' },
                { src: 'img50.jpg', alt: 'Sleek modern ceiling lighting design McLean VA' },
                { src: 'img51.jpg', alt: 'Luxury residential ceiling finishing Northern Virginia' }
            ]
        },
        'cover11': {
            title: 'Modern Stretch Ceiling Installation in Arlington, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Arlington, Virginia</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>Installed in a modern high-rise condominium in Arlington, Virginia, this high-gloss stretch ceiling features integrated perimeter LED strip lighting and a mirror-finish membrane that visually extends the space and amplifies natural light. The installation was completed with precision-mounted tracks, concealed power supply, and full electrical coordination.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Ceiling Contractor Serving Northern Virginia &amp; Washington, D.C.</h2>
                <ul>
                    <li>Precision mounting system installation for stretch ceiling membranes</li>
                    <li>Integrated LED perimeter lighting alignment</li>
                    <li>Electrical coordination to meet current building codes</li>
                    <li>Seamless, wrinkle-free high-gloss ceiling finish</li>
                    <li>Clean and professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover11.jpg', alt: 'Modern Stretch Ceiling Installation in Arlington, Virginia - Hero View' },
                { src: 'img52.jpg', alt: 'High-gloss stretch ceiling Arlington VA' },
                { src: 'img53.jpg', alt: 'Integrated LED perimeter lighting high-rise living' },
                { src: 'img888.jpg', alt: 'Modern stretch ceiling installation detail' }
            ]
        },
        'cover12': {
            title: 'High-Gloss LED Ceiling & Luxury Bathroom Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-bath"></i> Luxury Bathroom</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>A luxury bathroom ceiling installation featuring a geometric rectangular LED frame recessed into the ceiling plane, paired with vertical LED strips flanking the vanity mirror. The layout was designed to eliminate harsh shadows, deliver balanced ambient and task lighting, and complement the high-contrast materials throughout the space.</p>
            <div class="project-features">
                <h2>Lighting & Ceiling Design</h2>
                <p>The ceiling features recessed linear LED lighting arranged in a large geometric rectangular outline, creating a floating frame effect. The cool white lighting is evenly diffused, reinforcing a crisp, modern ambiance throughout the space.</p>
                <p>Additional vertical LED strips flank the mirror, delivering balanced task lighting at the vanity while maintaining clean visual symmetry.</p>
                <p>The geometric lighting layout emphasizes precision framing, careful LED channel alignment, and seamless integration into the ceiling plane.</p>
            </div>`,
            images: [
                { src: 'cover12.jpg', alt: 'Modern LED Ceiling & Luxury Bathroom Installation - Hero View' },
                { src: 'img4001.jpg', alt: 'High-gloss ceiling detail with integrated lighting' },
                { src: 'img501.jpg', alt: 'Luxury bathroom with overlapping geometric LED lighting' },
                { src: 'img54.jpg', alt: 'Geometric LED ceiling lighting bathroom' }
            ]
        },
        'cover13': {
            title: 'Custom Geometric LED Ceiling Installation in Luxury Waterfront Condo',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Waterfront Condo</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>A custom geometric LED ceiling installed in a luxury waterfront condominium, featuring precision-cut intersecting linear LED channels recessed directly into the ceiling plane with clean perimeter edge detailing. The work was carried out with full structural and electrical coordination, producing a warm, balanced illumination that complements the open-concept layout.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Ceiling Lighting Contractor for High-End Residential Projects</h2>
                <ul>
                    <li>Detailed lighting layout and geometric alignment planning</li>
                    <li>Recessed aluminum channel preparation for linear LED systems</li>
                    <li>Integrated LED strip installation with diffuser integration</li>
                    <li>Concealed driver and transformer placement</li>
                    <li>Electrical coordination to meet current building codes</li>
                    <li>Seamless ceiling finishing with clean, sharp line transitions</li>
                    <li>Professional, detail-oriented installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover13.jpg', alt: 'Custom Geometric LED Ceiling Installation in Luxury Waterfront Condo - Hero View' },
                { src: 'img55.jpg', alt: 'Geometric LED ceiling layout waterfront condo' },
                { src: 'img57.jpg', alt: 'Architectural lighting pattern detail' },
                { src: 'img58.jpg', alt: 'Integrated LED ceiling lighting system' },
                { src: 'img59.jpg', alt: 'High-end interior lighting design' },
                { src: 'img56.jpg', alt: 'Linear LED channels luxury residential' }
            ]
        },
        'cover14': { images: [{ src: 'img86.jpg' }, { src: 'img75.jpg' }, { src: 'img76.jpg' }] },
        'cover15': {
            title: 'Premium High-Gloss Reflective Ceiling for Modern Living Spaces',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential-gloss</span>
                <span><i class="fas fa-eye"></i> Mirror Finish</span>
            </div>
            <p>This stunning living room installation features a high-gloss black stretch ceiling that creates a dramatic mirror effect, doubling the perceived space and reflecting the architectural elements of the room. The seamless finish provides a ultra-modern aesthetic that creates a sense of luxury and depth.</p>
            <div class="project-features">
                <h2>Elite Residential-gloss Ceiling Installation</h2>
                <ul>
                    <li>High-gloss black reflective stretch membrane</li>
                    <li>Precision perimeter mounting system</li>
                    <li>Seamless mirror-like ceiling finish</li>
                    <li>Enhanced spatial perception and depth</li>
                    <li>Professional architectural installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover15.jpg?v=20260220', alt: 'Premium High-Gloss Black Stretch Ceiling - Reflective View', category: 'ceiling', quality: 'high' },
                { src: 'img500.jpg', alt: 'Glossy ceiling reflection detail' }
            ]
        },
        'cover88': {
            title: 'Modern Curved Tray Ceiling with LED Lighting – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-home"></i> residential</span>
            </div>
            <p>This custom living room features a curved tray ceiling with integrated perimeter LED lighting and a recessed linear light detail. The layered ceiling design adds architectural dimension while delivering soft, indirect illumination throughout the space.</p>
            <p>The combination of concealed cove lighting, recessed spotlights, and linear fixtures creates a balanced lighting system that enhances both comfort and visual appeal. Clean drywall transitions and precision framing ensure a seamless, high-end finish.</p>
            <p>Ideal for luxury living rooms, new construction homes, and upscale renovations seeking custom ceiling design with integrated lighting.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom tray and curved ceiling framing</li>
                    <li>Integrated LED and recessed lighting installation</li>
                    <li>Smooth drywall finishing and detailing</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover88.jpg', alt: 'Modern Curved Tray Ceiling with LED Lighting – Washington, DC - Hero View' }
            ]
        },
        'cover16': {
            title: 'High-Gloss Walk-in Closet Ceiling with Integrated Lighting',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential-gloss</span>
                <span><i class="fas fa-layer-group"></i> High-Gloss Stretch</span>
            </div>
            <p>This premium walk-in closet features a high-gloss reflective stretch ceiling with integrated geometric LED lighting. The mirror-like finish maximizes light distribution and adds a sophisticated, clean aesthetic to the wardrobe space, making it feel more spacious and modern.</p>
            <div class="project-features">
                <h2>Luxury Closet Ceiling Solutions</h2>
                <ul>
                    <li>High-gloss white reflective stretch ceiling</li>
                    <li>Custom integrated geometric LED frame</li>
                    <li>Precision alignment with closet cabinetry</li>
                    <li>Showroom-quality reflective finish</li>
                    <li>Clean, dust-free installation process</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover16.jpg', alt: 'High-Gloss Walk-in Closet Ceiling - Reflective Finish', category: 'ceiling', quality: 'high' },
                { src: 'img501.jpg', alt: 'Integrated LED lighting detail closet' },
                { src: 'img64.jpg', alt: 'Geometric LED frame close-up' }
            ]
        },
        'cover78': { images: [{ src: 'img200.jpg' }] },
        'cover99': { images: [{ src: 'img300.jpg' }, { src: 'img301.jpg' }] },
        'cover17': {
            title: 'Custom Geometric LED Ceiling Installation in Luxury Automotive Garage',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-car"></i> Luxury Garage</span>
            </div>
            <p>A gallery-grade ceiling designed for a luxury collector garage, with precision-cut angular LED channels integrated into a seamless modern ceiling plane. The geometric lighting composition was engineered to minimize shadow across the floor and vehicle surfaces, transforming the functional space into a high-end architectural showcase.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Lighting Contractor for Luxury Garages</h2>
                <ul>
                    <li>Precision geometric lighting layout design</li>
                    <li>Recessed aluminum channel preparation</li>
                    <li>Integrated linear LED strip installation</li>
                    <li>Concealed driver and transformer placement</li>
                    <li>Electrical coordination to meet current building codes</li>
                    <li>Seamless ceiling finishing with sharp, clean linear detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover17.jpg', alt: 'Custom Geometric LED Ceiling Installation in Luxury Automotive Garage - Hero View' },
                { src: 'img66.jpg', alt: 'Modern architectural lighting showroom garage' },
                { src: 'img65.jpg', alt: 'Geometric LED ceiling layout automotive garage' }
            ]
        },
        'commercial3': {
            title: 'Custom Architectural Ceiling with Wood Panel & Backlit Design – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-layer-group"></i> Backlit Wood Panel</span>
            </div>
            <p>This commercial interior features a custom floating ceiling system with curved wood panel framing and integrated backlit diffused panels. The layered design creates a bold architectural statement while delivering soft, even illumination across the space.</p>
            <p>Precision framing supports the suspended ceiling structure, while concealed LED lighting provides uniform light distribution without visible fixtures. The combination of wood finishes and illuminated panels enhances modern office, lobby, and collaborative environments.</p>
            <p>Designed for corporate interiors, commercial renovations, and high-end build-outs seeking distinctive ceiling architecture.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom suspended and floating ceiling construction</li>
                    <li>Wood panel integration and finishing</li>
                    <li>Backlit LED panel installation</li>
                    <li>Code-compliant commercial build-out standards</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'commercial3.jpg', alt: 'Custom Architectural Ceiling with Wood Panel & Backlit Design – Washington, DC - Hero View' },
                { src: 'commercial2.jpg', alt: 'Modern office ceiling with wood finishes and illuminated panels' }
            ]
        },
        'commercial5': {
            title: 'Linear LED Ceiling Installation – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-grip-lines"></i> Linear LED</span>
            </div>
            <p>This modern commercial space features a custom flat ceiling with integrated linear LED lighting. The recessed light channels run parallel along the ceiling plane, creating clean architectural lines and balanced illumination across the room.</p>
            <p>The minimalist design eliminates bulky fixtures, delivering a streamlined, contemporary finish ideal for conference rooms, offices, and corporate interiors. Precision framing and drywall finishing ensure seamless panel alignment and uniform light distribution.</p>
            <p>Designed for commercial build-outs and professional environments requiring modern, high-performance lighting solutions.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom ceiling framing and panel installation</li>
                    <li>Recessed linear LED integration</li>
                    <li>Smooth drywall finishing</li>
                    <li>Code-compliant commercial construction</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'commercial5.jpg', alt: 'Linear LED Ceiling Installation – Washington, DC - Hero View' },
                { src: 'commercial6.jpg', alt: 'Integrated linear LED lighting with clean architectural lines' },
                { src: 'commercial7.jpg', alt: 'Recessed light channels running parallel along the ceiling' }
            ]
        },
        'cover18': {
            title: 'Custom Curved Track Ceiling Installation with Integrated Linear LED Lighting in Modern Office Space',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-briefcase"></i> Modern Office</span>
            </div>
            <p>A design-forward commercial ceiling installation featuring precision curved recessed channels that transition continuously from ceiling to wall, housing adjustable spotlights and integrated linear LED segments. Built for a modern office interior, the system provides both ambient and task lighting while delivering a distinctive architectural identity to the workspace.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial Interiors</h2>
                <ul>
                    <li>Precision curved channel design and layout planning</li>
                    <li>Recessed magnetic or track lighting system integration</li>
                    <li>Integrated linear LED strip installation</li>
                    <li>Adjustable spotlight configuration for task lighting</li>
                    <li>Concealed driver and transformer placement</li>
                    <li>Electrical coordination to meet current commercial building codes</li>
                    <li>Seamless ceiling finishing with clean architectural detailing</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover18.jpg', alt: 'Custom Curved Track Ceiling Installation with Integrated Linear LED Lighting in Modern Office Space - Hero View' },
                { src: 'img67.jpg', alt: 'Recessed curved track lighting modern office ceiling' }
            ]
        },
        'cover19': {
            title: 'Custom Curved Ceiling with Integrated LED Cove Lighting in Luxury Indoor Pool Facility',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-water"></i> Aquatic Facility</span>
            </div>
            <p>A luxury indoor pool facility ceiling featuring precision-formed circular recessed coves with integrated warm LED strip lighting and recessed downlights. The installation was engineered for moisture compliance and long-term durability, with layered ambient illumination that creates a resort-caliber atmosphere without glare or harsh overhead light.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling and Lighting Contractor for Aquatic &amp; Commercial Interiors</h2>
                <ul>
                    <li>Precision circular and curved ceiling layout design</li>
                    <li>Custom recessed cove fabrication</li>
                    <li>Integrated linear LED strip installation</li>
                    <li>Recessed downlight placement for balanced illumination</li>
                    <li>Concealed driver and transformer integration</li>
                    <li>Electrical coordination for commercial and aquatic code compliance</li>
                    <li>Seamless ceiling finishing with premium architectural detailing</li>
                    <li>Professional installation from concept through completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover19.jpg', alt: 'Custom Curved Ceiling with Integrated LED Cove Lighting in Luxury Indoor Pool Facility - Hero View' },
                { src: 'img68.jpg', alt: 'Recessed circular ceiling cove with LED lighting' },
                { src: 'img69.jpg', alt: 'Modern architectural lighting indoor pool' }
            ]
        },
        'cover20': {
            title: 'Recessed Rectangular LED Ceiling Installation in Contemporary Office Space',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-briefcase"></i> Modern Office</span>
            </div>
            <p>A contemporary office ceiling installation featuring precision-cut recessed rectangular LED channels that frame the workspace with clean, indirect ambient lighting. The system eliminates glare from overhead sources and reduces eye strain in screen-facing environments — professionally installed with concealed drivers, full electrical coordination, and seamless ceiling finishing.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial Interiors</h2>
                <ul>
                    <li>Precision recessed channel design and layout planning</li>
                    <li>Integrated linear LED strip installation</li>
                    <li>Concealed driver and transformer placement</li>
                    <li>Seamless ceiling finishing with clean architectural detailing</li>
                    <li>Electrical coordination to meet current commercial building codes</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover20.jpg', alt: 'Recessed Rectangular LED Ceiling Installation in Contemporary Office Space - Hero View' },
                { src: 'img70.jpg', alt: 'Recessed rectangular LED ceiling lighting office' },
                { src: 'img71.jpg', alt: 'Modern minimalist office ceiling lighting design' }
            ]
        },
        'cover21': {
            title: 'Custom Geometric LED Ceiling Installation in Modern Restaurant Interior',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-utensils"></i> Modern Restaurant</span>
            </div>
            <p>Installed in a modern restaurant interior, this ceiling pairs suspended geometric LED light frames with a high-gloss reflective stretch ceiling membrane. The reflective surface amplifies the illuminated geometry overhead, creating a layered visual experience that shifts throughout the day — delivering both ambient lighting and a bold architectural identity to the dining space.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Hospitality &amp; Commercial Interiors</h2>
                <ul>
                    <li>Precision geometric lighting layout planning</li>
                    <li>Suspended LED frame integration</li>
                    <li>High-gloss stretch ceiling coordination</li>
                    <li>Concealed driver and power supply placement</li>
                    <li>Perimeter accent lighting integration</li>
                    <li>Electrical coordination to meet commercial building codes</li>
                    <li>Clean architectural finishing and detailing</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover21.jpg', alt: 'Custom Geometric LED Ceiling Installation in Modern Restaurant Interior - Hero View' },
                { src: 'img72.jpg', alt: 'Geometric LED ceiling frames in modern restaurant' }
            ]
        },
        'cover22': {
            title: 'Custom Geometric Recessed LED Ceiling Installation in Modern Office Interior',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-briefcase"></i> Modern Office</span>
            </div>
            <p>An open-plan commercial office ceiling featuring interconnected polygonal LED channels recessed into a seamless white ceiling. The geometric network provides balanced ambient illumination across the workspace while adding a modern architectural identity to the interior â€” installed with concealed power supply coordination and full compliance with commercial electrical codes.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial Interiors</h2>
                <ul>
                    <li>Precision geometric channel design and layout planning</li>
                    <li>Integrated linear LED strip installation</li>
                    <li>Clean recessed detailing for seamless ceiling finishes</li>
                    <li>Concealed driver and power supply coordination</li>
                    <li>Electrical planning to meet commercial building codes</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover22.jpg', alt: 'Custom Geometric Recessed LED Ceiling Installation in Modern Office Interior - Hero View' },
                { src: 'img74.jpg', alt: 'Modern architectural linear LED ceiling design' },
                { src: 'img73.jpg', alt: 'Recessed geometric LED ceiling lighting office' }
            ]
        },
        'cover23': {
            title: 'Custom Suspended Perimeter LED Ceiling Installation in Modern Fitness Facility',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-dumbbell"></i> Fitness Facility</span>
            </div>
            <p>A custom suspended rectangular LED perimeter frame installed above the cardio zone of a modern fitness facility, providing strong, even illumination that visually anchors the workout space. The bold geometric structure contrasts against the dark open ceiling above, creating a high-impact lighting installation purpose-built for a commercial athletic environment.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial &amp; Fitness Interiors</h2>
                <ul>
                    <li>Precision suspended frame design and layout planning</li>
                    <li>Continuous linear LED integration</li>
                    <li>Structural support coordination for suspended systems</li>
                    <li>Concealed driver and power supply placement</li>
                    <li>Electrical planning to meet commercial building codes</li>
                    <li>Clean architectural finishing and detailing</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover23.jpg', alt: 'Custom Suspended Perimeter LED Ceiling Installation in Modern Fitness Facility - Hero View' },
                { src: 'img79.jpg', alt: 'Performance lighting design fitness center' },
                { src: 'img76.jpg', alt: 'Modern fitness facility architectural lighting' },
                { src: 'img75.jpg', alt: 'Suspended LED perimeter frame gym ceiling' },
                { src: 'img77.jpg', alt: 'Linear LED ceiling installation workout area' },
                { src: 'img78.jpg', alt: 'Commercial gym suspended lighting system' }
            ]
        },
        'cover24': {
            title: 'Custom Backlit Stretch Ceiling Installation in Modern Automotive Showroom',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-car"></i> Automotive Showroom</span>
            </div>
            <p>A backlit stretch ceiling membrane installed across a luxury automotive showroom, engineered to eliminate shadow and reflection from vehicle surfaces by delivering fully diffused, uniform overhead illumination. Perimeter recessed downlights supplement the main panel, and all electrical and structural work was coordinated to meet commercial building code requirements.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial &amp; Retail Interiors</h2>
                <ul>
                    <li>Precision ceiling layout and structural framing preparation</li>
                    <li>High-output integrated LED backlighting system installation</li>
                    <li>Seamless stretch membrane installation</li>
                    <li>Perimeter recessed lighting coordination</li>
                    <li>Concealed drivers and power supply integration</li>
                    <li>Electrical planning to meet commercial building codes</li>
                    <li>Clean architectural finishing and detailing</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover24.jpg', alt: 'Custom Backlit Stretch Ceiling Installation in Modern Automotive Showroom - Hero View' },
                { src: 'img80.jpg', alt: 'Backlit stretch ceiling automotive showroom' },
                { src: 'img82.jpg', alt: 'Modern showroom stretch ceiling lighting' },
                { src: 'img81.jpg', alt: 'Illuminated ceiling panel car dealership' }
            ]
        },
        'cover26': {
            title: 'Custom Recessed Geometric LED Ceiling Installation in Modern Conference Room',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-briefcase"></i> Conference Room</span>
            </div>
            <p>A modern conference room ceiling installation featuring layered rectangular LED channels recessed into a seamless white ceiling plane and aligned above the meeting table. The geometric framework delivers balanced, glare-free illumination suited to presentations and video calls, with concealed wiring, precision layout planning, and clean architectural finishing throughout.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Architectural Ceiling Lighting Contractor for Commercial Interiors</h2>
                <ul>
                    <li>Precision geometric ceiling layout planning</li>
                    <li>Recessed linear LED system integration</li>
                    <li>Clean, seamless ceiling finishing</li>
                    <li>Concealed driver and transformer placement</li>
                    <li>Electrical coordination to meet commercial building codes</li>
                    <li>Professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover26.jpg', alt: 'Custom Recessed Geometric LED Ceiling Installation in Modern Conference Room - Hero View' },
                { src: 'img87.jpg', alt: 'Recessed geometric LED ceiling conference room' },
                { src: 'img88.jpg', alt: 'Modern boardroom architectural ceiling lighting' },
                { src: 'img89.jpg', alt: 'Linear LED recessed ceiling meeting space' }
            ]
        },
        'cover28': {
            title: 'High-Gloss Reflective Ceiling Installation in Alexandria, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Alexandria, Virginia</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>This custom recessed ceiling installation in Alexandria, Virginia showcases the precision and clean execution our team delivers throughout Northern Virginia and the Washington, DC metro area. The homeowner requested a sleek architectural ceiling design with integrated LED perimeter lighting and recessed fixtures â€” not a basic flat drywall finish.</p>
            <p>The completed ceiling features seamless linear LED detailing, sharp framing lines, and evenly distributed recessed downlights that elevate the entire kitchen space. From structural framing and lighting layout to final drywall finishing, every phase was executed to meet modern design standards and current electrical code requirements.</p>
            <p>The result is clean, contemporary, and architecturally refined â€” designed to enhance both function and visual appeal in a modern residential interior.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor in Northern Virginia</h2>
                <p>We proudly serve Alexandria, Arlington, McLean, Washington, DC, Rockville, and Potomac with high-end ceiling installations and integrated lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit coordination when required</li>
                    <li>Electrical integration up to current building code</li>
                    <li>Precision framing for recessed and tray ceiling designs</li>
                    <li>Integrated LED perimeter lighting installation</li>
                    <li>Clean drywall finishing with sharp architectural lines</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover28.jpg', alt: 'Contemporary Recessed Ceiling Installation in Alexandria, Virginia - Hero View' },
                { src: 'img98.jpg', alt: 'Integrated LED perimeter lighting Alexandria VA' },
                { src: 'img99.jpg', alt: 'Modern architectural ceiling design Alexandria' }
            ]
        },
        'cover29': {
            title: 'High-Gloss Circular LED Ceiling Installation in McLean, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> McLean, Virginia</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>This modern circular recessed ceiling installation in McLean, Virginia highlights the craftsmanship and precision our team delivers throughout Northern Virginia and the Washington, DC metro area. The homeowner requested a statement ceiling design â€” not a flat drywall finish â€” featuring a custom round recessed detail with integrated LED halo lighting and perimeter cove illumination.</p>
            <p>The finished result is a clean, architectural ceiling with a floating circular feature and seamless LED integration that adds depth, dimension, and a refined luxury aesthetic to the living space. The concealed lighting enhances the roomâ€™s atmosphere while maintaining a smooth, uninterrupted ceiling surface.</p>
            <p>Every phase â€” from structural framing and circular layout planning to LED integration and final finishing â€” was completed to meet modern design standards and current electrical code requirements.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor in Northern Virginia</h2>
                <p>We serve McLean, Arlington, Alexandria, Washington, DC, Rockville, and Potomac with high-end ceiling installations designed for luxury homes and modern remodels.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit coordination when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for circular, recessed, and architectural ceiling designs</li>
                    <li>Integrated LED halo and cove lighting installation</li>
                    <li>Clean drywall finishing with sharp architectural detailing</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover29.jpg', alt: 'Custom Circular LED Ceiling Installation in McLean, Virginia - Hero View' },
                { src: 'img96.jpg', alt: 'Integrated LED halo lighting detail McLean VA' }
            ]
        },
        'cover30': {
            title: 'Modern Curved Ceiling Installation in Potomac, Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Potomac, Maryland</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This custom curved ceiling installation in Potomac, Maryland showcases a high-end residential architectural design featuring soft wave detailing and integrated perimeter LED lighting. The homeowner wanted a modern statement ceiling that adds movement and depth â€” not a standard flat drywall finish.</p>
            <p>The completed design introduces subtle curvature across the ceiling plane, creating a fluid architectural element that enhances the overall living space. Integrated perimeter LED lighting provides soft ambient illumination while emphasizing the ceilingâ€™s sculpted form.</p>
            <p>From custom structural framing and curved drywall shaping to lighting coordination and final finishing, every phase of the installation was executed to meet modern design standards and current building code requirements.</p>
            <p>The result is clean, contemporary, and architecturally refined â€” ideal for luxury homes and upscale residential remodels.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor Serving Maryland & DC Metro</h2>
                <p>We proudly serve Potomac, Rockville, Washington, DC, Arlington, Alexandria, and Northern Virginia with precision architectural ceiling installations.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit coordination when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for curved, recessed, and architectural ceiling systems</li>
                    <li>Integrated perimeter LED lighting installation</li>
                    <li>Clean drywall finishing with smooth transitions and sharp detailing</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover30.jpg', alt: 'Modern Curved Ceiling Installation in Potomac, Maryland - Hero View' },
                { src: 'img600.jpg', alt: 'Custom architectural curved ceiling Potomac' },
                { src: 'img602.jpg', alt: 'Sculpted ceiling form with soft ambient illumination' },
                { src: 'img601.jpg', alt: 'Integrated perimeter LED lighting curved ceiling' },
                { src: 'img603.jpg', alt: 'High-end residential ceiling craftsmanship Potomac MD' }
            ]
        },
        'cover31': {
            title: 'Custom Coffered Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This modern coffered ceiling installation in Washington, DC showcases a bold architectural design with recessed panels, integrated lighting, and a high-end contemporary finish. The client wanted a statement ceiling that adds depth and structure to the space .</p>
            <p>The completed design features a custom grid-style recessed ceiling with built-in LED lighting and precision framing that enhances the entire room. The structured panel layout introduces dimension and symmetry while maintaining a clean, modern aesthetic.</p>
            <p>From structural framing and panel layout to electrical coordination and final finishing, every stage of the installation was completed to meet modern building codes and refined architectural standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with high-end ceiling design and installation services.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for coffered, recessed, and architectural ceiling systems</li>
                    <li>Integrated LED lighting installation</li>
                    <li>Clean drywall finishing with sharp, defined panel detailing</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover31.jpg', alt: 'Custom Coffered Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img700.jpg', alt: 'Modern coffered ceiling grid Washington DC' },
                { src: 'img701.jpg', alt: 'Integrated LED lighting in coffered panels' }
            ]
        },
        'cover32': {
            title: 'Modern LED Geometric Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>This custom LED ceiling installation in Washington, DC features precision linear lighting, recessed perimeter illumination, and a clean contemporary finish. The objective was to create a bold architectural statement ceiling that transforms the space through light and structure.</p>
            <p>The completed design showcases a fully integrated geometric ceiling system with seamless LED channels and RGB capability. The lighting layout was strategically planned to deliver balanced illumination while emphasizing architectural lines and symmetry.</p>
            <p>The result is a modern ceiling installation that adds depth, dimension, and strong visual character â€” ideal for luxury basements, entertainment areas, showrooms, and upscale commercial interiors seeking a high-impact design element.</p>
            <p>From structural framing and LED channel integration to electrical coordination and final finishing, the installation was executed to meet current building codes and professional architectural standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for architectural LED ceiling systems</li>
                    <li>RGB lighting integration and channel alignment</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover32.jpg', alt: 'Modern LED Geometric Ceiling Installation in Washington, DC - Hero View' }
            ]
        },
        'cover33': {
            title: 'Modern Curved LED Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>This custom curved LED ceiling installation in Washington, DC features seamless recessed strip lighting fully integrated into sculpted drywall architecture.</p>
            <p>The completed design delivers a fluid, curved ceiling form enhanced by continuous linear LED channels embedded directly into the structure â€” not surface-mounted fixtures. The lighting follows the architectural curvature precisely, creating a clean, uninterrupted visual flow across the ceiling plane.</p>
            <p>This type of installation is ideal for luxury office lobbies, corporate headquarters, commercial interiors, and modern residential projects seeking a high-end architectural feature.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for curved and architectural LED ceiling systems</li>
                    <li>Seamless recessed strip lighting integration</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'comcom.jpg', alt: 'Modern Curved LED Ceiling Installation in Washington, DC - Hero View' },
                { src: 'cover33.jpg', alt: 'Modern Curved LED Ceiling detail view' },
                { src: 'img300.jpg', alt: 'Recessed curved strip lighting Washington DC' },
                { src: 'img301.jpg', alt: 'Sculpted drywall architecture with integrated LED' }
            ]
        },
        'cover34': {
            title: 'Modern Recessed Tray Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>This custom recessed tray ceiling installation in Washington, DC features integrated perimeter LED lighting and a clean architectural design tailored for professional conference environments. The objective was to elevate a standard boardroom with a structured, high-end ceiling system â€” not basic drop ceiling panels or exposed fixtures.</p>
            <p>The completed installation showcases a precision-framed recessed tray design with continuous LED strip integration and a central architectural light feature. The layered ceiling geometry adds depth while delivering balanced ambient illumination suitable for executive meetings and professional settings.</p>
            <p>The result is a refined architectural ceiling system ideal for corporate offices, boardrooms, government facilities, and upscale commercial interiors requiring a modern, polished appearance.</p>
            <p>From structural framing and lighting layout planning to electrical coordination and final finishing, every phase was completed to meet current building codes and professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling systems for commercial environments.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for recessed and architectural ceiling systems</li>
                    <li>Integrated perimeter LED lighting installation</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover34.jpg', alt: 'Modern Recessed Tray Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img200.jpg', alt: 'Boardroom recessed tray ceiling with LED lighting' }
            ]
        },
        'cover42': {
            title: 'Modern Geometric LED Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom geometric LED ceiling design in Washington, DC features integrated linear light frames and recessed perimeter lighting built into a smooth drywall layout. The concept creates a bold architectural statement with clean lines and seamless illumination.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling and LED lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for geometric and architectural LED ceiling systems</li>
                    <li>Concealed LED channel planning and installation</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover42.jpg', alt: 'Modern Geometric LED Ceiling Installation â€“ Rendering View', category: 'ceiling', quality: 'high' },
                { src: 'img401.jpg', alt: 'Geometric LED ceiling frames rendering', category: 'ceiling', quality: 'high' },
                { src: 'img402.jpg', alt: 'Modern linear lighting architectural concept', category: 'ceiling', quality: 'high' },
                { src: 'img403.jpg', alt: 'Recessed perimeter LED ceiling design', category: 'ceiling', quality: 'high' },
                { src: 'img404.jpg', alt: 'High-end residential ceiling rendering DC', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover43': {
            title: 'Luxury Tray Ceiling with Skylight Integration â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This luxury bedroom design features a custom tray ceiling with integrated skylight detailing, introducing natural overhead light and architectural depth into the space. The recessed perimeter framing adds dimension while maintaining a clean, modern profile that complements high-end residential interiors.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas with high-end architectural ceiling systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom tray and recessed ceiling framing</li>
                    <li>Skylight structural preparation and finishing</li>
                    <li>Code-compliant construction standards</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover43.jpg', alt: 'Luxury Tray Ceiling with Skylight Integration â€“ Washington, DC - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img400.jpg', alt: 'Bedroom with tray ceiling and integrated skylights', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover44': {
            title: 'Modern LED Accent Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom LED accent ceiling design in Washington, DC features recessed perimeter lighting with clean intersecting light lines that create a subtle architectural statement. The objective was to develop soft, integrated illumination that enhances the space without visible fixtures or surface-mounted lighting.</p>
            <p>The design showcases a precision-planned recessed ceiling system with concealed LED channels that introduce depth and dimension while maintaining a minimal, high-end aesthetic. The intersecting linear elements define the ceiling plane and add architectural structure without overwhelming the interior.</p>
            <p>Ideal for luxury residential interiors, living rooms, basements, and modern commercial spaces seeking refined architectural lighting concepts, this rendering illustrates a clean and contemporary approach to integrated LED ceiling systems.</p>
            <p>The layout reflects realistic framing strategy, LED channel placement, and code-compliant electrical planning to ensure constructability and professional execution standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling and lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for recessed and architectural LED ceiling systems</li>
                    <li>Concealed LED channel integration</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover44.jpg', alt: 'Modern LED Accent Ceiling Installation â€“ Rendering View', category: 'ceiling', quality: 'high' },
                { src: 'img405.jpg', alt: 'Integrated LED architectural lighting layout', category: 'ceiling', quality: 'high' },
                { src: 'img406.jpg', alt: 'Modern luxury accent ceiling design Rendering', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover45': {
            title: 'Modern Recessed LED Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom recessed LED ceiling design in Washington, DC features concealed perimeter strip lighting integrated into a clean, minimalist drywall layout.</p>
            <p>The concept showcases a precision-detailed ceiling system with hidden LED channels that provide soft, indirect illumination while maintaining a seamless architectural finish. The perimeter lighting enhances depth and dimension without visible fixtures, preserving a refined and uncluttered ceiling plane.</p>
            <p>Designed for luxury kitchens, open-concept living areas, renovations, and upscale residential interiors, this rendering illustrates a high-end architectural lighting approach focused on subtle integration and modern aesthetics.</p>
            <p>The layout reflects realistic framing strategy, LED channel positioning, and code-compliant electrical planning to ensure feasibility for professional construction and installation.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling and LED lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for recessed and architectural LED ceiling systems</li>
                    <li>Concealed LED channel planning and installation</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover45.jpg', alt: 'Modern Recessed LED Ceiling Installation â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img407.jpg', alt: 'Modern recessed LED ceiling rendering', category: 'ceiling', quality: 'high' },
                { src: 'img409.jpg', alt: 'Minimalist ceiling architectural lighting', category: 'ceiling', quality: 'high' },
                { src: 'img408.jpg', alt: 'Integrated perimeter LED lighting design', category: 'ceiling', quality: 'high' },
                { src: 'img410.jpg', alt: 'High-end residential ceiling rendering', category: 'ceiling', quality: 'high' },
                { src: 'img412.jpg', alt: 'Luxury kitchen ceiling lighting concept', category: 'ceiling', quality: 'high' },
                { src: 'img411.jpg', alt: 'Concealed LED strip lighting layout', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover46': {
            title: 'Modern Recessed Lighting Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom recessed ceiling installation in Washington, DC features integrated LED downlighting with a clean, smooth drywall finish. The objective was to create a refined, modern ceiling design â€” not a basic fixture layout or exposed lighting system.</p>
            <p>The completed installation includes precision-positioned recessed LED downlights embedded into a seamless ceiling surface. The lighting layout was carefully planned to provide balanced, even illumination while preserving a minimal architectural appearance.</p>
            <p>The result is a streamlined recessed lighting system that enhances the living space without visual clutter â€” ideal for living rooms, basements, renovations, and upscale residential interiors seeking a clean, contemporary finish.</p>
            <p>From framing adjustments and layout planning to electrical coordination and final finishing, every phase was completed to meet current building codes and professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with precision ceiling and recessed lighting installations.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision layout planning for recessed lighting systems</li>
                    <li>Seamless drywall finishing</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover46.jpg', alt: 'Modern Recessed Lighting Ceiling Installation â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img413.jpg', alt: 'Modern recessed lighting installation detail', category: 'ceiling', quality: 'high' },
                { src: 'img416.jpg', alt: 'Luxury ceiling recessed lighting project', category: 'ceiling', quality: 'high' },
                { src: 'img414.jpg', alt: 'Sleek residential ceiling with integrated downlights', category: 'ceiling', quality: 'high' },
                { src: 'img415.jpg', alt: 'Precision lighting layout in modern home', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover47': {
            title: 'Modern Linear LED Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom linear LED ceiling design in Washington, DC features recessed strip lighting integrated into a sleek, contemporary drywall layout. The objective was to create clean, structured illumination.</p>
            <p>The structured alignment of the LED lines reinforces spatial geometry and adds depth without visual clutter.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p> We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and Potomac with advanced architectural ceiling and LED lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Permit handling when required</li>
                    <li>Code-compliant electrical integration</li>
                    <li>Precision framing for linear and architectural LED ceiling systems</li>
                    <li>Concealed LED channel planning and integration</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover47.jpg', alt: 'Modern Linear LED Ceiling Installation â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img425.jpg', alt: 'Modern linear LED lighting concept rendering', category: 'ceiling', quality: 'high' },
                { src: 'img428.jpg', alt: 'Luxury architectural linear lighting rendering', category: 'ceiling', quality: 'high' },
                { src: 'img427.jpg', alt: 'Sleek contemporary ceiling lighting layout', category: 'ceiling', quality: 'high' },
                { src: 'img426.jpg', alt: 'Integrated strip lighting architectural detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'hometheatre': {
            title: 'Precision Architectural Ceiling Installation â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>A high-precision residential ceiling installation featuring custom recessed LED channels and a integrated "star ceiling" centerpiece. This project highlights the technical framing and lighting integration required for a true luxury home theater environment.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <ul>
                    <li>Custom recessed LED channel integration</li>
                    <li>Structural framing for multi-level ceiling designs</li>
                    <li>Integrated star ceiling fiber optic systems</li>
                    <li>Professional drywall finishing and architectural detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'hometheatre.jpg', alt: 'Precision Architectural Ceiling Installation â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre14.jpg', alt: 'Architectural ceiling perspective with lighting', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre11.jpg', alt: 'Integrated LED lighting and star ceiling transition', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre10.jpg', alt: 'Recessed linear LED lighting detail', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre12.jpg', alt: 'High-precision ceiling layout and framing detail', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre13.jpg', alt: 'Technical ceiling build-out and construction progress', category: 'ceiling', quality: 'low' }
            ]
        },
        'hometheatre8': {
            title: 'Elite Fiber Optic Home Theater â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>A premium cinematic environment featuring a custom fiber optic star ceiling and integrated perimeter LED illumination. The design combines architectural depth with immersive lighting technology, creating a world-class home theater experience.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <ul>
                    <li>Custom "Star Ceiling" fiber optic integration</li>
                    <li>Symmetrical architectural LED lighting</li>
                    <li>Premium acoustic environment construction</li>
                    <li>Code-compliant electrical and structural work</li>
                </ul>
            </div>`,
            images: [
                { src: 'Hometheatre8.jpg', alt: 'Elite Fiber Optic Home Theater â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre7.jpg', alt: 'Symmetrical star ceiling and architectural lighting', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre6.jpg', alt: 'Wide screen perspective with illuminated ceiling', category: 'ceiling', quality: 'high' }
            ]
        },
        'hometheatre2': {
            title: 'Modern Home Theater Design â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>A sophisticated residential home theater featuring precision architectural ceiling design and integrated luxury lighting. This project showcases a modern approach to cinematic environments with high-end finishing and customized lighting solutions.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <ul>
                    <li>Custom framing and drywall finishing</li>
                    <li>Integrated LED and luxury lighting systems</li>
                    <li>Code-compliant construction standards</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'Hometheatre2.jpg', alt: 'Modern Home Theater Design â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'Hometheatre4.jpg', alt: 'Cinema ceiling with integrated lighting', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover35': {
            title: 'Luxury Home Theater Installation â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>This custom home theater installation in Washington, DC features a fully integrated LED accent lighting system combined with a fiber optic â€œstar ceilingâ€ design, creating a true cinematic environment.</p>
            <p>Vertical recessed LED wall strips introduce architectural depth and symmetry, while concealed perimeter lighting enhances the roomâ€™s modern, high-end aesthetic. The fiber optic ceiling detail replicates a night-sky effect, delivering immersive ambiance without visible fixtures or surface-mounted lighting.</p>
            <p>The installation includes precision structural framing, acoustic wall panel integration, and custom ceiling detailing to optimize both performance and visual impact. Every element was engineered to balance lighting design, sound control, and architectural refinement.</p>
            <p>Designed for private residences, luxury basements, and dedicated media rooms, this theater system combines immersive lighting with professional construction standards and clean finishing.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas with high-end home theater and architectural ceiling installations.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom framing and drywall finishing</li>
                    <li>Integrated LED and fiber optic ceiling systems</li>
                    <li>Acoustic panel coordination</li>
                    <li>Code-compliant electrical planning and integration</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover35.jpg', alt: 'Luxury Home Theater Installation â€“ Washington, DC - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img153.jpg', alt: 'Integrated LED and fiber optic star ceiling rendering', category: 'ceiling', quality: 'high' },
                { src: 'img154.jpg', alt: 'Modern luxury home theater architectural lighting', category: 'ceiling', quality: 'high' },
                { src: 'img155.jpg', alt: 'Custom cinematic lighting design Washington DC', category: 'ceiling', quality: 'high' },
                { src: 'img157.jpg', alt: 'Luxury private residential home theater installation', category: 'ceiling', quality: 'high' },
                { src: 'img156.jpg', alt: 'Sleek high-end media room ceiling detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover36': {
            title: 'Custom Home Theater Build & Acoustic Wall Installation â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>This modern home theater installation in Washington, DC features custom acoustic wall panels, recessed ceiling lighting, and a professionally framed media wall designed for optimal sound performance and visual clarity.</p>
            <p>The layout enhances audio precision while maintaining a clean, contemporary finish. Acoustic treatment panels are strategically positioned to improve sound absorption, reduce echo, and balance room acoustics â€” creating a true cinematic experience within a private residential setting.</p>
            <p>Recessed ceiling lighting provides controlled, glare-free illumination that does not interfere with screen visibility. The custom media wall build-out allows for seamless integration of speakers, display components, and wiring, ensuring a refined and clutter-free appearance.</p>
            <p>From structural framing and acoustic coordination to lighting integration and final finishing, every detail was completed to professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas with high-end home theater and architectural interior installations.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom framing and drywall finishing</li>
                    <li>Acoustic panel installation and coordination</li>
                    <li>Recessed lighting integration</li>
                    <li>Code-compliant construction standards</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover36.jpg', alt: 'Custom Home Theater Build & Acoustic Wall Installation â€“ Washington, DC - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'cover37.jpg', alt: 'Additional view of custom acoustic home theater build', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover38': {
            title: 'Luxury Basement Home Theater Build â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>This custom basement home theater installation in Washington, DC features tiered seating, integrated LED accent lighting, and a fully framed architectural ceiling design engineered for a true cinematic experience.</p>
            <p>Recessed linear LED lighting highlights the wall panels and ceiling transitions, creating a clean, modern theater environment with controlled ambient illumination. The layered ceiling detailing enhances architectural depth while maintaining a refined, high-end finish.</p>
            <p>The stepped floor system is professionally framed and finished to structurally support theater seating while optimizing sightlines toward the screen. Concealed lighting within the risers improves visibility and safety without causing glare or distraction during viewing.</p>
            <p>From structural framing and tiered platform construction to LED integration and final finishing, every component was completed to professional construction standards and current building code requirements.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas with high-end home theater and architectural interior builds.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Tiered floor framing and finishing</li>
                    <li>Custom ceiling and wall panel construction</li>
                    <li>Integrated LED lighting systems</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover38.jpg', alt: 'Luxury Basement Home Theater Build â€“ Washington, DC - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'cover39.jpg', alt: 'Additional angle of tiered theater seating and lighting', category: 'ceiling', quality: 'high' },
                { src: 'cover41.jpg', alt: 'Close-up of integrated theater lighting and ceiling design', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover55': {
            title: 'Backlit Stretch Ceiling with Sky Print â€“ Commercial Lobby Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Printed Backlit</span>
            </div>
            <p>This modern commercial lobby installation features a custom backlit stretch ceiling with a realistic sky and cloud print, creating the illusion of natural daylight within an interior atrium space. The illuminated ceiling panel acts as a dramatic architectural focal point while delivering balanced ambient lighting throughout the lobby.</p>
            <p>The system is built using a precision aluminum track framework with a tensioned stretch membrane and integrated LED lightbox technology. The evenly diffused backlighting eliminates visible hotspots while enhancing ceiling height perception and spatial openness.</p>
            <p>Ideal for hotel lobbies, office atriums, corporate headquarters, and luxury commercial buildings throughout Washington, DC, Northern Virginia, and Maryland â€” including Tysons, Arlington, Bethesda, and Rockville â€” this ceiling system transforms enclosed vertical spaces into visually expansive environments.</p>
            <p>The installation process included structural coordination, electrical planning, LED integration, and professional membrane tensioning to ensure durability, code compliance, and a seamless architectural finish.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Commercial Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Tysons, McLean, Bethesda, Rockville, and surrounding metro areas.</p>
                <p>Every commercial project includes:</p>
                <ul>
                    <li>Custom stretch ceiling framework installation</li>
                    <li>Integrated LED backlighting systems</li>
                    <li>Electrical coordination and code-compliant construction</li>
                    <li>Precision membrane tensioning and finishing</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover55.jpg', alt: 'Commercial Backlit Sky Print Lobby - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img784.jpg', alt: 'Sky print ceiling lobby detail', category: 'ceiling', quality: 'high' },
                { src: 'img786.jpg', alt: 'Commercial atrium backlit sky ceiling', category: 'ceiling', quality: 'high' },
                { src: 'img787.jpg', alt: 'Atrium lighting with printed stretch ceiling', category: 'ceiling', quality: 'high' },
                { src: 'img789.jpg', alt: 'Printed sky ceiling architecture', category: 'ceiling', quality: 'high' },
                { src: 'img785.jpg', alt: 'Commercial lobby lighting concept', category: 'ceiling', quality: 'high' },
                { src: 'img788.jpg', alt: 'Backlit membrane installation view', category: 'ceiling', quality: 'low' }
            ]
        },
        'cover57': {
            title: 'Backlit Stretch Ceiling with Custom Sky Print â€“ Residential Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This residential home theater installation features a custom backlit stretch ceiling with a printed sky design, creating a dramatic illuminated ceiling centerpiece. The integrated LED lightbox system delivers smooth, even ambient lighting while serving as a bold architectural feature within the room.</p>
            <p>The stretch ceiling membrane is precision-installed over a concealed framing system, allowing the backlighting to diffuse evenly across the custom sky print. The result is a seamless illuminated surface that enhances depth, atmosphere, and visual impact without visible fixtures.</p>
            <p>Ideal for luxury homes, dedicated media rooms, and entertainment spaces throughout Washington, DC, Northern Virginia, and Maryland â€” including McLean, Alexandria, Bethesda, and Rockville â€” this ceiling system combines modern lighting technology with high-end interior design.</p>
            <p>From structural preparation and frame alignment to LED integration and final tensioning, the installation was completed to meet professional construction standards and code-compliant electrical requirements.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, Bethesda, and surrounding areas with advanced architectural ceiling systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom stretch ceiling framework installation</li>
                    <li>Integrated LED backlighting system configuration</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Precision membrane tensioning and finishing</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover57.jpg', alt: 'Backlit Stretch Ceiling with Custom Sky Print â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'img878.jpg', alt: 'Sky print backlit stretch ceiling detail', category: 'ceiling', quality: 'high' },
                { src: 'img898.jpg', alt: 'Illuminated sky ceiling in residential theater', category: 'ceiling', quality: 'high' }
            ]
        },
        'cover777': {
            title: 'Backlit Stretch Ceiling with Forest Sky Print â€“ Commercial Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Printed Backlit</span>
            </div>
            <p>This commercial interior installation features a custom backlit stretch ceiling with a forest sky print, creating a bright and immersive architectural ceiling feature. The illuminated panel simulates natural daylight filtering through trees, transforming the space with depth, softness, and a calming visual atmosphere.</p>
            <p>The system is built using a concealed perimeter track with a tensioned stretch membrane and integrated LED lightbox technology. Even light diffusion ensures a seamless glow across the printed surface, eliminating harsh shadows and visible fixtures while enhancing the perception of openness.</p>
            <p>Ideal for offices, wellness centers, medical clinics, hotels, and modern commercial interiors throughout Washington, DC, Northern Virginia, and Maryland â€” including Arlington, Tysons, Bethesda, Silver Spring, and Rockville â€” this ceiling solution combines functional lighting with a high-end design statement.</p>
            <p>Installation included structural coordination, LED integration, membrane tensioning, and code-compliant electrical planning to ensure long-term performance and professional finish quality.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Commercial Ceiling Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Tysons, Bethesda, Silver Spring, Rockville, and surrounding metro areas.</p>
                <p>Every commercial project includes:</p>
                <ul>
                    <li>Custom stretch ceiling framework installation</li>
                    <li>Integrated LED backlighting systems</li>
                    <li>Printed membrane design and precision tensioning</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover777.jpg', alt: 'Backlit Stretch Ceiling with Forest Sky Print â€“ Hero View', category: 'ceiling', quality: 'high' },
                { src: 'backlit1.jpg', alt: 'Professional forest sky backlit ceiling installation', category: 'ceiling', quality: 'high' },
                { src: 'backlit2.jpg', alt: 'Modern interior with illuminated forest canopy ceiling', category: 'ceiling', quality: 'high' },
                { src: 'backlit4.jpg', alt: 'High-definition printed backlit ceiling detail', category: 'ceiling', quality: 'high' },
                { src: 'backlit5.jpg', alt: 'Forest sky print backlit membrane perspective', category: 'ceiling', quality: 'high' },
                { src: 'backlit6.jpg', alt: 'Installation phase of printed backlit stretch ceiling', category: 'ceiling', quality: 'high' }
            ]
        },
        'rendering1': {
            title: 'Recessed Cove Ceiling with LED Lighting â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This modern living space features a custom recessed cove ceiling with integrated perimeter LED lighting. The soft indirect glow highlights the curved ceiling detail while maintaining a clean, minimalist aesthetic.</p>
            <p>The layered drywall design adds architectural depth without visible fixtures, creating balanced ambient lighting throughout the room. Precision framing and finishing ensure smooth transitions and uniform light distribution.</p>
            <p>Ideal for living rooms, lounges, and upscale residential interiors seeking subtle, high-end ceiling design with integrated lighting.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom recessed and tray ceiling construction</li>
                    <li>Integrated LED cove lighting installation</li>
                    <li>Smooth drywall finishing and detailing</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'rendering1.jpg', alt: 'Recessed Cove Ceiling with LED Lighting â€“ Washington, DC - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'rendering2.jpg', alt: 'Custom recessed cove ceiling with integrated LED lighting', category: 'ceiling', quality: 'high' }
            ]
        },
        'rendering3': {
            title: 'Custom Curved Recessed Ceiling with LED Cove Lighting â€“ Modern Living Space',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This contemporary living room features a sculpted recessed ceiling with integrated LED cove lighting. The flowing curves create architectural movement while delivering soft, indirect illumination throughout the space.</p>
            <p>Warm perimeter lighting enhances the clean drywall detailing and complements the wood wall panels and built-in shelving. The concealed LED system provides balanced ambient light without visible fixtures, maintaining a refined, minimalist aesthetic.</p>
            <p>Ideal for high-end residential interiors seeking modern ceiling design with integrated lighting solutions.</p>
            <div class="project-features">
                <h2>Licensed & Insured â€“ DC, Maryland & Northern Virginia</h2>
                <p>Services include:</p>
                <ul>
                    <li>Custom curved and recessed ceiling construction</li>
                    <li>Integrated LED cove lighting installation</li>
                    <li>Smooth drywall finishing</li>
                    <li>Built-in feature wall integration</li>
                    <li>Full code-compliant installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'rendering3.jpg', alt: 'Custom Curved Recessed Ceiling with LED Cove Lighting â€“ Modern Living Space - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'rendering4.jpg', alt: 'Curved recessed ceiling detail with LED lighting', category: 'ceiling', quality: 'high' }
            ]
        },
        'rendering6': {
            title: 'Modern Recessed Ceiling with LED Cove Lighting',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This living room features a clean recessed tray ceiling with integrated LED cove lighting, delivering soft, even ambient illumination. The concealed perimeter lighting enhances the architectural lines while maintaining a minimalist aesthetic.</p>
            <p>The floating media wall and base cabinetry are accentuated with under-cabinet LED strips, creating depth and visual balance throughout the space. Warm lighting tones complement the neutral palette and modern furnishings.</p>
            <p>Ideal for contemporary residential interiors seeking refined ceiling design and integrated lighting solutions.</p>
            <div class="project-features">
                <h2>Licensed & Insured â€“ DC, Maryland & Northern Virginia</h2>
                <p>Services include:</p>
                <ul>
                    <li>Recessed and tray ceiling construction</li>
                    <li>Integrated LED cove lighting installation</li>
                    <li>Floating media walls with backlighting</li>
                    <li>Custom drywall finishing</li>
                    <li>Code-compliant professional installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'rendering6.jpg', alt: 'Modern Recessed Ceiling with LED Cove Lighting - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'rendering5.jpg', alt: 'Recessed tray ceiling with integrated LED cove lighting detail', category: 'ceiling', quality: 'high' }
            ]
        },

        'cover97': { images: [{ src: 'img600.jpg' }, { src: 'img601.jpg' }, { src: 'img602.jpg' }, { src: 'img603.jpg' }] },
        'cover84': {
            title: 'Modern LED Tray Ceiling & Feature Wall Installation â€“ Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-home"></i> residential</span>
            </div>
            <p>This luxury living room showcases a custom tray ceiling with integrated perimeter LED lighting, delivering clean architectural lines and balanced ambient illumination. The recessed ceiling detail enhances ceiling height while creating a seamless, modern finish.</p>
            <p>The feature media wall includes a built-in fireplace, mounted display integration, and precision drywall framing for a sleek, high-end appearance. Concealed LED lighting continues along the ceiling transitions, providing soft indirect light without visible fixtures.</p>
            <p>Designed for upscale residential interiors, this installation combines structural framing, lighting integration, and refined finishing to elevate the entire living space.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Custom tray ceiling framing and finishing</li>
                    <li>Integrated LED lighting systems</li>
                    <li>Feature wall and fireplace build-outs</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Clean, professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover84.jpg', alt: 'Modern LED Tray Ceiling & Feature Wall Installation â€“ Washington, DC - Hero View' },
                { src: 'img2002.jpg', alt: 'Precision drywall framing and custom ceiling detail' },
                { src: 'img2003.jpg', alt: 'Concealed LED lighting transitions' },
                { src: 'img2001.jpg', alt: 'Feature media wall with integrated fireplace and LED' }
            ]
        },
        'gloss7': {
            title: 'High-Gloss Residential Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>This premium high-gloss stretch ceiling installation provides a perfect mirror-like finish, significantly enhancing the room's spatial depth and light distribution. The reflective surface creates a sophisticated architectural focal point that complements modern interior design.</p>
            <p>Engineered for a flawless, distortion-free reflection, our gloss membranes offer a level of finish that surpasses traditional ceiling treatments, providing an elegant and expansive atmosphere.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-reflectivity mirror finish membrane</li>
                    <li>Balanced ambient light distribution</li>
                    <li>Precision-tensioned seamless surface</li>
                    <li>Moisture resistant and anti-static</li>
                    <li>Professional architectural integration</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residential-gloss2.jpg', alt: 'High-gloss membrane reflection clarity', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss4.jpg', alt: 'Contemporary gloss ceiling architectural perspective', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss5.jpg', alt: 'Mirror-finish ceiling with integrated lighting detail', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss3.jpg', alt: 'Residential-gloss ceiling installation view', category: 'ceiling', quality: 'high' }
            ]
        },
        'glossy-hero': {
            title: 'Premium High-Gloss Residential Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>This premium high-gloss stretch ceiling installation provides a perfect mirror-like finish, significantly enhancing the room's spatial depth and light distribution. The reflective surface creates a sophisticated architectural focal point that complements modern interior design.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-reflectivity mirror finish membrane</li>
                    <li>Balanced ambient light distribution</li>
                    <li>Precision-tensioned seamless surface</li>
                    <li>Moisture resistant and anti-static</li>
                    <li>Professional architectural integration</li>
                </ul>
            </div>`,
            images: [
                { src: 'glossyy.jpg', alt: 'Premium high-gloss ceiling mirror reflection', category: 'ceiling', quality: 'high' }
            ]
        },
        'gloss-hero': {
            title: 'Elite High-Gloss Architectural Ceiling Design',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>A high-performance gloss stretch ceiling that redefines interior volume through exceptional reflectivity and depth. This installation features our signature mirror-finish membrane, engineered for architectural clarity and precision lighting integration.</p>
            <div class="project-features">
                <h2>Technical Specifications</h2>
                <ul>
                    <li>Elite-grade high-reflectivity membrane</li>
                    <li>Integrated architectural lighting tracks</li>
                    <li>Anti-static and moisture-compliant finish</li>
                    <li>Seamless monolithic ceiling surface</li>
                    <li>Precision-tensioned edge detailing</li>
                </ul>
            </div>`,
            images: [
                { src: 'gloss1.jpg', alt: 'High-gloss ceiling architectural detail', category: 'ceiling', quality: 'high' },
                { src: 'gloss2.jpg', alt: 'Contemporary reflective ceiling finish', category: 'ceiling', quality: 'high' },
                { src: 'gloss3.jpg', alt: 'Modern gloss stretch ceiling installation', category: 'ceiling', quality: 'high' }
            ]
        },
        'gloss6': {
            title: 'Elite High-Gloss Architectural Ceilings',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>This premium high-gloss stretch ceiling installation provides a perfect mirror-like finish, significantly enhancing the room's spatial depth and light distribution. The reflective surface creates a sophisticated architectural focal point that complements modern interior design.</p>
            <p>Engineered for a flawless, distortion-free reflection, our gloss membranes offer a level of finish that surpasses traditional ceiling treatments, providing an elegant and expansive atmosphere.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-reflectivity mirror finish membrane</li>
                    <li>Balanced ambient light distribution</li>
                    <li>Precision-tensioned seamless surface</li>
                    <li>Moisture resistant and anti-static</li>
                    <li>Professional architectural integration</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residential-gloss7.jpg', alt: 'Elite high-gloss ceiling - Premium reflection', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss6.jpg', alt: 'Elite high-gloss ceiling mirror reflection', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss17.jpg', alt: 'Elite high-gloss ceiling mirror reflection', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss9.jpg', alt: 'Premium high-gloss architectural ceiling finish', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss19.jpg', alt: 'Contemporary gloss ceiling reflection detail', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss13.jpg', alt: 'Luxury gloss stretch ceiling overview', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss10.jpg', alt: 'Modern high-gloss ceiling gallery view', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss14.jpg', alt: 'Reflective gloss ceiling perspective', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss12.jpg', alt: 'Gloss ceiling installation detail Northern VA', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss20.jpg', alt: 'Minimalist high-gloss ceiling reflection', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss11.jpg', alt: 'Sleek mirrored ceiling membrane finish', category: 'ceiling', quality: 'high' }
            ]
        },
        'Residentialgloss': {
            title: 'Modern High-Gloss Ceiling Solutions',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Custom Installation</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>A specialized high-gloss ceiling implementation featuring precision-stretched membranes that provide exceptional clarity and architectural depth. This installation showcases the versatility of gloss finishes in modern residential environments.</p>
            <div class="project-features">
                <h2>Technical Features</h2>
                <ul>
                    <li>High-definition reflective surface</li>
                    <li>Integrated perimeter track system</li>
                    <li>Uniform light amplification</li>
                    <li>Custom architectural geometry</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residentialgloss.jpg', alt: 'Premium high-gloss reflective ceiling finish', category: 'ceiling', quality: 'high' },
                { src: 'Residential-gloss21.jpg', alt: 'Modern high-gloss ceiling installation - View 1', category: 'ceiling', quality: 'high' },
                { src: 'Showergloss.jpg', alt: 'High-gloss shower ceiling reflective finish', category: 'ceiling', quality: 'high' },
                { src: 'gloss22.jpg', alt: 'High-gloss ceiling detail - View 2', category: 'ceiling', quality: 'high' },
                { src: 'gloss23.jpg', alt: 'Reflective ceiling perspective - View 3', category: 'ceiling', quality: 'high' }
            ]
        },
        'ResidentialMat3': {
            title: 'Modern Matte Ceiling Systems',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Residence</span>
                <span><i class="fas fa-home"></i> Residential Matte</span>
            </div>
            <p>Our premium matte ceiling systems deliver a sophisticated, non-reflective finish that resembles perfectly finished drywall but with the durability and smoothness of high-end stretch membranes.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Seamless Level 5 matte finish</li>
                    <li>Integrated architectural lighting</li>
                    <li>Uniform surface texture</li>
                    <li>Licensed professional installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residential Mat2.jpg', alt: 'Premium residential matte ceiling finish', category: 'ceiling', quality: 'high' },
                { src: 'Residential Mat1.jpg', alt: 'Modern matte stretch ceiling installation', category: 'ceiling', quality: 'high' },
                { src: 'img35.jpg', alt: 'Matte ceiling installation detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'Residential1': {
            title: 'Architectural Matte Ceiling Design',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Modern Residence</span>
                <span><i class="fas fa-home"></i> Residential Matte</span>
            </div>
            <p>This installation features our signature architectural matte membrane, providing a clean, monolithic look that elevates the interior space. The seamless finish eliminates traditional ceiling imperfections while offering superior acoustic and aesthetic properties.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Advanced acoustic matte membrane</li>
                    <li>Sleek, shadow-free illumination</li>
                    <li>Perfectly level monolithic surface</li>
                    <li>Long-lasting architectural quality</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residential4.jpg', alt: 'Elite architectural matte ceiling installation', category: 'ceiling', quality: 'high' },
                { src: 'Residential3.jpg', alt: 'Matte stretch ceiling interior perspective', category: 'ceiling', quality: 'high' },
                { src: 'Residential2.jpg', alt: 'Clean matte ceiling aesthetic detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'Residential9': {
            title: 'Contemporary Matte Ceiling Concepts',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Architectural Residence</span>
                <span><i class="fas fa-home"></i> Residential-gloss</span>
            </div>
            <p>Our premium high-gloss solutions provide a stunning reflective finish that adds depth and modern sophistication to your living space. These installations showcase mirror-like properties, creating an expansive architectural feel while delivering a luxurious aesthetic.</p>
            <div class="project-features">
                <h2>Design Details</h2>
                <ul>
                    <li>High-gloss mirror-finish membrane</li>
                    <li>Architectural reflective geometry</li>
                    <li>Symmetry-focused precision track</li>
                    <li>Advanced light-reflective properties</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residential10.jpg', alt: 'Strongest matte ceiling perspective', category: 'ceiling', quality: 'high' },
                { src: 'Residential11.jpg', alt: 'Contemporary matte installation view', category: 'ceiling', quality: 'high' },
                { src: 'Residentialgloss5.jpg', alt: 'Special matte-integrated finish detail', category: 'ceiling', quality: 'high' },
                { src: 'gllo.jpg', alt: 'Matte ceiling architectural detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'Residentialglossy': {
            title: 'Commercial Dental Clinic Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Dental Clinic</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>A high-performance glossy stretch ceiling installation for a modern dental clinic, delivering a pristine, hygienic environment with superior light diffusion and a seamless reflective surface. This commercial project showcases how premium ceiling solutions elevate professional healthcare spaces.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>Anti-microbial glossy membrane</li>
                    <li>Enhanced clinical lighting distribution</li>
                    <li>Moisture and stain resistant</li>
                    <li>Professional-grade commercial installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'Residentialglossy4.jpg', alt: 'Strongest commercial glossy ceiling perspective', category: 'ceiling', quality: 'high' },
                { src: 'Residentialglossy5.jpg', alt: 'Commercial ceiling lighting integration', category: 'ceiling', quality: 'high' },
                { src: 'Residentialglossy.jpg', alt: 'Modern medical facility glossy ceiling finish', category: 'ceiling', quality: 'high' },
                { src: 'Residentialglossy3.jpg', alt: 'Dental clinic glossy ceiling installation', category: 'ceiling', quality: 'high' },
                { src: 'Residentialglossy2.jpg', alt: 'Clinical space glossy ceiling detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'Printed_backlit_sky': {
            title: 'Custom Printed Backlit Sky Ceiling â€“ Luxury Interior Architecture',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-lightbulb"></i> Integrated Illumination</span>
            </div>
            <p>This stunning installation features a high-definition printed sky membrane integrated into a custom circular recessed cove. The backlit technology delivers uniform, soft illumination that mimics natural skylights, transforming the architectural space into a serene and expansive environment. Ideal for premium residential and commercial wellness spaces.</p>
            <div class="project-features">
                <h2>Specialized Architectural Details</h2>
                <ul>
                    <li>High-definition UV-printed sky membrane</li>
                    <li>Integrated LED backlighting for uniform diffusion</li>
                    <li>Custom circular recessed cove framing</li>
                    <li>Natural skylight simulation and ambient mood lighting</li>
                    <li>Seamless, durable architectural finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'Printedbacklit.jpg', alt: 'Custom Printed Backlit Sky Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'printedbacklit28.jpg', alt: 'Detailed view of backlit sky membrane and circular cove', category: 'ceiling', quality: 'high' },
                { src: 'printedbacklit22.jpg', alt: 'Sky ceiling installation with surrounding architectural context', category: 'ceiling', quality: 'high' }
            ]
        },
        'Printed_backlit_abstract': {
            title: 'Abstract Geometric Backlit Ceiling â€“ Custom Commercial Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-microchip"></i> Modern Aesthetic</span>
            </div>
            <p>This avant-garde installation features a custom printed backlit membrane with a pixelated or abstract geometric pattern. The integrated LED diffusion system creates a vibrant and dynamic architectural ceiling that serves as a focal point in high-end commercial and creative environments. The soft, even glow enhances spatial depth while providing efficient ambient lighting.</p>
            <div class="project-features">
                <h2>Creative Lighting Solutions</h2>
                <ul>
                    <li>Custom abstract geometric printed membrane</li>
                    <li>High-efficiency integrated LED backlighting</li>
                    <li>Advanced light diffusion technology</li>
                    <li>Durable architectural stretch framework</li>
                    <li>Seamless and dust-resistant finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'Printedbacklit1.jpg', alt: 'Abstract Geometric Backlit Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'Printedbacklit0.jpg', alt: 'Detail view of abstract pixelated backlit ceiling', category: 'ceiling', quality: 'high' }
            ]
        },
        'commercial-pool': {
            title: 'Custom Architectural Ceiling for Luxury Commercial Pool Facility',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-water"></i> Aquatic Facility</span>
            </div>
            <p>This premium commercial pool facility features a custom high-end ceiling installation designed for both visual impact and technical performance. The architectural design integrates seamlessly with the aquatic environment, providing elegant lighting and a clean, sophisticated finish that elevates the entire space.</p>
            <div class="project-features">
                <h2>Licensed & Professional Architectural Ceiling Contractor for Commercial Pools</h2>
                <ul>
                    <li>Custom moisture-resistant ceiling framing</li>
                    <li>Integrated professional lighting solutions</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Seamless architectural detailing</li>
                    <li>Professional installation from start to finish</li>
                </ul>
            </div>`,
            images: [
                { src: 'commercial-pool.jpg', alt: 'Custom Architectural Ceiling for Luxury Commercial Pool Facility - Hero View' },
                { src: 'commercialpool2.jpg', alt: 'Luxury commercial pool interior with architectural ceiling' }
            ]
        },
        'car-showroom': {
            title: 'Premium Automotive Showroom Architectural Ceiling',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-car"></i> Automotive</span>
            </div>
            <p>This elite automotive showroom features a high-performance architectural ceiling designed to highlight premium vehicles with perfect diffusion and sharp, clean lines. The installation serves as both a high-end lighting solution and a structural statement piece, enhancing the luxury atmosphere of the commercial space.</p>
            <div class="project-features">
                <h2>Licensed & Professional Commercial Ceiling Contractor</h2>
                <ul>
                    <li>High-end light diffusion for professional vehicle display</li>
                    <li>Seamless architectural stretch finish</li>
                    <li>Integrated high-efficiency LED system</li>
                    <li>Precision structural framing</li>
                    <li>Durable and low-maintenance commercial material</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>SEO Content:</strong></p>
                <div class="seo-description-container">
                    <!-- INSERT SEO CONTENT HERE -->
                </div>
            </div>`,
            images: [
                { src: 'car-commercial.jpg', alt: 'Premium Automotive Showroom Architectural Ceiling - Focused View', category: 'ceiling', quality: 'high' }
            ]
        },
        'commercial20': {
            title: 'Custom Commercial Ceiling Installation â€“ Washington, DC Metro Area',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Architectural Lighting</span>
            </div>
            <p>This commercial ceiling installation showcases precision architectural design with integrated lighting systems engineered for high-end commercial interiors. The installation combines premium ceiling materials with expert structural coordination, delivering a clean, refined finish that elevates the entire space.</p>
            <p>From structural framing and electrical coordination to final finishing, every phase was completed to professional construction standards and current building code requirements â€” serving clients throughout Washington, DC, Northern Virginia, and Maryland.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Commercial Contractor â€“ DC, Maryland & Northern Virginia</h2>
                <p>We serve Washington, DC, Arlington, Alexandria, McLean, Rockville, and surrounding areas with high-end commercial ceiling installations and integrated lighting systems.</p>
                <p>Every project includes:</p>
                <ul>
                    <li>Precision structural framing and build-out</li>
                    <li>Integrated LED lighting systems</li>
                    <li>Code-compliant electrical coordination</li>
                    <li>Clean, professional installation from start to finish</li>
                    <li>Licensed and permitted work where required</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>Service Area:</strong> Washington DC, Northern Virginia, Maryland â€” Arlington, Alexandria, McLean, Tysons, Rockville, Bethesda, Potomac</p>
                <p><strong>Project Type:</strong> Commercial Ceiling Installation, Architectural Lighting, Integrated LED Systems</p>
                <p><strong>Keywords:</strong> commercial ceiling contractor DC, architectural ceiling installation Virginia, commercial LED lighting Maryland, licensed ceiling contractor DMV</p>
            </div>`,
            images: [
                { src: 'commercial20.jpg', alt: 'Custom Commercial Ceiling Installation Washington DC - Hero View', category: 'ceiling', quality: 'high' }
            ]
        },
        'commercial-main': {
            title: 'Commercial Ceiling Installations â€“ High-End Spaces',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Architectural Lighting</span>
                <span><i class="fas fa-expand-arrows-alt"></i> Large-Scale</span>
            </div>
            <p>A curated portfolio of our most impactful commercial ceiling installations â€” spanning premium hospitality environments, large open-plan commercial lobbies, and high-specification office and retail spaces. Each project was engineered and installed to exact architectural standards, combining structural precision with integrated LED lighting systems.</p>
            <p>From expansive ballroom-scale installations to refined corridor and reception ceilings, every space in this gallery represents Designo Ceilings at its most ambitious â€” delivering striking visual results that set the standard for commercial interior excellence in the Washington, DC metro area.</p>
            <div class="project-features">
                <h2>Licensed Commercial Ceiling Contractor â€“ DC, Virginia & Maryland</h2>
                <ul>
                    <li>Large-scale architectural stretch ceiling systems</li>
                    <li>Fully integrated LED and ambient lighting</li>
                    <li>Custom fabrication for complex geometries</li>
                    <li>Premium materials built for commercial durability</li>
                    <li>Code-compliant, permitted installation throughout the DMV</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>Service Area:</strong> Washington DC, Northern Virginia, Maryland â€” Arlington, Alexandria, McLean, Tysons, Rockville, Bethesda</p>
                <p><strong>Project Type:</strong> Commercial Ceiling Installation, Hotel Ceiling, Office Ceiling, Retail Lighting</p>
                <p><strong>Keywords:</strong> commercial stretch ceiling contractor DC, large-scale commercial ceiling Virginia, hotel lobby ceiling installation Maryland, commercial LED ceiling DMV</p>
            </div>`,
            images: [
                { src: 'commercial (8).jpg', alt: 'Premium large-scale commercial ceiling installation â€“ flagship interior', category: 'ceiling', quality: 'high' },
                { src: 'commercial15.jpg', alt: 'High-end commercial ceiling with integrated LED â€“ expansive space', category: 'ceiling', quality: 'high' },
                { src: 'commercial (7).jpg', alt: 'Architectural commercial ceiling installation â€“ open-plan environment', category: 'ceiling', quality: 'high' },
                { src: 'commercial (6).jpg', alt: 'Contemporary commercial ceiling design with precision lighting', category: 'ceiling', quality: 'high' },
                { src: 'commercial (5).jpg', alt: 'Commercial interior ceiling upgrade â€“ professional finish', category: 'ceiling', quality: 'high' },
                { src: 'commercial (4).jpg', alt: 'Commercial ceiling installation â€“ refined architectural detail', category: 'ceiling', quality: 'high' }
            ]
        },
        'glossy-commercial-gallery': {
            title: 'Premium Commercial Glossy Interior Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Luxury Commercial Space</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>Our premium high-gloss solutions provide a stunning reflective finish that adds depth and modern sophistication to your commercial living space. These installations showcase mirror-like properties, creating an expansive architectural feel while delivering a luxurious aesthetic.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-gloss mirror-finish membrane</li>
                    <li>Balanced ambient light distribution</li>
                    <li>Precision-tensioned seamless surface</li>
                    <li>Professional-grade commercial installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'glossyy1.jpg', alt: 'High-gloss ceiling detail view', category: 'ceiling', quality: 'high' },
                { src: 'glossyy2.jpg', alt: 'Reflective ceiling architectural perspective', category: 'ceiling', quality: 'high' },
                { src: 'glossyy3.jpg', alt: 'Premium high-gloss ceiling - Main View', category: 'ceiling', quality: 'high' },
                { src: 'glossyy4.jpg', alt: 'Luxury gloss ceiling installation finish', category: 'ceiling', quality: 'high' }
            ]
        },
        'commercial-office': {
            title: 'Modern Commercial Office Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Corporate Office</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>A premium commercial office ceiling installation featuring advanced stretch membrane technology and integrated architectural lighting. This project demonstrates our commitment to creating professional environments that balance aesthetic excellence with functional performance.</p>
            <div class="project-features">
                <h2>Project Highlights</h2>
                <ul>
                    <li>High-performance acoustic stretch ceiling</li>
                    <li>Integrated professional office lighting</li>
                    <li>Seamless monolithic architectural finish</li>
                    <li>Commercial-grade durability and safety standards</li>
                    <li>Expert installation in professional corporate space</li>
                </ul>
            </div>`,
            images: [
                { src: 'commercial4.jpg', alt: 'Modern commercial office ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'commercialoffice1.jpg', alt: 'Commercial office interior with architectural ceiling', category: 'ceiling', quality: 'high' }
            ]
        },
        'shand-matte': {
            title: 'Residential Matte Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential</span>
                <span><i class="fas fa-paint-roller"></i> Matte Finish</span>
                <span><i class="fas fa-lightbulb"></i> Integrated Lighting</span>
            </div>
            <p>This residential matte ceiling installation demonstrates Designo Ceilings' precision craftsmanship in a refined home interior setting. The seamless matte finish eliminates glare and delivers a clean, sophisticated look that enhances natural and artificial light alike â€” creating an elevated atmosphere throughout the space.</p>
            <p>Matte stretch ceilings are ideal for homeowners seeking a modern, gallery-quality interior aesthetic with the added benefit of integrated lighting, sound absorption, and moisture resistance. All materials are custom-fabricated and installed without drywall.</p>
            <div class="project-features">
                <h2>Premium Residential Matte Ceiling â€“ Washington DC, Virginia & Maryland</h2>
                <ul>
                    <li>Seamless matte stretch ceiling membrane</li>
                    <li>Integrated ceiling fan and lighting coordination</li>
                    <li>No drywall â€” custom fabrication and clean installation</li>
                    <li>Glare-free finish ideal for living spaces and bedrooms</li>
                    <li>Sound-dampening and moisture-resistant properties</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>Service Area:</strong> Washington DC, Northern Virginia, Maryland â€” Arlington, Alexandria, McLean, Bethesda, Rockville</p>
                <p><strong>Project Type:</strong> Residential Matte Ceiling, Custom Stretch Ceiling, Interior Ceiling Upgrade</p>
                <p><strong>Keywords:</strong> matte stretch ceiling Virginia, residential ceiling installation DC, custom ceiling contractor Maryland, matte ceiling DMV</p>
            </div>`,
            images: [
                { src: 'fan.jpg', alt: 'Residential matte ceiling with integrated ceiling fan â€“ main view', category: 'ceiling', quality: 'high' },
                { src: 'fan1.jpg', alt: 'Matte stretch ceiling installation detail â€“ lighting integration', category: 'ceiling', quality: 'high' },
                { src: 'fan2.jpg', alt: 'Premium residential matte ceiling â€“ clean architectural finish', category: 'ceiling', quality: 'high' }
            ]
        },
        'backlit-geometric': {
            title: 'Custom Geometric Backlit Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-lightbulb"></i> Integrated Illumination</span>
            </div>
            <p>This sophisticated backlit ceiling installation features a striking geometric pattern that transforms standard lighting into a bold architectural statement. The high-performance stretch membrane and integrated LED system provide uniform diffusion and a clean, modern aesthetic suitable for premium residential and commercial interiors.</p>
            <div class="project-features">
                <h2>Licensed & Professional Architectural Lighting Contractor</h2>
                <ul>
                    <li>Custom geometric printed membrane</li>
                    <li>Integrated high-output LED backlighting</li>
                    <li>Precision aluminum track system</li>
                    <li>Even light diffusion with no hotspots</li>
                    <li>Professional architectural installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'bcklit.jpg', alt: 'Custom Geometric Backlit Ceiling Installation - Hero View' },
                { src: 'backlit1.jpg', alt: 'Strong geometric backlit ceiling detail', category: 'ceiling', quality: 'high' },
                { src: 'backlit2.jpg', alt: 'Modern architectural backlit ceiling in hallway', category: 'ceiling', quality: 'high' }
            ]
        },
        'backlit-sky-bedroom': {
            title: 'Premium Backlit Sky Ceiling â€“ Luxury Residential Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This stunning residential installation features a high-definition printed sky membrane with integrated LED backlighting, creating a serene and expansive atmosphere in a primary bedroom. The seamless stretch ceiling delivers uniform, shadow-free illumination that mimics a natural skylight, providing both a bold architectural feature and a tranquil ambient glow.</p>
            <div class="project-features">
                <h2>Licensed & Professional Architectural Lighting Contractor</h2>
                <ul>
                    <li>High-definition UV-printed sky membrane</li>
                    <li>Integrated high-efficiency LED backlighting</li>
                    <li>Custom structural framing for recessed installation</li>
                    <li>Uniform light diffusion with natural sky aesthetic</li>
                    <li>Professional architectural installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'backlit3.jpg', alt: 'Premium Backlit Sky Ceiling in Bedroom - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'backlit4.jpg', alt: 'Sky ceiling installation in modern interior', category: 'ceiling', quality: 'low' }
            ]
        },
        'backlit-office-grid': {
            title: 'Custom Grid-Patterned Backlit Sky Ceiling â€“ Modern Office Design',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-building"></i> Commercial</span>
            </div>
            <p>This innovative commercial installation features multiple recessed sky ceiling panels with a custom grid-patterned framework. The integrated LED backlighting system delivers exceptionally clear, shadow-free illumination that simulates natural skylights, enhancing the architectural depth and visual comfort of the professional workspace.</p>
            <div class="project-features">
                <h2>Licensed & Professional Commercial Ceiling Contractor</h2>
                <ul>
                    <li>Custom grid-panelled backlit sky membrane</li>
                    <li>Integrated high-output LED lighting modules</li>
                    <li>Precision-tensioned architectural stretch system</li>
                    <li>Natural daylight simulation for improved environment</li>
                    <li>Professional commercial-grade installation</li>
                </ul>
            </div>`,
            images: [
                { src: 'backlit7.jpg', alt: 'Custom Grid-Patterned Backlit Sky Ceiling in Office - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'backlit5.jpg', alt: 'Luxury hallway with architectural sky ceiling', category: 'ceiling', quality: 'high' },
                { src: 'backlit6.jpg', alt: 'Modern interior with forest-view backlit ceiling', category: 'ceiling', quality: 'low' }
            ]
        },
        'backlit-nature-scenic': {
            title: 'Scenic Nature Printed Backlit Ceiling â€“ Custom Interior Design',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-image"></i> Printed Backlit</span>
                <span><i class="fas fa-tree"></i> Nature Inspired</span>
            </div>
            <p>This nature-inspired backlit ceiling installation features high-definition printed membranes portraying lush forest canopies and serene sky vistas. The integrated LED backlighting system creates a vibrant, immersive environment that brings the outdoors in, providing exceptional clarity and architectural depth to modern residential and commercial spaces.</p>
            <div class="project-features">
                <h2>Licensed & Professional Architectural Lighting Contractor</h2>
                <ul>
                    <li>High-definition UV-printed nature-themed membranes</li>
                    <li>Integrated high-efficiency LED backlighting for uniform glow</li>
                    <li>Precision architectural stretch framework</li>
                    <li>Advanced light diffusion technology for immersive impact</li>
                    <li>Professional installation with seamless technical coordination</li>
                </ul>
            </div>`,
            images: [
                { src: 'tree1.jpg', alt: 'Scenic Nature Printed Backlit Ceiling - Hero View', category: 'ceiling', quality: 'high' },
                { src: 'tree3.jpg', alt: 'Vibrant forest canopy backlit ceiling installation', category: 'ceiling', quality: 'high' },
                { src: 'tree.jpg', alt: 'Artistic branch and sky printed backlit ceiling', category: 'ceiling', quality: 'low' }
            ]
        },
        'shand-matte': {
            title: 'Residential Matte Ceiling Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential</span>
                <span><i class="fas fa-paint-roller"></i> Matte Finish</span>
                <span><i class="fas fa-lightbulb"></i> Integrated Lighting</span>
            </div>
            <p>This residential matte ceiling installation demonstrates Designo Ceilings' precision craftsmanship in a refined home interior setting. The seamless matte finish eliminates glare and delivers a clean, sophisticated look that enhances natural and artificial light alike â€” creating an elevated atmosphere throughout the space.</p>
            <p>Matte stretch ceilings are ideal for homeowners seeking a modern, gallery-quality interior aesthetic with the added benefit of integrated lighting, sound absorption, and moisture resistance. All materials are custom-fabricated and installed without drywall.</p>
            <div class="project-features">
                <h2>Premium Residential Matte Ceiling â€“ Washington DC, Virginia & Maryland</h2>
                <ul>
                    <li>Seamless matte stretch ceiling membrane</li>
                    <li>Integrated ceiling fan and lighting coordination</li>
                    <li>No drywall â€” custom fabrication and clean installation</li>
                    <li>Glare-free finish ideal for living spaces and bedrooms</li>
                    <li>Sound-dampening and moisture-resistant properties</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>Service Area:</strong> Washington DC, Northern Virginia, Maryland</p>
                <p><strong>Project Type:</strong> Residential Matte Ceiling, Custom Stretch Ceiling, Interior Ceiling Upgrade</p>
                <p><strong>Keywords:</strong> matte stretch ceiling Virginia, residential ceiling installation DC, custom ceiling contractor Maryland</p>
            </div>`,
            images: [
                { src: 'fan.jpg', alt: 'Residential matte ceiling with integrated ceiling fan â€“ main view', category: 'ceiling', quality: 'high' },
                { src: 'fan1.jpg', alt: 'Matte stretch ceiling installation detail â€“ lighting integration', category: 'ceiling', quality: 'high' },
                { src: 'fan2.jpg', alt: 'Premium residential matte ceiling â€“ clean architectural finish', category: 'ceiling', quality: 'high' }
            ]
        },
        'fireplace-matte': {
            title: 'Residential Matte Ceiling with Fireplace Feature',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential</span>
                <span><i class="fas fa-paint-roller"></i> Matte Finish</span>
                <span><i class="fas fa-fire"></i> Feature Wall</span>
            </div>
            <p>This residential matte ceiling installation pairs a seamless architectural stretch ceiling with a striking fireplace feature wall, creating a dramatic and cohesive interior statement. The matte finish provides a refined, glare-free surface that complements the warmth of the fireplace and the overall luxury of the space.</p>
            <p>From structural coordination to final installation, every detail was executed to the highest standard â€” delivering a premium residential interior that blends modern ceiling design with classic architectural character throughout the Washington, DC metro area.</p>
            <div class="project-features">
                <h2>Custom Residential Matte Ceiling â€“ DC, Virginia & Maryland</h2>
                <ul>
                    <li>Seamless matte stretch ceiling membrane</li>
                    <li>Coordinated with fireplace and feature wall design</li>
                    <li>No drywall â€” precision fabrication and installation</li>
                    <li>Glare-free finish ideal for living and family rooms</li>
                    <li>Sound-dampening and moisture-resistant material</li>
                </ul>
            </div>
            <div class="project-seo-tags">
                <p><strong>Service Area:</strong> Washington DC, Northern Virginia, Maryland â€” Arlington, Alexandria, McLean, Bethesda, Rockville</p>
                <p><strong>Project Type:</strong> Residential Matte Ceiling, Fireplace Room Ceiling, Custom Interior Ceiling</p>
                <p><strong>Keywords:</strong> matte ceiling with fireplace Virginia, residential stretch ceiling DC, luxury ceiling contractor Maryland, custom matte ceiling DMV</p>
            </div>`,
            images: [
                { src: 'fireplace1.jpg', alt: 'Residential matte ceiling with fireplace feature wall â€“ main view', category: 'ceiling', quality: 'high' },
                { src: 'fireplace2.jpg', alt: 'Matte stretch ceiling installation alongside luxury fireplace detail', category: 'ceiling', quality: 'high' },
                { src: 'fireplace3.jpg', alt: 'Premium residential matte ceiling â€“ fireplace room overview', category: 'ceiling', quality: 'high' }
            ]
        }
    };

    window.openProject = function (projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        // Centered Modal for all projects to maintain consistent horizontal scroll/grid behavior
        openModal(projectId, data);

        history.pushState(null, null, `#project-${projectId}`);
    };

    function openModal(projectId, data) {
        modalTitle.textContent = data.title || 'Project Gallery';
        modalDesc.innerHTML = data.description || '';
        modalGallery.innerHTML = '';

        const sortedImages = sortProjectImages(data.images);
        sortedImages.forEach((imgObj) => {
            const container = document.createElement('div');
            container.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `./images/${imgObj.src}`;
            img.alt = imgObj.alt || 'Project Detail';
            img.loading = 'lazy';

            // Click opens lightbox
            container.addEventListener('click', () => {
                openLightbox(img.src, img.alt);
            });

            container.appendChild(img);
            modalGallery.appendChild(container);
        });

        projectModal.classList.add('active');
        projectModal.scrollTop = 0;
        document.body.style.overflow = 'hidden';
    }

    // ─── Lightbox ──────────────────────────────────────────
    const lightbox = document.getElementById('gallery-lightbox');
    const lightboxImg = document.getElementById('gallery-lightbox-img');

    window.openLightbox = function (src, alt) {
        lightboxImg.src = src;
        lightboxImg.alt = alt || '';
        lightbox.classList.add('active');
    };

    window.closeLightbox = function () {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
    };

    // Close on dark background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });



    window.closeProject = function () {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';
        updateHistoryAfterClose();
    };



    function updateHistoryAfterClose() {
        const activeLink = document.querySelector('.nav-link.active');
        const activeSection = activeLink ? activeLink.getAttribute('data-section') : 'residential-matte';
        history.pushState(null, null, `#${activeSection}`);
    }

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox.classList.contains('active')) { closeLightbox(); return; }
            if (projectModal.classList.contains('active')) closeProject();
        }
    });

    // Initial load
    const currentHash = window.location.hash.substring(1).toLowerCase();
    const validSections = ['about', 'residential-matte', 'residential-gloss', 'residential-condos', 'commercial', 'renderings', 'residential-hometheatre', 'backlit'];
    if (validSections.includes(currentHash)) {
        showSection(currentHash);
    } else {
        showSection('residential-matte');
    }
});
