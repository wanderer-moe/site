// lib/utils/helpers.js

export function fixCasing(word) {
    return word
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  
export const bytesToFileSize = (bytes) => {
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 B";
    const i = parseInt(Math.log2(bytes) / 10, 10);
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
  };