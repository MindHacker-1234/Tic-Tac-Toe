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
import WmRadioset from '@wavemaker/app-rn-runtime/components/input/radioset/radioset.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './selectgrid_Copy.script';
import styles from './selectgrid_Copy.style';
import getVariables from './selectgrid_Copy.variables';

const FragmentContext = React.createContext();

const Listtemplate1 = React.memo(({ $item, $index, list, fragment }) => {
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
      name="listtemplate1"
      id={'list_item_' + $index + '_listtemplate1'}
      listener={listener}
    >
      <WmComposite
        name="composite1"
        id={'repeat_item_' + $index + '_composite1'}
        listener={listener}
      >
        <WmRadioset
          name="radioset1"
          dataset="1"
          datafield="All Fields"
          show={true}
          readonly={false}
          disabled={false}
          id={'repeat_item_' + $index + '_radioset1'}
          styles={{ root: { marginLeft: 4 }, text: {} }}
          classname="radio"
          listener={listener}
        ></WmRadioset>
      </WmComposite>
      <WmLabel
        name="Text"
        caption={$item.dataValue}
        id={'repeat_item_' + $index + '_Text'}
        styles={{
          root: {
            color: '#bfdaff',
            paddingTop: 1,
            paddingRight: 12,
            paddingBottom: 1,
            paddingLeft: 12,
          },
          text: { color: '#bfdaff' },
        }}
        listener={listener}
      ></WmLabel>
    </WmListTemplate>
  );
});

