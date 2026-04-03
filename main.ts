:root {
  --bg: #0f172a;
  --text: #e2e8f0;
  --card: #111827;
  --accent: #38bdf8;
  --muted: #94a3b8;
}

[data-theme="light"] {
  --bg: #f8fafc;
  --text: #0f172a;
  --card: #ffffff;
  --accent: #2563eb;
  --muted: #475569;
}

* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: system-ui, sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

.navbar {
  position: sticky; top: 0;
  background: var(--bg);
  display: flex; justify-content: space-between; align-items: center;
  padding: 1rem 2rem; border-bottom: 1px solid #1e293b;
}
.navbar a { color: var(--text); margin-left: 1rem; text-decoration: none; }
.logo { font-weight: 700; }
#themeToggle { background: transparent; border: none; color: var(--text); font-size: 1.2rem; }

.hero { padding: 5rem 2rem; text-align: center; }
.hero h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
.hero-actions { margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center; }

.section { padding: 4rem 2rem; max-width: 900px; margin: 0 auto; }
.grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
.card { background: var(--card); padding: 1.5rem; border-radius: 0.75rem; }
.link { color: var(--accent); text-decoration: none; }

.form { display: grid; gap: 1rem; }
input, textarea {
  padding: 0.75rem; border-radius: 0.5rem; border: 1px solid #334155;
  background: transparent; color: var(--text);
}
.btn {
  background: var(--accent); color: white; padding: 0.75rem 1.25rem;
  border: none; border-radius: 0.5rem; text-decoration: none; cursor: pointer;
}
.btn.secondary { background: transparent; color: var(--accent); border: 1px solid var(--accent); }

.status { margin-top: 0.5rem; color: var(--muted); }
.footer { text-align: center; padding: 2rem; color: var(--muted); }