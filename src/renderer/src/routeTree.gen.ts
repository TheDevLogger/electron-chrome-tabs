/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutsImport } from './routes/_layouts'

// Create Virtual Routes

const ToolbarLazyImport = createFileRoute('/toolbar')()
const LayoutsIndexLazyImport = createFileRoute('/_layouts/')()
const LayoutsAboutLazyImport = createFileRoute('/_layouts/about')()

// Create/Update Routes

const ToolbarLazyRoute = ToolbarLazyImport.update({
  id: '/toolbar',
  path: '/toolbar',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/toolbar.lazy').then((d) => d.Route))

const LayoutsRoute = LayoutsImport.update({
  id: '/_layouts',
  getParentRoute: () => rootRoute,
} as any)

const LayoutsIndexLazyRoute = LayoutsIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutsRoute,
} as any).lazy(() =>
  import('./routes/_layouts/index.lazy').then((d) => d.Route),
)

const LayoutsAboutLazyRoute = LayoutsAboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => LayoutsRoute,
} as any).lazy(() =>
  import('./routes/_layouts/about.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layouts': {
      id: '/_layouts'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutsImport
      parentRoute: typeof rootRoute
    }
    '/toolbar': {
      id: '/toolbar'
      path: '/toolbar'
      fullPath: '/toolbar'
      preLoaderRoute: typeof ToolbarLazyImport
      parentRoute: typeof rootRoute
    }
    '/_layouts/about': {
      id: '/_layouts/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof LayoutsAboutLazyImport
      parentRoute: typeof LayoutsImport
    }
    '/_layouts/': {
      id: '/_layouts/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutsIndexLazyImport
      parentRoute: typeof LayoutsImport
    }
  }
}

// Create and export the route tree

interface LayoutsRouteChildren {
  LayoutsAboutLazyRoute: typeof LayoutsAboutLazyRoute
  LayoutsIndexLazyRoute: typeof LayoutsIndexLazyRoute
}

const LayoutsRouteChildren: LayoutsRouteChildren = {
  LayoutsAboutLazyRoute: LayoutsAboutLazyRoute,
  LayoutsIndexLazyRoute: LayoutsIndexLazyRoute,
}

const LayoutsRouteWithChildren =
  LayoutsRoute._addFileChildren(LayoutsRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutsRouteWithChildren
  '/toolbar': typeof ToolbarLazyRoute
  '/about': typeof LayoutsAboutLazyRoute
  '/': typeof LayoutsIndexLazyRoute
}

export interface FileRoutesByTo {
  '/toolbar': typeof ToolbarLazyRoute
  '/about': typeof LayoutsAboutLazyRoute
  '/': typeof LayoutsIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layouts': typeof LayoutsRouteWithChildren
  '/toolbar': typeof ToolbarLazyRoute
  '/_layouts/about': typeof LayoutsAboutLazyRoute
  '/_layouts/': typeof LayoutsIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/toolbar' | '/about' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/toolbar' | '/about' | '/'
  id: '__root__' | '/_layouts' | '/toolbar' | '/_layouts/about' | '/_layouts/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutsRoute: typeof LayoutsRouteWithChildren
  ToolbarLazyRoute: typeof ToolbarLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  LayoutsRoute: LayoutsRouteWithChildren,
  ToolbarLazyRoute: ToolbarLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layouts",
        "/toolbar"
      ]
    },
    "/_layouts": {
      "filePath": "_layouts.tsx",
      "children": [
        "/_layouts/about",
        "/_layouts/"
      ]
    },
    "/toolbar": {
      "filePath": "toolbar.lazy.tsx"
    },
    "/_layouts/about": {
      "filePath": "_layouts/about.lazy.tsx",
      "parent": "/_layouts"
    },
    "/_layouts/": {
      "filePath": "_layouts/index.lazy.tsx",
      "parent": "/_layouts"
    }
  }
}
ROUTE_MANIFEST_END */
