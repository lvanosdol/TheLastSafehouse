#!/usr/bin/env bash
# Copies the single-file pages into a Unity project's StreamingAssets folder.
#
#   ./unity/sync-prototype.sh /path/to/SafehouseSpike
#
# Re-run after every change to prototype/standalone.html or prototype/lesson-1.html.
# Both are one self-contained file on purpose: the game opens them over file://,
# where ES modules do not load.

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "usage: $0 <path-to-unity-project>" >&2
  exit 64
fi

project="$1"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
target_dir="$project/Assets/StreamingAssets"

if [ ! -d "$project/Assets" ]; then
  echo "error: '$project' does not look like a Unity project (no Assets folder)" >&2
  exit 1
fi

mkdir -p "$target_dir"

for page in standalone.html lesson-1.html; do
  source_file="$repo_root/prototype/$page"
  if [ ! -f "$source_file" ]; then
    echo "error: missing $source_file" >&2
    exit 1
  fi
  cp "$source_file" "$target_dir/$page"
  echo "copied prototype/$page -> $target_dir/$page"
done

echo "The game opens either page with ComputerBrowserWindow.Open(pageName)."
