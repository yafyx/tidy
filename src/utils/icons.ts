/**
 * File type icons for terminal display
 */

const FILE_ICONS: Record<string, string> = {
  // Documents
  pdf: "📄",
  doc: "📝",
  docx: "📝",
  txt: "📃",
  rtf: "📃",
  odt: "📝",
  md: "📃",

  // Spreadsheets
  xls: "📊",
  xlsx: "📊",
  csv: "📊",
  ods: "📊",

  // Presentations
  ppt: "📽️",
  pptx: "📽️",
  key: "📽️",

  // Images
  jpg: "🖼️ ",
  jpeg: "🖼️ ",
  png: "🖼️ ",
  gif: "🖼️ ",
  svg: "🎨",
  webp: "🖼️ ",
  heic: "🖼️ ",
  ico: "🖼️ ",
  bmp: "🖼️ ",
  tiff: "🖼️ ",
  psd: "🎨",
  ai: "🎨",
  sketch: "🎨",
  fig: "🎨",

  // Videos
  mp4: "🎬",
  mov: "🎬",
  avi: "🎬",
  mkv: "🎬",
  webm: "🎬",
  wmv: "🎬",
  flv: "🎬",

  // Audio
  mp3: "🎵",
  wav: "🎵",
  flac: "🎵",
  aac: "🎵",
  ogg: "🎵",
  m4a: "🎵",
  wma: "🎵",

  // Archives
  zip: "📦",
  rar: "📦",
  "7z": "📦",
  tar: "📦",
  gz: "📦",
  bz2: "📦",
  xz: "📦",

  // Code
  ts: "📜",
  tsx: "📜",
  js: "📜",
  jsx: "📜",
  py: "🐍",
  rb: "💎",
  go: "🔵",
  rs: "🦀",
  java: "☕",
  c: "📜",
  cpp: "📜",
  h: "📜",
  hpp: "📜",
  cs: "📜",
  swift: "🍎",
  kt: "📜",
  php: "🐘",
  html: "🌐",
  css: "🎨",
  scss: "🎨",
  less: "🎨",
  json: "📋",
  xml: "📋",
  yaml: "📋",
  yml: "📋",
  toml: "📋",

  // Applications/Installers
  dmg: "💿",
  pkg: "📦",
  exe: "⚙️",
  msi: "⚙️",
  app: "📱",
  apk: "📱",
  ipa: "📱",
  deb: "📦",
  rpm: "📦",

  // Data
  sql: "🗃️",
  db: "🗃️",
  sqlite: "🗃️",

  // Ebooks
  epub: "📚",
  mobi: "📚",
  azw: "📚",
  azw3: "📚",

  // Fonts
  ttf: "🔤",
  otf: "🔤",
  woff: "🔤",
  woff2: "🔤",

  // Default
  default: "📄",
};

const CATEGORY_ICONS: Record<string, string> = {
  Documents: "📄",
  Images: "🖼️ ",
  Videos: "🎬",
  Audio: "🎵",
  Archives: "📦",
  Code: "📜",
  Applications: "💿",
  Spreadsheets: "📊",
  Presentations: "📽️",
  Ebooks: "📚",
  Fonts: "🔤",
  Data: "🗃️",
  Other: "📁",
  Unknown: "❓",
};

const STATUS_ICONS: Record<string, string> = {
  pending: "⏳",
  moving: "🔄",
  completed: "✅",
  failed: "❌",
  skipped: "⏭️",
  conflict: "⚠️",
};

/**
 * Get the icon for a file based on its extension
 */
export function getFileIcon(filename: string): string {
  const ext = filename.split(".").pop()?.toLowerCase() || "";
  return FILE_ICONS[ext] || FILE_ICONS.default;
}

/**
 * Get the icon for a category
 */
export function getCategoryIcon(category: string): string {
  return CATEGORY_ICONS[category] || CATEGORY_ICONS.Other;
}

/**
 * Get the icon for a move status
 */
export function getStatusIcon(status: string): string {
  return STATUS_ICONS[status] || STATUS_ICONS.pending;
}

/**
 * Get a colored status indicator
 */
export function getStatusIndicator(status: string): string {
  switch (status) {
    case "completed":
      return "✓";
    case "failed":
      return "✗";
    case "skipped":
      return "○";
    case "conflict":
      return "!";
    case "moving":
      return "→";
    default:
      return "·";
  }
}
