/**
 * Shivalik GIS Intelligence Portal - Search & Sidebar Controller
 */

class SearchController {
  constructor() {
    this.searchInput = null;
    this.bookmarksContainer = null;
    this.layersContainer = null;
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.searchInput = document.getElementById('global-search');
    this.bookmarksContainer = document.getElementById('bookmarks-list');
    this.layersContainer = document.getElementById('layers-list');

    this.renderBookmarks(window.audaPrimeSchemes || []);
    this.setupEventListeners();
    this.setupLayerSwitchers();
    
    console.log("Search & Sidebar Controller initialized.");
  }

  renderBookmarks(schemes) {
    if (!this.bookmarksContainer) return;
    this.bookmarksContainer.innerHTML = '';

    if (schemes.length === 0) {
      this.bookmarksContainer.innerHTML = `<div style="color: var(--text-muted); font-size: 13px; text-align: center; padding: 20px;">No AUDA schemes found matching your search.</div>`;
      return;
    }

    schemes.forEach(scheme => {
      const card = document.createElement('div');
      card.className = 'bookmark-card';
      card.innerHTML = `
        <div class="bookmark-title">
          <span>${scheme.name}</span>
          <span style="font-size: 11px; color: var(--accent-cyan);">↗ Zoom</span>
        </div>
        <div class="bookmark-loc">${scheme.village} • <strong>${scheme.status}</strong></div>
        <div class="bookmark-tags">
          <span class="tag ${scheme.tagType}">${scheme.authority}</span>
          ${scheme.highlights.map(h => `<span class="tag">${h}</span>`).join('')}
        </div>
      `;

      card.addEventListener('click', () => {
        if (window.mapEngine) {
          if (typeof window.mapEngine.highlightTpScheme === 'function') {
            window.mapEngine.highlightTpScheme(scheme.id);
          } else {
            window.mapEngine.zoomToCoordinates(scheme.center[0], scheme.center[1], scheme.zoom);
            this.showToast(`Navigated to ${scheme.name}`);
          }
        }
      });

      this.bookmarksContainer.appendChild(card);
    });
  }

  setupEventListeners() {
    // Search input filtering
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (!query) {
          this.renderBookmarks(window.audaPrimeSchemes || []);
          return;
        }

        // Filter bookmarks
        const filteredSchemes = (window.audaPrimeSchemes || []).filter(s => 
          s.name.toLowerCase().includes(query) ||
          s.village.toLowerCase().includes(query) ||
          s.highlights.some(h => h.toLowerCase().includes(query)) ||
          s.id.toLowerCase().includes(query)
        );

        this.renderBookmarks(filteredSchemes);

        // If exact or strong match for a single TP Scheme, automatically draw its boundary on map
        if (filteredSchemes.length === 1 && query.length >= 2 && window.mapEngine && typeof window.mapEngine.highlightTpScheme === 'function') {
          window.mapEngine.highlightTpScheme(filteredSchemes[0].id);
        }

        // Check if query matches a Final Plot (FP) in loaded vector features
        if (window.loadedVectorFeatures) {
          const match = window.loadedVectorFeatures.find(f => 
            f.properties.fp_no.toLowerCase() === query ||
            `fp ${f.properties.fp_no}`.toLowerCase() === query ||
            `fp-${f.properties.fp_no}`.toLowerCase() === query ||
            f.properties.tps_name.toLowerCase().includes(query) && f.properties.fp_no.toLowerCase().includes(query.split(' ')[0])
          );

          if (match && window.mapEngine && window.mapEngine.vectorLayer) {
            // Find Leaflet layer and trigger click
            window.mapEngine.vectorLayer.eachLayer(layer => {
              if (layer.feature && layer.feature.properties.fp_no === match.properties.fp_no && layer.feature.properties.tps_id === match.properties.tps_id) {
                window.mapEngine.zoomToBounds(layer.getBounds());
                layer.fire('click');
              }
            });
          }
        }
      });
    }

    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        tabBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const targetTab = e.target.getAttribute('data-tab');
        if (targetTab === 'layers') {
          document.getElementById('tab-content-layers').style.display = 'block';
          document.getElementById('tab-content-bookmarks').style.display = 'none';
        } else {
          document.getElementById('tab-content-layers').style.display = 'none';
          document.getElementById('tab-content-bookmarks').style.display = 'block';
        }
      });
    });

    // Base Layer Toolbar buttons
    const baseBtns = document.querySelectorAll('.toolbar-btn[data-base]');
    baseBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        baseBtns.forEach(b => b.classList.remove('active'));
        const btnEl = e.target.closest('.toolbar-btn');
        btnEl.classList.add('active');
        
        const baseName = btnEl.getAttribute('data-base');
        if (window.mapEngine) {
          window.mapEngine.switchBaseLayer(baseName);
          this.showToast(`Base Map switched to ${baseName}`);
        }
      });
    });
  }

  setupLayerSwitchers() {
    const toggles = document.querySelectorAll('.layer-item input[type="checkbox"]');
    toggles.forEach(toggle => {
      toggle.addEventListener('change', (e) => {
        const layerId = e.target.getAttribute('data-layer');
        if (window.mapEngine) {
          window.mapEngine.toggleWmsLayer(layerId, e.target.checked);
        }
      });
    });

    const sliders = document.querySelectorAll('.range-slider');
    sliders.forEach(slider => {
      slider.addEventListener('input', (e) => {
        const layerId = e.target.getAttribute('data-layer-opacity');
        const opacity = parseFloat(e.target.value);
        if (window.mapEngine) {
          window.mapEngine.setLayerOpacity(layerId, opacity);
        }
      });
    });
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
      position: fixed;
      bottom: 70px;
      left: 50%;
      transform: translateX(-50%);
      background: var(--bg-tertiary);
      border: 1px solid var(--accent-cyan);
      color: #fff;
      padding: 10px 20px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 10px 25px rgba(0,0,0,0.6);
      z-index: 3000;
      animation: fadeInOut 2.5s forwards;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 2500);
  }
}

window.searchController = new SearchController();
