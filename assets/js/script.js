'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

if (modalCloseBtn) modalCloseBtn.addEventListener("click", testimonialsModalFunc);
if (overlay) overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// ── Project data ──
const PROJECTS = {
  'hr360': {
    title: 'HR360', status: 'live',
    desc: 'A full-featured HR management dashboard built specifically for Ghanaian businesses. Handles payroll processing with SSNIT (5.5% employee, 13% employer) and GRA PAYE band calculations, employee onboarding via kanban, leave management, invoicing with 15% VAT, and benefits tracking with local providers like GLICO and Acacia.',
    duration: '3 months', team: '1 developer', stack: 'React, Django REST',
    liveUrl: 'https://hr-360-web.vercel.app', githubUrl: 'https://github.com/samuel-adisi/hr360',
    gallery: ['./assets/images/hr360.png'],
    about: "HR360 was built to solve the gap in affordable, Ghana-specific HR tooling for SMEs. Most HR software on the market doesn't account for Ghanaian tax law — SSNIT tiers, GRA PAYE bands, or MoMo payroll disbursement. This dashboard handles all of it with a clean, intuitive UI.",
    tech: ['React','Recharts','Django REST Framework','PostgreSQL','JWT Auth','Python'],
    features: ['Ghana SSNIT & GRA PAYE payroll generation','Employee onboarding with 5-phase kanban board','Leave management with approval workflows','Invoicing with 15% VAT and GH₵ billing','Benefits management with local Ghanaian providers','Department analytics and HR insights panel'],
    challenges: [
      { label:'Challenge 1', text:"Accurately implementing Ghana's GRA PAYE tax bands and SSNIT contribution logic in a reusable payroll engine." },
      { label:'Challenge 2', text:'Designing a dashboard dense enough to be functional but clean enough not to overwhelm HR managers.' },
      { label:'Challenge 3', text:'Building a multi-step payroll wizard that feels intuitive without losing configurability.' },
    ],
    solutions: [
      { label:'Solution 1', text:"Built a dedicated Ghana payroll calculation module with configurable tax bands that mirrors GRA's published rate tables." },
      { label:'Solution 2', text:'Used a design token system inspired by Linear and Rippling, keeping color, spacing, and hierarchy tightly controlled.' },
      { label:'Solution 3', text:'Implemented a 3-step wizard (configure → review/edit → confirm) with inline editing on the review step.' },
    ],
  },
  
  'makpilot': {
    title: 'Makpilot AI Agent', status: 'wip',
    desc: 'An AI marketing agent platform that autonomously generates marketing strategies, runs multi-stage Claude AI chains, and integrates directly with Google Ads for campaign launch and live performance monitoring with anomaly detection.',
    duration: '2 months', team: '1 developer', stack: 'React, Python, Django REST, Claude API',
    liveUrl: 'https://makpilot.vercel.app', githubUrl: null,
    gallery: ['./assets/images/makpilot.png'],
    about: 'Makpilot is built on the idea that marketing strategy should be autonomous. The system runs a 6-stage Claude AI chain — research, ideation, copy, targeting, scheduling, and synthesis — using a MiroFish architecture (3 parallel Haiku agents feeding a Sonnet synthesizer). It then pushes campaigns directly to Google Ads and monitors them in real time.',
    tech: ['React','Django REST Framework','Claude API','Celery','Redis','PostgreSQL','Google Ads API'],
    features: ['6-stage Claude AI chain for autonomous marketing strategy generation','MiroFish: 3 parallel Haiku agents + Sonnet synthesizer','Google Ads OAuth integration and campaign launch','Live campaign performance monitoring with 15-min Celery beat','Z-score anomaly detection with auto-pause on underperforming campaigns','A/B test orchestration and creative fatigue detection'],
    challenges: [
      { label:'Challenge 1', text:'Coordinating 3 parallel AI agents and merging their outputs without losing context or coherence.' },
      { label:'Challenge 2', text:'Implementing statistically valid anomaly detection that avoids false positives on low-traffic campaigns.' },
      { label:'Challenge 3', text:'Managing Celery beat scheduling across multiple campaign types without task collision.' },
    ],
    solutions: [
      { label:'Solution 1', text:'Used async task dispatch for Haiku agents with a merge step that feeds all three outputs as a structured prompt to the Sonnet synthesizer.' },
      { label:'Solution 2', text:'Added a minimum impression gate before Z-score evaluation fires, preventing false anomaly flags on campaigns with < 100 impressions.' },
      { label:'Solution 3', text:'Implemented task locking with Redis to prevent overlapping Celery beats on the same campaign ID.' },
    ],
  },
  'phoenix-mall': {
    title: 'PhoeniX Mall', status: 'wip',
    desc: 'A modern e-commerce storefront inspired by Inspire Uplift. Features product discovery, category browsing, horizontal scroll product rows, a smart sidebar, and a fully responsive layout.',
    duration: '1 month', team: '1 developer', stack: 'React, Tailwind CSS',
    liveUrl: null, githubUrl: null,
    gallery: ['./assets/images/project-3.jpg'],
    about: 'PhoeniX Mall is an e-commerce frontend built as a design and architecture exercise — recreating the feel of a high-conversion product marketplace with smooth UX patterns.',
    tech: ['React','Tailwind CSS','React Router','Vite'],
    features: ['Horizontal scroll product rows with chevron navigation','Smart sidebar that reveals after hero scrolls out of view','Category section with dynamic filtering','Featured, Most Reviewed, and Recently Viewed sections','Fully responsive mobile layout'],
    challenges: [
      { label:'Challenge 1', text:'Implementing a sidebar that fades in only after the user has scrolled past the hero and been idle for 500ms.' },
      { label:'Challenge 2', text:'Managing horizontal scroll rows without native scrollbar while keeping chevron navigation accessible.' },
      { label:'Challenge 3', text:'Keeping a single source of horizontal padding across deeply nested layout components.' },
    ],
    solutions: [
      { label:'Solution 1', text:'Used an IntersectionObserver on the hero + a debounced idle timer to trigger the sidebar CSS transition.' },
      { label:'Solution 2', text:'Applied overflow-x: auto with scrollbar-width: none and programmatic scrollBy on chevron click.' },
      { label:'Solution 3', text:"Established a single px-2 wrapper div as the one source of truth for horizontal padding." },
    ],
  },


  'deepgene': {
  title: 'DeepGene', status: 'wip',
  desc: 'An AI/ML bioinformatics pipeline that detects known drug-resistant mutations in Plasmodium patient genomes — combining deep learning and genomic analysis to support malaria resistance research.',
  duration: 'In Development', team: '1 developer', stack: 'Python, Scikit-learn, FastAPI',
  liveUrl: null, githubUrl: 'https://github.com/Samuel-Adisi/DeepGene',
  gallery: ['./assets/images/genome.png'],
  about: 'DeepGene was built to address a real gap in malaria research tooling — most mutation detection pipelines are either too generalised or inaccessible to researchers in resource-limited settings. This pipeline focuses specifically on Plasmodium drug-resistance mutations, running patient genome data through a multi-stage classification architecture.',
  tech: ['Python', 'Scikit-learn', 'BioPython', 'FastAPI', 'PostgreSQL', 'pgvector'],
  features: [
    'Multi-stage ML pipeline: binding affinity → ADMET screening → mutation classification',
    'Detects known and novel drug-resistant Plasmodium mutations',
    'Patient genome data ingestion and preprocessing',
    'Results dashboard for research review',
    'FastAPI backend for pipeline execution',
    'PostgreSQL with pgvector for genomic data storage',
  ],
  challenges: [
    { label: 'Challenge 1', text: 'Processing raw patient genome data into a clean, consistent format suitable for ML classification.' },
    { label: 'Challenge 2', text: 'Distinguishing novel mutations from known resistant variants without overfitting on limited labelled genomic data.' },
    { label: 'Challenge 3', text: 'Designing a multi-stage pipeline where each stage feeds cleanly into the next without data leakage.' },
  ],
  solutions: [
    { label: 'Solution 1', text: 'Built a dedicated preprocessing module using BioPython to parse and normalise genome sequences before they enter the ML pipeline.' },
    { label: 'Solution 2', text: 'Used a combination of feature engineering on known resistance markers and anomaly scoring to flag novel mutation candidates separately.' },
    { label: 'Solution 3', text: 'Designed each pipeline stage as an independent module with defined input/output schemas, making it testable and replaceable independently.' },
  ],
},


'handout-pay': {
    title: 'Handout Pay', status: 'live',
    desc: 'A payment platform built for Ghanaian university students to pay for course handouts digitally. Students pay via Paystack or MoMo, course reps manage their handouts and track payments, and admins oversee the full platform.',
    duration: '2 months', team: '1 developer', stack: 'React, Django REST, Paystack',
    liveUrl: 'https://handout-pay.vercel.app', githubUrl: 'https://github.com/Samuel-Adisi/Handout-F',
    gallery: ['./assets/images/handout.png'],
    about: 'Handout Pay was born from a real frustration — students in Ghanaian universities still pay for course materials with physical cash, which is slow, error-prone, and hard to track. This platform digitizes the entire flow: reps upload handouts, set prices, and students pay instantly with MoMo or card.',
    tech: ['React','Django REST Framework','Paystack API','MoMo API','JWT Auth','PostgreSQL'],
    features: ['Paystack and MoMo payment integration','Three-role system: student, course rep, admin','Course rep handout management dashboard','Student payment history and receipt download','Google OAuth login','JWT-based authentication with custom claims'],
    challenges: [
      { label:'Challenge 1', text:'Handling duplicate payment prevention when Paystack webhooks arrive multiple times for the same transaction.' },
      { label:'Challenge 2', text:'Building a multi-role auth system where each role sees a completely different dashboard.' },
      { label:'Challenge 3', text:'Managing N+1 query issues on the rep payments view with complex relational data.' },
    ],
    solutions: [
      { label:'Solution 1', text:'Added a unique constraint on the payment reference field and wrapped the webhook handler in an IntegrityError catch.' },
      { label:'Solution 2', text:'Used a custom JWT serializer to embed the user role in the token, then used React Router guards to redirect to the correct dashboard.' },
      { label:'Solution 3', text:'Fixed with select_related on the queryset, reducing dozens of queries to a single JOIN.' },
    ],
  },
};

