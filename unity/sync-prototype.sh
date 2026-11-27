#!/usr/bin/env bash
# Copies the single-file prototype into a Unity project's StreamingAssets folder.
#
#   ./unity/sync-prototype.sh /path/to/SafehouseSpike
#
# Re-run it after every change to prototype/standalone.html.

set -euo pipefail

if [ "$#" -ne 1 ]; then
  echo "usage: $0 <path-to-unity-project>" >&2
  exit 64
fi

project="$1"
repo_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
source_file="$repo_root/prototype/standalone.html"
target_dir="$project/Assets/StreamingAssets"

if [ ! -d "$project/Assets" ]; then
  echo "error: '$project' does not look like a Unity project (no Assets folder)" >&2
  exit 1
fi

if [ ! -f "$source_file" ]; then
  echo "error: missing $source_file" >&2
  exit 1
fi

mkdir -p "$target_dir"
cp "$source_file" "$target_dir/standalone.html"

echo "copied prototype/standalone.html -> $target_dir/standalone.html"
echo "In Unity, set Initial Url to the file:/// form of that path, or use the"
echo "LoadPrototypePage script, which builds it for you."
