import React from 'react';

import { ScrollView } from 'react-native';

import { AssetProvider } from '@wavemaker/app-rn-runtime/core/asset.provider';
import BasePage from '@wavemaker/app-rn-runtime/runtime/base-page.component';
import { useWatcher } from '@wavemaker/app-rn-runtime/runtime/watcher';
import { WmMemo } from '@wavemaker/app-rn-runtime/runtime/memo.component';
import { ThemeProvider } from '@wavemaker/app-rn-runtime/styles/theme';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmIcon from '@wavemaker/app-rn-runtime/components/basic/icon/icon.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmList from '@wavemaker/app-rn-runtime/components/data/list/list.component';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './settings_Copy.script';
import styles from './settings_Copy.style';
import getVariables from './settings_Copy.variables';

const FragmentContext = React.createContext();

const Listtemplate4 = React.memo(({ $item, $index, list, fragment }) => {
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
      name="listtemplate4"
      id={'list_item_' + $index + '_listtemplate4'}
      listener={listener}
    >
      <WmLinearlayout
        direction="row"
        name="linearlayout16"
        id={'repeat_item_' + $index + '_linearlayout16'}
        listener={listener}
      >
        <WmLinearlayoutitem
          name="linearlayoutitem34_1"
          flexgrow={12}
          id={'repeat_item_' + $index + '_linearlayoutitem34_1'}
          listener={listener}
        >
          <WmLinearlayout
            direction="column"
            name="linearlayout17"
            id={'repeat_item_' + $index + '_linearlayout17'}
            styles={{ root: { height: 70 }, text: {} }}
            listener={listener}
          >
            <WmLinearlayoutitem
              flexgrow={12}
              name="linearlayoutitem37_1"
              id={'repeat_item_' + $index + '_linearlayoutitem37_1'}
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmIcon
                name="icon1"
                iconclass={
                  fragment.Widgets.selectsideList1.selecteditem &&
                  fragment.Widgets.selectsideList1.selecteditem.name ==
                    $item.name
                    ? 'wi wi-radio-button-checked'
                    : 'wi wi-radio-button-unchecked'
                }
                id={'repeat_item_' + $index + '_icon1'}
                styles={{
                  root: { color: '#25374e', opacity: 1 },
                  text: { color: '#25374e' },
                }}
                classname={
                  fragment.Widgets.selectsideList1.selecteditem &&
                  fragment.Widgets.selectsideList1.selecteditem.name ==
                    $item.name
                    ? 'checked-icon'
                    : 'unchecked-icon'
                }
                listener={listener}
              ></WmIcon>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={12}
              name="linearlayoutitem38_1"
              id={'repeat_item_' + $index + '_linearlayoutitem38_1'}
              marginTop="4"
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginTop: 4,
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmLabel
                name="Text"
                caption={$item.dataValue}
                skeletonwidth={'5%'}
                skeletonheight={'5%'}
                id={'repeat_item_' + $index + '_Text'}
                classname={
                  'h4 ' +
                  (fragment.Widgets.selectsideList1.selecteditem &&
                  fragment.Widgets.selectsideList1.selecteditem.name ==
                    $item.name
                    ? 'checked-text'
                    : 'unchecked-text')
                }
                listener={listener}
              ></WmLabel>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
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
      selectfirstitem={true}
      loadingdata={fragment.Variables.selectside.isExecuting}
      classname="media-list"
      listener={fragment}
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
          <Listtemplate4
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
      <WmLinearlayout
        direction="row"
        name="linearlayout22"
        id={'repeat_item_' + $index + '_linearlayout22'}
        listener={listener}
      >
        <WmLinearlayoutitem
          name="linearlayoutitem51"
          flexgrow={12}
          id={'repeat_item_' + $index + '_linearlayoutitem51'}
          listener={listener}
        >
          <WmLinearlayout
            direction="column"
            name="linearlayout23"
            id={'repeat_item_' + $index + '_linearlayout23'}
            styles={{ root: { height: 70 }, text: {} }}
            listener={listener}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem54"
              id={'repeat_item_' + $index + '_linearlayoutitem54'}
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmIcon
                name="icon2"
                iconclass={
                  fragment.Widgets.SelectgridList1.selecteditem &&
                  fragment.Widgets.SelectgridList1.selecteditem.name ==
                    $item.name
                    ? 'wi wi-radio-button-checked'
                    : 'wi wi-radio-button-unchecked'
                }
                id={'repeat_item_' + $index + '_icon2'}
                styles={{
                  root: { color: '#25374e' },
                  text: { color: '#25374e' },
                }}
                classname={
                  fragment.Widgets.SelectgridList1.selecteditem &&
                  fragment.Widgets.SelectgridList1.selecteditem.name ==
                    $item.name
                    ? 'checked-icon'
                    : 'unchecked-icon'
                }
                listener={listener}
              ></WmIcon>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem55"
              id={'repeat_item_' + $index + '_linearlayoutitem55'}
              marginTop="4"
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginTop: 4,
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmLabel
                name="Text"
                caption={$item.dataValue}
                skeletonwidth={'5%'}
                skeletonheight={'5%'}
                id={'repeat_item_' + $index + '_Text'}
                classname={
                  'h4 ' +
                  (fragment.Widgets.SelectgridList1.selecteditem &&
                  fragment.Widgets.SelectgridList1.selecteditem.name ==
                    $item.name
                    ? 'checked-text'
                    : 'unchecked-text')
                }
                listener={listener}
              ></WmLabel>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
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
      selectfirstitem={true}
      loadingdata={fragment.Variables.Selectgrid.isExecuting}
      classname="media-list"
      listener={fragment}
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
      <WmLinearlayout
        direction="row"
        name="linearlayout19"
        id={'repeat_item_' + $index + '_linearlayout19'}
        listener={listener}
      >
        <WmLinearlayoutitem
          name="linearlayoutitem43"
          flexgrow={12}
          id={'repeat_item_' + $index + '_linearlayoutitem43'}
          listener={listener}
        >
          <WmLinearlayout
            direction="column"
            name="linearlayout20"
            id={'repeat_item_' + $index + '_linearlayout20'}
            styles={{ root: { height: 70 }, text: {} }}
            listener={listener}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem46"
              id={'repeat_item_' + $index + '_linearlayoutitem46'}
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmIcon
                name="icon3"
                iconclass={
                  fragment.Widgets.selectdifficultylevelList1.selecteditem &&
                  fragment.Widgets.selectdifficultylevelList1.selecteditem
                    .name == $item.name
                    ? 'wi wi-radio-button-checked'
                    : 'wi wi-radio-button-unchecked'
                }
                id={'repeat_item_' + $index + '_icon3'}
                styles={{
                  root: { color: '#25374e' },
                  text: { color: '#25374e' },
                }}
                classname={
                  fragment.Widgets.selectdifficultylevelList1.selecteditem &&
                  fragment.Widgets.selectdifficultylevelList1.selecteditem
                    .name == $item.name
                    ? 'checked-icon'
                    : 'unchecked-icon'
                }
                listener={listener}
              ></WmIcon>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem47"
              id={'repeat_item_' + $index + '_linearlayoutitem47'}
              marginTop="4"
              styles={{
                root: {
                  textAlign: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  marginTop: 4,
                  width: '100%',
                },
                text: { textAlign: 'center' },
              }}
              listener={listener}
            >
              <WmLabel
                name="Text"
                caption={$item.dataValue}
                skeletonwidth={'5%'}
                skeletonheight={'5%'}
                id={'repeat_item_' + $index + '_Text'}
                classname={
                  'h4 ' +
                  (fragment.Widgets.selectdifficultylevelList1.selecteditem &&
                  fragment.Widgets.selectdifficultylevelList1.selecteditem
                    .name == $item.name
                    ? 'checked-text'
                    : 'unchecked-text')
                }
                listener={listener}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              name="linearlayoutitem50"
              flexgrow={1}
              id={'repeat_item_' + $index + '_linearlayoutitem50'}
              marginTop="4"
              styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
              listener={listener}
            >
              <WmLinearlayout
                direction="row"
                name="linearlayout15"
                show={true}
                id={'repeat_item_' + $index + '_linearlayout15'}
                listener={listener}
              >
                <WmLinearlayoutitem
                  name="linearlayoutitem37"
                  flexgrow={6}
                  id={'repeat_item_' + $index + '_linearlayoutitem37'}
                  listener={listener}
                ></WmLinearlayoutitem>
                <WmLinearlayoutitem
                  flexgrow={5}
                  name="linearlayoutitem38"
                  id={'repeat_item_' + $index + '_linearlayoutitem38'}
                  marginLeft="4"
                  styles={{ root: { marginLeft: 4 }, text: {} }}
                  listener={listener}
                >
                  <WmLinearlayout
                    direction="row"
                    name="linearlayout13"
                    horizontalalign="center"
                    verticalalign="center"
                    id={'repeat_item_' + $index + '_linearlayout13'}
                    styles={{
                      root: { paddingRight: 2, paddingLeft: 2 },
                      text: {},
                    }}
                    listener={listener}
                  >
                    <WmLinearlayoutitem
                      flexgrow={1}
                      name="linearlayoutitem31_1"
                      id={'repeat_item_' + $index + '_linearlayoutitem31_1'}
                      styles={{
                        root: {
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                        },
                        text: { textAlign: 'center' },
                      }}
                      listener={listener}
                    >
                      <WmContainer
                        show={true}
                        name="container1"
                        id={'repeat_item_' + $index + '_container1'}
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
                    </WmLinearlayoutitem>
                    <WmLinearlayoutitem
                      name="linearlayoutitem35"
                      flexgrow={1}
                      show={fragment.toBoolean(
                        ($item.dataValue == 'Medium'
                          ? true
                          : $item.dataValue == 'Easy'
                          ? false
                          : $item.dataValue == 'Hard'
                          ? true
                          : false) || false
                      )}
                      id={'repeat_item_' + $index + '_linearlayoutitem35'}
                      marginLeft="4"
                      styles={{
                        root: {
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          marginLeft: 4,
                        },
                        text: { textAlign: 'center' },
                      }}
                      listener={listener}
                    >
                      <WmContainer
                        show={fragment.toBoolean(
                          ($item.dataValue == 'Medium'
                            ? true
                            : $item.dataValue == 'Easy'
                            ? false
                            : $item.dataValue == 'Hard'
                            ? true
                            : false) || false
                        )}
                        name="container3"
                        id={'repeat_item_' + $index + '_container3'}
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
                    </WmLinearlayoutitem>
                    <WmLinearlayoutitem
                      name="linearlayoutitem36_1"
                      flexgrow={1}
                      show={fragment.toBoolean(
                        ($item.dataValue == 'Easy'
                          ? false
                          : $item.dataValue == 'Medium'
                          ? false
                          : $item.dataValue == 'Hard'
                          ? true
                          : false) || false
                      )}
                      id={'repeat_item_' + $index + '_linearlayoutitem36_1'}
                      marginLeft="4"
                      styles={{
                        root: {
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          marginLeft: 4,
                        },
                        text: { textAlign: 'center' },
                      }}
                      listener={listener}
                    >
                      <WmContainer
                        show={fragment.toBoolean(
                          ($item.dataValue == 'Easy'
                            ? false
                            : $item.dataValue == 'Medium'
                            ? false
                            : $item.dataValue == 'Hard'
                            ? true
                            : false) || false
                        )}
                        name="container2"
                        id={'repeat_item_' + $index + '_container2'}
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
                    </WmLinearlayoutitem>
                  </WmLinearlayout>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem39"
                  flexgrow={4}
                  id={'repeat_item_' + $index + '_linearlayoutitem39'}
                  marginLeft="4"
                  styles={{ root: { marginLeft: 4 }, text: {} }}
                  listener={listener}
                ></WmLinearlayoutitem>
              </WmLinearlayout>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
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
      selectfirstitem={true}
      loadingdata={fragment.Variables.selectdifficultylevel.isExecuting}
      classname="media-list"
      listener={fragment}
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
      <WmLinearlayout
        direction="column"
        spacing="4"
        name="linearlayout11"
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
          name="linearlayoutitem22"
          styles={{ root: { width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLayoutgrid
            name="layoutgrid1"
            classname="grid1"
            listener={fragment}
          >
            <WmGridrow
              name="gridrow1"
              classname="grid1-row"
              listener={fragment}
            >
              <WmGridcolumn
                columnwidth={6}
                xscolumnwidth={12}
                name="gridcolumn1"
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
                  caption="Welcome"
                  name="label1"
                  skeletonwidth={'15%'}
                  skeletonheight={'15%'}
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
              name="gridrow2"
              classname="grid1-row"
              listener={fragment}
            >
              <WmGridcolumn
                columnwidth={6}
                xscolumnwidth={12}
                name="gridcolumn2"
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
                  caption="Tic-Tac-Toe"
                  name="label2"
                  skeletonwidth={'15%'}
                  skeletonheight={'15%'}
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
          name="linearlayoutitem22_1"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="column"
            spacing="4"
            name="linearlayout1"
            styles={{
              root: {
                paddingTop: 24,
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
              name="linearlayoutitem1"
              styles={{ root: { width: '100%' }, text: {} }}
              classname="linear2"
              listener={fragment}
            >
              <WmLinearlayout
                direction="column"
                name="linearlayout2"
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
                    name="linearlayout3"
                    listener={fragment}
                  >
                    <WmLinearlayoutitem
                      flexgrow={1}
                      name="linearlayoutitem3"
                      listener={fragment}
                    >
                      <WmLinearlayout
                        direction="column"
                        name="linearlayout4"
                        horizontalalign="left"
                        verticalalign="top"
                        listener={fragment}
                      >
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem4"
                          styles={{
                            root: {
                              textAlign: 'left',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              flexWrap: 'wrap',
                              width: '100%',
                            },
                            text: { textAlign: 'left' },
                          }}
                          listener={fragment}
                        >
                          <WmLabel
                            caption="GAME SETTINGS"
                            name="label3"
                            skeletonwidth={'10%'}
                            skeletonheight={'10%'}
                            styles={{
                              root: {
                                color: '#bfdaff',
                                fontFamily: 'SofiaPro',
                              },
                              text: {
                                color: '#bfdaff',
                                fontFamily: 'SofiaPro',
                              },
                            }}
                            classname="label5"
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem5"
                          marginTop="4"
                          styles={{
                            root: {
                              textAlign: 'left',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              flexWrap: 'wrap',
                              marginTop: 4,
                              width: '100%',
                            },
                            text: { textAlign: 'left' },
                          }}
                          listener={fragment}
                        >
                          <WmLabel
                            caption="Select side"
                            name="label4"
                            skeletonwidth={'10%'}
                            skeletonheight={'10%'}
                            styles={{
                              root: {
                                color: '#77b1ff',
                                fontFamily: 'SofiaProRegular',
                                marginTop: 10,
                                marginBottom: 10,
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
                          flexgrow={1}
                          name="linearlayoutitem6"
                          marginTop="4"
                          styles={{
                            root: {
                              textAlign: 'left',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              flexWrap: 'wrap',
                              marginTop: 4,
                              width: '100%',
                            },
                            text: { textAlign: 'left' },
                          }}
                          listener={fragment}
                        >
                          <PC_Selectsidelist1 fragment={fragment} />
                        </WmLinearlayoutitem>
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem7"
                          marginTop="4"
                          styles={{
                            root: { marginTop: 4, width: '100%' },
                            text: {},
                          }}
                          listener={fragment}
                        >
                          <WmLabel
                            caption="Select grid size"
                            name="label6"
                            styles={{
                              root: {
                                color: '#77b1ff',
                                fontFamily: 'SofiaPro',
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
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem8"
                          marginTop="4"
                          styles={{
                            root: {
                              textAlign: 'left',
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              flexWrap: 'wrap',
                              marginTop: 4,
                              width: '100%',
                            },
                            text: { textAlign: 'left' },
                          }}
                          listener={fragment}
                        >
                          <PC_Selectgridlist1 fragment={fragment} />
                        </WmLinearlayoutitem>
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem9"
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
                              name="linearlayoutitem10"
                              listener={fragment}
                            >
                              <WmLinearlayout
                                direction="column"
                                name="linearlayout14"
                                listener={fragment}
                              >
                                <WmLinearlayoutitem
                                  flexgrow={1}
                                  name="linearlayoutitem33_1"
                                  styles={{ root: { width: '100%' }, text: {} }}
                                  listener={fragment}
                                >
                                  <WmLabel
                                    caption="Select difficulty level"
                                    name="label8"
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
                  </WmLinearlayout>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  flexgrow={1}
                  name="linearlayoutitem11"
                  marginTop="4"
                  styles={{
                    root: {
                      textAlign: 'left',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                      marginTop: 4,
                      width: '100%',
                    },
                    text: { textAlign: 'left' },
                  }}
                  listener={fragment}
                >
                  <PC_Selectdifficultylevellist1 fragment={fragment} />
                </WmLinearlayoutitem>
              </WmLinearlayout>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              name="linearlayoutitem31"
              flexgrow={1}
              marginTop="4"
              styles={{
                root: { marginTop: 4, paddingTop: 20, width: '100%' },
                text: {},
              }}
              listener={fragment}
            >
              <WmLinearlayout
                direction="row"
                name="linearlayout15_1"
                horizontalalign="center"
                verticalalign="center"
                listener={fragment}
              >
                <WmLinearlayoutitem
                  flexgrow={5}
                  name="linearlayoutitem32"
                  styles={{
                    root: {
                      textAlign: 'left',
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      flexWrap: 'wrap',
                    },
                    text: { textAlign: 'left' },
                  }}
                  listener={fragment}
                >
                  <WmButton
                    caption="previous"
                    type="button"
                    iconclass="wm-sl-l sl-keyboard-arrow-left"
                    onTap={() => {
                      fragment.Actions.goToPage_Main.invoke();
                    }}
                    name="button1"
                    skeletonwidth={'10%'}
                    skeletonheight={'10%'}
                    styles={{
                      root: {
                        backgroundColor: '#77b1ff',
                        color: '#010b1a',
                        fontFamily: 'SofiaPro',
                      },
                      text: { color: '#010b1a', fontFamily: 'SofiaPro' },
                    }}
                    classname="btn-primary icon1"
                    listener={fragment}
                  ></WmButton>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  flexgrow={2}
                  name="linearlayoutitem33"
                  marginLeft="4"
                  styles={{
                    root: {
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 4,
                    },
                    text: { textAlign: 'center' },
                  }}
                  listener={fragment}
                >
                  <WmPicture
                    resizemode="contain"
                    picturesource="resources/images/imagelists/Screenshot_2023-05-28_165853.png"
                    name="picture2"
                    pictureplaceholder="resources/images/imagelists/default-image.png"
                    styles={{ root: { height: 20, width: 30 }, text: {} }}
                    listener={fragment}
                  ></WmPicture>
                </WmLinearlayoutitem>
                <WmLinearlayoutitem
                  name="linearlayoutitem34"
                  flexgrow={5}
                  marginLeft="4"
                  styles={{
                    root: {
                      textAlign: 'right',
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      flexWrap: 'wrap',
                      marginLeft: 4,
                    },
                    text: { textAlign: 'right' },
                  }}
                  listener={fragment}
                >
                  <WmButton
                    caption="Start Playing"
                    type="button"
                    onTap={($event, widget) => {
                      fragment.button2Tap($event, widget);
                    }}
                    name="button2"
                    skeletonwidth={'10%'}
                    skeletonheight={'10%'}
                    styles={{
                      root: {
                        backgroundColor: '#77b1ff',
                        color: '#010b1a',
                        fontFamily: 'SofiaPro',
                      },
                      text: { color: '#010b1a', fontFamily: 'SofiaPro' },
                    }}
                    classname="btn-primary"
                    listener={fragment}
                  ></WmButton>
                </WmLinearlayoutitem>
              </WmLinearlayout>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
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

export default class settings_CopyPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('settings_Copy-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new(
        'settings_Copy-styleOverrides',
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
