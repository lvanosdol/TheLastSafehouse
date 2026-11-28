# Rebuild redesign — a machine you put parts into

**Written:** 2026-11-27
**Status:** plan, agreed with the owner, not built
**Replaces:** the two-column board in `prototype/assembly.html` (task 7), which the playtest judged to be the matching task again with longer words
**Evidence:** the tester's verdict in `docs/playtests/2026-11-27-lesson-1.md` — *"felt exactly like a quiz… pretty much the same as the first task"*, and the request that follows it: *"pick up actual components and put them into the actual computer … the spots in the computer where the components go could highlight"*

## What changes and what does not

The board becomes a **case with places in it**. Parts lie on the bench; you pick one up; the places that will take it light up; you put it in.

What stays, because it already works and was verified: the twelve parts, the thirteen places and their physical dependencies, the four real diagnostics, Mara's explanations, the POST block and the story beat, the keyboard-with-a-mouse-path rule, and the single-file page.

## The three regions

The page shows the machine as three areas, top to bottom:

```text
┌──────────────── inside the case ─────────────────┐
│  CPU socket        Memory slots                  │
│  Top of processor  CPU fan header                │
│  Standoffs         M.2 slot                      │
│  PCIe slot         24-pin board power            │
│  CPU power socket  Power supply bay              │
└──────────────────────────────────────────────────┘
┌──────────────── rear of the case ────────────────┐
│  Graphics card port       Motherboard video port │
│  Mains, keyboard, mouse                          │
└──────────────────────────────────────────────────┘
┌──────────────── on the bench ────────────────────┐
│  [processor] [memory] [cooler] [fan cable] …     │
└──────────────────────────────────────────────────┘
```

Drawn with CSS borders and labels, not an image and not a canvas. Every place is a **button with a visible name**, so the machine is usable with the screen reader, at 124% text size, and with no colour vision. A picture with hotspots would be unusable for all three, which is the mistake this design exists to avoid.

## The thirteen places

| Place | Takes | Will not take it until |
|---|---|---|
| CPU socket | Processor | — |
| Memory slots | Memory | the board is still on the bench |
| Top of the processor | Cooler | the processor is fitted |
| CPU fan header | Fan cable | the cooler is fitted |
| Standoffs in the case | Motherboard | processor, memory, cooler and fan cable are fitted |
| M.2 slot | SSD | the board is in the case |
| Power supply bay | Power supply | — |
| 24-pin board power | 24-pin cable | the board and the power supply are fitted |
| CPU power socket | CPU power cable | the board and the power supply are fitted |
| PCIe slot | Graphics card | the board is in the case |
| Graphics card port (rear) | Monitor cable | the card is fitted |
| Motherboard video port (rear) | Monitor cable | the board is in the case — **accepted, and it is the trap** |
| Case rear: mains, keyboard, mouse | Peripherals | the power supply is fitted |

Two kinds of refusal, and they are different sentences:

- **"The processor does not go in the memory slots. It goes in the CPU socket."** — wrong place.
- **"The cooler has nothing to sit on yet. Fit the processor first."** — right place, not yet possible.

## Picking up, and what lights up

When a part is picked up:

- every place that **would** take it is marked visually (border and background change, plus the word "fits" after its name);
- places that would not take it are dimmed, and say "does not take the processor";
- a place that takes it but is not ready yet says why, in words: "Standoffs — needs the processor, memory, cooler and fan cable first".

Announcing by colour alone is not allowed, so the state is always in the text of the button itself. The accessible name of a place therefore changes with what is in hand, which is exactly what a screen-reader user needs to decide where to press Enter.

## Mouse and keyboard, same state

| | Mouse | Keyboard |
|---|---|---|
| Pick up | Drag a part from the bench | Enter on a part on the bench |
| Find a place | Places light up as you drag | Focus moves to the first place that fits; Tab walks the places, each announcing whether it fits |
| Put in | Drop on a place | Enter on the place |
| Put back | Drop anywhere on the bench | Escape, or Enter on the held part again |

After a part goes in, focus moves to the next part on the bench, so a build is Enter, Enter, Enter — the same rhythm the matching task now has, and for the same reason.

## The four faults, unchanged

They still come from the state, not from the order, and they still read like the machine:

| Condition | What it says |
|---|---|
| Mains not connected | Nothing happens. No fans, no lights. |
| Power supply switch off | Nothing happens. No fans, no lights. |
| No 24-pin cable | No response at all. |
| No CPU power cable | The fans start for a second, then stop. No POST, no display. |
| Clips open | POST beeps: memory detection error. |
| No cooler | POST starts, then the machine shuts itself down within seconds. |
| No SSD | POST: COMPLETE / STORAGE: NOT DETECTED / No boot device found. |
| Monitor in the board port | POST: COMPLETE / MONITOR: NO SIGNAL |

Mara explains each one, as now, and "Close the memory clips" / "Switch the power supply on" / "Press the power button" stay as they are.

## Accessibility requirements, as acceptance criteria

1. Every part and every place is a real button with a name that states its state.
2. Nothing depends on colour, drag, or a pointer.
3. Picking up, placing, refusing and returning are each announced once.
4. Focus always lands somewhere sensible: first fitting place on pick-up, next part after placing.
5. A refusal names the part and the reason, and costs nothing.
6. Works at 950 px wide and at 124% text with no overflow or clipping.
7. Reduced motion removes every transition; high contrast keeps every border visible.
8. `npm test` covers all of the above; the NVDA steps are added to the playtest script.

## Test plan

The existing 31 build checks are rewritten rather than extended, because the interaction changes shape. New coverage:

- the three regions and all thirteen places exist as named buttons;
- picking up marks exactly the places that fit, and only those;
- the keyboard path: pick up, first fitting place focused, Enter places, focus moves on;
- Escape returns a held part;
- drag and drop still places a part;
- both refusal sentences, for their own conditions;
- all four faults, the missing-part messages, the POST block, the story beat;
- no overflow at 950 px and 124%.

## Migration

- `prototype/assembly.html` is replaced in place; the page keeps its name, so the host, the links and `sync-prototype.sh` are untouched.
- The data model stays: parts, places, dependencies, diagnostics. Only the rendering and the interaction change.
- The version stamp goes to `build page v7`.
- When it lands, the playtest script's build steps are rewritten for the new interaction, and one run confirms them.

## Not in this redesign

- Art. The case is CSS and labels; no models, no images.
- Sound.
- Any change to the lesson page, the matching task, or the bench interaction in Unity.
