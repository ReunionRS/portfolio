# Portfolio contact form backend

The public site sends contact-form submissions to a Google Apps Script Web App. The script forwards messages to Telegram without exposing the bot token in the browser or repository.

## Script properties

Configure these values in **Project Settings -> Script Properties**:

- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

## Deployment

1. Create an Apps Script project and paste `Code.gs`.
2. Add both Script Properties.
3. Deploy as a Web App:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the `/exec` URL and replace `__GOOGLE_APPS_SCRIPT_URL__` in `script.js`.

Never commit the real bot token or chat ID.
