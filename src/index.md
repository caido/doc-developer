---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Caido"
  text: "A lightweight web security auditing toolkit"
  image:
    src: /logo.png
    "no-shadow": true

  tagline: Developer Documentation
  actions:
    - theme: brand
      text: Get Started
      link: /quickstart.md
    - theme: alt
      text: Plugins
      link: /plugins/guides/
    - theme: alt
      text: Client SDK
      link: /client-sdk/guides/

features:
  - icon: 📖
    title: Plugin Guides
    details: Step-by-step instructions for building Caido plugins.
    link: /plugins/guides/
  - icon: 🎓
    title: Plugin Tutorials
    details: Hands-on learning experiences for plugin development.
    link: /plugins/tutorials/
  - icon: 📚
    title: Plugin Reference
    details: SDK and configuration reference for plugin authors.
    link: /plugins/reference/
  - icon: 💡
    title: Plugin Concepts
    details: Explanations of plugin architecture and runtime behavior.
    link: /plugins/concepts/
  - icon: 🔌
    title: Client SDK Guides
    details: Programmatic access to a running Caido instance.
    link: /client-sdk/guides/
---
