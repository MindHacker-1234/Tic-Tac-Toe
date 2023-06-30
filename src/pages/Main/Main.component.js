import React from 'react';

import { ScrollView } from 'react-native';

import { AssetProvider } from '@wavemaker/app-rn-runtime/core/asset.provider';
import BasePage from '@wavemaker/app-rn-runtime/runtime/base-page.component';
import { useWatcher } from '@wavemaker/app-rn-runtime/runtime/watcher';
import { WmMemo } from '@wavemaker/app-rn-runtime/runtime/memo.component';
import { ThemeProvider } from '@wavemaker/app-rn-runtime/styles/theme';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import WmComposite from '@wavemaker/app-rn-runtime/components/input/composite/composite.component';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import WmText from '@wavemaker/app-rn-runtime/components/input/text/text.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './Main.script';
import styles from './Main.style';
import getVariables from './Main.variables';

const FragmentContext = React.createContext();

const Listtemplate2 = React.memo(({ $item, $index, list, fragment }) => {
  const [currentItemWidgets] = React.useState({});
  list.itemWidgets[$index] = currentItemWidgets;
  const [listener] = React.useState({
    onComponentInit: c => {
      currentItemWidgets[c.name] = c;
    },
    onComponentDestroy: c => {
      delete currentItemWidgets[c.name];
    },
  });
  const { watch } = useWatcher(fragment.watcher);
  return (
    <WmListTemplate
      layout="inline"
      name="listtemplate2"
      id={'list_item_' + $index + '_listtemplate2'}
      listener={listener}
    >
      <WmPicture
        resizemode="contain"
        name="picture3"
        picturesource={$item.dataValue}
        shape="circle"
        id={'repeat_item_' + $index + '_picture3'}
        pictureplaceholder="resources/images/imagelists/default-image.png"
        styles={{ root: { height: 100, width: 100 }, text: {} }}
        classname={
          fragment.Widgets.AvatarsList1_1.selecteditem.name == $item.name
            ? 'pictureborder'
            : ''
        }
        listener={listener}
      ></WmPicture>
    </WmListTemplate>
  );
});

const PC_Avatarslist1_1 = ({ fragment }) => {
  return (
    <WmList
      listclass="list-group"
      itemclass={(item, index) => 'list-group-item'}
      template="true"
      template-name="Text List"
      itemsperrow="xs-1 sm-1 md-1 lg-1"
      statehandler="URL"
      name="AvatarsList1_1"
      dataset={fragment.Variables.Avatars.dataSet}
      navigation="Pager"
      direction="horizontal"
      selectfirstitem={true}
      loadingdata={fragment.Variables.Avatars.isExecuting}
      classname="media-list"
      listener={fragment}
      onEndReached={($event, $list) => {
        fragment.Variables.Avatars.doNext &&
          fragment.Variables.Avatars.doNext($list.state.currentPage).then(
            v => {
              $list.dataset = [
                ...$list.dataset,
                ...fragment.Variables.Avatars.dataSet,
              ];
            },
            () => {}
          );
      }}
      renderItem={($item, $index, list) => {
        return (
          <Listtemplate2
            $item={$item}
            $index={$index}
            list={list}
            fragment={fragment}
          />
        );
      }}
    ></WmList>
  );
};

