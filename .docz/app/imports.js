export const imports = {
  'src/components/Box/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-box-doc" */ 'src/components/Box/doc.mdx'),
  'src/components/Button/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-button-doc" */ 'src/components/Button/doc.mdx'),
  'src/components/Container/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-container-doc" */ 'src/components/Container/doc.mdx'),
  'src/components/Link/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-link-doc" */ 'src/components/Link/doc.mdx'),
  'src/components/Modal/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-modal-doc" */ 'src/components/Modal/doc.mdx'),
  'src/components/Spinner/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-spinner-doc" */ 'src/components/Spinner/doc.mdx'),
  'src/components/Text/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-text-doc" */ 'src/components/Text/doc.mdx'),
  'src/components/Form/Input/doc.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-form-input-doc" */ 'src/components/Form/Input/doc.mdx'),
}
