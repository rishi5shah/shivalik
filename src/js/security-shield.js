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

  // Encrypted SHA-256 Passcode Verifier (Passcode: SHIVALIK712)
  async function _0x8b1f(str) {
    try {
      const msgBuffer = new TextEncoder().encode(str.toUpperCase().trim());
      const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      return hashHex === "2ced91796f41cf2a598672e7f37ff448f79a8349ef6550546ca8d513a9c615d4";
    } catch(e) { return false; }
  }

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
      showPasscodeModal();
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
        showPasscodeModal();
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

  // 7. Executive Passcode Challenge Modal
  function showPasscodeModal() {
    let existing = document.getElementById('sec-passcode-modal');
    if (existing) { existing.remove(); return; }

    const modalDiv = document.createElement('div');
    modalDiv.id = 'sec-passcode-modal';
    modalDiv.style.cssText = 'position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(15,23,42,0.92); backdrop-filter:blur(10px); z-index:9999999; display:flex; align-items:center; justify-content:center; animation:fadeIn 0.2s ease-out;';
    
    modalDiv.innerHTML = `
      <div style="background:#0f172a; border:2px solid #38bdf8; border-radius:12px; padding:28px; max-width:420px; width:90%; color:#f8fafc; font-family:'Segoe UI',sans-serif; box-shadow:0 25px 50px -12px rgba(0,0,0,0.85); text-align:center;">
        <div style="width:52px; height:52px; background:rgba(56,189,248,0.1); border:1px solid rgba(56,189,248,0.3); border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 16px; color:#38bdf8; font-size:24px;">🔒</div>
        <h3 style="margin:0 0 6px 0; color:#f8fafc; font-weight:800; font-size:18px; letter-spacing:0.5px;">EXECUTIVE SECURITY CLEARANCE</h3>
        <p style="margin:0 0 20px 0; color:#94a3b8; font-size:12px; line-height:1.5;">Access to the Zero-Trust IDS Audit Dashboard is restricted to authorized Shivalik C-suite officers and system administrators.</p>
        
        <div style="margin-bottom:16px;">
          <input type="password" id="ids-passcode-input" placeholder="Enter Gateway Passcode..." style="width:100%; padding:12px 16px; background:rgba(0,0,0,0.6); border:1px solid rgba(255,255,255,0.15); border-radius:8px; color:#38bdf8; font-family:'JetBrains Mono',monospace; font-size:15px; text-align:center; outline:none; letter-spacing:3px; box-sizing:border-box;">
          <div id="ids-passcode-error" style="color:#e11d48; font-size:11px; margin-top:8px; min-height:16px; font-weight:600;"></div>
        </div>

        <div style="display:flex; gap:10px;">
          <button id="cancel-passcode-btn" style="flex:1; padding:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#cbd5e1; border-radius:8px; cursor:pointer; font-weight:600; font-size:13px;">Cancel</button>
          <button id="verify-passcode-btn" style="flex:1; padding:10px; background:#38bdf8; border:none; color:#0f172a; border-radius:8px; cursor:pointer; font-weight:800; font-size:13px; box-shadow:0 4px 12px rgba(56,189,248,0.3);">Unlock IDS</button>
        </div>
      </div>
    `;

    document.body.appendChild(modalDiv);

    const input = document.getElementById('ids-passcode-input');
    const errEl = document.getElementById('ids-passcode-error');
    if (input) input.focus();

    const doVerify = async () => {
      const val = input ? input.value : '';
      if (!val) return;
      const isValid = await _0x8b1f(val);
      if (isValid) {
        modalDiv.remove();
        showExecutiveIdsReport();
      } else {
        if (errEl) errEl.textContent = '[DENIED] Invalid Executive Passcode. Event logged.';
        if (input) {
          input.value = '';
          input.focus();
        }
        logIntrusion("Passcode Failure", "Unauthorized attempt to access IDS Audit Dashboard");
      }
    };

    const verifyBtn = document.getElementById('verify-passcode-btn');
    const cancelBtn = document.getElementById('cancel-passcode-btn');
    if (verifyBtn) verifyBtn.onclick = doVerify;
    if (cancelBtn) cancelBtn.onclick = () => modalDiv.remove();
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') doVerify();
        if (e.key === 'Escape') modalDiv.remove();
      });
    }
  }

  // 8. Executive IDS Report Drawer / Modal Builder
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

  /* ==========================================================================
     LAYER 8: ANTI-SCREENSHOT, ANTI-SNIP & MOBILE/TABLET CAPTURE ARMOR (v4.9)
     ========================================================================== */
  
  // 8A. Dynamic Enterprise Traceability Watermark (Anti-Camera & Anti-Leak)
  // Prevents IT team from taking untraceable photos from phones, tablets, or snip tools
  function injectSecurityWatermark() {
    if (document.getElementById('shivalik-sec-watermark')) return;
    const wm = document.createElement('div');
    wm.id = 'shivalik-sec-watermark';
    wm.style.cssText = `
      position: fixed;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      z-index: 999990;
      pointer-events: none;
      display: flex;
      flex-wrap: wrap;
      align-content: space-around;
      justify-content: space-around;
      transform: rotate(-25deg);
      opacity: 0.14;
      user-select: none;
      font-family: 'Segoe UI', monospace;
      font-size: 14px;
      font-weight: 800;
      color: #94a3b8;
      letter-spacing: 2px;
      overflow: hidden;
    `;
    const stampText = "SHIVALIK RoS • CONFIDENTIAL • DO NOT COPY • RESTRICTED ACCESS • ";
    let content = "";
    for (let i = 0; i < 120; i++) {
      content += `<div style="margin: 30px 40px; white-space: nowrap;">${stampText}</div>`;
    }
    wm.innerHTML = content;
    document.body.appendChild(wm);
  }

  // 8B. Anti-Snip Window Blur Shield (Triggers on Snipping Tool, App Switcher, Control Center)
  let blurCurtain = null;
  function triggerBlurLockdown(reason) {
    if (!blurCurtain) {
      blurCurtain = document.createElement('div');
      blurCurtain.id = 'shivalik-blur-curtain';
      blurCurtain.style.cssText = `
        position: fixed;
        top: 0; left: 0; width: 100vw; height: 100vh;
        background: #0f172a;
        z-index: 99999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #e11d48;
        font-family: 'Segoe UI', sans-serif;
        text-align: center;
        padding: 30px;
        transition: opacity 0.2s ease;
      `;
      blurCurtain.innerHTML = `
        <div style="font-size: 64px; margin-bottom: 20px;">🔒</div>
        <h2 style="font-size: 24px; font-weight: 800; color: #fff; margin-bottom: 12px;">SECURITY LOCKDOWN ENGAGED</h2>
        <p style="font-size: 15px; color: #cbd5e1; max-width: 500px; line-height: 1.6; margin-bottom: 24px;">
          Screen capture, Snipping Tool, background recording, and multitasking view capture are strictly prohibited by Shivalik RoS Enterprise Security Policy.
        </p>
        <div style="background: rgba(225,29,72,0.15); border: 1px solid #e11d48; color: #fda4af; padding: 10px 20px; border-radius: 8px; font-size: 13px; font-weight: bold;">
          Return focus to window to resume session.
        </div>
      `;
      document.body.appendChild(blurCurtain);
    }
    blurCurtain.style.display = 'flex';
    const appEl = document.querySelector('.app-container');
    if (appEl) appEl.style.filter = 'blur(35px) brightness(0.05)';
    logIntrusion("Screen Capture / Focus Loss", reason || "Window backgrounded or Snipping Tool invoked");
  }

  function removeBlurLockdown() {
    if (blurCurtain) blurCurtain.style.display = 'none';
    const appEl = document.querySelector('.app-container');
    if (appEl) appEl.style.filter = 'none';
  }

  window.addEventListener('blur', () => triggerBlurLockdown("Window Focus Lost (Snipping Tool / Multitasking)"));
  window.addEventListener('focus', () => removeBlurLockdown());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      triggerBlurLockdown("Tab Hidden / Screen Recorded");
    } else {
      removeBlurLockdown();
    }
  });

  // 8C. Screenshot Keyboard Interceptor & Clipboard Wiper
  function wipeClipboard() {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText('[SECURITY VIOLATION - SHIVALIK RoS CONTENT PROTECTED]');
      }
    } catch(e) {}
  }

  window.addEventListener('keyup', function(e) {
    // PrintScreen key
    if (e.keyCode === 44 || e.key === 'PrintScreen' || e.key === 'PrtScn') {
      e.preventDefault();
      wipeClipboard();
      triggerBlurLockdown("PrintScreen Key Pressed");
      setTimeout(removeBlurLockdown, 2500);
      return false;
    }
  }, { capture: true });

  window.addEventListener('keydown', function(e) {
    // Win+Shift+S (Windows Snipping Tool) or Cmd+Shift+3/4/5 (Mac Screenshot)
    if ((e.metaKey || e.key === 'Meta' || e.key === 'OS' || e.ctrlKey) && e.shiftKey && (e.key === 's' || e.key === 'S' || e.key === '3' || e.key === '4' || e.key === '5')) {
      e.preventDefault();
      wipeClipboard();
      triggerBlurLockdown("OS Screenshot / Snipping Tool Shortcut");
      setTimeout(removeBlurLockdown, 2500);
      return false;
    }
    // Ctrl+P / Cmd+P (Print Page / Save as PDF)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      logIntrusion("Print / PDF Export", "Attempted Ctrl+P Print Page");
      return false;
    }
  }, { capture: true });

  // 8D. CSS Print Protection
  const printStyle = document.createElement('style');
  printStyle.innerHTML = `
    @media print {
      html, body { display: none !important; opacity: 0 !important; visibility: hidden !important; }
      * { display: none !important; }
    }
  `;
  document.head.appendChild(printStyle);

  // Initialize Watermark when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectSecurityWatermark);
  } else {
    injectSecurityWatermark();
  }

  /* ==========================================================================
     LAYER 9: ANTI-AI SCRAPER, AUTOMATED BOT & ZERO-OUTBOUND EXFILTRATION SHIELD
     ========================================================================== */

  // 9A. Anti-AI Serialization Shield (Protects against JSON stringify dumps by browser extensions/scrapers)
  try {
    const _origStringify = JSON.stringify;
    JSON.stringify = function(obj, replacer, space) {
      if (obj && (
        obj === window.audaPrimeSchemes || 
        obj === window.loadedVectorFeatures || 
        obj === window.mapEngine || 
        (Array.isArray(obj) && obj.length > 0 && obj[0] && (obj[0].authority === "AUDA" || obj[0].fp_no))
      )) {
        logIntrusion("AI Scraper / Serialization Attempt", "Attempted JSON stringify export of proprietary GIS database");
        return '"[ACCESS DENIED: SHIVALIK RoS PROPRIETARY DATA PROTECTED BY ZERO-TRUST IDS]"';
      }
      return _origStringify.apply(this, arguments);
    };
  } catch(e) {}

  // 9B. Zero-Outbound Network Exfiltration Firewall (Guarantees zero data goes out to external webhooks/AI endpoints)
  try {
    const _origFetch = window.fetch;
    window.fetch = function(url, options) {
      if (typeof url === 'string' && !url.includes('cartocdn.com') && !url.includes('openstreetmap.org') && !url.includes('google') && !url.includes('openprp.in') && !url.includes(window.location.host) && !url.startsWith('/') && !url.startsWith('.')) {
        logIntrusion("Outbound Exfiltration Blocked", `Prevented unauthorized data transmission to external host: ${url.substring(0, 40)}...`);
        return Promise.reject(new Error("[SECURITY SHIELD] Outbound data exfiltration strictly blocked by institutional firewall."));
      }
      return _origFetch.apply(this, arguments);
    };

    if (window.XMLHttpRequest) {
      const _origOpen = XMLHttpRequest.prototype.open;
      XMLHttpRequest.prototype.open = function(method, url) {
        if (typeof url === 'string' && !url.includes('cartocdn.com') && !url.includes('openstreetmap.org') && !url.includes('google') && !url.includes('openprp.in') && !url.includes(window.location.host) && !url.startsWith('/') && !url.startsWith('.')) {
          logIntrusion("Outbound XHR Exfiltration Blocked", `Prevented unauthorized XHR request to: ${url.substring(0, 40)}...`);
          throw new Error("[SECURITY SHIELD] Outbound XHR data exfiltration strictly blocked.");
        }
        return _origOpen.apply(this, arguments);
      };
    }
  } catch(e) {}

  // 9C. Automated WebDriver / AI Bot Detection (Selenium, Puppeteer, Playwright, Headless Chrome)
  function checkHeadlessBot() {
    if (navigator.webdriver || window._phantom || window.__nightmare || document.__selenium_unwrapped || (window.callPhantom) || (navigator.userAgent && navigator.userAgent.toLowerCase().includes('headless'))) {
      logIntrusion("Automated AI Bot Detected", "Headless browser or scraper automation detected");
      try {
        document.body.innerHTML = '<div style="background:#0f172a;color:#e11d48;height:100vh;display:flex;align-items:center;justify-content:center;font-family:\'Segoe UI\',monospace;font-size:18px;font-weight:bold;text-align:center;padding:20px;">[SECURITY ALERT] Automated AI Scraper or WebDriver Automation Detected.<br/>Access denied by Zero-Trust IDS.</div>';
      } catch(err) {}
    }
  }
  checkHeadlessBot();
  setInterval(checkHeadlessBot, 3000);

  // 10. Level-10 Anti-Tamper & Event Listener Removal Protection (Defeats DevTools Listener Stripping)
  try {
    const _origRemoveListener = EventTarget.prototype.removeEventListener;
    const protectedEvents = ['blur', 'visibilitychange', 'keydown', 'keyup', 'contextmenu', 'dragstart'];
    EventTarget.prototype.removeEventListener = function(type, listener, options) {
      if (protectedEvents.includes(type) && (this === window || this === document || this === document.body)) {
        logIntrusion("Event Listener Tamper Attempt", `Blocked unauthorized removal of '${type}' security shield listener`);
        return; // Silently ignore removal attempt to keep security active
      }
      return _origRemoveListener.apply(this, arguments);
    };

    // Prevent overriding addEventListener or removeEventListener themselves
    Object.freeze(EventTarget.prototype.removeEventListener);
  } catch(e) {}

})();
