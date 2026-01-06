'use client';

import {useState} from 'react';

export default function CopyAddress({value}: {value: string}) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <button
      onClick={onCopy}
      className="glass rounded-xl px-3 py-2 text-sm text-white/85 hover:text-white"
      title="Copy"
    >
      {copied ? 'Copied' : 'Copy'}
    </button>
  );
}
