import type { Schema, Struct } from '@strapi/strapi';

export interface AccordionAccordion extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface AccordionAccordionGrid extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordion_grids';
  info: {
    displayName: 'AccordionGrid';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<'card.card', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlogDetailPage extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_detail_pages';
  info: {
    displayName: 'Blog Detail Page';
  };
  attributes: {
    audioFile: Schema.Attribute.Media<'audios'>;
    bannerImage: Schema.Attribute.Media<'images'>;
    blogSection: Schema.Attribute.Component<'blog.blog-section', true>;
    postedOn: Schema.Attribute.Date;
    readingTime: Schema.Attribute.String;
    updatedOn: Schema.Attribute.Date;
  };
}

export interface BlogBlogSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_sections';
  info: {
    description: '';
    displayName: 'Blog Section';
  };
  attributes: {
    accordionSectionColumnView: Schema.Attribute.Component<
      'accordion.accordion',
      true
    >;
    accordionSectionGridView: Schema.Attribute.Component<
      'accordion.accordion-grid',
      true
    >;
    alternateText: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images'>;
    richtextContent: Schema.Attribute.Blocks;
    sectionHeading: Schema.Attribute.Text;
    teaserView: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'center'>;
    toolTipNote: Schema.Attribute.Component<'tooltip.tooltip', false>;
    videoUrl: Schema.Attribute.Text;
  };
}