// ── Detail renderer (same as project-detail.html) ──
function renderDetailInline(p) {
  const extIcon = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
  const ghIcon  = `<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.57 0-.28-.01-1.02-.01-2-3.34.72-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.9-.01 3.29 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>`;

  const galleryHTML  = p.gallery.map((src, i) =>
    `<img src="${src}" alt="screenshot ${i+1}" class="gallery-img ${i===0?'gallery-main':''}" style="width:100%;border-radius:12px;border:1px solid var(--jet);object-fit:cover;display:block;cursor:pointer;" onclick="(function(s){var lb=document.getElementById('inlineLightbox');lb.querySelector('img').src=s;lb.style.display='flex';})(this.src)">`
  ).join('');

  const techHTML       = p.tech.map(t => `<span style="background:var(--eerie-black-2);color:var(--light-gray);font-size:11px;font-weight:500;padding:4px 12px;border-radius:20px;border:1px solid var(--jet);">${t}</span>`).join('');
  const featuresHTML   = p.features.map(f => `<div style="display:flex;align-items:flex-start;gap:9px;color:var(--light-gray);font-size:12px;font-weight:300;line-height:1.5;"><span style="width:6px;height:6px;border-radius:50%;background:var(--orange-yellow-crayola);flex-shrink:0;margin-top:5px;display:block;"></span><span>${f}</span></div>`).join('');
  const challengesHTML = p.challenges.map(c => `<div style="font-size:12px;color:var(--light-gray);font-weight:300;line-height:1.6;padding-bottom:9px;border-bottom:1px solid var(--jet);"><strong style="color:var(--white-2);">${c.label}:</strong> ${c.text}</div>`).join('');
  const solutionsHTML  = p.solutions.map(s  => `<div style="font-size:12px;color:var(--light-gray);font-weight:300;line-height:1.6;padding-bottom:9px;border-bottom:1px solid var(--jet);"><strong style="color:var(--white-2);">${s.label}:</strong> ${s.text}</div>`).join('');

  const badgeStyle = p.status === 'wip'
    ? 'background:hsla(45,100%,60%,.12);color:hsl(45,100%,72%);border:1px solid hsla(45,100%,60%,.3);'
    : 'background:hsla(142,70%,45%,.15);color:hsl(142,70%,55%);border:1px solid hsla(142,70%,45%,.3);';

  document.getElementById('projectDetailContent').innerHTML = `
    <div style="margin-bottom:28px;">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px;flex-wrap:wrap;">
        <h2 style="font-size:clamp(1.3rem,4vw,2rem);font-weight:600;color:var(--white-2);">${p.title}</h2>
        <span style="display:inline-flex;align-items:center;gap:6px;${badgeStyle}font-size:11px;font-weight:600;padding:5px 12px;border-radius:20px;white-space:nowrap;">
          <span style="width:6px;height:6px;border-radius:50%;background:currentColor;animation:pulse 2s infinite;display:block;"></span>
          ${p.status === 'live' ? 'Live' : 'In Progress'}
        </span>
      </div>
      <p style="color:var(--light-gray);font-size:14px;font-weight:300;line-height:1.75;margin-bottom:18px;">${p.desc}</p>
      <div style="display:flex;flex-wrap:wrap;gap:16px;margin-bottom:20px;color:var(--light-gray-70);font-size:12px;">
        <span>📅 ${p.duration}</span>
        <span>👤 ${p.team}</span>
        <span>⚡ ${p.stack}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:10px;">
        ${p.liveUrl   ? `<a href="${p.liveUrl}"   target="_blank" style="display:inline-flex;align-items:center;gap:7px;background:var(--orange-yellow-crayola);color:hsl(0,0%,7%);font-size:13px;font-weight:600;padding:10px 20px;border-radius:12px;text-decoration:none;">${extIcon} View Live Site</a>` : ''}
        ${p.githubUrl ? `<a href="${p.githubUrl}" target="_blank" style="display:inline-flex;align-items:center;gap:7px;background:var(--onyx);color:var(--light-gray);font-size:13px;font-weight:500;padding:10px 20px;border-radius:12px;border:1px solid var(--jet);text-decoration:none;">${ghIcon} View Source</a>` : ''}
      </div>
    </div>

    <div style="margin-bottom:28px;">
      <h3 style="font-size:16px;font-weight:600;color:var(--white-2);margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--jet);">Project Gallery</h3>
      <div style="display:grid;grid-template-columns:1fr;gap:10px;">${galleryHTML}</div>
    </div>

    <div style="margin-bottom:28px;">
      <h3 style="font-size:16px;font-weight:600;color:var(--white-2);margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--jet);">About This Project</h3>
      <div style="background:var(--onyx);border:1px solid var(--jet);border-radius:14px;padding:20px;color:var(--light-gray);font-size:13px;font-weight:300;line-height:1.8;">${p.about}</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr;gap:14px;">
      ${['Technologies Used|blue|⚡|'+techHTML, 'Key Features|yellow|★|'+featuresHTML, 'Challenges|red|◎|'+challengesHTML, 'Solutions|green|💡|'+solutionsHTML].map((s,i) => {
        const [title,,icon,content] = s.split('|');
        const colors = ['hsl(210,100%,65%)','var(--orange-yellow-crayola)','hsl(0,70%,65%)','hsl(142,70%,55%)'];
        const bgs = ['hsla(210,100%,60%,.12)','hsla(45,100%,60%,.12)','hsla(0,70%,60%,.12)','hsla(142,70%,45%,.12)'];
        return `<div style="background:var(--onyx);border:1px solid var(--jet);border-radius:14px;padding:18px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
            <div style="width:36px;height:36px;border-radius:10px;background:${bgs[i]};color:${colors[i]};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${icon}</div>
            <h4 style="font-size:14px;font-weight:600;color:var(--white-2);">${title}</h4>
          </div>
          <div style="display:flex;flex-direction:column;gap:${i===0?'7px':'9px'};flex-wrap:${i===0?'wrap':'nowrap'};flex-direction:${i===0?'row':'column'};">${content}</div>
        </div>`;
      }).join('')}
    </div>

    <!-- Inline lightbox -->
    <div id="inlineLightbox" onclick="this.style.display='none'" style="display:none;position:fixed;inset:0;background:hsla(0,0%,0%,.92);z-index:999;align-items:center;justify-content:center;padding:20px;">
      <img style="max-width:95vw;max-height:90vh;border-radius:12px;object-fit:contain;" src="" alt="">
    </div>
  `;
}

// ── Nav + page switching ──
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

function activatePage(targetName) {
  pages.forEach(page => {
    page.classList.toggle("active", page.dataset.page === targetName);
  });
  navigationLinks.forEach(link => {
    link.classList.toggle("active", link.innerHTML.trim().toLowerCase() === targetName);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    activatePage(this.innerHTML.trim().toLowerCase());
  });
});

// ── Project card → inline detail (no page navigation) ──
document.querySelectorAll('.project-btn-view').forEach(btn => {
  const href = btn.getAttribute('href');
  if (href && href.startsWith('./project-detail.html')) {
    const id = new URL(href, window.location.href).searchParams.get('id');
    if (id && PROJECTS[id]) {
      btn.removeAttribute('href');
      btn.style.cursor = 'pointer';
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        renderDetailInline(PROJECTS[id]);
        activatePage('project-detail');
      });
    }
  }
});

// ── Back button in detail view ──
const detailBackBtn = document.getElementById('detailBackBtn');
if (detailBackBtn) {
  detailBackBtn.addEventListener('click', () => activatePage('portfolio'));
}

// ── Hash on load (e.g. coming from external link) ──
const hash = window.location.hash.replace('#', '').toLowerCase();
if (hash) activatePage(hash);