export { MainPageLazy as MainPage } from './ui/MainPage.lazy';
export type { MainPageSchema } from './model/types/MainPageSchema';
export { loadLink } from './model/services/loadLink';
export { isLinkLoading, linkError, linkResult } from './model/selectors/getPageInfo';
