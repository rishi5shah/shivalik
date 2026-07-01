/**
 * Shivalik GIS Intelligence Portal - RoS Deal Pipeline CRM Controller
 * Manages saved land acquisition deals, status stages, and financial valuations.
 */

class PipelineController {
  constructor() {
    this.modalEl = null;
    this.isInitialized = false;
    this.deals = [
      {
        id: 'DEAL-101',
        fp_no: 'FP 142/P1',
        tps_name: 'TP 50 (Bodakdev - Sindhu Bhavan)',
        area_sqm: 12450,
        est_cost_cr: '186.75',
        status: 'Legal Title Verification',
        tenure: 'Old Tenure (Freehold)',
        added_date: '2026-06-28'
      },
      {
        id: 'DEAL-102',
        fp_no: 'FP 88/2',
        tps_name: 'TP 1(B) (Shilaj - Ranchhodpura)',
        area_sqm: 18200,
        est_cost_cr: '201.50',
        status: 'Under Negotiation',
        tenure: 'Old Tenure (Freehold)',
        added_date: '2026-06-29'
      },
      {
        id: 'DEAL-103',
        fp_no: 'FP 304/1',
        tps_name: 'TP 3 (Shela - Sanand)',
        area_sqm: 24500,
        est_cost_cr: '145.20',
        status: 'Feasibility Approved',
        tenure: 'New Tenure (Premium Required)',
        added_date: '2026-06-30'
      }
    ];
  }

  init() {
    if (this.isInitialized) return;
    this.isInitialized = true;

    this.modalEl = document.getElementById('pipeline-modal');
    this.updateBadgeCount();
    this.setupEventListeners();
    this.renderPipelineTable();

    console.log("RoS Deal Pipeline CRM Controller initialized.");
  }

  setupEventListeners() {
    const openBtn = document.getElementById('open-pipeline-btn');
    const closeBtn = document.getElementById('close-pipeline-btn');

    if (openBtn) {
      openBtn.addEventListener('click', () => this.openModal());
    }
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.closeModal());
    }

    // Close on backdrop click
    window.addEventListener('click', (e) => {
      if (e.target === this.modalEl) {
        this.closeModal();
      }
    });
  }

  openModal() {
    if (this.modalEl) {
      this.renderPipelineTable();
      this.modalEl.classList.add('active');
    }
  }

  closeModal() {
    if (this.modalEl) {
      this.modalEl.classList.remove('active');
    }
  }

  addDeal(plotProps) {
    // Check if deal already exists
    const existing = this.deals.find(d => d.fp_no === `FP ${plotProps.fp_no}`);
    if (existing) {
      this.showToast(`Plot FP ${plotProps.fp_no} is already in your Shivalik RoS Deal Pipeline!`);
      this.openModal();
      return;
    }

    const areaSqm = plotProps.area_sqm || 10000;
    const rateSqm = plotProps.base_rate_sqm || 150000;
    const estCostCr = ((areaSqm * rateSqm) / 10000000).toFixed(2);
    const isOldTenure = plotProps.fp_no % 2 !== 0;

    const newDeal = {
      id: `DEAL-${Math.floor(100 + Math.random() * 900)}`,
      fp_no: `FP ${plotProps.fp_no}`,
      tps_name: plotProps.tps_name || 'AUDA Scheme',
      area_sqm: areaSqm,
      est_cost_cr: estCostCr,
      status: 'Initial Assessment',
      tenure: isOldTenure ? 'Old Tenure (Freehold)' : 'New Tenure (Premium Required)',
      added_date: new Date().toISOString().split('T')[0]
    };

    this.deals.unshift(newDeal);
    this.updateBadgeCount();
    this.renderPipelineTable();
    this.showToast(`[SUCCESS] Added FP ${plotProps.fp_no} to Shivalik RoS Deal Pipeline!`);
  }

  removeDeal(dealId) {
    this.deals = this.deals.filter(d => d.id !== dealId);
    this.updateBadgeCount();
    this.renderPipelineTable();
  }

  updateStatus(dealId, newStatus) {
    const deal = this.deals.find(d => d.id === dealId);
    if (deal) {
      deal.status = newStatus;
      this.showToast(`Updated deal status for ${deal.fp_no} to "${newStatus}"`);
    }
  }

  updateBadgeCount() {
    const badge = document.getElementById('pipeline-count');
    if (badge) {
      badge.textContent = this.deals.length;
    }
  }

  renderPipelineTable() {
    const tbody = document.getElementById('pipeline-table-body');
    const totalValEl = document.getElementById('pipeline-total-value');
    if (!tbody) return;

    tbody.innerHTML = '';
    let totalValueCr = 0;

    this.deals.forEach(deal => {
      totalValueCr += parseFloat(deal.est_cost_cr);
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong style="color: #fff;">${deal.id}</strong></td>
        <td><span class="fp-badge">${deal.fp_no}</span></td>
        <td style="color: var(--text-secondary); font-size: 13px;">${deal.tps_name}</td>
        <td>${deal.area_sqm.toLocaleString()} m²</td>
        <td><span class="tenure-badge ${deal.tenure.includes('Old') ? 'tenure-old' : 'tenure-new'}">${deal.tenure.split(' ')[0]} Tenure</span></td>
        <td><strong style="color: var(--accent-emerald);">₹${deal.est_cost_cr} Cr</strong></td>
        <td>
          <select class="status-select" onchange="window.pipelineController.updateStatus('${deal.id}', this.value)">
            <option value="Initial Assessment" ${deal.status === 'Initial Assessment' ? 'selected' : ''}>Initial Assessment</option>
            <option value="Legal Title Verification" ${deal.status === 'Legal Title Verification' ? 'selected' : ''}>Legal Title Verification</option>
            <option value="Feasibility Approved" ${deal.status === 'Feasibility Approved' ? 'selected' : ''}>Feasibility Approved</option>
            <option value="Under Negotiation" ${deal.status === 'Under Negotiation' ? 'selected' : ''}>Under Negotiation</option>
            <option value="Acquired / Closed" ${deal.status === 'Acquired / Closed' ? 'selected' : ''}>Acquired / Closed</option>
          </select>
        </td>
        <td>
          <button class="remove-deal-btn" onclick="window.pipelineController.removeDeal('${deal.id}')" title="Remove Deal" style="font-size:11px; padding:4px 8px; border-radius:4px; background:rgba(244,63,94,0.15); color:#f43f5e; border:1px solid rgba(244,63,94,0.3); cursor:pointer;">REMOVE</button>
        </td>
      `;
      tbody.appendChild(row);
    });

    if (totalValEl) {
      totalValEl.textContent = `₹${totalValueCr.toFixed(2)} Cr`;
    }
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'ros-toast';
    toast.innerHTML = `<span style="font-size: 11px; font-weight:800; color:var(--accent-cyan); background:rgba(0,242,254,0.15); border:1px solid rgba(0,242,254,0.3); padding:4px 8px; border-radius:4px; letter-spacing:0.5px;">SYS</span> <div style="font-size:13px; font-weight:500;">${message}</div>`;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('show');
    }, 50);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
}

window.pipelineController = new PipelineController();
