import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { IconFolderOptions } from "./quartz/components/types";

// components shared across all pages

const iconsOptions = {
  rootIconFolder: "quartz/static/icons",
  default: {
    file: "file",
  },
} as IconFolderOptions;


export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.MobileOnly(
      Component.ExplorerBurger({
        folderDefaultState: "open",
        folderClickBehavior: "link",
        iconSettings: iconsOptions,
      }),
    ),
    Component.MobileOnly(Component.PageTitle()),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
  ],
  footer: Component.Footer({
    links: {
      twitter: "https://twitter.com/_nooph",
      twitch: "https://www.twitch.tv/nooph",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(iconsOptions),
    Component.TagList(),
  ],
  left: [
    Component.DesktopOnly(Component.PageTitle()),
    Component.DesktopOnly(
      Component.ExplorerBurger({
        folderClickBehavior: "link",
        folderDefaultState: "collapsed",
        useSavedState: true,
        title: "",
        iconSettings: iconsOptions,
      }),
    ),
  ],
  right: [
    Component.DesktopOnly(Component.RecentNotes()),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: defaultContentPageLayout.beforeBody,
  left: defaultContentPageLayout.left,
  right: [],
}