const PC_Page_content1 = ({ fragment }) => {
  return (
    <WmPageContent
      columnwidth={12}
      name="page_content1"
      styles={{
        root: { backgroundColor: '#010B1A', paddingRight: 0, paddingLeft: 0 },
        text: {},
      }}
      listener={fragment}
      showskeleton={
        fragment.App.isSkeletonEnabled() && !fragment.startUpVariablesLoaded
      }
    >
      <WmLinearlayout
        direction="column"
        spacing="4"
        name="linearlayout3_1"
        styles={{
          root: {
            height: '100%',
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
          name="linearlayoutitem8_1"
          styles={{ root: { width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLayoutgrid name="layoutgrid2" listener={fragment}>
            <WmGridrow name="gridrow3" listener={fragment}>
              <WmGridcolumn
                columnwidth={6}
                name="gridcolumn3"
                xscolumnwidth={12}
                styles={{
                  root: {
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    paddingTop: 20,
                  },
                  text: { textAlign: 'center' },
                }}
                listener={fragment}
              >
                <WmLabel
                  name="label2_1"
                  caption="Welcome to"
                  skeletonwidth={'15%'}
                  skeletonheight={'15%'}
                  onTap={($event, widget) => {
                    fragment.label2_1Tap($event, widget);
                  }}
                  styles={{
                    root: {
                      color: '#ffffAD',
                      fontFamily: 'SignPainter',
                      paddingRight: 4,
                      paddingLeft: 4,
                    },
                    text: { color: '#ffffAD', fontFamily: 'SignPainter' },
                  }}
                  classname="h1"
                  listener={fragment}
                ></WmLabel>
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow name="gridrow4" listener={fragment}>
              <WmGridcolumn
                columnwidth={6}
                name="gridcolumn6"
                xscolumnwidth={12}
                styles={{
                  root: {
                    textAlign: 'center',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  },
                  text: { textAlign: 'center' },
                }}
                listener={fragment}
              >
                <WmLabel
                  name="label3"
                  caption="Tic-Tac-Toe"
                  skeletonwidth={'30%'}
                  skeletonheight={'30%'}
                  styles={{
                    root: {
                      color: '#77b1ff',
                      fontFamily: 'SofiaPro',
                      paddingRight: 4,
                      paddingLeft: 4,
                    },
                    text: { color: '#77b1ff', fontFamily: 'SofiaPro' },
                  }}
                  classname="h1"
                  listener={fragment}
                ></WmLabel>
              </WmGridcolumn>
            </WmGridrow>
          </WmLayoutgrid>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem10_1"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            spacing="4"
            name="linearlayout2"
            styles={{
              root: {
                borderColor: '#77b1ff',
                paddingTop: 20,
                paddingRight: 4,
                paddingBottom: 4,
                paddingLeft: 4,
              },
              text: {},
            }}
            classname="linearlayout2"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem3"
              listener={fragment}
            >
              <WmLinearlayout
                direction="column"
                name="linearlayout3"
                listener={fragment}
              >
                <WmLinearlayoutitem
                  flexgrow={1}
                  name="linearlayoutitem6"
                  styles={{
                    root: { paddingLeft: 20, width: '100%' },
                    text: {},
                  }}
                  listener={fragment}
                >
                  <WmLabel
                    name="label4"
                    caption="Profile"
                    skeletonwidth={'10%'}
                    skeletonheight={'10%'}
                    styles={{
                      root: {
                        color: '#BFDAFF',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                        marginTop: 5,
                        marginBottom: 10,
                        paddingRight: 4,
                      },
                      text: {
                        color: '#BFDAFF',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                      },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  flexgrow={1}
                  name="linearlayoutitem7"
                  marginTop="4"
                  styles={{
                    root: { marginTop: 4, paddingLeft: 20, width: '100%' },
                    text: {},
                  }}
                  listener={fragment}
                >
                  <WmLabel
                    name="label5"
                    caption="Name"
                    skeletonwidth={'10%'}
                    skeletonheight={'10%'}
                    styles={{
                      root: {
                        color: '#77b1ff',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                        marginBottom: 10,
                        paddingRight: 4,
                      },
                      text: {
                        color: '#77b1ff',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                      },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem8"
                  flexgrow={1}
                  marginTop="4"
                  styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
                  listener={fragment}
                >
                  <WmComposite name="composite1" listener={fragment}>
                    <WmContainer
                      name="container7"
                      styles={{ root: { width: '100%' }, text: {} }}
                      classname="col-md-9"
                      listener={fragment}
                    >
                      <WmText
                        name="text1"
                        placeholder="John Doe"
                        datavalue="John Doe"
                        styles={{
                          root: {
                            backgroundColor: '#142848',
                            color: '#BADAFF',
                            marginLeft: 20,
                          },
                          text: { color: '#BADAFF' },
                        }}
                        classname="placeholder"
                        listener={fragment}
                      ></WmText>
                    </WmContainer>
                  </WmComposite>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem9"
                  flexgrow={1}
                  marginTop="4"
                  styles={{
                    root: { marginTop: 4, paddingLeft: 20, width: '100%' },
                    text: {},
                  }}
                  listener={fragment}
                >
                  <WmLabel
                    name="label7"
                    caption="Choose your avatar"
                    skeletonwidth={'10%'}
                    skeletonheight={'10%'}
                    styles={{
                      root: {
                        color: '#77b1ff',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                        paddingRight: 4,
                      },
                      text: {
                        color: '#77b1ff',
                        fontSize: 14,
                        fontFamily: 'SofiaPro',
                      },
                    }}
                    classname="h1"
                    listener={fragment}
                  ></WmLabel>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem10"
                  flexgrow={1}
                  marginTop="4"
                  styles={{
                    root: { marginTop: 4, paddingLeft: 20, width: '100%' },
                    text: {},
                  }}
                  listener={fragment}
                >
                  <PC_Avatarslist1_1 fragment={fragment} />
                </WmLinearlayoutitem>
              </WmLinearlayout>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem13"
          flexgrow={1}
          marginTop="4"
          styles={{
            root: { height: 40, marginTop: 4, width: '100%' },
            text: {},
          }}
          listener={fragment}
        >
          <WmLayoutgrid
            name="layoutgrid7"
            classname="grid7"
            listener={fragment}
          >
            <WmGridrow
              name="gridrow13"
              styles={{ root: { paddingRight: 10 }, text: {} }}
              classname="grid7-row"
              listener={fragment}
            >
              <WmGridcolumn
                columnwidth={6}
                name="gridcolumn16"
                xscolumnwidth={6}
                styles={{
                  root: {
                    textAlign: 'right',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                  },
                  text: { textAlign: 'right' },
                }}
                classname="grid7-cell"
                listener={fragment}
              >
                <WmPicture
                  resizemode="contain"
                  name="picture6"
                  picturesource="resources/images/imagelists/Screenshot_2023-05-27_160337.png"
                  pictureplaceholder="resources/images/imagelists/default-image.png"
                  styles={{
                    root: { height: 20, marginTop: 10, width: 30 },
                    text: {},
                  }}
                  listener={fragment}
                ></WmPicture>
              </WmGridcolumn>
              <WmGridcolumn
                columnwidth={6}
                name="gridcolumn17"
                xscolumnwidth={6}
                styles={{
                  root: {
                    textAlign: 'right',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    flexWrap: 'wrap',
                  },
                  text: { textAlign: 'right' },
                }}
                classname="grid7-cell"
                listener={fragment}
              >
                <WmButton
                  caption="Next"
                  type="button"
                  name="button2"
                  iconclass="wm-sl-l sl-keyboard-arrow-right"
                  iconposition="right"
                  onTap={($event, widget) => {
                    fragment.button2Tap($event, widget);
                  }}
                  skeletonwidth={'10%'}
                  skeletonheight={'10%'}
                  styles={{
                    root: {
                      backgroundColor: '#77b1ff',
                      color: '#000000',
                      fontFamily: 'SofiaPro',
                      marginRight: 10,
                    },
                    text: { color: '#000000', fontFamily: 'SofiaPro' },
                  }}
                  classname="btn-primary icon3"
                  listener={fragment}
                ></WmButton>
              </WmGridcolumn>
            </WmGridrow>
            <WmGridrow
              name="gridrow14"
              classname="grid7-row"
              listener={fragment}
            ></WmGridrow>
          </WmLayoutgrid>
        </WmLinearlayoutitem>
      </WmLinearlayout>
    </WmPageContent>
  );
};

const PC_Mainpage = ({ fragment }) => {
  return (
    <WmPage name="mainpage" listener={fragment}>
      <WmContent name="content1" listener={fragment}>
        <PC_Page_content1 fragment={fragment} />
      </WmContent>
    </WmPage>
  );
};

export default class MainPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('Main-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new('Main-styleOverrides', styleOverrides);
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
          <PC_Mainpage fragment={fragment} />
        </AssetProvider>
      </FragmentContext.Provider>
    );
  }
}
