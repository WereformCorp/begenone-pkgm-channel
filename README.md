# @wereform/pkgm-channel

Reusable channel UI components and layouts for the WeReform / BEGENONE platform.

This package provides ready-made React Native channel building blocks including headers, navigation tabs, and structured layouts for home, videos, wires, and about sections. It is designed to be composable and platform-agnostic across Expo, React Native, and shared app shells.

---

## Install

```bash
npm install @wereform/pkgm-channel
# or
yarn add @wereform/pkgm-channel
# or
pnpm add @wereform/pkgm-channel
```

---

## What this package gives you

- Channel UI components:

  - Channel header with banner, logo, subscribe button, and notifications
  - Horizontal channel navigation tabs

- Channel layouts:

  - Base channel layout wrapper
  - Home layout
  - Video layout
  - Wire layout
  - About layout

- Designed for:

  - React Native / Expo
  - Shared mobile-first channel pages
  - Composition with external data loaders and cards

---

## Exports

From `@wereform/pkgm-channel` you can import:

```ts
import {
  ChannelHeader,
  ChannelNavigation,
  ChannelBaseLayout,
  ChannelHomeLayout,
  ChannelVideoLayout,
  ChannelWireLayout,
  ChannelAboutLayout,
} from "@wereform/pkgm-channel";
```

---

## Core components

## ChannelHeader

Displays the channel banner, profile image, name, subscriber count, short description, subscribe button, and notification icon.

### Props

```ts
ChannelHeader({
  channelLogoUri,
  ChannelName,
  channelHeaderSubsCountText,
  bannerUri,
  miniAboutText,
});
```

- `channelLogoUri` URL of channel profile image
- `ChannelName` Channel display name
- `channelHeaderSubsCountText` Subscriber count text
- `bannerUri` Channel banner image URL
- `miniAboutText` Short channel description

---

## ChannelNavigation

Horizontal scrollable navigation tabs for channel sections.

### Props

```ts
ChannelNavigation({
  style,
  selectContentType,
});
```

- `style` Optional container style
- `selectContentType` Callback fired with selected tab name

Tabs included by default:

- Home
- Videos
- Wires
- About

---

## Layouts

## ChannelBaseLayout

Root wrapper for channel pages. Combines header, navigation, and content.

```ts
ChannelBaseLayout({
  channelLogoUri,
  channelUserName,
  channelHeaderSubsCountText,
  children,
  style,
});
```

Used as the outer container for all channel screens.

---

## ChannelHomeLayout

Home section layout for channel landing content.

```ts
ChannelHomeLayout({ children });
```

- Automatically handles selected navigation state
- Displays a “Featured” heading when active

---

## ChannelVideoLayout

Scrollable container for channel videos.

```ts
ChannelVideoLayout({ children });
```

---

## ChannelWireLayout

Scrollable container for channel wires.

```ts
ChannelWireLayout({ children });
```

---

## ChannelAboutLayout

Displays channel profile details, social links, and long-form about text.

### Props

```ts
ChannelAboutLayout({
  content,
  channelLogoUri,
  aboutName,
  aboutSubtitle,
  socialMediaLink1,
  socialMediaLink2,
  socialIcon1,
  socialIcon2,
});
```

- `content` Long-form about text
- `channelLogoUri` Channel profile image
- `aboutName` Channel name
- `aboutSubtitle` Short tagline
- `socialMediaLink1` First social URL
- `socialMediaLink2` Second social URL
- `socialIcon1` Ionicons name for first icon
- `socialIcon2` Ionicons name for second icon

Links are normalized automatically before opening.

---

## Typical usage

```ts
<ChannelBaseLayout>
  <ChannelHomeLayout>{/* featured content */}</ChannelHomeLayout>

  <ChannelVideoLayout>{/* video cards */}</ChannelVideoLayout>

  <ChannelWireLayout>{/* wire cards */}</ChannelWireLayout>

  <ChannelAboutLayout
    content="Long form channel description"
    aboutName="WeReform"
    aboutSubtitle="Long form breakdowns and experiments"
  />
</ChannelBaseLayout>
```

---

## Design philosophy

- UI-only package
- No data fetching
- No business logic
- Fully controlled by parent app
- Optimized for composition, not opinionated routing

---

## License

MIT License

Copyright (c) 2025 WeReform / BEGENONE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

```

```
