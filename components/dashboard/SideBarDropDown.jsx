

import CollapsibleLink from './CollapsibleLink';
import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"; // Adjust the import path as needed
import { ChevronRight } from 'lucide-react';

export default function SideBarDropDown({ title, items, icon: Icon }) {
  return (
    <div>
      <Collapsible>
        <CollapsibleTrigger className="flex justify-between items-center w-full">
          <div className="flex items-center space-x-2 p-2">
          <Icon className="h-4 w-6" />
          <span>{title}</span>
          </div>
          <ChevronRight className="w-4 h-4"/>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {items.map((item, i) => (
            <CollapsibleLink key={i} href={item.href} title={item.title} />
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