export interface CardBlogCard extends Struct.ComponentSchema {
  collectionName: 'components_card_blog_cards';
  info: {
    displayName: 'Blog card';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'>;
    subHeading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface CardCard extends Struct.ComponentSchema {
  collectionName: 'components_card_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface CardIconCard extends Struct.ComponentSchema {
  collectionName: 'components_card_icon_cards';
  info: {
    displayName: 'Icon card';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface CardMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_card_media_cards';
  info: {
    displayName: 'Media card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.Text;
  };
}

export interface CarouselCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'cta.cta-button', false>;
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface CarouselLoginCarousel extends Struct.ComponentSchema {
  collectionName: 'components_carousel_login_carousels';
  info: {
    displayName: 'Login Carousel';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', false>;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ContactBlockContactBlock extends Struct.ComponentSchema {
  collectionName: 'components_contact_block_contact_blocks';
  info: {
    displayName: 'Contact Block';
  };
  attributes: {
    contactField: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean;
    url: Schema.Attribute.Text;
  };
}

export interface CtaCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_buttons';
  info: {
    displayName: 'CTA Button';
  };
  attributes: {
    action: Schema.Attribute.Enumeration<['link', 'Click', 'Read more']> &
      Schema.Attribute.DefaultTo<'link'>;
    media: Schema.Attribute.Media<'images', true>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<
      ['default', 'outline', 'white background', 'no bg']
    > &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface DownloadAbcdAppDownloadAbcdApp extends Struct.ComponentSchema {
  collectionName: 'components_download_abcd_app_download_abcd_apps';
  info: {
    displayName: 'Download ABCD App';
  };
  attributes: {
    description: Schema.Attribute.Text;
    downloadAbcdHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    >;
    downloadCtaSection: Schema.Attribute.Component<'cta.cta-button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    downloadMobileAppHeading: Schema.Attribute.String;
  };
}

export interface FooterFooterMediaSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_media_sections';
  info: {
    displayName: 'Footer Media Section';
  };
  attributes: {
    contactSection: Schema.Attribute.Component<'card.card', false>;
    media: Schema.Attribute.Media<'images'>;
    url: Schema.Attribute.Text;
  };
}

export interface FooterFooterMiddleSection extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_middle_sections';
  info: {
    displayName: 'Footer Middle Section';
  };
  attributes: {
    footerAccordionSection: Schema.Attribute.Component<
      'list.redirection-list',
      true
    >;
    footerMediaSection: Schema.Attribute.Component<
      'footer.footer-media-section',
      false
    >;
    footerSocialPlatformSection: Schema.Attribute.Component<
      'footer.footer-social-platforms-section',
      false
    >;
  };
}

export interface FooterFooterSocialPlatformsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_footer_footer_social_platforms_sections';
  info: {
    displayName: 'Footer Social Platforms Section';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    socialMedia: Schema.Attribute.Component<'media.media', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    title: Schema.Attribute.String;
  };
}

export interface HeaderCenterInnerBlockSection extends Struct.ComponentSchema {
  collectionName: 'components_header_center_inner_block_sections';
  info: {
    displayName: 'Center Inner Block Section';
  };
  attributes: {
    quickSearchHeading: Schema.Attribute.String & Schema.Attribute.Required;
    quickSearchSection: Schema.Attribute.Component<'search.quick-search', true>;
    topCardBlockSection: Schema.Attribute.Component<'carousel.carousel', true>;
    trackCardSection: Schema.Attribute.Component<'carousel.carousel', false>;
  };
}

export interface HeaderHeaderCardNavigationView extends Struct.ComponentSchema {
  collectionName: 'components_header_header_card_navigation_views';
  info: {
    displayName: 'Header card navigation view';
  };
  attributes: {
    cardLinks: Schema.Attribute.Component<'card.card', true>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
  };
}

export interface HeaderHeaderNavigationSection extends Struct.ComponentSchema {
  collectionName: 'components_header_header_navigation_sections';
  info: {
    displayName: 'Header Navigation Section';
  };
  attributes: {
    desktopMedia: Schema.Attribute.Media<'images'>;
    mobileMedia: Schema.Attribute.Media<'images'>;
    redirectionLogoUrl: Schema.Attribute.String;
    rightNavMobileContactSection: Schema.Attribute.Component<
      'contact-block.contact-block',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface HeaderHeaderSearch extends Struct.ComponentSchema {
  collectionName: 'components_header_header_searches';
  info: {
    displayName: 'Left Header Search';
  };
  attributes: {
    leftPopularSearchNav: Schema.Attribute.Component<
      'search.quick-search',
      true
    >;
    leftTrendingPlansNav: Schema.Attribute.Component<'carousel.carousel', true>;
    plansHeading: Schema.Attribute.String;
    popularSearchHeading: Schema.Attribute.String;
    popularSearchNav: Schema.Attribute.Component<'search.quick-search', true>;
    searchHeading: Schema.Attribute.String;
  };
}

export interface HeaderInnerNavigationHeadingsBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_header_inner_navigation_headings_blocks';
  info: {
    displayName: 'Inner Navigation Headings Block';
  };
  attributes: {
    centerSubBlockSection: Schema.Attribute.Component<
      'header.center-inner-block-section',
      false
    >;
    headingsNavigationBlockSection: Schema.Attribute.Component<
      'menu.menu',
      false
    >;
    leftBottomSubBlockSection: Schema.Attribute.Component<
      'header.left-inner-block-section',
      false
    >;
    rightSubBlockSection: Schema.Attribute.Component<
      'header.right-inner-block-section',
      false
    >;
  };
}

export interface HeaderLeftInnerBlockSection extends Struct.ComponentSchema {
  collectionName: 'components_header_left_inner_block_sections';
  info: {
    displayName: 'Left Inner Block Section';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', true>;
    descriptionSection: Schema.Attribute.Component<
      'style-heading.style-color-heading',
      false
    >;
  };
}

export interface HeaderLoginSection extends Struct.ComponentSchema {
  collectionName: 'components_header_login_sections';
  info: {
    displayName: 'Login Section';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'cta.cta-button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface HeaderMainHeaderNavigation extends Struct.ComponentSchema {
  collectionName: 'components_header_main_header_navigations';
  info: {
    displayName: 'Main Header Navigation';
  };
  attributes: {
    headerLogoSection: Schema.Attribute.Component<
      'header.header-navigation-section',
      false
    >;
    mainNavHeaderSection: Schema.Attribute.Component<
      'header.merged-inner-block-section',
      true
    >;
    rightNavigationSection: Schema.Attribute.Component<
      'header.right-header-navigation-section',
      false
    >;
  };
}

export interface HeaderMergedHeaderSearch extends Struct.ComponentSchema {
  collectionName: 'components_header_merged_header_searches';
  info: {
    displayName: 'Merged Header Search';
  };
  attributes: {
    leftHeaderSection: Schema.Attribute.Component<
      'header.header-search',
      false
    >;
    rightHeaderSection: Schema.Attribute.Component<
      'header.right-search-section',
      false
    >;
    searchIcon: Schema.Attribute.Media<'images'>;
  };
}

export interface HeaderMergedInnerBlockSection extends Struct.ComponentSchema {
  collectionName: 'components_header_merged_inner_block_sections';
  info: {
    displayName: 'Merged Inner Right Block Section';
  };
  attributes: {
    headerNavigationCardView: Schema.Attribute.Component<
      'header.header-card-navigation-view',
      true
    >;
    innerSubBlockHeadingsNavigationComponent: Schema.Attribute.Component<
      'header.inner-navigation-headings-block',
      true
    >;
    mainHeaderSubNavigationComponent: Schema.Attribute.Component<
      'menu.menu',
      false
    >;
    rightNavCtaSection: Schema.Attribute.Component<'cta.cta-button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    view: Schema.Attribute.Enumeration<['column view', 'card view']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'column view'>;
  };
}

export interface HeaderMiddleNavigationSection extends Struct.ComponentSchema {
  collectionName: 'components_header_middle_navigation_sections';
  info: {
    displayName: 'Middle Navigation Section';
  };
  attributes: {
    middleNavContactSection: Schema.Attribute.Component<
      'contact-block.contact-block',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    middleNavLinksSection: Schema.Attribute.Component<'menu.site-menu', true>;
  };
}

export interface HeaderRightHeaderNavigationSection
  extends Struct.ComponentSchema {
  collectionName: 'components_header_right_header_navigation_sections';
  info: {
    displayName: 'Right Header Navigation Section';
  };
  attributes: {
    rightNavMediaIcon: Schema.Attribute.Media<'images'>;
    rightSideHeaderNavigationView: Schema.Attribute.Component<
      'header.merged-inner-block-section',
      true
    >;
  };
}

export interface HeaderRightInnerBlockSection extends Struct.ComponentSchema {
  collectionName: 'components_header_right_inner_block_sections';
  info: {
    displayName: 'Right Inner Block Section';
  };
  attributes: {
    cardHeading: Schema.Attribute.String;
    relatedReadsSection: Schema.Attribute.Component<'card.media-card', true>;
    topCarouselSection: Schema.Attribute.Component<'carousel.carousel', true>;
  };
}

export interface HeaderRightSearchSection extends Struct.ComponentSchema {
  collectionName: 'components_header_right_search_sections';
  info: {
    displayName: 'Right Search Section';
  };
  attributes: {
    financialLeads: Schema.Attribute.Component<'card.media-card', true>;
    financialSolutionsHeading: Schema.Attribute.String;
    relatedReadsCarousel: Schema.Attribute.Component<'card.media-card', true>;
    relatedReadsHeading: Schema.Attribute.String;
  };
}

export interface HeaderTickerSection extends Struct.ComponentSchema {
  collectionName: 'components_header_ticker_sections';
  info: {
    displayName: 'Ticker Section';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', true>;
    headingSection: Schema.Attribute.Component<
      'style-heading.style-color-heading',
      false
    >;
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface InputFieldInputField extends Struct.ComponentSchema {
  collectionName: 'components_input_field_input_fields';
  info: {
    displayName: 'Input Field';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    inputFieldLabel: Schema.Attribute.String & Schema.Attribute.Required;
    inputFieldPlaceholder: Schema.Attribute.String & Schema.Attribute.Required;
    inputFieldType: Schema.Attribute.Enumeration<['text', 'number', 'email']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'text'>;
  };
}

export interface InputFieldInputLink extends Struct.ComponentSchema {
  collectionName: 'components_input_field_input_links';
  info: {
    displayName: 'Input Link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    termsConditionLabel: Schema.Attribute.String & Schema.Attribute.Required;
    termsConditionLink: Schema.Attribute.String;
  };
}

export interface ListList extends Struct.ComponentSchema {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'List';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subMenuListSection: Schema.Attribute.Component<'menu.menu', true>;
  };
}

export interface ListRedirectionList extends Struct.ComponentSchema {
  collectionName: 'components_list_redirection_lists';
  info: {
    displayName: 'Redirection List';
  };
  attributes: {
    heading: Schema.Attribute.String;
    subMenuList: Schema.Attribute.Component<'menu.redirection-menu', true>;
  };
}

export interface LoginModuleFormSubmission extends Struct.ComponentSchema {
  collectionName: 'components_login_module_form_submission_s';
  info: {
    displayName: 'Form Submission ';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    successDescription: Schema.Attribute.Text;
    successMessage: Schema.Attribute.String;
  };
}

export interface LoginModuleLoginModule extends Struct.ComponentSchema {
  collectionName: 'components_login_module_login_modules';
  info: {
    displayName: 'login Module';
  };
  attributes: {
    submissionSection: Schema.Attribute.Component<
      'login-module.form-submission',
      false
    >;
    userInputFormSection: Schema.Attribute.Component<
      'login-module.user-input-form',
      false
    >;
    verificationOTPSection: Schema.Attribute.Component<
      'login-module.otp-verification-form',
      false
    >;
  };
}

export interface LoginModuleOtpVerificationForm extends Struct.ComponentSchema {
  collectionName: 'components_login_module_otp_verification_forms';
  info: {
    displayName: 'OTP Verification form';
  };
  attributes: {
    heading: Schema.Attribute.String;
    verificationCTASection: Schema.Attribute.Component<'cta.cta-button', false>;
    verificationLabel: Schema.Attribute.String;
  };
}

export interface LoginModuleUserInputForm extends Struct.ComponentSchema {
  collectionName: 'components_login_module_user_input_forms';
  info: {
    displayName: 'User Input form';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', false>;
    inputMobileField: Schema.Attribute.Component<
      'input-field.input-field',
      false
    >;
    inputNameField: Schema.Attribute.Component<
      'input-field.input-field',
      false
    >;
    plansSection: Schema.Attribute.Component<'card.icon-card', true>;
    selectPlanIcon: Schema.Attribute.Media<'images'>;
    termsConditionCheckSection: Schema.Attribute.Component<
      'input-field.input-link',
      false
    >;
    userFormHeading: Schema.Attribute.String;
  };
}

export interface MediaMedia extends Struct.ComponentSchema {
  collectionName: 'components_media_media';
  info: {
    displayName: 'Media';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text;
  };
}

export interface MenuRedirectionMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_redirection_menus';
  info: {
    displayName: 'Redirection Menu';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface MenuSiteMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_site_menus';
  info: {
    displayName: 'Site Menu';
  };
  attributes: {
    navMenuSection: Schema.Attribute.Component<'menu.menu', false>;
    subMenuSection: Schema.Attribute.Component<'list.list', true>;
  };
}

export interface PageConfigurationPageProperties
  extends Struct.ComponentSchema {
  collectionName: 'components_page_configuration_page_properties';
  info: {
    displayName: 'Page Properties';
  };
  attributes: {
    addFeaturedArticles: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    addPopular: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    addRecent: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    addRelatedArticles: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    addTrendingArticles: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface PopularSearchPopularSearches extends Struct.ComponentSchema {
  collectionName: 'components_popular_search_popular_searches';
  info: {
    displayName: 'Popular Searches';
  };
  attributes: {
    heading: Schema.Attribute.String;
    popularSearches: Schema.Attribute.Component<'menu.redirection-menu', true>;
  };
}

export interface SearchQuickSearch extends Struct.ComponentSchema {
  collectionName: 'components_search_quick_searches';
  info: {
    displayName: 'Quick Search';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
    url: Schema.Attribute.Text;
  };
}

export interface SeoOgTags extends Struct.ComponentSchema {
  collectionName: 'components_seo_og_tags';
  info: {
    displayName: 'OG Tags';
  };
  attributes: {
    ogDescription: Schema.Attribute.Text;
    ogImage: Schema.Attribute.Media<'images'>;
    ogLocale: Schema.Attribute.String;
    ogSiteName: Schema.Attribute.Text;
    ogTitle: Schema.Attribute.Text;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
    ogVideo: Schema.Attribute.Media<'videos'>;
  };
}

export interface SeoRobotsConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_seo_robots_configurations';
  info: {
    description: '';
    displayName: 'Robots Configuration';
  };
  attributes: {
    follow: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    index: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface SeoSeoConfiguration extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_configurations';
  info: {
    description: '';
    displayName: 'SEO Configuration';
  };
  attributes: {
    browserTitle: Schema.Attribute.Text;
    displayTitle: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaKeywords: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.Text;
    ogTags: Schema.Attribute.Component<'seo.og-tags', false>;
    pageTitle: Schema.Attribute.Text;
    robotsConfigurationValues: Schema.Attribute.Component<
      'seo.robots-configuration',
      false
    >;
    tags: Schema.Attribute.Component<'seo.tags', false>;
    twitterTags: Schema.Attribute.Component<'seo.twitter-tags', false>;
  };
}

export interface SeoTags extends Struct.ComponentSchema {
  collectionName: 'components_seo_tags';
  info: {
    displayName: 'Tags';
  };
  attributes: {
    canonicalTags: Schema.Attribute.Text;
    customMetaTags: Schema.Attribute.Text;
    hreflangTags: Schema.Attribute.Text;
  };
}

export interface SeoTwitterTags extends Struct.ComponentSchema {
  collectionName: 'components_seo_twitter_tags';
  info: {
    displayName: 'Twitter tags';
  };
  attributes: {
    twitterCard: Schema.Attribute.String;
    twitterCreator: Schema.Attribute.String;
    twitterDescription: Schema.Attribute.Text;
    twitterImage: Schema.Attribute.Media<'images'>;
    twitterSite: Schema.Attribute.String;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    displayName: 'Social Media';
  };
  attributes: {
    socialMediaIcon: Schema.Attribute.Media<'images'>;
    socialMediaUrl: Schema.Attribute.Text;
  };
}

export interface StickyWrapperCreditScoreSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sticky_wrapper_credit_score_sections';
  info: {
    displayName: 'Credit score section';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    stickyModalHeading: Schema.Attribute.Component<'card.icon-card', false>;
    url: Schema.Attribute.Text;
  };
}

export interface StickyWrapperDownloadAbcdAppSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sticky_wrapper_download_abcd_app_sections';
  info: {
    displayName: 'Download ABCD App Section';
  };
  attributes: {
    ctaSection: Schema.Attribute.Component<'cta.cta-button', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images'>;
    media: Schema.Attribute.Media<'images'>;
    stickyModalHeading: Schema.Attribute.Component<'card.icon-card', false>;
  };
}

export interface StickyWrapperGetInTouchSection extends Struct.ComponentSchema {
  collectionName: 'components_sticky_wrapper_get_in_touch_sections';
  info: {
    displayName: 'Get in Touch Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    otpFormCTA: Schema.Attribute.Component<'cta.cta-button', false>;
    otpFormNameSection: Schema.Attribute.Component<
      'input-field.input-field',
      false
    >;
    otpFormNumberSection: Schema.Attribute.Component<
      'input-field.input-field',
      false
    >;
    stickyModalHeading: Schema.Attribute.Component<'card.icon-card', false>;
    styleHeadingSection: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    >;
    tabSection: Schema.Attribute.Component<'tab.card-tab', true>;
  };
}

export interface StickyWrapperStickyWrapperComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_sticky_wrapper_sticky_wrapper_components';
  info: {
    displayName: 'Our Companies Section';
  };
  attributes: {
    ourCompaniesSection: Schema.Attribute.Component<'list.list', false>;
    stickyModalHeading: Schema.Attribute.Component<'card.icon-card', false>;
  };
}

export interface StickyWrapperStickyWrapperSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sticky_wrapper_sticky_wrapper_sections';
  info: {
    displayName: 'Sticky wrapper section';
  };
  attributes: {
    downloadABCDAppSection: Schema.Attribute.Component<
      'sticky-wrapper.download-abcd-app-section',
      false
    >;
    freeCreditScoreSection: Schema.Attribute.Component<
      'sticky-wrapper.credit-score-section',
      false
    >;
    getInTouchSection: Schema.Attribute.Component<
      'sticky-wrapper.get-in-touch-section',
      false
    >;
    ourCompaniesSection: Schema.Attribute.Component<
      'sticky-wrapper.sticky-wrapper-component',
      false
    >;
  };
}

export interface StyleHeadingStyleColorHeading extends Struct.ComponentSchema {
  collectionName: 'components_style_heading_style_color_headings';
  info: {
    displayName: 'Style color heading';
  };
  attributes: {
    displayHeading: Schema.Attribute.Blocks;
  };
}

export interface StyleHeadingStyleHeading extends Struct.ComponentSchema {
  collectionName: 'components_style_heading_style_headings';
  info: {
    displayName: 'Style Heading';
  };
  attributes: {
    breakLine: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    color: Schema.Attribute.Enumeration<['black', 'default']> &
      Schema.Attribute.DefaultTo<'black'>;
    title: Schema.Attribute.String;
  };
}

export interface TabCardTab extends Struct.ComponentSchema {
  collectionName: 'components_tab_card_tabs';
  info: {
    displayName: 'Headings card';
  };
  attributes: {
    cardSection: Schema.Attribute.Component<'card.icon-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface TooltipTooltip extends Struct.ComponentSchema {
  collectionName: 'components_tooltip_tooltips';
  info: {
    displayName: 'Tooltip';
  };
  attributes: {
    media: Schema.Attribute.Media<'images'>;
    tooltipContent: Schema.Attribute.Blocks;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accordion.accordion': AccordionAccordion;
      'accordion.accordion-grid': AccordionAccordionGrid;
      'blog.blog-detail-page': BlogBlogDetailPage;
      'blog.blog-section': BlogBlogSection;
      'card.blog-card': CardBlogCard;
      'card.card': CardCard;
      'card.icon-card': CardIconCard;
      'card.media-card': CardMediaCard;
      'carousel.carousel': CarouselCarousel;
      'carousel.login-carousel': CarouselLoginCarousel;
      'contact-block.contact-block': ContactBlockContactBlock;
      'cta.cta-button': CtaCtaButton;
      'download-abcd-app.download-abcd-app': DownloadAbcdAppDownloadAbcdApp;
      'footer.footer-media-section': FooterFooterMediaSection;
      'footer.footer-middle-section': FooterFooterMiddleSection;
      'footer.footer-social-platforms-section': FooterFooterSocialPlatformsSection;
      'header.center-inner-block-section': HeaderCenterInnerBlockSection;
      'header.header-card-navigation-view': HeaderHeaderCardNavigationView;
      'header.header-navigation-section': HeaderHeaderNavigationSection;
      'header.header-search': HeaderHeaderSearch;
      'header.inner-navigation-headings-block': HeaderInnerNavigationHeadingsBlock;
      'header.left-inner-block-section': HeaderLeftInnerBlockSection;
      'header.login-section': HeaderLoginSection;
      'header.main-header-navigation': HeaderMainHeaderNavigation;
      'header.merged-header-search': HeaderMergedHeaderSearch;
      'header.merged-inner-block-section': HeaderMergedInnerBlockSection;
      'header.middle-navigation-section': HeaderMiddleNavigationSection;
      'header.right-header-navigation-section': HeaderRightHeaderNavigationSection;
      'header.right-inner-block-section': HeaderRightInnerBlockSection;
      'header.right-search-section': HeaderRightSearchSection;
      'header.ticker-section': HeaderTickerSection;
      'input-field.input-field': InputFieldInputField;
      'input-field.input-link': InputFieldInputLink;
      'list.list': ListList;
      'list.redirection-list': ListRedirectionList;
      'login-module.form-submission': LoginModuleFormSubmission;
      'login-module.login-module': LoginModuleLoginModule;
      'login-module.otp-verification-form': LoginModuleOtpVerificationForm;
      'login-module.user-input-form': LoginModuleUserInputForm;
      'media.media': MediaMedia;
      'menu.menu': MenuMenu;
      'menu.redirection-menu': MenuRedirectionMenu;
      'menu.site-menu': MenuSiteMenu;
      'page-configuration.page-properties': PageConfigurationPageProperties;
      'popular-search.popular-searches': PopularSearchPopularSearches;
      'search.quick-search': SearchQuickSearch;
      'seo.og-tags': SeoOgTags;
      'seo.robots-configuration': SeoRobotsConfiguration;
      'seo.seo-configuration': SeoSeoConfiguration;
      'seo.tags': SeoTags;
      'seo.twitter-tags': SeoTwitterTags;
      'social-media.social-media': SocialMediaSocialMedia;
      'sticky-wrapper.credit-score-section': StickyWrapperCreditScoreSection;
      'sticky-wrapper.download-abcd-app-section': StickyWrapperDownloadAbcdAppSection;
      'sticky-wrapper.get-in-touch-section': StickyWrapperGetInTouchSection;
      'sticky-wrapper.sticky-wrapper-component': StickyWrapperStickyWrapperComponent;
      'sticky-wrapper.sticky-wrapper-section': StickyWrapperStickyWrapperSection;
      'style-heading.style-color-heading': StyleHeadingStyleColorHeading;
      'style-heading.style-heading': StyleHeadingStyleHeading;
      'tab.card-tab': TabCardTab;
      'title.title': TitleTitle;
      'tooltip.tooltip': TooltipTooltip;
    }
  }
}
