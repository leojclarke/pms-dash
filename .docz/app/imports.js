export const imports = {
  'src/ScoreCard.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-score-card" */ 'src/ScoreCard.mdx'
    ),
}
