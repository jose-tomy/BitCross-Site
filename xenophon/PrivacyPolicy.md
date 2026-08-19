# Xenophon — Privacy Policy

**Last updated:** 19 August 2026

Xenophon transcribes audio into text entirely on your iPhone. This policy explains what that means
in practice, what the app stores, and the few occasions it uses the network.

It is written to be specific rather than defensive. Where something is more complicated than the
marketing line, it says so — the section on backups below is the main example.

---

## The short version

- **Xenophon has no accounts, no server, and no analytics.** There is nothing to sign into and
  nowhere for your data to go.
- **Your audio and your transcripts never leave your iPhone.** They are not uploaded, not shared,
  and not seen by us or anyone else.
- **We collect nothing about you.** Not your recordings, not your transcripts, not usage data, not
  identifiers, not crash analytics of our own.
- The app uses the network for exactly three things, none of which send anything of yours:
  downloading the speech model once, downloading the speaker-identification model if you ask for
  that feature, and processing a purchase through Apple.

---

## What stays on your iPhone

All of the following is stored locally, in Xenophon's own private app storage, and is never
transmitted:

- **Recordings** you make in the app, and **audio files** you import or share into it.
- **Transcripts**, including titles you type and any speaker names you assign.
- **Speaker labels** worked out by the speaker-identification feature.
- **A small amount of app state** — whether you have finished the intro screens, whether you prefer
  to keep a copy of imported audio, how many transcriptions you have completed against the free
  allowance, and a few counters used to decide whether to ask you to rate the app. None of this
  identifies you, and none of it is transmitted.

Xenophon can read an audio file you explicitly choose — through the file picker, or by sharing one
into the app. It has no access to your files otherwise, and it does not scan your device.

---

## Backups: the one place "never leaves your device" needs a caveat

If you back your iPhone up, **your Xenophon transcripts and any audio the app has kept are included
in that backup**, the same as data from most other apps. If your backup goes to iCloud, that means a
copy sits in your Apple account.

This is worth stating plainly because it is the one exception to the simple version of the promise.
Some points that matter:

- It is **your** backup, under your Apple ID, protected by Apple's encryption — not a copy sent to
  us. We have no access to it and no way to request it.
- It happens because you have backups turned on for your device, not because Xenophon does anything
  to send it.
- You can exclude it by turning off backups for Xenophon in your device's iCloud settings.
- The downloaded speech and speaker models are **deliberately excluded** from backups, since they
  are large and can simply be downloaded again. Only your own content is included.

---

## When Xenophon uses the network, and what is sent

Xenophon works offline once it is set up. There are three exceptions, and **none of them transmit
your audio, your transcripts, or anything derived from them.**

### 1. Downloading the speech model (once)

Transcription runs on a speech model that the app downloads on first use, roughly 140 MB, from
Hugging Face — the service that hosts it on behalf of Argmax, Inc., who publish it. After that,
transcription needs no connection at all and works in airplane mode.

This is an ordinary file download. Hugging Face receives what any web server receives when you
download a file: your IP address and standard request information. It does not receive anything
about you from us, and it has no idea what you intend to transcribe.

### 2. Downloading the speaker-identification model (only if you ask)

If you use the "Identify speakers" feature, the app downloads a second model, roughly 33 MB, from
the same source. If you never use that feature, this download never happens. The same applies: a
file download, nothing of yours sent.

### 3. Purchases

Buying the unlimited unlock, or restoring a previous purchase, goes through Apple's App Store. Apple
handles the entire transaction. **We never see your payment details, your name, or your Apple ID.**
Xenophon only learns whether this device is entitled to the unlock — a yes or no, held locally.

---

## The microphone

Xenophon asks for microphone access only if you use the in-app recorder, and uses it only while a
recording is actually running. Recordings are written straight to the app's own private storage.
They are not streamed anywhere, and nothing listens in the background.

You can revoke microphone access at any time in your device's Settings; the rest of the app
continues to work, and you can still import audio.

---

## Diagnostics

Xenophon can assemble a diagnostic report of its own activity from the current session — the kind of
thing that helps work out why a download failed or a file would not open.

This is **entirely under your control**:

- Nothing is collected or sent in the background, ever.
- You open the report, read the whole thing on screen, and choose whether to send it and to whom.
- File paths are stripped out before it is shown to you.
- It contains no audio and no transcript text.

If you do send it to us, we use it only to diagnose the problem you contacted us about.

---

## Crash reports

We ship no crash-reporting service. If you have chosen to share crash and analytics data with
developers in your device's privacy settings, Apple may provide us with anonymised crash reports
through App Store Connect. Those are Apple's, subject to Apple's privacy terms, and contain no
recordings or transcripts. You can turn that off in Settings → Privacy & Security → Analytics &
Improvements.

---

## What Xenophon does not do

Stated explicitly, because in this category these are not safe assumptions:

- No user accounts, logins, or profiles.
- No analytics or telemetry SDKs of any kind.
- No advertising, ad networks, or ad identifiers.
- No tracking across apps or websites. Xenophon does not ask for tracking permission because it has
  nothing to track you with.
- No selling or sharing of data with data brokers — there is no data to sell.
- No use of your recordings or transcripts to train any model, ours or anyone else's.
- No cloud sync of transcripts.

---

## Your control over your data

Because everything is local, you do not need to ask us for anything:

- **Delete a transcript** in the app and its text, its saved audio copy, and its metadata are removed
  from your device.
- **Delete the app** and everything it stored goes with it.
- **Export** any transcript as text, or share the audio, at any time.

We hold no copy of your data, so there is nothing for us to retain, return, or delete on your
behalf. If you are exercising rights under the GDPR, the CCPA, or similar law, the honest answer is
that we hold no personal information about you to access, correct, port, or erase.

---

## Children

Xenophon is a professional tool and is not directed at children. We do not knowingly collect
information from anyone, of any age.

---

## Changes to this policy

If the app's behaviour changes in a way that affects this policy — for example if optional cloud
sync were ever added — this policy will be updated before that version ships, and the change will be
described rather than quietly folded in. The "last updated" date at the top will change.

---

## Contact

Questions about this policy, or about anything in it:

**contact@bitcross.app**

A person reads that address.
