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

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            if (sectionId) {
                showSection(sectionId);
                history.pushState(null, null, `#${sectionId}`);
            }
        });
    });

    // Project Modal Logic
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-project-title');
    const modalDesc = document.getElementById('modal-project-description');
    const modalGallery = document.getElementById('modal-project-gallery');

    const projectsData = {
        'cover0': {
            title: 'Modern Luxury Ceiling Installation in McLean, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> McLean, Virginia</span>
                <span><i class="fas fa-check-circle"></i> Licensed &amp; Permitted</span>
            </div>
            <p>A fully permitted, architecturally designed ceiling installation in McLean, Virginia featuring layered recessed profiles, continuous perimeter LED channels, and precision-level drywall finishing. Every element was engineered for structural integrity, code compliance, and a seamless, high-end result that defines the living and dining space.</p>
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
                { src: 'cover0.jpg', alt: 'Modern Luxury Ceiling Installation in McLean, Virginia - Hero View' },
                { src: 'img2.jpg', alt: 'Modern recessed ceiling with integrated LED lighting McLean' },
                { src: 'img5.jpg', alt: 'Precision lighting channels in modern ceiling McLean' },
                { src: 'img1.jpg', alt: 'Custom architectural ceiling design McLean VA' },
                { src: 'img4.jpg', alt: 'High-end residential ceiling design McLean VA' },
                { src: 'img3.jpg', alt: 'Licensed ceiling contractor Northern Virginia installation' },
                { src: 'img6.jpg', alt: 'Contemporary ceiling installation Washington DC' }
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
                { src: 'img7.jpg', alt: 'Double-height custom ceiling design Arlington VA' },
                { src: 'img9.jpg', alt: 'Architectural ceiling lines and minimalist detailing Arlington VA' },
                { src: 'img8.jpg', alt: 'Modern recessed lighting in high-end residential ceiling Arlington' },
                { src: 'img11.jpg', alt: 'Luxury home custom ceiling installation Northern VA' },
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
                { src: 'img19.jpg', alt: 'Contemporary LED Ceiling Detail in Washington, D.C. - Minimalist Recessed Design' },
                { src: 'img17.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Symmetrical Lighting Design' },
                { src: 'img13.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Linear Lighting Layout' },
                { src: 'img18.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - High-End Architectural Finish' },
                { src: 'img15.jpg', alt: 'Contemporary LED Ceiling Detail D.C. - Modern Ceiling Lighting' },
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
                { src: 'cover3.jpg', alt: 'Geometric LED Coffered Ceiling Installation in Potomac, Maryland - Hero View' },
                { src: 'img20.jpg', alt: 'Modern coffered ceiling with geometric LED lighting Potomac' },
                { src: 'img24.jpg', alt: 'Geometric ceiling lighting detail Potomac Maryland' },
                { src: 'img22.jpg', alt: 'Linear LED lighting integration in coffered ceiling' },
                { src: 'img21.jpg', alt: 'Custom architectural ceiling design Potomac MD' },
                { src: 'img23.jpg', alt: 'High-end residential ceiling design Potomac' },
                { src: 'img26.jpg', alt: 'Contemporary ceiling installation Potomac MD' },
                { src: 'img25.jpg', alt: 'Precision framing for custom LED ceiling' }
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
                { src: 'img27.jpg', alt: 'Modern linear LED ceiling layout McLean Virginia' },
                { src: 'img30.jpg', alt: 'Symmetrical LED ceiling lighting design' },
                { src: 'img28.jpg', alt: 'Custom architectural lighting integration McLean' },
                { src: 'img33.jpg', alt: 'Luxury ceiling finishing and LED placement' },
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
                { src: 'cover5.jpg', alt: 'Modern Architectural Ceiling Installation in Arlington, Virginia - Hero View' },
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
                { src: 'img41.jpg', alt: 'Geometric recessed ceiling with linear LED dining area' },
                { src: 'img44.jpg', alt: 'Symmetrical recessed ceiling lighting design' },
                { src: 'img42.jpg', alt: 'Integrated perimeter LED lighting Washington DC' },
                { src: 'img43.jpg', alt: 'Custom architectural ceiling detailing modern home' }
            ]
        },
        'cover8': {
            title: 'Luxury LED Recessed Ceiling Installation in Rockville, Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Rockville, Maryland</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>Completed as part of a luxury kitchen renovation in Rockville, Maryland, this recessed ceiling features geometric LED channels and layered perimeter lighting designed to deliver strong task illumination alongside a refined architectural aesthetic. The installation required precise channel alignment, licensed electrical work, and seamless drywall finishing throughout.</p>
            <div class="project-features">
                <h2>Licensed &amp; Code-Compliant Ceiling Contractor Serving Maryland &amp; Northern Virginia</h2>
                <ul>
                    <li>Precision framing for recessed and geometric ceiling designs</li>
                    <li>Integrated LED channel installation and alignment</li>
                    <li>Electrical wiring completed to current building codes</li>
                    <li>Permit coordination when required</li>
                    <li>Clean, professional finishing with seamless lighting transitions</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover8.jpg', alt: 'Luxury LED Recessed Ceiling Installation in Rockville, Maryland - Hero View' },
                { src: 'img45.jpg', alt: 'Modern recessed ceiling with geometric LED kitchen' },
                { src: 'img48.jpg', alt: 'Custom architectural ceiling design with layered LED' },
                { src: 'img47.jpg', alt: 'Integrated linear lighting detail Rockville MD' }
            ]
        },
        'cover9': { images: [{ src: 'cover9.jpg' }, { src: 'img40.jpg' }, { src: 'img41.jpg' }, { src: 'img42.jpg' }, { src: 'img43.jpg' }, { src: 'img44.jpg' }, { src: 'img45.jpg' }, { src: 'img46.jpg' }] },
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
            title: 'Modern LED Ceiling & Luxury Bathroom Installation',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-bath"></i> Luxury Bathroom</span>
                <span><i class="fas fa-home"></i> Residential</span>
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
        'cover14': { images: [{ src: 'cover14.jpg' }, { src: 'img86.jpg' }, { src: 'img75.jpg' }, { src: 'img76.jpg' }] },
        'cover15': {
            title: 'High-Gloss Stretch Ceiling Installation with Integrated LED Lighting in Modern Residential Living Space',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential</span>
                <span><i class="fas fa-layer-group"></i> High-Gloss Stretch</span>
            </div>
            <p>A high-gloss reflective stretch ceiling with integrated recessed perimeter LED lighting, installed in a contemporary residential living space. The mirror-finish membrane expands the perceived height and volume of the room while the LED perimeter delivers a continuous wash of ambient light — creating a visually striking, fully coordinated ceiling system.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Stretch Ceiling Contractor for Modern Residential Projects</h2>
                <ul>
                    <li>Precision aluminum mounting track system preparation</li>
                    <li>High-gloss PVC stretch ceiling membrane installation</li>
                    <li>Integrated LED perimeter lighting setup and alignment</li>
                    <li>Concealed power supply and transformer configuration</li>
                    <li>Electrical coordination to meet current building codes</li>
                    <li>Seamless, wrinkle-free reflective ceiling finish</li>
                    <li>Clean, professional installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover15.jpg', alt: 'High-Gloss Stretch Ceiling Installation with Integrated LED Lighting in Modern Residential Living Space - Hero View' },
                { src: 'img60.jpg', alt: 'Reflective high-gloss stretch ceiling living room' },
                { src: 'img62.jpg', alt: 'Modern architectural ceiling design reflection' },
                { src: 'img61.jpg', alt: 'Integrated LED perimeter lighting detail' },
                { src: 'img63.jpg', alt: 'Luxury residential stretch ceiling finish' }
            ]
        },
        'cover88': { images: [{ src: 'cover88.jpg' }, { src: 'img97.jpg' }, { src: 'img98.jpg' }] },
        'cover16': {
            title: 'High-Gloss Stretch Ceiling Installation with Floating LED Frame in Luxury Walk-In Closet',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-home"></i> Residential</span>
                <span><i class="fas fa-layer-group"></i> Luxury Closet</span>
            </div>
            <p>Designed for a luxury walk-in closet, this installation combines a high-gloss stretch ceiling membrane with suspended geometric LED light frames to deliver even, shadow-free illumination across all wardrobe areas. The reflective surface doubles the visual impact of the overhead lighting, producing a clean, showroom-quality finish throughout.</p>
            <div class="project-features">
                <h2>Licensed &amp; Professional Stretch Ceiling Contractor for Luxury Residential Interiors</h2>
                <ul>
                    <li>Precision aluminum mounting track system preparation</li>
                    <li>High-gloss PVC stretch ceiling membrane installation</li>
                    <li>Suspended geometric LED frame integration</li>
                    <li>Concealed driver and power supply configuration</li>
                    <li>Electrical coordination to meet current building codes</li>
                    <li>Seamless, wrinkle-free reflective ceiling finish</li>
                    <li>Clean, detail-focused installation from start to completion</li>
                </ul>
            </div>`,
            images: [
                { src: 'cover16.jpg', alt: 'High-Gloss Stretch Ceiling Installation with Floating LED Frame in Luxury Walk-In Closet - Hero View' },
                { src: 'img64.jpg', alt: 'Glossy stretch ceiling with floating LED frame closet' },
                { src: 'img500.jpg', alt: 'Luxury walk-in closet ceiling detail' },
                { src: 'img501.jpg', alt: 'High-gloss stretch ceiling LED frame close-up' }
            ]
        },
        'cover78': { images: [{ src: 'cover78.jpg' }, { src: 'img200.jpg' }, { src: 'img201.jpg' }] },
        'cover99': { images: [{ src: 'cover99.jpg' }, { src: 'img300.jpg' }, { src: 'img301.jpg' }] },
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
                { src: 'img65.jpg', alt: 'Geometric LED ceiling layout automotive garage' },
                { src: 'img66.jpg', alt: 'Modern architectural lighting showroom garage' }
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
            <p>An open-plan commercial office ceiling featuring interconnected polygonal LED channels recessed into a seamless white ceiling. The geometric network provides balanced ambient illumination across the workspace while adding a modern architectural identity to the interior — installed with concealed power supply coordination and full compliance with commercial electrical codes.</p>
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
                { src: 'img75.jpg', alt: 'Suspended LED perimeter frame gym ceiling' },
                { src: 'img76.jpg', alt: 'Modern fitness facility architectural lighting' },
                { src: 'img79.jpg', alt: 'Performance lighting design fitness center' },
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
            title: 'Contemporary Recessed Ceiling Installation in Alexandria, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Alexandria, Virginia</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This custom recessed ceiling installation in Alexandria, Virginia showcases the precision and clean execution our team delivers throughout Northern Virginia and the Washington, DC metro area. The homeowner requested a sleek architectural ceiling design with integrated LED perimeter lighting and recessed fixtures — not a basic flat drywall finish.</p>
            <p>The completed ceiling features seamless linear LED detailing, sharp framing lines, and evenly distributed recessed downlights that elevate the entire kitchen space. From structural framing and lighting layout to final drywall finishing, every phase was executed to meet modern design standards and current electrical code requirements.</p>
            <p>The result is clean, contemporary, and architecturally refined — designed to enhance both function and visual appeal in a modern residential interior.</p>
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
            title: 'Custom Circular LED Ceiling Installation in McLean, Virginia',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> McLean, Virginia</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This modern circular recessed ceiling installation in McLean, Virginia highlights the craftsmanship and precision our team delivers throughout Northern Virginia and the Washington, DC metro area. The homeowner requested a statement ceiling design — not a flat drywall finish — featuring a custom round recessed detail with integrated LED halo lighting and perimeter cove illumination.</p>
            <p>The finished result is a clean, architectural ceiling with a floating circular feature and seamless LED integration that adds depth, dimension, and a refined luxury aesthetic to the living space. The concealed lighting enhances the room’s atmosphere while maintaining a smooth, uninterrupted ceiling surface.</p>
            <p>Every phase — from structural framing and circular layout planning to LED integration and final finishing — was completed to meet modern design standards and current electrical code requirements.</p>
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
            <p>This custom curved ceiling installation in Potomac, Maryland showcases a high-end residential architectural design featuring soft wave detailing and integrated perimeter LED lighting. The homeowner wanted a modern statement ceiling that adds movement and depth — not a standard flat drywall finish.</p>
            <p>The completed design introduces subtle curvature across the ceiling plane, creating a fluid architectural element that enhances the overall living space. Integrated perimeter LED lighting provides soft ambient illumination while emphasizing the ceiling’s sculpted form.</p>
            <p>From custom structural framing and curved drywall shaping to lighting coordination and final finishing, every phase of the installation was executed to meet modern design standards and current building code requirements.</p>
            <p>The result is clean, contemporary, and architecturally refined — ideal for luxury homes and upscale residential remodels.</p>
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
                { src: 'img600.jpg', alt: 'Modern Curved Ceiling Installation in Potomac, Maryland - Hero View' },
                { src: 'cover30.jpg', alt: 'Custom architectural curved ceiling Potomac' },
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
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
            <p>The result is a modern ceiling installation that adds depth, dimension, and strong visual character — ideal for luxury basements, entertainment areas, showrooms, and upscale commercial interiors seeking a high-impact design element.</p>
            <p>From structural framing and LED channel integration to electrical coordination and final finishing, the installation was executed to meet current building codes and professional architectural standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover32.jpg', alt: 'Modern LED Geometric Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img900.jpg', alt: 'Integrated LED geometric lighting Washington DC' }
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
            <p>The completed design delivers a fluid, curved ceiling form enhanced by continuous linear LED channels embedded directly into the structure — not surface-mounted fixtures. The lighting follows the architectural curvature precisely, creating a clean, uninterrupted visual flow across the ceiling plane.</p>
            <p>This type of installation is ideal for luxury office lobbies, corporate headquarters, commercial interiors, and modern residential projects seeking a high-end architectural feature.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover33.jpg', alt: 'Modern Curved LED Ceiling Installation in Washington, DC - Hero View' },
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
            <p>This custom recessed tray ceiling installation in Washington, DC features integrated perimeter LED lighting and a clean architectural design tailored for professional conference environments. The objective was to elevate a standard boardroom with a structured, high-end ceiling system — not basic drop ceiling panels or exposed fixtures.</p>
            <p>The completed installation showcases a precision-framed recessed tray design with continuous LED strip integration and a central architectural light feature. The layered ceiling geometry adds depth while delivering balanced ambient illumination suitable for executive meetings and professional settings.</p>
            <p>The result is a refined architectural ceiling system ideal for corporate offices, boardrooms, government facilities, and upscale commercial interiors requiring a modern, polished appearance.</p>
            <p>From structural framing and lighting layout planning to electrical coordination and final finishing, every phase was completed to meet current building codes and professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover42.jpg', alt: 'Modern Geometric LED Ceiling Installation in Washington, DC - Rendering View' },
                { src: 'img401.jpg', alt: 'Geometric LED ceiling frames rendering' },
                { src: 'img402.jpg', alt: 'Modern linear lighting architectural concept' },
                { src: 'img403.jpg', alt: 'Recessed perimeter LED ceiling design' },
                { src: 'img404.jpg', alt: 'High-end residential ceiling rendering DC' }
            ]
        },
        'cover43': {
            title: 'Luxury Tray Ceiling with Skylight Integration – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This luxury bedroom design features a custom tray ceiling with integrated skylight detailing, introducing natural overhead light and architectural depth into the space. The recessed perimeter framing adds dimension while maintaining a clean, modern profile that complements high-end residential interiors.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover43.jpg', alt: 'Luxury Tray Ceiling with Skylight Integration – Washington, DC - Hero View' },
                { src: 'img400.jpg', alt: 'Bedroom with tray ceiling and integrated skylights' }
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
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover44.jpg', alt: 'Modern LED Accent Ceiling Installation in Washington, DC - Rendering View' },
                { src: 'img405.jpg', alt: 'Integrated LED architectural lighting layout' },
                { src: 'img406.jpg', alt: 'Modern luxury accent ceiling design Rendering' }
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
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover45.jpg', alt: 'Modern Recessed LED Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img407.jpg', alt: 'Modern recessed LED ceiling rendering' },
                { src: 'img409.jpg', alt: 'Minimalist ceiling architectural lighting' },
                { src: 'img408.jpg', alt: 'Integrated perimeter LED lighting design' },
                { src: 'img410.jpg', alt: 'High-end residential ceiling rendering' },
                { src: 'img412.jpg', alt: 'Luxury kitchen ceiling lighting concept' },
                { src: 'img411.jpg', alt: 'Concealed LED strip lighting layout' }
            ]
        },
        'cover46': {
            title: 'Modern Recessed Lighting Ceiling Installation in Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-pencil-ruler"></i> Renderings</span>
            </div>
            <p>This custom recessed ceiling installation in Washington, DC features integrated LED downlighting with a clean, smooth drywall finish. The objective was to create a refined, modern ceiling design — not a basic fixture layout or exposed lighting system.</p>
            <p>The completed installation includes precision-positioned recessed LED downlights embedded into a seamless ceiling surface. The lighting layout was carefully planned to provide balanced, even illumination while preserving a minimal architectural appearance.</p>
            <p>The result is a streamlined recessed lighting system that enhances the living space without visual clutter — ideal for living rooms, basements, renovations, and upscale residential interiors seeking a clean, contemporary finish.</p>
            <p>From framing adjustments and layout planning to electrical coordination and final finishing, every phase was completed to meet current building codes and professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover46.jpg', alt: 'Modern Recessed Lighting Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img413.jpg', alt: 'Modern recessed lighting installation detail' },
                { src: 'img416.jpg', alt: 'Luxury ceiling recessed lighting project' },
                { src: 'img414.jpg', alt: 'Sleek residential ceiling with integrated downlights' },
                { src: 'img415.jpg', alt: 'Precision lighting layout in modern home' }
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
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover47.jpg', alt: 'Modern Linear LED Ceiling Installation in Washington, DC - Hero View' },
                { src: 'img425.jpg', alt: 'Modern linear LED lighting concept rendering' },
                { src: 'img428.jpg', alt: 'Luxury architectural linear lighting rendering' },
                { src: 'img427.jpg', alt: 'Sleek contemporary ceiling lighting layout' },
                { src: 'img426.jpg', alt: 'Integrated strip lighting architectural detail' }
            ]
        },
        'cover35': {
            title: 'Luxury Home Theater Installation – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>This custom home theater installation in Washington, DC features a fully integrated LED accent lighting system combined with a fiber optic “star ceiling” design, creating a true cinematic environment.</p>
            <p>Vertical recessed LED wall strips introduce architectural depth and symmetry, while concealed perimeter lighting enhances the room’s modern, high-end aesthetic. The fiber optic ceiling detail replicates a night-sky effect, delivering immersive ambiance without visible fixtures or surface-mounted lighting.</p>
            <p>The installation includes precision structural framing, acoustic wall panel integration, and custom ceiling detailing to optimize both performance and visual impact. Every element was engineered to balance lighting design, sound control, and architectural refinement.</p>
            <p>Designed for private residences, luxury basements, and dedicated media rooms, this theater system combines immersive lighting with professional construction standards and clean finishing.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover35.jpg', alt: 'Luxury Home Theater Installation – Washington, DC - Hero View' },
                { src: 'img153.jpg', alt: 'Integrated LED and fiber optic star ceiling rendering' },
                { src: 'img154.jpg', alt: 'Modern luxury home theater architectural lighting' },
                { src: 'img155.jpg', alt: 'Custom cinematic lighting design Washington DC' },
                { src: 'img157.jpg', alt: 'Luxury private residential home theater installation' },
                { src: 'img156.jpg', alt: 'Sleek high-end media room ceiling detail' }
            ]
        },
        'cover36': {
            title: 'Custom Home Theater Build & Acoustic Wall Installation – Washington, DC',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-film"></i> Home Theater</span>
            </div>
            <p>This modern home theater installation in Washington, DC features custom acoustic wall panels, recessed ceiling lighting, and a professionally framed media wall designed for optimal sound performance and visual clarity.</p>
            <p>The layout enhances audio precision while maintaining a clean, contemporary finish. Acoustic treatment panels are strategically positioned to improve sound absorption, reduce echo, and balance room acoustics — creating a true cinematic experience within a private residential setting.</p>
            <p>Recessed ceiling lighting provides controlled, glare-free illumination that does not interfere with screen visibility. The custom media wall build-out allows for seamless integration of speakers, display components, and wiring, ensuring a refined and clutter-free appearance.</p>
            <p>From structural framing and acoustic coordination to lighting integration and final finishing, every detail was completed to professional construction standards.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover36.jpg', alt: 'Custom Home Theater Build & Acoustic Wall Installation – Washington, DC - Hero View' },
                { src: 'cover37.jpg', alt: 'Additional view of custom acoustic home theater build' }
            ]
        },
        'cover38': {
            title: 'Luxury Basement Home Theater Build – Washington, DC',
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
                <h2>Licensed & Permitted Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover38.jpg', alt: 'Luxury Basement Home Theater Build – Washington, DC - Hero View' },
                { src: 'cover39.jpg', alt: 'Additional angle of tiered theater seating and lighting' },
                { src: 'cover41.jpg', alt: 'Close-up of integrated theater lighting and ceiling design' }
            ]
        },
        'cover55': {
            title: 'Backlit Stretch Ceiling with Sky Print – Commercial Lobby Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Printed Backlit</span>
            </div>
            <p>This modern commercial lobby installation features a custom backlit stretch ceiling with a realistic sky and cloud print, creating the illusion of natural daylight within an interior atrium space. The illuminated ceiling panel acts as a dramatic architectural focal point while delivering balanced ambient lighting throughout the lobby.</p>
            <p>The system is built using a precision aluminum track framework with a tensioned stretch membrane and integrated LED lightbox technology. The evenly diffused backlighting eliminates visible hotspots while enhancing ceiling height perception and spatial openness.</p>
            <p>Ideal for hotel lobbies, office atriums, corporate headquarters, and luxury commercial buildings throughout Washington, DC, Northern Virginia, and Maryland — including Tysons, Arlington, Bethesda, and Rockville — this ceiling system transforms enclosed vertical spaces into visually expansive environments.</p>
            <p>The installation process included structural coordination, electrical planning, LED integration, and professional membrane tensioning to ensure durability, code compliance, and a seamless architectural finish.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Commercial Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover55.jpg', alt: 'Commercial Backlit Sky Print Lobby - Hero View' },
                { src: 'img784.jpg', alt: 'Sky print ceiling lobby detail' },
                { src: 'img786.jpg', alt: 'Commercial atrium backlit sky ceiling' },
                { src: 'img787.jpg', alt: 'Atrium lighting with printed stretch ceiling' },
                { src: 'img788.jpg', alt: 'Backlit membrane installation view' },
                { src: 'img789.jpg', alt: 'Printed sky ceiling architecture' },
                { src: 'img785.jpg', alt: 'Commercial lobby lighting concept' }
            ]
        },
        'cover57': {
            title: 'Backlit Stretch Ceiling with Custom Sky Print – Residential Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-location-dot"></i> Washington, DC</span>
                <span><i class="fas fa-home"></i> Residential</span>
            </div>
            <p>This residential home theater installation features a custom backlit stretch ceiling with a printed sky design, creating a dramatic illuminated ceiling centerpiece. The integrated LED lightbox system delivers smooth, even ambient lighting while serving as a bold architectural feature within the room.</p>
            <p>The stretch ceiling membrane is precision-installed over a concealed framing system, allowing the backlighting to diffuse evenly across the custom sky print. The result is a seamless illuminated surface that enhances depth, atmosphere, and visual impact without visible fixtures.</p>
            <p>Ideal for luxury homes, dedicated media rooms, and entertainment spaces throughout Washington, DC, Northern Virginia, and Maryland — including McLean, Alexandria, Bethesda, and Rockville — this ceiling system combines modern lighting technology with high-end interior design.</p>
            <p>From structural preparation and frame alignment to LED integration and final tensioning, the installation was completed to meet professional construction standards and code-compliant electrical requirements.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover57.jpg', alt: 'Backlit Stretch Ceiling with Custom Sky Print – Hero View' },
                { src: 'img878.jpg', alt: 'Sky print backlit stretch ceiling detail' },
                { src: 'img898.jpg', alt: 'Illuminated sky ceiling in residential theater' }
            ]
        },
        'cover777': {
            title: 'Backlit Stretch Ceiling with Forest Sky Print – Commercial Project in Washington, DC, Northern Virginia & Maryland',
            description: `
            <div class="project-details-meta">
                <span><i class="fas fa-building"></i> Commercial</span>
                <span><i class="fas fa-lightbulb"></i> Printed Backlit</span>
            </div>
            <p>This commercial interior installation features a custom backlit stretch ceiling with a forest sky print, creating a bright and immersive architectural ceiling feature. The illuminated panel simulates natural daylight filtering through trees, transforming the space with depth, softness, and a calming visual atmosphere.</p>
            <p>The system is built using a concealed perimeter track with a tensioned stretch membrane and integrated LED lightbox technology. Even light diffusion ensures a seamless glow across the printed surface, eliminating harsh shadows and visible fixtures while enhancing the perception of openness.</p>
            <p>Ideal for offices, wellness centers, medical clinics, hotels, and modern commercial interiors throughout Washington, DC, Northern Virginia, and Maryland — including Arlington, Tysons, Bethesda, Silver Spring, and Rockville — this ceiling solution combines functional lighting with a high-end design statement.</p>
            <p>Installation included structural coordination, LED integration, membrane tensioning, and code-compliant electrical planning to ensure long-term performance and professional finish quality.</p>
            <div class="project-features">
                <h2>Licensed & Permitted Commercial Ceiling Contractor – DC, Maryland & Northern Virginia</h2>
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
                { src: 'cover777.jpg', alt: 'Backlit Stretch Ceiling with Forest Sky Print – Hero View' },
                { src: 'img777.jpg', alt: 'Forest sky print ceiling detail' },
                { src: 'img776.jpg', alt: 'Illuminated forest sky ceiling in commercial interior' }
            ]
        },
        'cover87': { images: [{ src: 'cover87.jpg' }, { src: 'img500.jpg' }, { src: 'img501.jpg' }, { src: 'img502.jpg' }, { src: 'img503.jpg' }] },
        'cover97': { images: [{ src: 'cover97.jpg' }, { src: 'img600.jpg' }, { src: 'img601.jpg' }, { src: 'img602.jpg' }, { src: 'img603.jpg' }, { src: 'img604.jpg' }, { src: 'img605.jpg' }] }
    };

    window.openProject = function (projectId) {
        const data = projectsData[projectId];
        if (!data) return;

        modalTitle.textContent = data.title || 'Project Gallery';
        modalDesc.innerHTML = data.description || '';
        modalGallery.innerHTML = '';

        data.images.forEach((imgObj) => {
            const container = document.createElement('div');
            container.className = 'gallery-item';

            const img = document.createElement('img');
            img.src = `images/${imgObj.src}`;
            img.alt = imgObj.alt || 'Designo Ceilings Installation';
            img.loading = 'lazy';

            img.onerror = () => container.remove();

            container.appendChild(img);
            modalGallery.appendChild(container);
        });

        projectModal.classList.add('active');
        projectModal.scrollTop = 0; // Ensure modal starts at top
        document.body.style.overflow = 'hidden';
        history.pushState(null, null, `#project-${projectId}`);
    };

    window.closeProject = function () {
        projectModal.classList.remove('active');
        document.body.style.overflow = '';

        const activeLink = document.querySelector('.nav-link.active');
        const activeSection = activeLink ? activeLink.getAttribute('data-section') : 'residential';
        history.pushState(null, null, `#${activeSection}`);
    };

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProject();
        }
    });

    // Initial load
    const currentHash = window.location.hash.substring(1).toLowerCase();
    const validSections = ['about', 'residential', 'commercial', 'renderings', 'hometheatre', 'backlit'];
    if (validSections.includes(currentHash)) {
        showSection(currentHash);
    } else {
        showSection('residential');
    }
});
