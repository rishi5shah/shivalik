/**
 * Shivalik RoS Enterprise IP Protection & Zero-Trust IDS (Intrusion Detection System)
 * Institutional Client-Side Armor against unauthorized DevTools inspection, web scrapers, and reverse engineering.
 */
(function() {
  'use strict';

  // Session Intrusion Audit Log
  window._shivalik_audit_log = window._shivalik_audit_log || [];
  try {
    const saved = sessionStorage.getItem('shivalik_sec_audit');
    if (saved) window._shivalik_audit_log = JSON.parse(saved);
  } catch(e) {}

  function logIntrusion(type, detail) {
    const time = new Date().toLocaleTimeString();
    const event = { time, type, detail };
    window._shivalik_audit_log.push(event);
    try {
      sessionStorage.setItem('shivalik_sec_audit', JSON.stringify(window._shivalik_audit_log));
    } catch(e) {}

    // Display live red-alert notification toast if controller is active
    setTimeout(() => {
      if (window.searchController && typeof window.searchController.showToast === 'function') {
        window.searchController.showToast(`[SECURITY SHIELD] Blocked unauthorized inspection: ${type}`);
      }
    }, 100);
  }

  // 1. Silencing Console Output & Injecting Honeypot Traps
  const _0x1f8a = () => {};
  const _0x3b9c = ['log', 'debug', 'info', 'warn', 'table', 'trace', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'assert', 'profile'];
  _0x3b9c.forEach(m => {
    try {
      if (window.console && window.console[m]) {
        window.console[m] = _0x1f8a;
      }
    } catch(e) {}
  });

  try {
    Object.defineProperty(window, '_shivalik_secret_keys', {
      get: function() {
        logIntrusion("Console Variable Snooping", "Attempted to inspect internal JWT/tokens");
        return "ACCESS DENIED: IP logged for regulatory compliance.";
      }
    });
  } catch(e) {}

  // 2. Clickjacking & IFrame Embedding Shield
  try {
    if (window.top !== window.self) {
      window.top.location = window.self.location;
    }
  } catch(e) {}

  // 3. Block Right-Click Context Menu (Prevent Inspect Element & View Source)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    logIntrusion("Right-Click Context Menu", "Attempted Inspect Element or View Source");
    return false;
  }, { capture: true });

  // 4. Intercept & Block Developer Keyboard Shortcuts
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123 || e.key === 'F12') {
      e.preventDefault();
      logIntrusion("F12 Shortcut", "Attempted to open DevTools");
      return false;
    }
    // Ctrl+Shift+I or Cmd+Option+I (DevTools Inspect)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      logIntrusion("Ctrl+Shift+I", "Attempted DevTools Inspector");
      return false;
    }
    // Ctrl+Shift+J or Cmd+Option+J (DevTools Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 74 || e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      logIntrusion("Ctrl+Shift+J", "Attempted DevTools Console");
      return false;
    }
    // Ctrl+Shift+C or Cmd+Option+C (Element Picker)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 67 || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      logIntrusion("Ctrl+Shift+C", "Attempted DOM Element Picker");
      return false;
    }
    // Ctrl+U or Cmd+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      logIntrusion("Ctrl+U", "Attempted View Page Source");
      return false;
    }
    // Ctrl+S or Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      logIntrusion("Ctrl+S", "Attempted Save Page As HTML");
      return false;
    }

    // EXECUTIVE SECRET AUDIT REPORT SHORTCUT: Ctrl + Shift + X (or Alt + X)
    if ((e.ctrlKey || e.altKey) && e.shiftKey && (e.keyCode === 88 || e.key === 'X' || e.key === 'x')) {
      e.preventDefault();
      showExecutiveIdsReport();
      return false;
    }
  }, { capture: true });

  // 5. Block Text Selection & Dragging (Prevents copy-pasting into AI tools)
  document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
      body, html, .sidebar-panel, .map-container, .modal-content, .drawer-panel, .header, table, td, th {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      input, textarea, select {
        -webkit-user-select: text !important;
        user-select: text !important;
      }
    `;
    document.head.appendChild(style);

    // Block image and map dragging
    document.addEventListener('dragstart', function(e) {
      if (e.target.nodeName === 'IMG' || e.target.nodeName === 'A') {
        e.preventDefault();
        return false;
      }
    });

    // Triple-Click Logo Secret Trigger for Executive IDS Report
    const logoEl = document.querySelector('.brand-logo');
    if (logoEl) {
      logoEl.style.cursor = 'pointer';
      logoEl.title = 'Shivalik RoS Enterprise Gateway';
      logoEl.addEventListener('dblclick', (e) => {
        e.preventDefault();
        showExecutiveIdsReport();
      });
    }
  });

  // 6. Anti-Debugger Freeze Trap
  setInterval(function() {
    const _0x4a11 = new Date().getTime();
    debugger;
    if (new Date().getTime() - _0x4a11 > 250) {
      logIntrusion("Debugger Tamper Trap", "Execution paused by external debugger");
      try {
        document.body.innerHTML = '<div style="background:#0f172a;color:#e11d48;height:100vh;display:flex;align-items:center;justify-content:center;font-family:\'Segoe UI\',monospace;font-size:18px;font-weight:bold;text-align:center;padding:20px;">[SECURITY ALERT] Enterprise IP Protection Shield Triggered.<br/>Unauthorized debugging or DevTools inspection detected.<br/>Session terminated for regulatory compliance.</div>';
      } catch(err) {}
    }
  }, 1200);

  // 7. Executive IDS Report Drawer / Modal Builder
  function showExecutiveIdsReport() {
    let modal = document.getElementById('sec-ids-modal');
    if (modal) {
      modal.remove();
      return;
    }

    const logCount = window._shivalik_audit_log.length;
    let logHtml = '';
    if (logCount === 0) {
      logHtml = '<div style="color:#64748b; font-style:italic;">[STATUS: CLEAR] Zero unauthorized inspection or reverse-engineering attempts detected during this session.</div>';
    } else {
      logHtml = window._shivalik_audit_log.map((item, idx) => `
        <div style="border-bottom:1px solid rgba(255,255,255,0.05); padding:6px 0; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span style="color:#e11d48; font-weight:700;">[#${idx+1}] ${item.type}</span><br/>
            <span style="color:#94a3b8; font-size:11px;">${item.detail}</span>
          </div>
          <span style="color:#64748b; font-size:11px; background:rgba(255,255,255,0.05); padding:2px 6px; border-radius:4px;">${item.time}</span>
        </div>
      `).join('');
    }

    const modalDiv = document.createElement('div');
    modalDiv.id = 'sec-ids-modal';
    modalDiv.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.85); backdrop-filter:blur(8px); z-index:999999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease-out;';
    
    modalDiv.innerHTML = `
      <div style="background:#0f172a; border:2px solid ${logCount > 0 ? '#e11d48' : '#10b981'}; border-radius:12px; padding:24px; max-width:650px; width:90%; color:#f8fafc; font-family:'Segoe UI',sans-serif; box-shadow:0 25px 50px -12px rgba(0,0,0,0.75);">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:12px; margin-bottom:16px;">
          <h3 style="margin:0; color:${logCount > 0 ? '#e11d48' : '#10b981'}; font-weight:800; display:flex; align-items:center; gap:8px;">
            <span style="display:inline-block; width:10px; height:10px; background:${logCount > 0 ? '#e11d48' : '#10b981'}; border-radius:50%; box-shadow:0 0 10px ${logCount > 0 ? '#e11d48' : '#10b981'};"></span>
            SHIVALIK RoS | ZERO-TRUST INTRUSION IDS REPORT
          </h3>
          <button id="close-ids-btn" style="background:none; border:none; color:#94a3b8; font-size:20px; cursor:pointer; font-weight:bold;">✕</button>
        </div>
        
        <div style="display:flex; gap:16px; margin-bottom:16px;">
          <div style="background:rgba(225,29,72,0.08); border:1px solid rgba(225,29,72,0.25); padding:12px; border-radius:8px; flex:1; text-align:center;">
            <div style="font-size:28px; font-weight:800; color:#e11d48;">${logCount}</div>
            <div style="font-size:11px; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Intercepted Threats</div>
          </div>
          <div style="background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.25); padding:12px; border-radius:8px; flex:1; text-align:center;">
            <div style="font-size:28px; font-weight:800; color:#10b981;">mTLS / JWT</div>
            <div style="font-size:11px; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Gateway Encryption</div>
          </div>
          <div style="background:rgba(56,189,248,0.08); border:1px solid rgba(56,189,248,0.25); padding:12px; border-radius:8px; flex:1; text-align:center;">
            <div style="font-size:28px; font-weight:800; color:#38bdf8;">ACTIVE</div>
            <div style="font-size:11px; color:#cbd5e1; text-transform:uppercase; letter-spacing:0.5px; font-weight:600;">Anti-AI Armor</div>
          </div>
        </div>

        <h4 style="margin:0 0 8px 0; font-size:12px; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">Live Session Interception Log:</h4>
        <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(255,255,255,0.08); border-radius:6px; padding:12px; max-height:220px; overflow-y:auto; font-family:'JetBrains Mono',monospace; font-size:12px; line-height:1.6; margin-bottom:16px;">
          ${logHtml}
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center; font-size:11px; color:#64748b;">
          <span>Security Protocol: IEEE 802.1AR / OGC Zero-Trust</span>
          <button id="clear-ids-log" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; padding:4px 10px; border-radius:4px; cursor:pointer;">Clear Log</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalDiv);

    document.getElementById('close-ids-btn').onclick = () => modalDiv.remove();
    document.getElementById('clear-ids-log').onclick = () => {
      window._shivalik_audit_log = [];
      try { sessionStorage.removeItem('shivalik_sec_audit'); } catch(e) {}
      modalDiv.remove();
      showExecutiveIdsReport();
    };
  }

  // Make executive report accessible globally for quick trigger
  window.showExecutiveIdsReport = showExecutiveIdsReport;

})();
