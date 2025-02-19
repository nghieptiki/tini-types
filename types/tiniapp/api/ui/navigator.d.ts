declare namespace my {
  interface INavigateBaseCallbackOptions<S= any, F = S, C = S> {
    success?: (res: S) => void
    fail?: (res: F) => void
    complete?: (res: C) => void
  }


  interface IAddIconsToNavigationIconOptions {
    image: string
    width?: number
    height?: number
    badge?: string
  }

  interface IAddIconsToNavigationOptions extends INavigateBaseCallbackOptions<true> {
    padding?: number
    titleBarColor?: string
    icons: IAddIconsToNavigationIconOptions[]
  }
  /**
   * Thêm icons vào navigation bar bên cạnh nút ba chấm nằm ngang (⋯) mở menu.
   * Also, check out {@link https://developers.tiki.vn/docs/api/ui/navigation-bar/add-icon-navigation-bar}
   */
  function addIconsToNavigationBar(options: IAddIconsToNavigationOptions): void


  interface IGetTitleColor extends INavigateBaseCallbackOptions<{color: string}> {
  }
  /**
   * Lấy background color của Navigation Bar.
   * Also, check out {@link https://developers.tiki.vn/docs/api/ui/navigation-bar/get-title-color}
   */
  function getTitleColor(options: IGetTitleColor): void

  interface INavigateToOptions extends INavigateBaseCallbackOptions {
    url: string
  }
  /**
   * my.navigateTo là API dùng để di chuyển từ màn hình hiện tại tới màn hình mong muốn trong ứng dụng.
   * https://developers.tiki.vn/docs/api/ui/route/navigate-to#gi%E1%BB%9Bi-thi%E1%BB%87u
   */
  function navigateTo(options: INavigateToOptions): void

  interface IRedirectToOptions extends INavigateBaseCallbackOptions {
    url: string
  }
  /**
   * redirect tới một page trong ứng dụng
   */
  function redirectTo(options: IRedirectToOptions): void

  interface INavigateBackOptions {
    delta?: number
  }
  /**
   * `my.navigateTo` là API dùng để đóng màn hình hiện tại và trở lại màn hình trước đó.
   * https://developers.tiki.vn/docs/api/ui/route/navigate-back
   */
  function navigateBack(options?: INavigateBackOptions): void

  interface IRelaunchOptions extends INavigateBaseCallbackOptions {
    url: string
  }
  /**
   * `my.reLaunch` là API dùng để đóng tất cả các pages hiện tại và nhảy tới một page nào đó trong ứng dụng.
   * https://developers.tiki.vn/docs/api/ui/route/re-launch
   */
  function reLaunch(options: IRelaunchOptions): void

  interface ISetNavigationBarOptions extends INavigateBaseCallbackOptions {
    title?: string
    image?: string
    backgroundColor?: string
    borderBottomColor?: string
    reset?: boolean
  }

  /**
   * my.setNavigationBar là API để set style cho Navigation Bar
   * https://developers.tiki.vn/docs/api/ui/navigation-bar/set-navigation-bar
   */
  function setNavigationBar(options: ISetNavigationBarOptions): void

  /**
   * `my.showNavigationBarLoading` là API để hiển thị loading animation trên thanh Navigation Bar của page hiện tại
   * https://developers.tiki.vn/docs/api/ui/navigation-bar/show-navigation-bar-loading
   */
  function showNavigationBarLoading(): void

  /**
   * `my.hideNavigationBarLoading` là API để ẩn đi loading animation trên thanh Navigation Bar của page hiện tại
   * https://developers.tiki.vn/docs/api/ui/navigation-bar/hide-navigation-bar-loading
   */
  function hideNavigationBarLoading(): void

  /**
   * `my.hideBackHome` là API để ẩn đi nút back trên tile Bar.
   * https://developers.tiki.vn/docs/api/ui/navigation-bar/hide-back-home
   */
  function hideBackHome(): void
}
