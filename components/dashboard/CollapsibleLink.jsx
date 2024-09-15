
"use client";

import React from 'react';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function CollapsibleLink({ href, title }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-900 transition-all duration-500 py-2.5 rounded-md"
    >
      <span className="rounded-sm">{title}</span>
      <PlusCircle className="w-4 h-4" />
    </Link>
  );
}
