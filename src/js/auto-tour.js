/**
 * Shivalik GIS Intelligence Portal - Executive Auto-Tour & Presentation Autopilot
 * Automatically flies across AUDA growth corridors, highlighting plots, overlays, and legal/financial due diligence.
 */

class AutoTourController {
  constructor() {
    this.isActive = false;
    this.tourTimer = null;
    this.countdownTimer = null;
    this.currentStep = 0;
    this.bannerEl = null;

    this.steps = [
      {
        title: 'Step 1 of 3: Sindhu Bhavan Commercial Corridor',
        subtitle: 'TP Scheme No. 50 — High-Density Commercial 4.0 FSI Zone',
        caption: 'Notice how Shivalik RoS automatically overlays 36m Town Planning roads and calculates real-time land acquisition feasibility for FP 142/P1.',
        lat: 23.0450,
        lng: 72.5000,
        zoom: 16,
        fp_target: '142/P1',
        duration: 8000
      },
      {
        title: 'Step 2 of 3: Shilaj Residential Growth Corridor',
        subtitle: 'TP Scheme No. 1(B) — Automated Hazard & Infrastructure Audits',
        caption: 'Automated due diligence detects a 15m ONGC Pipeline buffer traversing the parcel, alerting acquisition teams before deal negotiation.',
        lat: 23.0520,
        lng: 72.4750,
        zoom: 16,
        fp_target: '88/2',
        duration: 8000
      },
      {
        title: 'Step 3 of 3: Shela Township Expansion Zone',
        subtitle: 'TP Scheme No. 3 — Seamless Shivalik RoS CRM Integration',
        caption: 'Instant 7/12 online revenue survey verification and 1-click deal pipeline export directly to Shivalik RoS internal systems.',
        lat: 23.0080,
        lng: 72.4600,
        zoom: 16,
        fp_target: '304/1',
        duration: 8000
      }
    ];
  }

  init() {
    const tourBtn = document.getElementById('auto-tour-btn');
    if (tourBtn) {
      tourBtn.addEventListener('click', () => this.toggleTour());
    }
    console.log("Executive Auto-Tour Controller initialized.");
  }

  toggleTour() {
    if (this.isActive) {
      this.stopTour();
    } else {
      this.startTour();
    }
  }

  startTour() {
    this.isActive = true;
    this.currentStep = 0;
    const tourBtn = document.getElementById('auto-tour-btn');
    if (tourBtn) {
      tourBtn.innerHTML = 'Stop Presentation Mode';
      tourBtn.classList.add('tour-active');
    }

    this.createBanner();
    this.runStep();
  }

  stopTour() {
    this.isActive = false;
    clearTimeout(this.tourTimer);
    clearInterval(this.countdownTimer);

    const tourBtn = document.getElementById('auto-tour-btn');
    if (tourBtn) {
      tourBtn.innerHTML = 'Auto-Tour Presentation';
      tourBtn.classList.remove('tour-active');
    }

    if (this.bannerEl) {
      this.bannerEl.remove();
      this.bannerEl = null;
    }

    if (window.dueDiligenceController) {
      window.dueDiligenceController.closeDrawer();
    }

    // Open pipeline board as grand finale if tour completed normally
    if (this.currentStep >= this.steps.length && window.pipelineController) {
      window.pipelineController.openModal();
    }
  }

  createBanner() {
    if (this.bannerEl) this.bannerEl.remove();
    this.bannerEl = document.createElement('div');
    this.bannerEl.className = 'auto-tour-banner';
    document.body.appendChild(this.bannerEl);
  }

  runStep() {
    if (!this.isActive || this.currentStep >= this.steps.length) {
      this.stopTour();
      return;
    }

    const step = this.steps[this.currentStep];
    let timeLeft = Math.round(step.duration / 1000);

    // Update banner UI
    if (this.bannerEl) {
      this.bannerEl.innerHTML = `
        <div class="tour-header-line">
          <span class="tour-badge" style="background:var(--accent-cyan); color:#0f172a; font-weight:800; padding:4px 8px; border-radius:4px; font-size:11px; letter-spacing:0.5px;">EXECUTIVE PRESENTATION MODE</span>
          <strong style="color: #fff; font-size: 16px;">${step.title}</strong>
          <span class="tour-timer" id="tour-timer">Next stop in ${timeLeft}s...</span>
        </div>
        <div class="tour-subtitle">${step.subtitle}</div>
        <div class="tour-caption" style="border-left:3px solid var(--accent-cyan); padding-left:12px; margin-top:8px; font-style:italic; color:#cbd5e1;">"${step.caption}"</div>
        <button class="tour-stop-btn" onclick="window.autoTourController.stopTour()">✕ Exit Presentation</button>
      `;
    }

    // Countdown interval
    clearInterval(this.countdownTimer);
    this.countdownTimer = setInterval(() => {
      timeLeft--;
      const timerEl = document.getElementById('tour-timer');
      if (timerEl && timeLeft > 0) {
        timerEl.textContent = `Next stop in ${timeLeft}s...`;
      }
    }, 1000);

    // Fly map to coordinates
    if (window.mapEngine && window.mapEngine.map) {
      window.mapEngine.map.flyTo([step.lat, step.lng], step.zoom, {
        duration: 2.5,
        easeLinearity: 0.25
      });

      // Find matching vector feature and open drawer after flight
      setTimeout(() => {
        if (!this.isActive) return;
        const features = window.loadedVectorFeatures || [];
        const match = features.find(f => f.properties.fp_no === step.fp_target) || features[Math.floor(Math.random() * Math.min(10, features.length))];
        if (match && window.dueDiligenceController) {
          window.dueDiligenceController.openDrawer(match.properties);
        }
      }, 2600);
    }

    this.currentStep++;
    this.tourTimer = setTimeout(() => {
      this.runStep();
    }, step.duration);
  }
}

window.autoTourController = new AutoTourController();
