// ============================================================
// 2italy — Google Apps Script
// Paste this into: Google Sheet → Extensions → Apps Script
// Then: Deploy → New deployment → Web App → Anyone → Deploy
// Copy the URL and paste it into consultation.html (SHEET_URL)
// ============================================================

function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Add headers if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp', 'Name', 'Email', 'Country', 'City',
        'WhatsApp', 'Level', 'Program', 'Grade',
        'English Certificate', 'Funds (€6500 Guarantee)', 'Goals', 'Eligible'
      ]);
    }

    var p = e.parameter;

    sheet.appendRow([
      p.timestamp || new Date().toISOString(),
      p.name      || '',
      p.email     || '',
      p.country   || '',
      p.city      || '',
      p.whatsapp  || '',
      p.level     || '',
      p.program   || '',
      p.grade     || '',
      p.english   || '',
      p.funds     || '',
      p.goals     || '',
      p.eligible === 'true' ? 'YES' : 'NO'
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
