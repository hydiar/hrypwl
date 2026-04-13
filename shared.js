/**
 * shared.js — edit the nav and layout here to update every page at once.
 */
(function () {
    const pages = [
        { id: 'cycling',  label: 'Cycling'  },
        { id: 'cooking',  label: 'Cooking'  },
        { id: 'photos',   label: 'Photos'   },
        { id: 'rosie',    label: 'Rosie'    },
        { id: 'projects', label: 'Projects' },
    ];

    const currentPage = document.body.dataset.page || 'index';

    /* ── Header ─────────────────────────────────────────── */
    const navLinks = pages
        .map(function (p) {
            var active = currentPage === p.id ? ' nav-tag--active' : '';
            return '<a href="' + p.id + '.html" class="nav-tag' + active + '">' + p.label + '</a>';
        })
        .join('\n            ');

    var headerEl = document.getElementById('site-header');
    if (headerEl) {
        headerEl.innerHTML =
            '<div class="header-inner">\n' +
            '        <a href="index.html" class="site-name">hrypwl</a>\n' +
            '        <nav>\n' +
            '            ' + navLinks + '\n' +
            '        </nav>\n' +
            '    </div>\n' +
            '    <div class="header-rule"></div>';
    }

    /* ── Footer ─────────────────────────────────────────── */
    var footerEl = document.getElementById('site-footer');
    if (footerEl) {
        footerEl.innerHTML =
            '<div class="footer-rule"></div>\n' +
            '    <p>&copy; 2026 hrypwl</p>';
    }
})();
