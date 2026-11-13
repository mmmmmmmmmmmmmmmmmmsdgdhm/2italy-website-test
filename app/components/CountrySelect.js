'use client';

import { useState, useRef, useEffect } from 'react';
import { countries } from './countries';

const names = countries.map(([name]) => name);

// Typing only searches the list: the field ends up holding a country from it, or nothing
export default function CountrySelect({ value, onSelect, placeholder, noMatch }) {
  const [query, setQuery] = useState(value);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const listRef = useRef(null);

  // The parent resets the form after a successful submit
  useEffect(() => { setQuery(value); }, [value]);

  const q = query.trim().toLowerCase();
  const matches = !q || q === value.toLowerCase()
    ? names
    : [...names.filter((n) => n.toLowerCase().startsWith(q)), ...names.filter((n) => !n.toLowerCase().startsWith(q) && n.toLowerCase().includes(q))];

  // Keep the highlighted option visible without scrolling the page itself
  useEffect(() => {
    const list = listRef.current;
    const item = list?.children[active];
    if (!item) return;
    if (item.offsetTop < list.scrollTop) list.scrollTop = item.offsetTop;
    else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight;
    }
  }, [active, open]);

  function choose(name) {
    setQuery(name);
    setOpen(false);
    onSelect(name);
  }

  // Accept typed text only if it is exactly a country name; otherwise go back to the last pick
  function commit() {
    setOpen(false);
    const exact = names.find((n) => n.toLowerCase() === q);
    if (exact) choose(exact);
    else setQuery(value);
  }

  function handleKeyDown(e) {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!open) { setOpen(true); return; }
      const step = e.key === 'ArrowDown' ? 1 : -1;
      setActive((i) => Math.min(Math.max(i + step, 0), matches.length - 1));
    } else if (e.key === 'Enter' && open) {
      e.preventDefault();
      if (matches[active]) choose(matches[active]);
    } else if (e.key === 'Enter' && query !== value) {
      e.preventDefault();
      commit();
    } else if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div className="country-select" dir="ltr">
      <input
        type="text" role="combobox" aria-expanded={open} aria-controls="country-listbox" aria-autocomplete="list"
        aria-activedescendant={open && matches[active] ? `country-opt-${active}` : undefined}
        autoComplete="off" placeholder={placeholder} value={query} required
        onChange={(e) => { setQuery(e.target.value); setActive(0); setOpen(true); }}
        onFocus={(e) => { e.target.select(); setOpen(true); }}
        onClick={() => setOpen(true)}
        onBlur={commit}
        onKeyDown={handleKeyDown}
      />
      <span className="country-select-arrow" aria-hidden="true">▾</span>
      {open && (
        <ul id="country-listbox" role="listbox" className="country-select-list" ref={listRef}>
          {matches.length ? matches.map((name, i) => (
            <li
              key={name} id={`country-opt-${i}`} role="option" aria-selected={name === value}
              className={`${i === active ? 'is-active' : ''}${name === value ? ' is-selected' : ''}`}
              onMouseDown={(e) => { e.preventDefault(); choose(name); }}
              onMouseEnter={() => setActive(i)}
            >
              {name}
            </li>
          )) : <li className="country-select-empty">{noMatch}</li>}
        </ul>
      )}
    </div>
  );
}
