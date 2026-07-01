/**
 * Shivalik GIS Intelligence Portal - Master Application Orchestrator
 * Initializes all controllers and the GIS map engine once the DOM is loaded.
 */

function initShivalikPortal() {
  console.log("Initializing Shivalik GIS Intelligence Portal...");

  try {
    // 1. Initialize Map Engine
    if (window.mapEngine && typeof window.mapEngine.init === 'function') {
      window.mapEngine.init();
    } else {
      console.error("MapEngine not found or invalid.");
    }

    // 2. Initialize Search & Bookmarks Controller
    if (window.searchController && typeof window.searchController.init === 'function') {
      window.searchController.init();
    } else {
      console.error("SearchController not found or invalid.");
    }

    // 3. Initialize Plot Due Diligence Drawer Controller
    if (window.dueDiligenceController && typeof window.dueDiligenceController.init === 'function') {
      window.dueDiligenceController.init();
    } else {
      console.error("DueDiligenceController not found or invalid.");
    }

    // 4. Initialize WFS Harvester & API Guide Modals Controller
    if (window.harvesterController && typeof window.harvesterController.init === 'function') {
      window.harvesterController.init();
    } else {
      console.error("HarvesterController not found or invalid.");
    }

    // 5. Initialize RoS Deal Pipeline CRM Controller
    if (window.pipelineController && typeof window.pipelineController.init === 'function') {
      window.pipelineController.init();
    }

    // 6. Initialize Executive Auto-Tour Presentation Controller
    if (window.autoTourController && typeof window.autoTourController.init === 'function') {
      window.autoTourController.init();
    }

    // 7. Ensure Leaflet canvas resizes correctly and renders all tiles
    setTimeout(() => {
      if (window.mapEngine && window.mapEngine.map) {
        window.mapEngine.map.invalidateSize();
        console.log("GIS canvas size invalidated & synchronized.");
      }
    }, 200);

    console.log("[SYS] Shivalik GIS Intelligence Portal initialized successfully!");
  } catch (err) {
    console.error("Error initializing Shivalik portal:", err);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShivalikPortal);
} else {
  initShivalikPortal();
}
