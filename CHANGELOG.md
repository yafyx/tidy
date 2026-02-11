# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.2] - 2026-02-11

### Added
- Enhance organize command UI with tree view and improved formatting (381e817)

## [1.1.1] - 2025-12-28

### Added
- Add `update` command and improved notification system (56b6186)

## [1.1.0] - 2025-12-28

### Added
- Add undo command with history tracking - revert file moves with `tidyf undo` (565ab1e)
- Add profile management system - save and reuse organization configurations (872c535)
- Add profile presets with built-in templates for common use cases (8bb040e)
- Add JSON output mode for programmatic usage (8bb040e)
- Add duplicate file detection to prevent overwrites (8bb040e)

## [1.0.3] - 2025-12-24

### Added
- Implement smart folder detection to respect existing organization (#4) (c4243ed)
- Add npm update notification (#3) (c919bf8)

## [1.0.2] - 2025-12-24

### Changed
- Bumped version to 1.0.2 (8cc36cd)

## [1.0.1] - 2025-12-24

### Added
- Add regenerate with different model option (ce988cc)

### Changed
- Add Claude Code guidance and update examples (29e70d2)
- Bumped version to 1.0.1 (64e38f7)

## [1.0.0] - 2025-12-23

### Added
- Make source, target, and watch mode configurable (#2) (52e024d)
- Add tidyfiles CLI alias (58af233)
- Rename CLI to tidyf and add --local config (0869849)
- Improve config model selection and opencode client startup (e066105)

### Fixed
- Refresh config in menu loop to show updated AI model (#1) (e74390f)

### Changed
- Rename package to tidyf and add publish metadata (43f89fc)
- Update bin alias and docs to tidyf (47483c2)

### Security
- Include MIT License file (38ff10a)

### Other
- Format organize and watch commands (76f39e4)
