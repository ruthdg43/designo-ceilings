document.addEventListener('DOMContentLoaded', () => {
    console.log('Designo Template Loaded');

    /* --- Navigation Logic --- */
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionTitle = document.getElementById('section-title');
    const contentSections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Get section name and update title
            const sectionName = link.getAttribute('data-section');
            sectionTitle.textContent = sectionName;

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active'));

            // Show the appropriate section
            const sectionId = 'section-' + sectionName.toLowerCase().replace(/\s+/g, '-');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            // After navigation, ensure empty project slots are hidden so grid collapses correctly
            try {
                cleanProjectPlaceholders();
            } catch (e) {
                // ignore
            }
        });
    });

    // Hide empty project slots in top-level grids (Home/Residential/Commercial/Printed Backlit)
    function cleanProjectPlaceholders() {
        try {
            const slots = Array.from(document.querySelectorAll('.project-cover-slot'));
            slots.forEach(slot => {
                const img = slot.querySelector('img');
                if (!img) {
                    slot.style.display = 'none';
                    return;
                }
                const src = img.getAttribute('src') || '';
                if (!src.trim()) {
                    slot.style.display = 'none';
                    return;
                }
                // If image failed to load, hide slot
                if (img.complete && img.naturalWidth === 0) {
                    slot.style.display = 'none';
                    return;
                }
                // ensure visible
                slot.style.display = '';
            });
        } catch (e) {
            // ignore
        }
    }

    /* --- Modal Logic --- */
    const modal = document.getElementById('gallery-modal');
    const closeBtn = document.querySelector('.close-modal');
    const seoPotomac = document.getElementById('seo-section-potomac');
    const seoRockville = document.getElementById('seo-section-rockville');
    const seoAlexandria = document.getElementById('seo-section-alexandria');
    const seoArlingtonLinear = document.getElementById('seo-section-arlington-linear');
    const seoArlingtonLinear2 = document.getElementById('seo-section-arlington-linear-2');
    const seoRockvilleResidential = document.getElementById('seo-section-rockville-residential');
    const seoRockvilleCommercial2 = document.getElementById('seo-section-rockville-commercial-2');
    const seoAlexandriaCommercial = document.getElementById('seo-section-alexandria-commercial');
    const seoCover9 = document.getElementById('seo-section-cover9');
    const seoCover10 = document.getElementById('seo-section-cover10');
    const galleryPotomac = document.getElementById('gallery-potomac');
    const galleryRockville = document.getElementById('gallery-rockville');
    const galleryAlexandria = document.getElementById('gallery-alexandria');
    const galleryArlingtonLinear = document.getElementById('gallery-arlington-linear');
    const galleryArlingtonLinear2 = document.getElementById('gallery-arlington-linear-2');
    const galleryRockvilleResidential = document.getElementById('gallery-rockville-residential');
    const galleryRockvilleCommercial2 = document.getElementById('gallery-rockville-commercial-2');
    const galleryAlexandriaCommercial = document.getElementById('gallery-alexandria-commercial');
    const galleryCover9 = document.getElementById('gallery-cover9');
    const galleryCover10 = document.getElementById('gallery-cover10');
    const galleryCover11 = document.getElementById('gallery-cover11');
    const galleryCover21 = document.getElementById('gallery-cover21');
    const galleryCover13 = document.getElementById('gallery-cover13');
    const seoCover13 = document.getElementById('seo-section-cover13');
    const seoCover11 = document.getElementById('seo-section-cover11');
    const seoCover21 = document.getElementById('seo-section-cover21');
    const galleryCover12 = document.getElementById('gallery-cover12');
    const seoCover12 = document.getElementById('seo-section-cover12');
    const galleryCover22 = document.getElementById('gallery-cover22');
    const seoCover22 = document.getElementById('seo-section-cover22');
    let metaCover10Title = null;
    let metaCover10Desc = null;
    let metaCover11Title = null;
    let metaCover21Title = null;
    let metaAlexTitle = null;
    let metaAlexDesc = null;
    let metaCover13Title = null;
    let metaCover13Desc = null;
    let metaCover12Title = null;
    let metaCover12Desc = null;
    let metaCover22Title = null;
    let metaCover22Desc = null;
    const galleryCover30 = document.getElementById('gallery-cover30');
    const seoCover30 = document.getElementById('seo-section-cover30');
    let metaCover30Desc = null;
    const galleryCover31 = document.getElementById('gallery-cover31');
    const seoCover31 = document.getElementById('seo-section-cover31');
    let metaCover31Desc = null;
    const galleryCover32 = document.getElementById('gallery-cover32');
    const seoCover32 = document.getElementById('seo-section-cover32');
    let metaCover32Desc = null;
    const galleryCover33 = document.getElementById('gallery-cover33');
    const seoCover33 = document.getElementById('seo-section-cover33');
    let metaCover33Desc = null;
    const galleryCover35 = document.getElementById('gallery-cover35');
    const seoCover35 = document.getElementById('seo-section-cover35');
    let metaCover35Desc = null;
    const galleryCover37 = document.getElementById('gallery-cover37');
    const seoCover37 = document.getElementById('seo-section-cover37');
    let metaCover37Desc = null;
    const galleryCover38 = document.getElementById('gallery-cover38');
    const seoCover38 = document.getElementById('seo-section-cover38');
    let metaCover38Desc = null;
    const galleryCover39 = document.getElementById('gallery-cover39');
    const seoCover39 = document.getElementById('seo-section-cover39');
    let metaCover39Desc = null;
    const galleryImg400 = document.getElementById('gallery-img400');
    const seoImg400 = document.getElementById('seo-section-img400');
    let metaImg400Desc = null;
    const galleryCover40 = document.getElementById('gallery-cover40');
    const seoCover40 = document.getElementById('seo-section-cover40');
    let metaCover40Desc = null;
    const galleryCover50 = document.getElementById('gallery-cover50');
    const seoCover50 = document.getElementById('seo-section-cover50');
    let metaCover50Desc = null;
    const galleryImg151 = document.getElementById('gallery-img151');
    const seoImg151 = document.getElementById('seo-section-img151');
    let metaImg151Desc = null;

    // Utility: remove/hide empty or broken gallery items so grid auto-fills
    function cleanGalleryPlaceholders() {
        try {
            const grids = document.querySelectorAll('.gallery-grid');
            grids.forEach(grid => {
                const items = Array.from(grid.querySelectorAll('.gallery-grid-item'));
                items.forEach(item => {
                    // If item has no child elements, hide it
                    if (!item.querySelector('*')) {
                        item.style.display = 'none';
                        return;
                    }

                    const img = item.querySelector('img');
                    if (img) {
                        // If src missing, hide
                        const src = img.getAttribute('src') || '';
                        if (!src.trim()) {
                            item.style.display = 'none';
                            return;
                        }

                        // If image already loaded but zero natural size, hide
                        if (img.complete) {
                            if (img.naturalWidth === 0) {
                                item.style.display = 'none';
                            } else {
                                item.style.display = '';
                            }
                        } else {
                            // Attach error handler to hide broken images
                            img.addEventListener('error', () => {
                                item.style.display = 'none';
                            });
                            img.addEventListener('load', () => {
                                if (img.naturalWidth === 0) item.style.display = 'none';
                                else item.style.display = '';
                            });
                        }
                    }
                });
            });
        } catch (e) {
            // ignore
        }
    }

    // Open Modal Function
    window.openGalleryModal = function (projectId) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Clean placeholders before showing content so grid will reflow
        cleanGalleryPlaceholders();

        // Hide all galleries and SEO sections first
        if (galleryPotomac) galleryPotomac.style.display = 'none';
        if (galleryRockville) galleryRockville.style.display = 'none';
        if (galleryAlexandria) galleryAlexandria.style.display = 'none';
        if (galleryArlingtonLinear) galleryArlingtonLinear.style.display = 'none';
        if (galleryArlingtonLinear2) galleryArlingtonLinear2.style.display = 'none';
        if (galleryRockvilleResidential) galleryRockvilleResidential.style.display = 'none';
        if (galleryRockvilleCommercial2) galleryRockvilleCommercial2.style.display = 'none';
        if (galleryAlexandriaCommercial) galleryAlexandriaCommercial.style.display = 'none';
        if (galleryCover9) galleryCover9.style.display = 'none';
        if (galleryCover10) galleryCover10.style.display = 'none';
        if (galleryCover11) galleryCover11.style.display = 'none';
        if (galleryCover21) galleryCover21.style.display = 'none';
        if (seoPotomac) seoPotomac.style.display = 'none';
        if (seoRockville) seoRockville.style.display = 'none';
        if (seoAlexandria) seoAlexandria.style.display = 'none';
        if (seoCover9) seoCover9.style.display = 'none';
        if (seoCover10) seoCover10.style.display = 'none';
        if (seoCover11) seoCover11.style.display = 'none';
        if (seoCover21) seoCover21.style.display = 'none';
        if (seoCover13) seoCover13.style.display = 'none';
        if (seoCover12) seoCover12.style.display = 'none';
        if (seoArlingtonLinear) seoArlingtonLinear.style.display = 'none';
        if (seoArlingtonLinear2) seoArlingtonLinear2.style.display = 'none';
        if (seoRockvilleResidential) seoRockvilleResidential.style.display = 'none';
        if (seoRockvilleCommercial2) seoRockvilleCommercial2.style.display = 'none';
        if (seoAlexandriaCommercial) seoAlexandriaCommercial.style.display = 'none';
        if (galleryCover22) galleryCover22.style.display = 'none';
        if (seoCover22) seoCover22.style.display = 'none';
        if (galleryCover30) galleryCover30.style.display = 'none';
        if (seoCover30) seoCover30.style.display = 'none';
        if (galleryCover31) galleryCover31.style.display = 'none';
        if (seoCover31) seoCover31.style.display = 'none';
        if (galleryCover32) galleryCover32.style.display = 'none';
        if (seoCover32) seoCover32.style.display = 'none';
        if (galleryCover33) galleryCover33.style.display = 'none';
        if (seoCover33) seoCover33.style.display = 'none';
        if (galleryCover35) galleryCover35.style.display = 'none';
        if (seoCover35) seoCover35.style.display = 'none';
        if (galleryCover37) galleryCover37.style.display = 'none';
        if (seoCover37) seoCover37.style.display = 'none';
        if (galleryCover38) galleryCover38.style.display = 'none';
        if (seoCover38) seoCover38.style.display = 'none';
        if (galleryCover39) galleryCover39.style.display = 'none';
        if (seoCover39) seoCover39.style.display = 'none';
        if (galleryImg400) galleryImg400.style.display = 'none';
        if (seoImg400) seoImg400.style.display = 'none';
        if (galleryCover40) galleryCover40.style.display = 'none';
        if (seoCover40) seoCover40.style.display = 'none';
        if (galleryCover50) galleryCover50.style.display = 'none';
        if (seoCover50) seoCover50.style.display = 'none';
        if (galleryImg151) galleryImg151.style.display = 'none';
        if (seoImg151) seoImg151.style.display = 'none';

        // Show the appropriate gallery and SEO content
        if (projectId === 'potomac') {
            if (galleryPotomac) galleryPotomac.style.display = 'grid';
            if (seoPotomac) seoPotomac.style.display = 'block';
        } else if (projectId === 'rockville') {
            if (galleryRockville) galleryRockville.style.display = 'grid';
            if (seoRockville) seoRockville.style.display = 'block';
        } else if (projectId === 'alexandria') {
            if (galleryAlexandria) galleryAlexandria.style.display = 'grid';
            if (seoAlexandria) seoAlexandria.style.display = 'block';
        } else if (projectId === 'arlington-linear') {
            if (galleryArlingtonLinear) galleryArlingtonLinear.style.display = 'grid';
            if (seoArlingtonLinear) seoArlingtonLinear.style.display = 'block';
        } else if (projectId === 'arlington-linear-2') {
            if (galleryArlingtonLinear2) galleryArlingtonLinear2.style.display = 'grid';
            if (seoArlingtonLinear2) seoArlingtonLinear2.style.display = 'block';
        } else if (projectId === 'rockville-residential') {
            if (galleryRockvilleResidential) galleryRockvilleResidential.style.display = 'grid';
            if (seoRockvilleResidential) seoRockvilleResidential.style.display = 'block';
        } else if (projectId === 'rockville-commercial-2') {
            if (galleryRockvilleCommercial2) galleryRockvilleCommercial2.style.display = 'grid';
            if (seoRockvilleCommercial2) seoRockvilleCommercial2.style.display = 'block';
        } else if (projectId === 'alexandria-commercial') {
            if (galleryAlexandriaCommercial) galleryAlexandriaCommercial.style.display = 'grid';
            if (seoAlexandriaCommercial) seoAlexandriaCommercial.style.display = 'block';

            // Add meta tags for Alexandria commercial SEO
            metaAlexTitle = document.createElement('meta');
            metaAlexTitle.setAttribute('name', 'title');
            metaAlexTitle.setAttribute('content', 'Commercial LED Ceiling Installation in Alexandria Virginia Office');
            document.head.appendChild(metaAlexTitle);

            metaAlexDesc = document.createElement('meta');
            metaAlexDesc.setAttribute('name', 'description');
            metaAlexDesc.setAttribute('content', 'This commercial office project in Alexandria, Virginia features custom geometric LED ceiling lighting designed to enhance workspace illumination and modern aesthetics. Professionally installed commercial ceilings improve light distribution, energy efficiency, and the overall look of corporate interiors. Businesses in Alexandria, Virginia rely on high-quality ceiling and lighting solutions to create productive, visually appealing environments.');
            document.head.appendChild(metaAlexDesc);
            // Ensure SEO block is brought into view inside the modal body (scroll the modal, not the window)
            setTimeout(() => {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (modalBody && seoAlexandriaCommercial) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoAlexandriaCommercial.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10; // small padding
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }
                } catch (e) {
                    // ignore errors
                }
            }, 300);
        } else if (projectId === 'cover9') {
            if (galleryCover9) galleryCover9.style.display = 'grid';
            if (seoCover9) seoCover9.style.display = 'block';
        } else if (projectId === 'cover13') {
            if (galleryCover13) galleryCover13.style.display = 'grid';
            if (seoCover13) seoCover13.style.display = 'block';

            // Add meta tags (meta-only SEO for residential cover13)
            metaCover13Title = document.createElement('meta');
            metaCover13Title.setAttribute('name', 'title');
            metaCover13Title.setAttribute('content', 'Residential Interior Lighting Installation in Northern Virginia | Modern Ceiling Design');
            document.head.appendChild(metaCover13Title);

            metaCover13Desc = document.createElement('meta');
            metaCover13Desc.setAttribute('name', 'description');
            metaCover13Desc.setAttribute('content', 'Expert residential interior lighting installation in Northern Virginia. Custom LED ceiling panels, modern home remodeling, and high-end interior finish work.');
            document.head.appendChild(metaCover13Desc);
        } else if (projectId === 'cover10') {
            if (galleryCover10) galleryCover10.style.display = 'grid';
            if (seoCover10) seoCover10.style.display = 'block';

            // Add meta tags (meta-only SEO for residential)
            metaCover10Title = document.createElement('meta');
            metaCover10Title.setAttribute('name', 'title');
            metaCover10Title.setAttribute('content', 'Modern Residential Interior Renovation in Northern Virginia | Custom Fireplace & Lighting');
            document.head.appendChild(metaCover10Title);

            metaCover10Desc = document.createElement('meta');
            metaCover10Desc.setAttribute('name', 'description');
            metaCover10Desc.setAttribute('content', 'Professional residential interior renovation in Northern Virginia featuring custom fireplace installation, modern ceiling lighting, and high-end finish work. Quality craftsmanship for modern homes.');
            document.head.appendChild(metaCover10Desc);
        }

        else if (projectId === 'cover12') {
            if (galleryCover12) galleryCover12.style.display = 'grid';
            if (seoCover12) seoCover12.style.display = 'block';

            // Add meta tags (meta-only SEO for cover12)
            metaCover12Title = document.createElement('meta');
            metaCover12Title.setAttribute('name', 'title');
            metaCover12Title.setAttribute('content', 'Backlit Stretch Ceiling Installation in Washington DC Office');
            document.head.appendChild(metaCover12Title);

            metaCover12Desc = document.createElement('meta');
            metaCover12Desc.setAttribute('name', 'description');
            metaCover12Desc.setAttribute('content', 'This commercial project in Washington, D.C. features a custom backlit stretch ceiling with a nature-inspired graphic, designed to create a calming, modern atmosphere.');
            document.head.appendChild(metaCover12Desc);

            // Ensure SEO block is visible below images (scroll modal body after images load)
            (function scrollSeoWhenReady12() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover12) return;

                    const galleryImgs = galleryCover12 ? Array.from(galleryCover12.querySelectorAll('img')) : [];
                    if (galleryImgs.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover12.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryImgs.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover12.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryImgs.forEach(img => {
                        if (img.complete) {
                            remaining -= 1;
                        } else {
                            img.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            img.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        }
        else if (projectId === 'cover11') {
            if (galleryCover11) galleryCover11.style.display = 'grid';
            if (seoCover11) seoCover11.style.display = 'block';

            // Add meta title only (metadata only)
            metaCover11Title = document.createElement('meta');
            metaCover11Title.setAttribute('name', 'title');
            metaCover11Title.setAttribute('content', 'Custom Printed Stretch Ceilings for Homes in Northern Virginia');
            document.head.appendChild(metaCover11Title);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady11() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover11) return;

                    const galleryImgs = galleryCover11 ? Array.from(galleryCover11.querySelectorAll('img')) : [];
                    if (galleryImgs.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover11.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryImgs.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover11.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryImgs.forEach(img => {
                        if (img.complete) {
                            remaining -= 1;
                        } else {
                            img.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            img.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        }
        else if (projectId === 'cover21') {
            if (galleryCover21) galleryCover21.style.display = 'grid';
            if (seoCover21) seoCover21.style.display = 'block';

            // Add meta title only (metadata only)
            metaCover21Title = document.createElement('meta');
            metaCover21Title.setAttribute('name', 'title');
            metaCover21Title.setAttribute('content', 'Residential Stretch Ceiling Installation in Northern Virginia');
            document.head.appendChild(metaCover21Title);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady21() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover21) return;

                    const galleryImgs = galleryCover21 ? Array.from(galleryCover21.querySelectorAll('img')) : [];
                    if (galleryImgs.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover21.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryImgs.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover21.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryImgs.forEach(img => {
                        if (img.complete) {
                            remaining -= 1;
                        } else {
                            img.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            img.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover22') {
            if (galleryCover22) galleryCover22.style.display = 'grid';
            if (seoCover22) seoCover22.style.display = 'block';

            // Add meta tags for cover22
            metaCover22Title = document.createElement('meta');
            metaCover22Title.setAttribute('name', 'title');
            metaCover22Title.setAttribute('content', 'Commercial Stretch Ceiling Installation in Virginia');
            document.head.appendChild(metaCover22Title);

            metaCover22Desc = document.createElement('meta');
            metaCover22Desc.setAttribute('name', 'description');
            metaCover22Desc.setAttribute('content', 'Commercial stretch ceiling installation in Virginia featuring custom printed ceilings for spas, wellness centers, and hospitality interiors.');
            document.head.appendChild(metaCover22Desc);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady22() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover22) return;

                    const galleryImgs = galleryCover22 ? Array.from(galleryCover22.querySelectorAll('img')) : [];
                    if (galleryImgs.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover22.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryImgs.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover22.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryImgs.forEach(img => {
                        if (img.complete) {
                            remaining -= 1;
                        } else {
                            // Ensure one handler runs
                            img.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            img.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();

        } else if (projectId === 'cover30') {
            if (galleryCover30) galleryCover30.style.display = 'grid';
            if (seoCover30) seoCover30.style.display = 'block';

            // Add meta tags for cover30
            metaCover30Desc = document.createElement('meta');
            metaCover30Desc.setAttribute('name', 'description');
            metaCover30Desc.setAttribute('content', 'Commercial luminous stretch ceiling installation in Virginia for auto showrooms, retail spaces, and modern commercial interiors.');
            document.head.appendChild(metaCover30Desc);

            // Scroll SEO into view after images/video load
            (function scrollSeoWhenReady30() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover30) return;

                    const galleryItems = galleryCover30 ? Array.from(galleryCover30.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover30.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover30.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.tagName === 'VIDEO') {
                            if (el.readyState >= 1) { // HAVE_METADATA or greater
                                remaining -= 1;
                            } else {
                                el.onloadedmetadata = () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                };
                                // fallback
                                setTimeout(() => {
                                    if (remaining > 0) { // check if not counted yet logic roughly
                                        // Just force scroll if taking too long
                                        tryScroll();
                                    }
                                }, 1000);
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover31') {
            if (galleryCover31) galleryCover31.style.display = 'grid';
            if (seoCover31) seoCover31.style.display = 'block';

            // Add meta tags for cover31 (backend only)
            metaCover31Desc = document.createElement('meta');
            metaCover31Desc.setAttribute('name', 'description');
            metaCover31Desc.setAttribute('content', 'Residential LED stretch ceiling installation in Virginia featuring modern perimeter lighting for contemporary home interiors.');
            document.head.appendChild(metaCover31Desc);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady31() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover31) return;

                    const galleryImgs = galleryCover31 ? Array.from(galleryCover31.querySelectorAll('img')) : [];
                    if (galleryImgs.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover31.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryImgs.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover31.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryImgs.forEach(img => {
                        if (img.complete) {
                            remaining -= 1;
                        } else {
                            img.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            img.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover32') {
            if (galleryCover32) galleryCover32.style.display = 'grid';
            if (seoCover32) seoCover32.style.display = 'block';

            // Add meta tags for cover32 (backend only)
            metaCover32Desc = document.createElement('meta');
            metaCover32Desc.setAttribute('name', 'description');
            metaCover32Desc.setAttribute('content', 'Commercial circular stretch ceiling installation in Virginia featuring a custom sky print for spa and wellness interiors.');
            document.head.appendChild(metaCover32Desc);

            // Scroll SEO into view after images/video load
            (function scrollSeoWhenReady32() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover32) return;

                    const galleryItems = galleryCover32 ? Array.from(galleryCover32.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover32.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover32.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.tagName === 'VIDEO') {
                            if (el.readyState >= 1) { // HAVE_METADATA or greater
                                remaining -= 1;
                            } else {
                                el.onloadedmetadata = () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                };
                                // fallback
                                setTimeout(() => {
                                    if (remaining > 0) {
                                        tryScroll();
                                    }
                                }, 1000);
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover33') {
            if (galleryCover33) galleryCover33.style.display = 'grid';
            if (seoCover33) seoCover33.style.display = 'block';

            // Add meta tags for cover33 (backend only)
            metaCover33Desc = document.createElement('meta');
            metaCover33Desc.setAttribute('name', 'description');
            metaCover33Desc.setAttribute('content', 'Custom backlit stretch ceiling installation in a commercial interior in Virginia, designed to create a bright, modern lighting feature for offices and public spaces.');
            document.head.appendChild(metaCover33Desc);

            // Scroll SEO into view after images/video load
            (function scrollSeoWhenReady33() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover33) return;

                    const galleryItems = galleryCover33 ? Array.from(galleryCover33.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover33.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover33.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.tagName === 'VIDEO') {
                            if (el.readyState >= 1) { // HAVE_METADATA or greater
                                remaining -= 1;
                            } else {
                                el.onloadedmetadata = () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                };
                                // fallback
                                setTimeout(() => {
                                    if (remaining > 0) {
                                        tryScroll();
                                    }
                                }, 1000);
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover35') {
            if (galleryCover35) galleryCover35.style.display = 'grid';
            if (seoCover35) seoCover35.style.display = 'block';

            // Add meta tags for cover35 (backend only)
            metaCover35Desc = document.createElement('meta');
            metaCover35Desc.setAttribute('name', 'description');
            metaCover35Desc.setAttribute('content', 'Custom linear LED stretch ceiling installed in a modern residential interior in Washington, DC, creating clean architectural lighting and a sleek ceiling design.');
            document.head.appendChild(metaCover35Desc);

            // Scroll SEO into view after images/video load
            (function scrollSeoWhenReady35() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover35) return;

                    const galleryItems = galleryCover35 ? Array.from(galleryCover35.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover35.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover35.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.tagName === 'VIDEO') {
                            if (el.readyState >= 1) { // HAVE_METADATA or greater
                                remaining -= 1;
                            } else {
                                el.onloadedmetadata = () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                };
                                // fallback
                                setTimeout(() => {
                                    if (remaining > 0) {
                                        tryScroll();
                                    }
                                }, 1000);
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover37') {
            if (galleryCover37) galleryCover37.style.display = 'grid';
            if (seoCover37) seoCover37.style.display = 'block';

            // Add meta tags for cover37 (backend only)
            metaCover37Desc = document.createElement('meta');
            metaCover37Desc.setAttribute('name', 'description');
            metaCover37Desc.setAttribute('content', 'Commercial stretch ceiling installation with integrated linear LED lighting in Maryland, delivering a modern architectural ceiling design for offices and showrooms.');
            document.head.appendChild(metaCover37Desc);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady37() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover37) return;

                    const galleryItems = galleryCover37 ? Array.from(galleryCover37.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover37.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover37.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.complete) {
                            remaining -= 1;
                        } else {
                            el.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            el.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover38') {
            if (galleryCover38) galleryCover38.style.display = 'grid';
            if (seoCover38) seoCover38.style.display = 'block';

            // Add meta tags for cover38 (backend only)
            metaCover38Desc = document.createElement('meta');
            metaCover38Desc.setAttribute('name', 'description');
            metaCover38Desc.setAttribute('content', 'High-end stretch ceiling installation with recessed LED lighting in a modern Washington DC condo, creating a sleek and elegant living space design.');
            document.head.appendChild(metaCover38Desc);

            // Scroll SEO into view after images load
            (function scrollSeoWhenReady38() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover38) return;

                    const galleryItems = galleryCover38 ? Array.from(galleryCover38.querySelectorAll('.gallery-grid-item img')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover38.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover38.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.complete) {
                            remaining -= 1;
                        } else {
                            el.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            el.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover39') {
            if (galleryCover39) galleryCover39.style.display = 'grid';
            if (seoCover39) seoCover39.style.display = 'block';

            // Add meta tags for cover39 (backend only)
            metaCover39Desc = document.createElement('meta');
            metaCover39Desc.setAttribute('name', 'description');
            metaCover39Desc.setAttribute('content', 'Custom mirror stretch ceiling with modern LED line lighting installed in a Virginia entertainment room, creating a luxury contemporary ceiling design.');
            document.head.appendChild(metaCover39Desc);

            // Scroll SEO into view after image loads
            (function scrollSeoWhenReady39() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover39) return;

                    const galleryItems = galleryCover39 ? Array.from(galleryCover39.querySelectorAll('.gallery-grid-item img')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover39.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover39.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.complete) {
                            remaining -= 1;
                        } else {
                            el.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            el.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'img400') {
            if (galleryImg400) galleryImg400.style.display = 'grid';
            if (seoImg400) seoImg400.style.display = 'block';

            // Add meta tags for img400 (backend only)
            metaImg400Desc = document.createElement('meta');
            metaImg400Desc.setAttribute('name', 'description');
            metaImg400Desc.setAttribute('content', 'Modern high gloss stretch ceiling with custom LED line lighting installed in a luxury Washington, DC condo living space.');
            document.head.appendChild(metaImg400Desc);

            // Scroll SEO into view after image loads
            (function scrollSeoWhenReady400() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoImg400) return;

                    const galleryItems = galleryImg400 ? Array.from(galleryImg400.querySelectorAll('.gallery-grid-item img')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoImg400.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoImg400.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.complete) {
                            remaining -= 1;
                        } else {
                            el.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            el.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover40') {
            if (galleryCover40) galleryCover40.style.display = 'grid';
            if (seoCover40) seoCover40.style.display = 'block';

            // Add meta tags for cover40 (backend only)
            metaCover40Desc = document.createElement('meta');
            metaCover40Desc.setAttribute('name', 'description');
            metaCover40Desc.setAttribute('content', 'Luxury gloss stretch ceiling installation in a modern Maryland living room with recessed lighting and clean architectural lines.');
            document.head.appendChild(metaCover40Desc);

            // Scroll SEO into view after image loads
            (function scrollSeoWhenReady40() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover40) return;

                    const galleryItems = galleryCover40 ? Array.from(galleryCover40.querySelectorAll('.gallery-grid-item img')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover40.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover40.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        if (el.complete) {
                            remaining -= 1;
                        } else {
                            el.addEventListener('load', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                            el.addEventListener('error', () => {
                                remaining -= 1;
                                if (remaining <= 0) tryScroll();
                            });
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'cover50') {
            if (galleryCover50) galleryCover50.style.display = 'grid';
            if (seoCover50) seoCover50.style.display = 'block';

            // Add meta tags for cover50 (backend only)
            metaCover50Desc = document.createElement('meta');
            metaCover50Desc.setAttribute('name', 'description');
            metaCover50Desc.setAttribute('content', 'Custom modern LED ceiling installation in a Washington DC home featuring geometric recessed lighting design in an open concept living space.');
            document.head.appendChild(metaCover50Desc);

            // Scroll SEO into view after media loads
            (function scrollSeoWhenReady50() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoCover50) return;

                    const galleryItems = galleryCover50 ? Array.from(galleryCover50.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover50.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoCover50.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        const isVideo = el.tagName.toLowerCase() === 'video';
                        if (isVideo) {
                            if (el.readyState >= 3) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('loadeddata', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        } else if (projectId === 'img151') {
            if (galleryImg151) galleryImg151.style.display = 'grid';
            if (seoImg151) seoImg151.style.display = 'block';

            // Add meta tags for img151 (backend only)
            metaImg151Desc = document.createElement('meta');
            metaImg151Desc.setAttribute('name', 'description');
            metaImg151Desc.setAttribute('content', 'Backlit printed stretch ceiling with sky effect installed in a modern home theater room in Washington DC.');
            document.head.appendChild(metaImg151Desc);

            // Scroll SEO into view after media loads
            (function scrollSeoWhenReady151() {
                try {
                    const modalBody = modal.querySelector('.modal-body');
                    if (!modalBody || !seoImg151) return;

                    const galleryItems = galleryImg151 ? Array.from(galleryImg151.querySelectorAll('.gallery-grid-item img, .gallery-grid-item video')) : [];
                    if (galleryItems.length === 0) {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoImg151.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                        return;
                    }

                    let remaining = galleryItems.length;
                    function tryScroll() {
                        const rectModal = modalBody.getBoundingClientRect();
                        const rectSeo = seoImg151.getBoundingClientRect();
                        const offset = rectSeo.top - rectModal.top + modalBody.scrollTop - 10;
                        modalBody.scrollTo({ top: offset, behavior: 'smooth' });
                    }

                    galleryItems.forEach(el => {
                        const isVideo = el.tagName.toLowerCase() === 'video';
                        if (isVideo) {
                            if (el.readyState >= 3) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('loadeddata', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        } else {
                            if (el.complete) {
                                remaining -= 1;
                            } else {
                                el.addEventListener('load', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                                el.addEventListener('error', () => {
                                    remaining -= 1;
                                    if (remaining <= 0) tryScroll();
                                });
                            }
                        }
                    });

                    if (remaining <= 0) {
                        tryScroll();
                    }
                } catch (e) {
                    // ignore
                }
            })();
        }

        // After showing the requested gallery, adjust columns so remaining images fill the row
        setTimeout(() => {
            try {
                const shownGalleries = modal.querySelectorAll('.gallery-grid');
                shownGalleries.forEach(g => {
                    if (g.style.display && g.style.display !== 'none') {
                        // Hide any leftover empty placeholders
                        cleanGalleryPlaceholders();
                        // adjustGalleryColumns(g); // Removed to maintain consistent 3-column grid globally
                    }
                });
            } catch (e) {
                // ignore
            }
        }, 60);
    };

    // Close Modal Function
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (galleryPotomac) galleryPotomac.style.display = 'none';
        if (galleryRockville) galleryRockville.style.display = 'none';
        if (galleryAlexandria) galleryAlexandria.style.display = 'none';
        if (galleryArlingtonLinear) galleryArlingtonLinear.style.display = 'none';
        if (galleryArlingtonLinear2) galleryArlingtonLinear2.style.display = 'none';
        if (galleryRockvilleResidential) galleryRockvilleResidential.style.display = 'none';
        if (galleryRockvilleCommercial2) galleryRockvilleCommercial2.style.display = 'none';
        if (galleryAlexandriaCommercial) galleryAlexandriaCommercial.style.display = 'none';
        if (galleryCover9) galleryCover9.style.display = 'none';
        if (galleryCover10) galleryCover10.style.display = 'none';
        if (seoPotomac) seoPotomac.style.display = 'none';
        if (seoRockville) seoRockville.style.display = 'none';
        if (seoAlexandria) seoAlexandria.style.display = 'none';
        if (seoCover9) seoCover9.style.display = 'none';
        if (seoCover10) seoCover10.style.display = 'none';
        if (seoCover13) seoCover13.style.display = 'none';
        if (seoArlingtonLinear) seoArlingtonLinear.style.display = 'none';
        if (seoCover12) seoCover12.style.display = 'none';
        if (seoArlingtonLinear2) seoArlingtonLinear2.style.display = 'none';
        if (seoRockvilleResidential) seoRockvilleResidential.style.display = 'none';
        if (seoRockvilleCommercial2) seoRockvilleCommercial2.style.display = 'none';
        if (seoRockvilleCommercial2) seoRockvilleCommercial2.style.display = 'none';
        if (seoAlexandriaCommercial) seoAlexandriaCommercial.style.display = 'none';
        if (galleryCover22) galleryCover22.style.display = 'none';
        if (seoCover22) seoCover22.style.display = 'none';
        if (galleryCover30) galleryCover30.style.display = 'none';
        if (seoCover30) seoCover30.style.display = 'none';
        if (galleryCover31) galleryCover31.style.display = 'none';
        if (seoCover31) seoCover31.style.display = 'none';
        if (galleryCover32) galleryCover32.style.display = 'none';
        if (seoCover32) seoCover32.style.display = 'none';
        if (galleryCover33) galleryCover33.style.display = 'none';
        if (seoCover33) seoCover33.style.display = 'none';
        if (galleryCover35) galleryCover35.style.display = 'none';
        if (seoCover35) seoCover35.style.display = 'none';
        if (galleryCover37) galleryCover37.style.display = 'none';
        if (seoCover37) seoCover37.style.display = 'none';
        if (galleryCover38) galleryCover38.style.display = 'none';
        if (seoCover38) seoCover38.style.display = 'none';
        if (galleryCover39) galleryCover39.style.display = 'none';
        if (seoCover39) seoCover39.style.display = 'none';
        if (galleryImg400) galleryImg400.style.display = 'none';
        if (seoImg400) seoImg400.style.display = 'none';
        if (galleryCover40) galleryCover40.style.display = 'none';
        if (seoCover40) seoCover40.style.display = 'none';
        if (galleryCover50) galleryCover50.style.display = 'none';
        if (seoCover50) seoCover50.style.display = 'none';
        if (galleryImg151) galleryImg151.style.display = 'none';
        if (seoImg151) seoImg151.style.display = 'none';
        // Remove dynamic meta tags for cover10 if present
        if (metaCover10Title && metaCover10Title.parentNode) metaCover10Title.parentNode.removeChild(metaCover10Title);
        metaCover10Title = null;
        if (metaCover10Desc && metaCover10Desc.parentNode) metaCover10Desc.parentNode.removeChild(metaCover10Desc);
        metaCover10Desc = null;
        // Remove dynamic meta tags for Alexandria commercial if present
        if (metaAlexTitle && metaAlexTitle.parentNode) metaAlexTitle.parentNode.removeChild(metaAlexTitle);
        metaAlexTitle = null;
        if (metaAlexDesc && metaAlexDesc.parentNode) metaAlexDesc.parentNode.removeChild(metaAlexDesc);
        metaAlexDesc = null;
        // Remove dynamic meta tags for cover13 if present
        if (metaCover13Title && metaCover13Title.parentNode) metaCover13Title.parentNode.removeChild(metaCover13Title);
        metaCover13Title = null;
        if (metaCover13Desc && metaCover13Desc.parentNode) metaCover13Desc.parentNode.removeChild(metaCover13Desc);
        metaCover13Desc = null;
        // Remove dynamic meta tags for cover11 if present
        if (metaCover11Title && metaCover11Title.parentNode) metaCover11Title.parentNode.removeChild(metaCover11Title);
        metaCover11Title = null;
        // Remove dynamic meta tags for cover21 if present
        if (metaCover21Title && metaCover21Title.parentNode) metaCover21Title.parentNode.removeChild(metaCover21Title);
        metaCover21Title = null;
        // Remove dynamic meta tags for cover12 if present
        if (metaCover12Title && metaCover12Title.parentNode) metaCover12Title.parentNode.removeChild(metaCover12Title);
        metaCover12Title = null;
        if (metaCover12Desc && metaCover12Desc.parentNode) metaCover12Desc.parentNode.removeChild(metaCover12Desc);
        metaCover12Desc = null;
        // Remove dynamic meta tags for cover22 if present
        if (metaCover22Title && metaCover22Title.parentNode) metaCover22Title.parentNode.removeChild(metaCover22Title);
        metaCover22Title = null;
        if (metaCover22Desc && metaCover22Desc.parentNode) metaCover22Desc.parentNode.removeChild(metaCover22Desc);
        metaCover22Desc = null;
        // Remove dynamic meta tags for cover30 if present
        if (metaCover30Desc && metaCover30Desc.parentNode) metaCover30Desc.parentNode.removeChild(metaCover30Desc);
        metaCover30Desc = null;
        // Remove dynamic meta tags for cover31 if present
        if (metaCover31Desc && metaCover31Desc.parentNode) metaCover31Desc.parentNode.removeChild(metaCover31Desc);
        metaCover31Desc = null;
        // Remove dynamic meta tags for cover32 if present
        if (metaCover32Desc && metaCover32Desc.parentNode) metaCover32Desc.parentNode.removeChild(metaCover32Desc);
        metaCover32Desc = null;
        // Remove dynamic meta tags for cover33 if present
        if (metaCover33Desc && metaCover33Desc.parentNode) metaCover33Desc.parentNode.removeChild(metaCover33Desc);
        metaCover33Desc = null;
        // Remove dynamic meta tags for cover35 if present
        if (metaCover35Desc && metaCover35Desc.parentNode) metaCover35Desc.parentNode.removeChild(metaCover35Desc);
        metaCover35Desc = null;
        // Remove dynamic meta tags for cover37 if present
        if (metaCover37Desc && metaCover37Desc.parentNode) metaCover37Desc.parentNode.removeChild(metaCover37Desc);
        metaCover37Desc = null;
        // Remove dynamic meta tags for cover38 if present
        if (metaCover38Desc && metaCover38Desc.parentNode) metaCover38Desc.parentNode.removeChild(metaCover38Desc);
        metaCover38Desc = null;
        // Remove dynamic meta tags for cover39 if present
        if (metaCover39Desc && metaCover39Desc.parentNode) metaCover39Desc.parentNode.removeChild(metaCover39Desc);
        metaCover39Desc = null;
        // Remove dynamic meta tags for img400 if present
        if (metaImg400Desc && metaImg400Desc.parentNode) metaImg400Desc.parentNode.removeChild(metaImg400Desc);
        metaImg400Desc = null;
        // Remove dynamic meta tags for cover40 if present
        if (metaCover40Desc && metaCover40Desc.parentNode) metaCover40Desc.parentNode.removeChild(metaCover40Desc);
        metaCover40Desc = null;
        // Remove dynamic meta tags for cover50 if present
        if (metaCover50Desc && metaCover50Desc.parentNode) metaCover50Desc.parentNode.removeChild(metaCover50Desc);
        metaCover50Desc = null;
        // Remove dynamic meta tags for img151 if present
        if (metaImg151Desc && metaImg151Desc.parentNode) metaImg151Desc.parentNode.removeChild(metaImg151Desc);
        metaImg151Desc = null;
    }

    // Utility: adjust gallery columns based on visible items (1 -> 1col, 2 -> 2col, 3+ -> 3col)
    function adjustGalleryColumns(gallery) {
        try {
            if (!gallery) return;
            const items = Array.from(gallery.querySelectorAll('.gallery-grid-item'));
            const visibleItems = items.filter(it => {
                // consider element visible if not display:none and contains an image with src
                if (it.style && it.style.display === 'none') return false;
                const media = it.querySelector('img') || it.querySelector('video');
                if (!media) return false;
                const src = media.getAttribute('src') || (media.querySelector('source') ? media.querySelector('source').getAttribute('src') : '');
                return src && src.trim().length > 0;
            });
            let cols = 3;
            if (visibleItems.length <= 1) cols = 1;
            else if (visibleItems.length === 2) cols = 2;
            else cols = 3;
            gallery.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        } catch (e) {
            // ignore
        }
    }

    // Run project placeholder cleanup on initial load to remove empty slots in Home
    try {
        cleanProjectPlaceholders();
    } catch (e) {
        // ignore
    }

    // Back to Home Function (global)
    window.backToHome = function () {
        // Close the modal first
        closeModal();

        // Navigate to Home section
        const homeLink = document.querySelector('.nav-link[data-section="Home"]');
        if (homeLink) {
            homeLink.click();
        }
    };

    closeBtn.addEventListener('click', closeModal);

    // Close interaction outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    /* Consultation modal removed per request */

    /* --- Phone Number Reveal Logic --- */
    const phoneLink = document.getElementById('phone-link');
    if (phoneLink) {
        phoneLink.addEventListener('click', function (e) {
            // Check if we are on a desktop device (non-touch) or if it's the first click
            // to show the number before initiating the call (optional)
            // For now, let's just toggle the class.
            this.classList.toggle('active');

            // If the number is not yet revealed, we might want to prevent call on first click?
            // Actually, requirements say "When clicked... number should be displayed... MUST also initiate a call".
            // So both can happen at once.
        });
    }

});
