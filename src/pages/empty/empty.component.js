import React from 'react';

import { ScrollView } from 'react-native';

import { AssetProvider } from '@wavemaker/app-rn-runtime/core/asset.provider';
import BasePage from '@wavemaker/app-rn-runtime/runtime/base-page.component';
import { useWatcher } from '@wavemaker/app-rn-runtime/runtime/watcher';
import { WmMemo } from '@wavemaker/app-rn-runtime/runtime/memo.component';
import { ThemeProvider } from '@wavemaker/app-rn-runtime/styles/theme';
import WmAppNavbar from '@wavemaker/app-rn-runtime/components/navigation/appnavbar/appnavbar.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmLeftPanel from '@wavemaker/app-rn-runtime/components/page/left-panel/left-panel.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmPartialContainer from '@wavemaker/app-rn-runtime/components/page/partial-container/partial-container.component';
import WmTabbar from '@wavemaker/app-rn-runtime/components/page/tabbar/tabbar.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './empty.script';
import styles from './empty.style';
import getVariables from './empty.variables';

const FragmentContext = React.createContext();

const PC_Mobile_navbar1 = ({ fragment }) => {
  return (
    <WmAppNavbar
      name="mobile_navbar1"
      onBackbtnclick={() => {
        fragment.goBack();
      }}
      onDrawerbuttonpress={() => {
        fragment.toggleDrawer();
      }}
      listener={fragment}
      showDrawerButton={fragment.hasDrawer}
    ></WmAppNavbar>
  );
};

const PC_Page_content1 = ({ fragment }) => {
  return (
    <WmPageContent
      columnwidth={12}
      name="page_content1"
      listener={fragment}
      showskeleton={
        fragment.App.isSkeletonEnabled() && !fragment.startUpVariablesLoaded
      }
    >
      <WmLinearlayout
        direction="column"
        spacing="4"
        name="linearlayout1"
        styles={{
          root: {
            paddingTop: 4,
            paddingRight: 4,
            paddingBottom: 4,
            paddingLeft: 4,
          },
          text: {},
        }}
        listener={fragment}
      >
        <WmLinearlayoutitem
          flexgrow={1}
          name="linearlayoutitem2"
          styles={{ root: { width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            name="linearlayout4"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem12"
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem13"
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              name="linearlayoutitem14"
              flexgrow={1}
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem5"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            name="linearlayout3"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem9"
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem10"
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              name="linearlayoutitem11"
              flexgrow={1}
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem4"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            name="linearlayout2"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem6"
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem7"
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
            <WmLinearlayoutitem
              name="linearlayoutitem8"
              flexgrow={1}
              marginLeft="4"
              styles={{ root: { marginLeft: 4 }, text: {} }}
              listener={fragment}
            ></WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
    </WmPageContent>
  );
};

const PC_Page1 = ({ fragment }) => {
  return (
    <WmPage name="page1" listener={fragment}>
      <>
        {fragment.setDrawerContent(
          <ThemeProvider value={fragment.theme}>
            <WmLeftPanel
              content="leftnav"
              name="left_panel1"
              listener={fragment}
              renderPartial={onLoad => (
                <WmPartialContainer
                  onLoad={onLoad}
                  partial_name="left_panel1_partial"
                  name="left_panel1_partial_container"
                  listener={fragment}
                  content={fragment.Widgets.left_panel1.content}
                  serviceDefinitions={fragment.serviceDefinitions}
                  parentWatcher={fragment.watcher}
                  themeToUse={fragment.theme}
                />
              )}
            ></WmLeftPanel>
          </ThemeProvider>,
          'slide-in'
        )}
      </>
      <PC_Mobile_navbar1 fragment={fragment} />
      <WmContent name="content1" listener={fragment}>
        <PC_Page_content1 fragment={fragment} />
      </WmContent>
      <WmTabbar
        name="mobile_tabbar1"
        listener={fragment}
        getDisplayExpression={label =>
          label && (fragment.appLocale[label.trim()] || label)
        }
        isActive={item =>
          fragment.appConfig.currentPage?.isCurrentPage(item.link)
        }
        activePage={fragment.appConfig.currentPage.pageName}
      ></WmTabbar>
    </WmPage>
  );
};

export default class emptyPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('empty-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new('empty-styleOverrides', styleOverrides);
    }
  }

  init() {
    const data = getVariables(this);
    this.fragmentVariables = data.Variables;
    this.fragmentActions = data.Actions;
    this.Variables = Object.assign(this.Variables, data.Variables);
    this.Actions = Object.assign(this.Actions, data.Actions);
    this.startUpVariables = [];
    this.startUpActions = [];
    this.autoUpdateVariables = [];
  }

  componentDidMount() {
    this.init();
    super.componentDidMount();
    super.onFragmentReady();
  }

  handleUrl(url) {
    return (
      this.App.handleUrl(url) ||
      ResourceResolver.resolve(url, this.resourceBaseUrl) ||
      super.handleUrl(url)
    );
  }

  renderPage() {
    const fragment = this.proxy;
    return (
      <FragmentContext.Provider value={this.proxy}>
        <AssetProvider value={path => this.handleUrl(path)}>
          <PC_Page1 fragment={fragment} />
        </AssetProvider>
      </FragmentContext.Provider>
    );
  }
}
