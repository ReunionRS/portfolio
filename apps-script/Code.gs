const MAX_LENGTHS = Object.freeze({
  name: 80,
  contact: 120,
  subject: 120,
  message: 3000,
  page: 500
});

function doGet() {
  return jsonResponse_({ ok: true, service: 'portfolio-contact' });
}

function doPost(e) {
  try {
    const params = (e && e.parameter) || {};
    if (params.website) return jsonResponse_({ ok: true });

    const name = clean_(params.name, MAX_LENGTHS.name);
    const contact = clean_(params.contact, MAX_LENGTHS.contact);
    const subject = clean_(params.subject, MAX_LENGTHS.subject) || 'Без темы';
    const message = clean_(params.message, MAX_LENGTHS.message);
    const locale = clean_(params.locale, 8) || 'ru';
    const page = clean_(params.page, MAX_LENGTHS.page);

    if (!name || !contact || !message) {
      return jsonResponse_({ ok: false, error: 'Required fields are missing' });
    }

    const cache = CacheService.getScriptCache();
    const fingerprint = digest_([name, contact, message].join('|'));
    if (cache.get(fingerprint)) {
      return jsonResponse_({ ok: true, duplicate: true });
    }
    cache.put(fingerprint, '1', 60);

    const properties = PropertiesService.getScriptProperties();
    const botToken = properties.getProperty('TELEGRAM_BOT_TOKEN');
    const chatId = properties.getProperty('TELEGRAM_CHAT_ID');
    if (!botToken || !chatId) throw new Error('Telegram settings are missing');

    const text = [
      '<b>Новое сообщение с портфолио</b>',
      '',
      '<b>Имя:</b> ' + escapeHtml_(name),
      '<b>Контакт:</b> ' + escapeHtml_(contact),
      '<b>Тема:</b> ' + escapeHtml_(subject),
      '<b>Язык:</b> ' + escapeHtml_(locale.toUpperCase()),
      '',
      '<b>Сообщение:</b>',
      escapeHtml_(message),
      page ? '\n<b>Страница:</b> ' + escapeHtml_(page) : ''
    ].filter(Boolean).join('\n');

    const response = UrlFetchApp.fetch(
      'https://api.telegram.org/bot' + botToken + '/sendMessage',
      {
        method: 'post',
        contentType: 'application/json',
        payload: JSON.stringify({
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        }),
        muteHttpExceptions: true
      }
    );

    const status = response.getResponseCode();
    if (status < 200 || status >= 300) {
      throw new Error('Telegram API returned HTTP ' + status);
    }

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, error: 'Unable to send message' });
  }
}

function clean_(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength);
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function digest_(value) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value);
  return Utilities.base64EncodeWebSafe(bytes).slice(0, 40);
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
