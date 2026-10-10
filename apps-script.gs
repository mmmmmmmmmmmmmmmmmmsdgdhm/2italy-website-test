// ============================================================
// 2italy — Google Apps Script (deployed version)
// Edit in: Google Sheet → Extensions → Apps Script
// After changes: Deploy → Manage deployments → ✏️ → Version: New version → Deploy
// (keeps the same URL used by app/consultation and app/scholarship)
// ============================================================

var SHEET_ID = '1wAPwF43s2QkEM0gcqq-kfBD0aMy6Udy0p6bn9v-YGD4';

function doPost(e) {
  if (isScholarship(e)) return handleScholarship(e);
  try {
    // Consultations → first tab (Sheet1). Keep Sheet1 as the leftmost tab.
    var sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(), data.name, data.email, data.country, data.city,
      data.whatsapp, data.level, data.program, data.grade,
      data.englishCertificate, data.funds, data.goals, 'NO', data.vipCode
    ]);
    return ContentService.createTextOutput(JSON.stringify({status:'success'}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({status:'error'}))
      .setMimeType(ContentService.MimeType.JSON);
  }
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
