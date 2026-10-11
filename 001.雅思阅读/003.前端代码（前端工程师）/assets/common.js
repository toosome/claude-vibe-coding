/* ============================================================
   雅思句子成分精读 · 共享脚本
   - top nav + 移动端 bottom TabBar 注入
   - account state（localStorage 共享）
   - page redirect（按登录态）
============================================================ */
(function () {
  'use strict';

  // ============================================================
  // 1) 配置
  // ============================================================
  const ROUTES = {
    login:    'login.html',
    library:  'library.html',
    practice: 'practice.html',
    legend:   'legend.html',
    saved:    'saved.html'
  };
  // 当前页面 key（从 URL 反推）：practice / library / legend / saved / login
  function currentPageKey() {
    const path = (location.pathname.split('/').pop() || '').toLowerCase();
    for (const k of Object.keys(ROUTES)) {
      if (ROUTES[k].toLowerCase() === path) return k;
    }
    if (path === '' || path === 'index.html') return 'home';
    return 'unknown';
  }

  // 顶栏菜单项（顺序：精读工作台 / 文章库 / 成分图例 / 我的难句）
  const NAV_ITEMS = [
    { key: 'practice', label: '精读工作台', icon: '📖' },
    { key: 'library',  label: '文章库',     icon: '📚' },
    { key: 'legend',   label: '成分图例',   icon: '🎨' },
    { key: 'saved',    label: '我的难句',   icon: '⭐' }
  ];

  // ============================================================
  // 2) localStorage 封装（账号体系，按 PRD v1.0.1 §4.2.7.1）
  // ============================================================
  const LS = {
    ACCOUNTS: 'ielts-reader-accounts',
    CURRENT:  'ielts-reader-current-account',
    PROGRESS: 'ielts-reader-progress',
    FAVS:     'ielts-reader-favs',
    PREFS:    'ielts-reader-prefs'
  };
  function loadAccounts() {
    try { const r = localStorage.getItem(LS.ACCOUNTS); return r ? JSON.parse(r) : []; }
    catch (e) { return []; }
  }
  function saveAccounts(arr) {
    try { localStorage.setItem(LS.ACCOUNTS, JSON.stringify(arr)); } catch (e) {}
  }
  function loadCurrent() {
    try {
      const email = localStorage.getItem(LS.CURRENT);
      if (!email) return null;
      return loadAccounts().find(a => a.email === email) || null;
    } catch (e) { return null; }
  }
  function seedDemoIfEmpty() {
    const arr = loadAccounts();
    if (arr.length === 0) {
      arr.push({
        email: 'demo@example.com',
        password: 'demo123',
        nickname: 'Demo 用户',
        createdAt: new Date().toISOString(),
        lastLoginAt: new Date().toISOString()
      });
      saveAccounts(arr);
    }
  }
  function logout() {
    try { localStorage.removeItem(LS.CURRENT); } catch (e) {}
  }

  // ============================================================
  // 3) Top nav 渲染
  // ============================================================
  function buildTopNav(account) {
    const cur = currentPageKey();
    const navLinks = NAV_ITEMS.map(item => {
      const active = cur === item.key ? 'active' : '';
      return `<a href="${ROUTES[item.key]}" class="${active}">${item.icon} ${item.label}</a>`;
    }).join('');

    const accountArea = account
      ? `<div class="account" style="position:relative">
           <span class="email-label">${escapeHtml(account.nickname || account.email)}</span>
           <div class="avatar" id="avatarBtn">${escapeHtml((account.nickname || account.email).charAt(0).toUpperCase())}</div>
           <div class="dropdown" id="accountDropdown">
             <div class="dropdown-header">${escapeHtml(account.email)}</div>
             <div class="dropdown-item disabled" id="syncBtn">
               <span>☁️ 同步</span><span class="badge">开发中</span>
             </div>
             <div class="dropdown-item" id="logoutBtn">
               <span>⎋ 退出登录</span>
             </div>
           </div>
         </div>`
      : `<a href="${ROUTES.login}" class="login-btn">登录</a>`;

    return `
      <header class="app-topnav">
        <div class="inner">
          <a class="brand" href="${ROUTES.library}">
            <span class="logo">雅</span>
            <span>雅思句子成分精读</span>
          </a>
          <nav>${navLinks}</nav>
          ${accountArea}
        </div>
      </header>
    `;
  }

  function buildBottomNav() {
    const cur = currentPageKey();
    const items = NAV_ITEMS.map(item => {
      const active = cur === item.key ? 'active' : '';
      return `<a href="${ROUTES[item.key]}" class="${active}">
        <span class="icon">${item.icon}</span>
        <span>${item.label}</span>
      </a>`;
    }).join('');
    return `<nav class="app-bottomnav">${items}</nav>`;
  }

  // ============================================================
  // 4) 绑定账号交互
  // ============================================================
  function bindAccountInteractions() {
    const avatar = document.getElementById('avatarBtn');
    const dd = document.getElementById('accountDropdown');
    const syncBtn = document.getElementById('syncBtn');
    const logoutBtn = document.getElementById('logoutBtn');

    if (avatar && dd) {
      avatar.addEventListener('click', (e) => {
        e.stopPropagation();
        dd.classList.toggle('show');
      });
      document.addEventListener('click', (e) => {
        if (dd.classList.contains('show') && !dd.contains(e.target) && !avatar.contains(e.target)) {
          dd.classList.remove('show');
        }
      });
    }
    if (syncBtn) {
      syncBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        showToast('☁️ 云同步功能开发中，敬请期待', 'info');
        dd.classList.remove('show');
      });
    }
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!confirm('确定退出登录？退出后可重新登录此账号或注册新账号')) return;
        logout();
        // 跳到 login（带 redirect 回原页）
        const back = location.pathname.split('/').pop();
        location.href = ROUTES.login + '?from=' + encodeURIComponent(back);
      });
    }
  }

  // ============================================================
  // 5) Toast（轻量全局提示）
  // ============================================================
  function showToast(text, type = 'info') {
    let container = document.getElementById('app-toast-container');
    if (!container) {
      container = document.createElement('div');
      container.id = 'app-toast-container';
      container.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;flex-direction:column;gap:8px;pointer-events:none';
      document.body.appendChild(container);
    }
    const t = document.createElement('div');
    t.style.cssText = 'background:' + (type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#2563eb') + ';color:#fff;padding:10px 18px;border-radius:999px;font-size:14px;box-shadow:0 4px 16px rgba(0,0,0,0.15);font-family:Inter,sans-serif';
    t.textContent = text;
    container.appendChild(t);
    setTimeout(() => {
      t.style.transition = 'opacity 0.3s';
      t.style.opacity = '0';
      setTimeout(() => t.remove(), 320);
    }, 2500);
  }
  window.appShowToast = showToast;

  // ============================================================
  // 6) 工具
  // ============================================================
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&', '<': '<', '>': '>', '"': '"', "'": '&#39;'
    }[c]));
  }

  // ============================================================
  // 7) 入口：按页面类型决定行为
  // ============================================================
  function init() {
    seedDemoIfEmpty();
    const account = loadCurrent();
    const cur = currentPageKey();

    // 未登录访问受保护页面 → 跳到 login
    const protectedPages = ['practice', 'library', 'legend', 'saved'];
    if (!account && protectedPages.includes(cur)) {
      location.replace(ROUTES.login + '?from=' + encodeURIComponent(ROUTES[cur]));
      return;
    }

    // 注入 top nav + bottom nav（如果页面 body 没有手动渲染）
    if (!document.querySelector('.app-topnav')) {
      const topnav = document.createElement('div');
      topnav.innerHTML = buildTopNav(account);
      document.body.insertBefore(topnav.firstElementChild, document.body.firstChild);
    }
    if (!document.querySelector('.app-bottomnav')) {
      const bn = document.createElement('div');
      bn.innerHTML = buildBottomNav();
      document.body.appendChild(bn.firstElementChild);
    }

    bindAccountInteractions();

    // 把内容包到 .app-main 里，让出顶栏空间
    // 但只包一次，且不包已经渲染好的 nav
    if (!document.querySelector('.app-main')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'app-main';
      const nodes = Array.from(document.body.children).filter(n =>
        !n.classList.contains('app-topnav') &&
        !n.classList.contains('app-bottomnav') &&
        n.id !== 'app-toast-container'
      );
      nodes.forEach(n => wrapper.appendChild(n));
      document.body.appendChild(wrapper);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
