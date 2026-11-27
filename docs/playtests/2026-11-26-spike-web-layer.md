# Spike test — accessible web layer

**Date:** 2026-11-26
**Tester:** project owner
**Build:** `prototype/standalone.html` (single file, 28,779 bytes, commit `e1e0ca5` or later)
**Purpose:** decide whether the in-game computer can be built as real DOM inside the game, per `docs/engine-decision.md`

## What was run

1. Loaded the page with a screen reader active.
2. Pressed **Test announcement** and confirmed the screen reader spoke the sentence.
3. Opened **Practice → Logs → sensor.log**, activated **View permissions**, and listened to the Security dialog.
4. Pressed **Escape** and checked where focus went.

## Results

| Check | Result |
|---|---|
| Screen reader reads a change made by the page | **Pass** — the test sentence was spoken |
| Simulated-computer notice is announced | Pass, from the test button |
| Security dialog announces its title | **Pass** |
| Permission table reads its column headings — Account, Read, Write, Role note | **Pass** |
| Escape closes the dialog | **Pass** |
| Focus returns to the control that opened the dialog | **Pass** |

No blocking findings. The permissions table reading with its headings is the specific result this spike existed to obtain.

## Defects found and fixed before the test

- Live regions and manual announcements both fired, so several messages would have been spoken twice.
- The skip link could not move focus to the desktop, because the target was not focusable.
- Closing a dialog announced "Close closed" rather than the dialog's name.

## Not yet tested

- The remaining steps of `prototype/ACCESSIBILITY-TEST.md`: file selection announcement, folder-change counts, the permission-denied dialog, terminal output, text-size controls, reduced motion.
- The exact screen reader and browser versions. Record them before treating this as the formal pass.
- Mobile screen readers (TalkBack, iOS VoiceOver).
- The same page inside the Unity shell, which is the second half of the spike.

## Next

Unity shell embedding: an HDRP interior with a walkable camera, this page in an embedded browser component, and the same reader checks across the boundary.

## Unity half - attempt on 2026-11-26

**Environment:** Unity 6.6.0 (6000.6.11f1), Windows 11, NVIDIA GTX 1650, URP template.

**What was built:** project created, UnityWebBrowser 2.2.8 installed with the CEF engine and the Windows x64 native package, scripting backend switched to Mono, and the sample browser prefab placed in a scene.

**Result:** the embedded browser rendered a live web page inside Unity's Game view. The rendering path works.

**Obstacles encountered, in order:**

1. Editor installed without `UnityPackageManager.exe`; reinstalling restored it.
2. The URP project template failed to decompress twice; the project was created another way.
3. The package registry URL was entered as `urp.voltstro.dev` instead of `upr.voltstro.dev`, and the `org.nuget` scope was missing, so packages could not resolve.
4. Four packages were unsigned and needed manual approval.
5. UniTask 2.5.10 is incompatible with Unity 6.6: `TreeViewState`, `TreeViewItem`, and `TreeView` became obsolete-as-error. Resolved by editing the embedded package and deleting the optional tracker window files.
6. UnityWebBrowser requires the Mono scripting backend; IL2CPP is unsupported.
7. The sample ships prefabs but no scene, and both the template and the sample scene are named `SampleScene`, which caused repeated confusion.

**Unresolved:** no URL field was found on the browser components. The engine object expects a Browser Client reference that the sample prefab wires internally; hand assembly with `WebBrowser Basic` plus `Web UI Controls` did not complete. The screen-reader-inside-Unity test was therefore not reached.

**Assessment:** rendering is proven, configuration friction is high, and Mono plus GPL-3 remain blockers for shipping. Before any further work on the free stack, price Vuplex, which provides a configurable URL and supports IL2CPP.

## Correction — 2026-11-27

Three points in the attempt above were checked against the published sources the next day.

1. **Licences.** UnityWebBrowser is MIT, UniTask is MIT, and CEF is BSD-3. The GPL-3 line in the assessment belongs to VoltProjects, the static-site generator that renders the documentation site, not to any package installed in the project. Nothing in the browser stack is copyleft, so the licence is not a reason to change direction.
2. **The URL field exists.** `WebBrowserClient` is marked `[Serializable]`, so Unity draws it in the Inspector as the nested **Browser Client** block on `Web Browser Basic` — collapsed by default, with `Initial Url` as its first field. The search failed because the block was not expanded, not because the component lacks the option. `unity/Archive/LoadPrototypePage.cs` (archived with the UnityWebBrowser route) sets the same value in code, so the field never has to be found by hand.
3. **Mono is a platform constraint, not a desktop blocker.** Windows and macOS desktop builds ship on Mono. IL2CPP becomes necessary when the mobile versions are built, which belongs to Phase 7 rather than to this spike.

## Note

This report covers one tester's session on one machine. It confirms the approach is viable; it does not replace the formal pass with recorded versions and more than one tester.
