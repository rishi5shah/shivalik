#!/usr/bin/env bash
# ==============================================================================
# Shivalik RoS - Automated Nightly ETL Harvester Cron Script
# Executes daily at 12:00 AM (Midnight) to harvest authentic government data.
# ==============================================================================

set -e

APP_DIR="/var/www/shivalik.aventeqai.com"
LOG_FILE="/var/log/shivalik-harvest.log"
DATE_STR=$(date '+%Y-%m-%d %H:%M:%S')

echo "==============================================================================" >> "$LOG_FILE"
echo "[SHIVALIK CRON] Starting Nightly Government WFS Harvest at $DATE_STR" >> "$LOG_FILE"
echo "==============================================================================" >> "$LOG_FILE"

# Navigate to project root
cd "$APP_DIR" || {
  echo "[ERROR] Could not navigate to $APP_DIR" >> "$LOG_FILE"
  exit 1
}

# Bypass government SSL certificate verification warning for Node.js
export NODE_TLS_REJECT_UNAUTHORIZED='0'

# Execute the ETL Harvester pipeline
if /usr/bin/env node scripts/auda-harvester.js >> "$LOG_FILE" 2>&1; then
  END_DATE=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[SHIVALIK CRON] [SUCCESS] Harvest pipeline completed successfully at $END_DATE" >> "$LOG_FILE"
else
  END_DATE=$(date '+%Y-%m-%d %H:%M:%S')
  echo "[SHIVALIK CRON] [ERROR] Harvest pipeline encountered an error at $END_DATE" >> "$LOG_FILE"
fi

echo "" >> "$LOG_FILE"
