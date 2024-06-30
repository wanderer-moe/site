"use client";

import * as React from "react";
import { ContributorsRoute } from "~/lib/types";
import { Skeleton } from "../ui/skeleton";
import { Card } from "../ui/card";

// this is an absolute hellspawn of code
// im so sorry

function getMostImportantRole(contributorRoles: string[]) {
    const rolesWithPriority = contributorRoles
        .map((roleName) => roles.find((role) => role.name === roleName))
        .filter((role) => role !== undefined);

    return rolesWithPriority.sort((a, b) => a.priority - b.priority)[0];
}

function getCategoryPriorityForContributor(contributorRoles: string[]): number {
    const rolesWithPriority = contributorRoles
        .map((roleName) =>
            roleCategories.find((category) =>
                category.roles.includes(roleName),
            ),
        )
        .filter((category) => category !== undefined)
        .sort((a, b) => a.priority - b.priority);

    return rolesWithPriority.length > 0
        ? rolesWithPriority[0].priority
        : Number.MAX_SAFE_INTEGER;
}

function ContributorsSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(12)].map((_, i) => (
                <Skeleton key={i} className="h-[150px]" />
            ))}
        </div>
    );
}

interface ContributorsGridProps {
    contributors: ContributorsRoute["contributors"];
}

export function ContributorsGrid({
    contributors,
}: Readonly<ContributorsGridProps>) {
    const categoryMap = new Map<
        string,
        ContributorsRoute["contributors"][0][]
    >();
    contributors.forEach((contributor) => {
        const categoryPriority = getCategoryPriorityForContributor(
            contributor.roles,
        );
        const category = roleCategories.find(
            (c) => c.priority === categoryPriority,
        );
        if (category) {
            if (!categoryMap.has(category.name)) {
                categoryMap.set(category.name, []);
            }
            categoryMap.get(category.name)?.push(contributor);
        }
    });

    const sortedCategories = Array.from(categoryMap.entries()).sort((a, b) => {
        const categoryA = roleCategories.find((c) => c.name === a[0]);
        const categoryB = roleCategories.find((c) => c.name === b[0]);
        return (categoryA?.priority || 0) - (categoryB?.priority || 0);
    });

    return (
        <div className="flex flex-col gap-6">
            {sortedCategories.length > 0 ? (
                sortedCategories.map(([categoryName, contributors]) => (
                    <div key={categoryName}>
                        <div className="flex flex-col mb-4">
                            <h2 className="text-xl font-semibold">
                                {categoryName}
                            </h2>
                            <p className="text-sm text-muted-foreground">
                                {
                                    roleCategories.find(
                                        (c) => c.name === categoryName,
                                    )?.description
                                }
                            </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {contributors.map((contributor) => (
                                <ContributorEntry
                                    key={contributor.id}
                                    contributor={contributor}
                                />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <ContributorsSkeleton />
            )}
        </div>
    );
}

interface ContributorEntryProps {
    contributor: ContributorsRoute["contributors"][0];
}

type RoleType = {
    name: string;
    mappedName?: string;
    priority: number;
};

const roles: RoleType[] = [
    {
        name: "Project Lead",
        mappedName: "Creator, Developer, Assets Manager",
        priority: 1,
    },
    { name: "Developer", priority: 2 },
    { name: "Moderator", mappedName: "Discord Staff", priority: 3 },
    { name: "Helper", priority: 4 },
    { name: "Translator", priority: 5 },
    { name: "Contributor", priority: 6 },
    { name: "Server Booster", mappedName: "Discord Booster", priority: 7 },
];

type RoleCategoryType = {
    name: string;
    description: string;
    roles: string[];
    priority: number;
};

const roleCategories: RoleCategoryType[] = [
    {
        name: "Development Team",
        description: "Handling wanderer.moe's infrastructure & development",
        roles: ["Project Lead", "Developer"],
        priority: 1,
    },
    {
        name: "Discord Team",
        description: "Volunteers who help moderate the Discord server",
        roles: ["Moderator"],
        priority: 2,
    },
    {
        name: "Contributors",
        description:
            "Individuals who have contributed to wanderer.moe with assets or translations",
        roles: ["Translator", "Contributor"],
        priority: 3,
    },
    {
        name: "Supporters",
        description: "Users who support wanderer.moe",
        roles: ["Server Booster"],
        priority: 4,
    },
];

export function ContributorEntry({
    contributor,
}: Readonly<ContributorEntryProps>) {
    const mostImportantRole = getMostImportantRole(contributor.roles);

    return (
        <Card className="group flex flex-col gap-1 p-4 rounded-lg ring-transparent ring-2 hover:ring-primary ease-linear transition-all cursor-pointer">
            <div className="flex flex-row gap-2 items-center">
                <img
                    src={contributor.avatar}
                    alt={contributor.username}
                    className="h-20 max-h-20 w-20 max-w-20 rounded-lg object-contain p-1"
                />
                <div className="flex flex-col gap-1">
                    <h2 className="font-semibold flex flex-row gap-1 items-center">
                        {contributor.globalname ? (
                            <>
                                {contributor.globalname}{" "}
                                {/* <span className="text-xs text-muted-foreground">
                                    ({contributor.username})
                                </span> */}
                            </>
                        ) : (
                            contributor.username
                        )}
                    </h2>
                    <div className="text-muted-foreground text-sm">
                        {mostImportantRole.mappedName || mostImportantRole.name}
                    </div>
                </div>
            </div>
        </Card>
    );
}
