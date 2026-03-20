'use client';

import { useState } from 'react';
import { CommandPalette } from './CommandPalette';

export function CommandPaletteClient() {
  const [isOpen, setIsOpen] = useState(false);

  return <CommandPalette isOpen={isOpen} setIsOpen={setIsOpen} />;
}
