export const imports = {
  'src/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'
    ),
  'src/app/components/ScoreCard.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-app-components-score-card" */ 'src/app/components/ScoreCard.mdx'
    ),
}
