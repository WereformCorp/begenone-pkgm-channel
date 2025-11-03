# @begenone/pkgm-channel

This package handles everything related to **user channels** in the BEGENONE mobile app.

## Overview

Channels are public profiles where users can post videos and express their identity. This package manages:

- Creating and updating channel information
- Fetching channel data
- Managing subscriptions/followers
- Linking videos to specific channels

## Features

- 📡 Public-facing channel pages
- ✏️ Editable channel names, bios, and avatars
- 📁 Video grouping by channel
- 👥 Subscriber management (counts, follow/unfollow)

## Usage

This package is used by the mobile app to fetch and display channel data and handle user actions related to channels.

## Tech Stack

- React Hooks
- Shared UI components from `@begenone/pkgm-shared`
- State managed via context or prop drilling
