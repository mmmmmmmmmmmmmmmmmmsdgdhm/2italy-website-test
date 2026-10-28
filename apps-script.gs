// ============================================================
// 2italy — Google Apps Script (deployed version)
// Edit in: Google Sheet → Extensions → Apps Script
// After changes: Deploy → Manage deployments → ✏️ → Version: New version → Deploy
// (keeps the same URL used by app/consultation and app/scholarship)
// ============================================================

var SHEET_ID = '1wAPwF43s2QkEM0gcqq-kfBD0aMy6Udy0p6bn9v-YGD4';

function doPost(e) {
  if (isScholarship(e)) return handleScholarship(e);
  // Lock so two students submitting at the same moment never get the same serial
  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    // Consultations → first tab (Sheet1). Keep Sheet1 as the leftmost tab.
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var serial = nextSerial(sheet);
    // Serial goes in the last column (O) so existing columns don't move
    sheet.appendRow([
      new Date(), data.name, data.email, data.country, data.city,
      data.whatsapp, data.level, data.program, data.grade,
      data.englishCertificate, data.funds, data.goals, 'NO', data.vipCode, serial
    ]);
    return ContentService.createTextOutput(JSON.stringify({status:'success', serial: serial}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ── Serial numbers (2IT10-001, 2IT10-002, …) ──────────────────
var SERIAL_PREFIX = '2IT10-';
var SERIAL_COLUMN = 15; // column O

function formatSerial(n) {
  return SERIAL_PREFIX + (n < 1000 ? ('00' + n).slice(-3) : n);
}

// Counter is stored in Script Properties. On first use it starts after the
// rows already in the sheet (row 1 = headers), so old leads keep their place.
function nextSerial(sheet) {
  var props = PropertiesService.getScriptProperties();
  var last = Number(props.getProperty('lastSerial'));
  if (!last) last = Math.max(sheet.getLastRow() - 1, 0);
  last += 1;
  props.setProperty('lastSerial', String(last));
  return formatSerial(last);
}

// Run ONCE by hand (Run ▶ backfillSerials): numbers every existing lead in
// order (row 2 = 001) and syncs the counter so the next lead continues after them.
function backfillSerials() {
  var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
  var lastRow = sheet.getLastRow();
  sheet.getRange(1, SERIAL_COLUMN).setValue('Serial No.');
  if (lastRow < 2) return;
  var range = sheet.getRange(2, SERIAL_COLUMN, lastRow - 1, 1);
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    values[i][0] = formatSerial(i + 1);
  }
  range.setValues(values);
  PropertiesService.getScriptProperties().setProperty('lastSerial', String(lastRow - 1));
}

// Scholarship waitlist → "Scholarship" tab (created automatically if missing)
function isScholarship(e) {
  try {
    return JSON.parse(e.postData.contents).type === 'scholarship';
  } catch(err) {
    return false;
  }
}

function handleScholarship(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName('Scholarship') || ss.insertSheet('Scholarship');
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email']);
    }
    sheet.appendRow([new Date(), data.name || '', data.email || '']);
    return ContentService.createTextOutput(JSON.stringify({status:'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
