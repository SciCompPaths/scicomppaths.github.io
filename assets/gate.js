/*
 * Email gate for a notes page. The email is saved to a Google Form (responses land in a Google Sheet = the list),
 * then the PDF button appears. Returning visitors who already gave an email skip the form.
 *
 * SETUP (once): fill in FORM_ACTION and EMAIL_ENTRY below (see site/README.md). Until then the gate stays open —
 * the PDF button shows right away — so nothing breaks.
 */
const FORM_ACTION = ''; // e.g. 'https://docs.google.com/forms/d/e/1FAIpQL.../formResponse'
const EMAIL_ENTRY = ''; // e.g. 'entry.123456789'
const KEY = 'scp_email';

const decode = (s) => {
  try {
    return atob(s);
  } catch {
    return '';
  }
};

const unlock = (root) => {
  const link = root.querySelector('[data-pdf]');
  link.href = decode(link.dataset.pdf);
  root.querySelector('.ask').style.display = 'none';
  root.querySelector('.done').classList.add('on');
};

document.querySelectorAll('.gate').forEach((root) => {
  let saved = null;
  try {
    saved = localStorage.getItem(KEY);
  } catch {}
  if (!FORM_ACTION || saved) {
    unlock(root);
    return;
  }
  root.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = root.querySelector('input[type=email]').value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) return;
    const body = new FormData();
    body.append(EMAIL_ENTRY, email);
    // Which sheet they came for, so we know what people want (only if the form has a second "source" field).
    if (root.dataset.sourceEntry) body.append(root.dataset.sourceEntry, root.dataset.source || location.pathname);
    try {
      await fetch(FORM_ACTION, {method: 'POST', mode: 'no-cors', body});
    } catch {}
    try {
      localStorage.setItem(KEY, email);
    } catch {}
    unlock(root);
  });
});
