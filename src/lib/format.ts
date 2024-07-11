export function FormatGameName(name: string) {
    return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function FormatCategoryName(name: string) {
    return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function bytesToFileSize(bytes: number) {
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 B";
    const i = Math.floor(Math.log2(bytes) / 10);
    const formatter = new Intl.NumberFormat("default", {
        maximumFractionDigits: 1,
    });
    const size = formatter.format(bytes / 1024 ** i);
    return `${size} ${sizes[i]}`;
}
