"use strict";
const toggle = document.querySelector('#menuToggle');
const mobileNav = document.querySelector('#mobileNav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    mobileNav.hidden = open;
    toggle.setAttribute('aria-expanded', String(!open));
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mobileNav.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
const dialog = document.querySelector('#imageDialog');
const dialogImage = document.querySelector('#dialogImage');
const dialogCaption = document.querySelector('#dialogCaption');
const closeButton = document.querySelector('#closeDialog');
if (dialog && dialogImage && dialogCaption) {
  document.querySelectorAll('.shot').forEach(button => button.addEventListener('click', () => {
    dialogImage.src = button.dataset.full || '';
    dialogImage.alt = button.querySelector('img')?.alt || '项目截图';
    dialogCaption.textContent = button.dataset.caption || '产品截图';
    dialog.showModal();
  }));
  closeButton?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { dialogImage.removeAttribute('src'); });
}

// Mailto-only links fail when no desktop/webmail handler exists.
// The modal exposes the address and supports copying without requiring a mail client.
const contactDialog = document.querySelector('#contactDialog');
const contactEmail = document.querySelector('#contactEmail');
const copyEmailButton = document.querySelector('#copyContactEmail');
const copyStatus = document.querySelector('#contactCopyStatus');
const closeContactDialog = document.querySelector('#closeContactDialog');
const emailValue = '2440749141@qq.com';
let lastContactTrigger = null;

if (contactDialog && contactEmail && copyEmailButton && copyStatus) {
  document.querySelectorAll('[data-contact-open]').forEach(button => {
    button.addEventListener('click', () => {
      lastContactTrigger = button;
      copyStatus.textContent = '';
      contactDialog.showModal();
    });
  });

  copyEmailButton.addEventListener('click', async () => {
    let copied = false;
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailValue);
        copied = true;
      }
    } catch (_) { /* Browsers may disable clipboard permissions. */ }
    if (!copied) {
      contactEmail.focus();
      contactEmail.select();
      try { copied = document.execCommand('copy'); } catch (_) { copied = false; }
    }
    copyStatus.textContent = copied
      ? '已复制邮箱地址，可以粘贴到任何邮箱的新邮件收件人栏。'
      : '无法自动复制，已选中邮箱地址，请手动按 Ctrl+C（手机可长按复制）。';
  });

  closeContactDialog?.addEventListener('click', () => contactDialog.close());
  contactDialog.addEventListener('click', event => {
    if (event.target === contactDialog) contactDialog.close();
  });
  contactDialog.addEventListener('close', () => lastContactTrigger?.focus());
}
