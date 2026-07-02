/**
 * Shivalik RoS Enterprise IP Protection & Security Shield
 * Institutional Client-Side Armor against unauthorized DevTools inspection and reverse engineering.
 */
(function() {
  'use strict';

  // 1. Silencing Console Output to prevent network/payload leakage to IT inspection
  const _0x1f8a = () => {};
  const _0x3b9c = ['log', 'debug', 'info', 'warn', 'table', 'trace', 'dir', 'dirxml', 'group', 'groupEnd', 'time', 'timeEnd', 'assert', 'profile'];
  _0x3b9c.forEach(m => {
    try {
      if (window.console && window.console[m]) {
        window.console[m] = _0x1f8a;
      }
    } catch(e) {}
  });

  // 2. Block Right-Click Context Menu (Prevent Inspect Element & View Source)
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 3. Intercept & Block Developer Keyboard Shortcuts
  document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123 || e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+I or Cmd+Option+I (DevTools Inspect)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 73 || e.key === 'I' || e.key === 'i')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+J or Cmd+Option+J (DevTools Console)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 74 || e.key === 'J' || e.key === 'j')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+Shift+C or Cmd+Option+C (Element Picker)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.keyCode === 67 || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+U or Cmd+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 85 || e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      return false;
    }
    // Ctrl+S or Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.keyCode === 83 || e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      return false;
    }
  }, { capture: true });

  // 4. Anti-Debugger Freeze Trap
  // If DevTools is forced open via browser menu, execution pauses in debugger trap, stopping inspection.
  setInterval(function() {
    const _0x4a11 = new Date().getTime();
    debugger;
    if (new Date().getTime() - _0x4a11 > 250) {
      try {
        document.body.innerHTML = '<div style="background:#0f172a;color:#e11d48;height:100vh;display:flex;align-items:center;justify-content:center;font-family:\'Segoe UI\',monospace;font-size:18px;font-weight:bold;text-align:center;padding:20px;">[SECURITY ALERT] Enterprise IP Protection Shield Triggered.<br/>Unauthorized debugging or DevTools inspection detected.<br/>Session terminated for regulatory compliance.</div>';
      } catch(err) {}
    }
  }, 1200);

})();
