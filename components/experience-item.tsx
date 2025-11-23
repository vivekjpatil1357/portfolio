"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Globe, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceItemProps
{
    date: string;
    title: string;
    company: string;
    link?: string;
    linkText?: string;
    description: string[];
    isCurrent?: boolean;
}

export function ExperienceItem({
    date,
    title,
    company,
    link,
    linkText,
    description,
    isCurrent = false,
}: ExperienceItemProps)
{
    const [isExpanded, setIsExpanded] = useState(false);
    const shouldTruncate = description.length > 2; // Truncate if more than 2 bullet points

    const displayedDescription = isExpanded ? description : (shouldTruncate ? description.slice(0, 2) : description);

    return (
        <li className="flex flex-col justify-between border-b border-white/20 py-10 md:flex-row gap-6">
            <div className="max-w-lg text-lg lg:text-xl font-semibold tracking-tighter lg:w-1/3 text-white/90">
                {date}
            </div>
            <div className="lg:w-1/3 flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-semibold tracking-tighter text-white">
                        {title}
                    </h3>
                    {isCurrent && (
                        <Badge variant="default" className="bg-white text-black hover:bg-white/90 text-xs">
                            Current
                        </Badge>
                    )}
                </div>
                {link && (
                    <div className="flex items-center gap-2 mb-4 text-white/70">
                        <Globe className="h-4 w-4" />
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm hover:underline"
                        >
                            {linkText || link}
                        </a>
                    </div>
                )}
                <ul className="space-y-2 text-white/60 text-sm sm:text-base">
                    {displayedDescription.map((item, index) => (
                        <li key={index} className="flex gap-2">
                            <span>•</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
                {shouldTruncate && (
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 h-auto font-normal"
                    >
                        {isExpanded ? (
                            <span className="flex items-center gap-1">
                                Read Less <ChevronUp className="h-3 w-3" />
                            </span>
                        ) : (
                            <span className="flex  items-center gap-1">
                                Read More <ChevronDown className="h-3 w-3" />
                            </span>
                        )}
                    </Button>
                )}
            </div>
            <div className="text-left md:text-right lg:w-1/4 text-white font-semibold text-lg">
                {company}
            </div>
        </li>
    );
}
