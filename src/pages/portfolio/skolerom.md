---
layout: ../../layouts/MarkdownPortfolioLayout.astro
title: 'Skolerom'
description: 'Skolerom is a Norwegian digital learning platform designed for schools. It aims to foster reading engagement (“leseglede”) and enthusiasm for learning (“læringslyst”).'
date: '2025-09-12'
duration: '2 years'

category: 'collaboration'
tech: ['ReactJS', 'NextJS', 'Tailwind', 'Zustand', 'Arktype', 'Devops', 'Solid', 'Scrumb']

featured: true
imageCover: 'Portfolio/skolerom/iy4bva'
gallery: 'Portfolio/skolerom'

demoLink: 'https://skolerom.no'

role: 'FrontEnd Developer'
company: 'DB Target'
---

Skolerom.no is a Norwegian digital learning platform designed for schools, offering multimodal content to foster reading engagement and knowledge exploration. It includes structured “learning paths,” cross-disciplinary themes, and over a thousand interactive tasks across subjects like science, social studies, and languages. The platform is accessible in multiple languages (Bokmål, Nynorsk, Kven, Finnish, Ukrainian) and integrates both screen-based and printable resources for flexible use in classrooms.

## Overview

Skolerom.no delivers high-quality, curriculum-aligned educational resources for students and teachers. It provides:

- A growing catalog of 500+ articles, 300+ learning paths, and 1000+ exercises.
- Coverage of all school levels: primary, lower secondary, and upper secondary.
- Cross-disciplinary modules on sustainability, health & life mastery, and citizenship.
- Seamless teacher–student workflows, with “rooms” dedicated to educators and learners.

## Key Features

Differentiated Reading: Each text is available in three reading tracks for varying skill levels.

- Interactive Tasks: Reflection, activities, and exploration tasks tied to curriculum goals.
- Multilingual Access: Content in Bokmål, Nynorsk, and additional languages for inclusivity.
- Authentication: Secure login via Feide (Norwegian school identity system).
- Offline Support: Option to print tasks and resources for hybrid learning contexts.

## Technical Architecture

### Front-end

- Next.js & Tailwind CSS: Powering a modern, performant, and fully responsive UI.
- TanStack Query & Zustand: Efficient state and data management across modules.
- Arktype: Type-safe schema validation for robustness in API interactions.
- Playwright (TDD): End-to-end testing strategy ensuring reliability and regression safety.

### Back-end

- WordPress Core (initial phase): Served as the CMS for content management and delivery.
- Custom Optimizations: Database tuning and caching strategies reduced core module load times from 22s → 500ms.
- Scalability: Progressive migration toward a headless architecture with APIs feeding modern frontend layers.

## Integrations & DevOps

- CI/CD Pipelines: Automated deployments with Vercel + GitHub Actions, improving delivery speed and stability.
- Agile Workflows: SCRUM-based sprints with close alignment between developers, PM, and PO.
- Collaboration: Technical leadership promoting trunk-based development, code reviews, and pair programming.
- Global Communication: Direct coordination with European stakeholders to deliver features aligned with both technical and educational needs.

## Impact

Through performance optimization, modern frontend integration, and continuous delivery practices, the platform now offers faster, more reliable access to educational content for thousands of students and teachers across Norway.