const PC_Selectsidelist1 = ({ fragment }) => {
  return (
    <WmList
      listclass="list-group"
      itemclass={(item, index) => 'list-group-item'}
      template="true"
      template-name="Text List"
      itemsperrow="xs-1 sm-1 md-1 lg-1"
      statehandler="URL"
      name="selectsideList1"
      dataset={fragment.Variables.selectside.dataSet}
      navigation="Pager"
      direction="horizontal"
      loadingdata={fragment.Variables.selectside.isExecuting}
      styles={{ root: { paddingBottom: 0 }, text: {} }}
      classname="media-list"
      listener={fragment}
      itemkey={($item, $index) => fragment.eval(() => $item.name)}
      onEndReached={($event, $list) => {
        fragment.Variables.selectside.doNext &&
          fragment.Variables.selectside.doNext($list.state.currentPage).then(
            v => {
              $list.dataset = [
                ...$list.dataset,
                ...fragment.Variables.selectside.dataSet,
              ];
            },
            () => {}
          );
      }}
      renderItem={($item, $index, list) => {
        return (
          <Listtemplate1
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
      <WmComposite
        name="composite2"
        id={'repeat_item_' + $index + '_composite2'}
        listener={listener}
      >
        <WmRadioset
          name="radioset2"
          dataset="1"
          datafield="All Fields"
          disabled={false}
          id={'repeat_item_' + $index + '_radioset2'}
          classname="radio"
          listener={listener}
        ></WmRadioset>
      </WmComposite>
      <WmLabel
        name="Text"
        caption={$item.dataValue}
        id={'repeat_item_' + $index + '_Text'}
        styles={{
          root: {
            color: '#bfdaff',
            paddingTop: 1,
            paddingRight: 12,
            paddingBottom: 1,
            paddingLeft: 12,
          },
          text: { color: '#bfdaff' },
        }}
        classname="h4"
        listener={listener}
      ></WmLabel>
    </WmListTemplate>
  );
});

const PC_Selectgridlist1 = ({ fragment }) => {
  return (
    <WmList
      listclass="list-group"
      itemclass={(item, index) => 'list-group-item'}
      template="true"
      template-name="Text List"
      itemsperrow="xs-1 sm-1 md-1 lg-1"
      statehandler="URL"
      name="SelectgridList1"
      dataset={fragment.Variables.Selectgrid.dataSet}
      navigation="Pager"
      direction="horizontal"
      loadingdata={fragment.Variables.Selectgrid.isExecuting}
      classname="media-list list1"
      listener={fragment}
      itemkey={($item, $index) => fragment.eval(() => $item.name)}
      onEndReached={($event, $list) => {
        fragment.Variables.Selectgrid.doNext &&
          fragment.Variables.Selectgrid.doNext($list.state.currentPage).then(
            v => {
              $list.dataset = [
                ...$list.dataset,
                ...fragment.Variables.Selectgrid.dataSet,
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

const Listtemplate3 = React.memo(({ $item, $index, list, fragment }) => {
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
      name="listtemplate3"
      id={'list_item_' + $index + '_listtemplate3'}
      listener={listener}
    >
      <WmComposite
        name="composite3"
        id={'repeat_item_' + $index + '_composite3'}
        listener={listener}
      >
        <WmRadioset
          name="radioset3"
          dataset="1"
          datafield="All Fields"
          id={'repeat_item_' + $index + '_radioset3'}
          classname="radio"
          listener={listener}
        ></WmRadioset>
      </WmComposite>
      <WmLabel
        name="Text"
        caption={$item.dataValue}
        id={'repeat_item_' + $index + '_Text'}
        styles={{
          root: {
            color: '#bfdaff',
            paddingTop: 1,
            paddingRight: 12,
            paddingBottom: 1,
            paddingLeft: 12,
          },
          text: { color: '#bfdaff' },
        }}
        classname="h4"
        listener={listener}
      ></WmLabel>
      <WmLayoutgrid
        name="layoutgrid3_1"
        id={'repeat_item_' + $index + '_layoutgrid3_1'}
        listener={listener}
      >
        <WmGridrow
          name="gridrow5_1"
          id={'repeat_item_' + $index + '_gridrow5_1'}
          listener={listener}
        >
          <WmGridcolumn
            columnwidth={2}
            name="gridcolumn6_1"
            xscolumnwidth={2}
            id={'repeat_item_' + $index + '_gridcolumn6_1'}
            styles={{
              root: {
                textAlign: 'right',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
                paddingLeft: 20,
              },
              text: { textAlign: 'right' },
            }}
            classname="grid6"
            listener={listener}
          >
            <WmContainer
              name="container5"
              show={fragment.toBoolean(
                ($item.dataValue == 'Easy'
                  ? false
                  : $item.dataValue == 'Medium'
                  ? true
                  : $item.dataValue == 'Hard'
                  ? true
                  : false) || false
              )}
              id={'repeat_item_' + $index + '_container5'}
              styles={{
                root: {
                  backgroundColor: '#EA4C4C',
                  fontSize: 5,
                  height: 10,
                  marginTop: 10,
                  width: 10,
                },
                text: { fontSize: 5 },
              }}
              classname="container7"
              listener={listener}
            ></WmContainer>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={5}
            name="gridcolumn11"
            xscolumnwidth={2}
            id={'repeat_item_' + $index + '_gridcolumn11'}
            styles={{
              root: {
                textAlign: 'right',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              },
              text: { textAlign: 'right' },
            }}
            listener={listener}
          >
            <WmContainer
              name="container13"
              show={fragment.toBoolean(
                ($item.dataValue == 'Easy'
                  ? false
                  : $item.dataValue == 'Medium'
                  ? false
                  : $item.dataValue == 'Hard'
                  ? true
                  : false) || false
              )}
              id={'repeat_item_' + $index + '_container13'}
              styles={{
                root: {
                  backgroundColor: '#EA4C4C',
                  fontSize: 5,
                  height: 10,
                  marginTop: 10,
                  width: 10,
                },
                text: { fontSize: 5 },
              }}
              classname="container7"
              listener={listener}
            ></WmContainer>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={5}
            name="gridcolumn12"
            xscolumnwidth={2}
            id={'repeat_item_' + $index + '_gridcolumn12'}
            styles={{
              root: {
                textAlign: 'right',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              },
              text: { textAlign: 'right' },
            }}
            listener={listener}
          >
            <WmContainer
              name="container14"
              show={true}
              id={'repeat_item_' + $index + '_container14'}
              styles={{
                root: {
                  backgroundColor: '#EA4C4C',
                  fontSize: 5,
                  height: 10,
                  marginTop: 10,
                  opacity: 1,
                  width: 10,
                },
                text: { fontSize: 5 },
              }}
              classname="container7"
              listener={listener}
            ></WmContainer>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow
          name="gridrow6_1"
          id={'repeat_item_' + $index + '_gridrow6_1'}
          listener={listener}
        ></WmGridrow>
      </WmLayoutgrid>
    </WmListTemplate>
  );
});

const PC_Selectdifficultylevellist1 = ({ fragment }) => {
  return (
    <WmList
      listclass="list-group"
      itemclass={(item, index) => 'list-group-item'}
      template="true"
      template-name="Text List"
      itemsperrow="xs-1 sm-1 md-1 lg-1"
      statehandler="URL"
      name="selectdifficultylevelList1"
      dataset={fragment.Variables.selectdifficultylevel.dataSet}
      navigation="Pager"
      direction="horizontal"
      onSelect={(widget, $data) => {
        fragment.selectdifficultylevelList1Select(widget, $data);
      }}
      loadingdata={fragment.Variables.selectdifficultylevel.isExecuting}
      classname="media-list list2"
      listener={fragment}
      itemkey={($item, $index) => fragment.eval(() => $item.name)}
      onEndReached={($event, $list) => {
        fragment.Variables.selectdifficultylevel.doNext &&
          fragment.Variables.selectdifficultylevel
            .doNext($list.state.currentPage)
            .then(
              v => {
                $list.dataset = [
                  ...$list.dataset,
                  ...fragment.Variables.selectdifficultylevel.dataSet,
                ];
              },
              () => {}
            );
      }}
      renderItem={($item, $index, list) => {
        return (
          <Listtemplate3
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
      styles={{ root: { backgroundColor: '#010b1a' }, text: {} }}
      listener={fragment}
      showskeleton={
        fragment.App.isSkeletonEnabled() && !fragment.startUpVariablesLoaded
      }
    >
      <WmPicture
        resizemode="contain"
        name="picture3"
        picturesource="resources/images/imagelists/Screenshot_2023-05-28_165042.png"
        show={false}
        pictureplaceholder="resources/images/imagelists/default-image.png"
        styles={{
          root: { marginTop: 10, marginLeft: 90, width: '50%' },
          text: {},
        }}
        listener={fragment}
      ></WmPicture>
      <WmContainer
        name="container4"
        styles={{ root: { marginTop: 20 }, text: {} }}
        listener={fragment}
      >
        <WmLinearlayout
          direction="row"
          spacing="4"
          name="linearlayout6"
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
            name="linearlayoutitem13"
            listener={fragment}
          >
            <WmLayoutgrid
              name="layoutgrid2"
              classname="grid1"
              listener={fragment}
            >
              <WmGridrow
                name="gridrow3"
                classname="grid1-row"
                listener={fragment}
              >
                <WmGridcolumn
                  columnwidth={6}
                  name="gridcolumn5"
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
                  classname="grid1-cell"
                  listener={fragment}
                >
                  <WmLabel
                    name="label2_1"
                    caption="Welcome"
                    styles={{
                      root: {
                        color: '#ffffBD',
                        fontFamily: 'SignPainter',
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#ffffBD', fontFamily: 'SignPainter' },
                    }}
                    classname="h1"
                    listener={fragment}
                  ></WmLabel>
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow
                name="gridrow4"
                classname="grid1-row"
                listener={fragment}
              >
                <WmGridcolumn
                  columnwidth={6}
                  name="gridcolumn7"
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
                  classname="grid1-cell"
                  listener={fragment}
                >
                  <WmLabel
                    name="label3"
                    caption="Tic-Tac-Toe"
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
        </WmLinearlayout>
        <WmLinearlayout
          direction="row"
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
          classname="linear"
          listener={fragment}
        >
          <WmLinearlayoutitem
            flexgrow={1}
            name="linearlayoutitem2"
            listener={fragment}
          >
            <WmLinearlayout
              direction="column"
              name="linearlayout2"
              listener={fragment}
            >
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem4"
                styles={{ root: { width: '100%' }, text: {} }}
                listener={fragment}
              >
                <WmLinearlayout
                  direction="row"
                  name="linearlayout3"
                  listener={fragment}
                >
                  <WmLinearlayoutitem
                    flexgrow={1}
                    name="linearlayoutitem6"
                    listener={fragment}
                  >
                    <WmLinearlayout
                      direction="column"
                      name="linearlayout4"
                      listener={fragment}
                    >
                      <WmLinearlayoutitem
                        flexgrow={1}
                        name="linearlayoutitem9"
                        styles={{ root: { width: '100%' }, text: {} }}
                        listener={fragment}
                      >
                        <WmLabel
                          name="label5"
                          caption="GAME SETTINGS"
                          styles={{
                            root: { color: '#bfdaff', fontFamily: 'SofiaPro' },
                            text: { color: '#bfdaff', fontFamily: 'SofiaPro' },
                          }}
                          classname="label5"
                          listener={fragment}
                        ></WmLabel>
                      </WmLinearlayoutitem>
                      <WmLinearlayoutitem
                        name="linearlayoutitem16"
                        flexgrow={1}
                        marginTop="4"
                        styles={{
                          root: { marginTop: 4, width: '100%' },
                          text: {},
                        }}
                        listener={fragment}
                      >
                        <WmLabel
                          name="label8"
                          caption="Select side"
                          styles={{
                            root: {
                              color: '#77b1ff',
                              fontFamily: 'SofiaProRegular',
                              marginTop: 10,
                              marginBottom: 10,
                              width: '100%',
                            },
                            text: {
                              color: '#77b1ff',
                              fontFamily: 'SofiaProRegular',
                            },
                          }}
                          classname="label8"
                          listener={fragment}
                        ></WmLabel>
                      </WmLinearlayoutitem>
                      <WmLinearlayoutitem
                        name="linearlayoutitem17"
                        flexgrow={1}
                        marginTop="4"
                        styles={{
                          root: { marginTop: 4, width: '100%' },
                          text: {},
                        }}
                        listener={fragment}
                      >
                        <PC_Selectsidelist1 fragment={fragment} />
                      </WmLinearlayoutitem>
                      <WmLinearlayoutitem
                        name="linearlayoutitem15"
                        flexgrow={1}
                        marginTop="4"
                        styles={{
                          root: { marginTop: 4, width: '100%' },
                          text: {},
                        }}
                        listener={fragment}
                      >
                        <WmLabel
                          name="label7"
                          caption="Select grid size"
                          styles={{
                            root: {
                              color: '#77b1ff',
                              fontFamily: 'SofiaPro',
                              marginBottom: 10,
                            },
                            text: { color: '#77b1ff', fontFamily: 'SofiaPro' },
                          }}
                          listener={fragment}
                        ></WmLabel>
                      </WmLinearlayoutitem>
                      <WmLinearlayoutitem
                        name="linearlayoutitem14"
                        flexgrow={1}
                        marginTop="4"
                        styles={{
                          root: { marginTop: 4, width: '100%' },
                          text: {},
                        }}
                        listener={fragment}
                      >
                        <PC_Selectgridlist1 fragment={fragment} />
                      </WmLinearlayoutitem>
                      <WmLinearlayoutitem
                        flexgrow={1}
                        name="linearlayoutitem10"
                        marginTop="4"
                        styles={{
                          root: { marginTop: 4, width: '100%' },
                          text: {},
                        }}
                        listener={fragment}
                      >
                        <WmLinearlayout
                          direction="row"
                          name="linearlayout5"
                          listener={fragment}
                        >
                          <WmLinearlayoutitem
                            flexgrow={1}
                            name="linearlayoutitem11"
                            listener={fragment}
                          >
                            <WmLabel
                              name="label10"
                              caption="Select difficulty level"
                              styles={{
                                root: {
                                  color: '#77b1ff',
                                  fontFamily: 'SofiaPro',
                                  marginTop: 20,
                                  marginBottom: 10,
                                },
                                text: {
                                  color: '#77b1ff',
                                  fontFamily: 'SofiaPro',
                                },
                              }}
                              listener={fragment}
                            ></WmLabel>
                          </WmLinearlayoutitem>
                        </WmLinearlayout>
                      </WmLinearlayoutitem>
                    </WmLinearlayout>
                  </WmLinearlayoutitem>
                </WmLinearlayout>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem5"
                marginTop="4"
                styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
                listener={fragment}
              >
                <PC_Selectdifficultylevellist1 fragment={fragment} />
              </WmLinearlayoutitem>
            </WmLinearlayout>
          </WmLinearlayoutitem>
        </WmLinearlayout>
        <WmLayoutgrid
          name="layoutgrid3"
          classname="layout3"
          listener={fragment}
        >
          <WmGridrow
            name="gridrow5"
            classname="layout3-row"
            listener={fragment}
          >
            <WmGridcolumn
              columnwidth={4}
              name="gridcolumn6"
              xscolumnwidth={4}
              classname="layout3-cell"
              listener={fragment}
            >
              <WmButton
                caption="previous"
                type="button"
                name="button1"
                iconclass="wm-sl-l sl-keyboard-arrow-left"
                onTap={() => {
                  fragment.Actions.goToPage_Main.invoke();
                }}
                styles={{
                  root: { color: '#010b1a' },
                  text: { color: '#010b1a' },
                }}
                classname="btn-primary icon1"
                listener={fragment}
              ></WmButton>
            </WmGridcolumn>
            <WmGridcolumn
              columnwidth={4}
              name="gridcolumn7_2"
              xscolumnwidth={3}
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                },
                text: { textAlign: 'center' },
              }}
              classname="layout3-cell"
              listener={fragment}
            >
              <WmPicture
                resizemode="contain"
                name="picture2"
                picturesource="resources/images/imagelists/Screenshot_2023-05-28_165853.png"
                pictureplaceholder="resources/images/imagelists/default-image.png"
                styles={{
                  root: { height: '40%', marginTop: 5, width: '30%' },
                  text: {},
                }}
                listener={fragment}
              ></WmPicture>
            </WmGridcolumn>
            <WmGridcolumn
              columnwidth={4}
              name="gridcolumn10"
              xscolumnwidth={5}
              classname="layout3-cell"
              listener={fragment}
            >
              <WmButton
                caption="Start Playing"
                type="button"
                name="button2"
                onTap={() => {
                  fragment.Actions.goToPage_Turn.invoke();
                }}
                styles={{
                  root: { color: '#010b1a' },
                  text: { color: '#010b1a' },
                }}
                classname="btn-primary"
                listener={fragment}
              ></WmButton>
            </WmGridcolumn>
          </WmGridrow>
          <WmGridrow
            name="gridrow6"
            classname="layout3-row"
            listener={fragment}
          ></WmGridrow>
        </WmLayoutgrid>
      </WmContainer>
    </WmPageContent>
  );
};

const PC_Page1 = ({ fragment }) => {
  return (
    <WmPage name="page1" listener={fragment}>
      <WmContent name="content1" listener={fragment}>
        <PC_Page_content1 fragment={fragment} />
      </WmContent>
    </WmPage>
  );
};

export default class selectgrid_CopyPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('selectgrid_Copy-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new(
        'selectgrid_Copy-styleOverrides',
        styleOverrides
      );
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
