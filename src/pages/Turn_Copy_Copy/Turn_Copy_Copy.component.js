import React from 'react';

import { ScrollView } from 'react-native';

import { AssetProvider } from '@wavemaker/app-rn-runtime/core/asset.provider';
import BasePage from '@wavemaker/app-rn-runtime/runtime/base-page.component';
import { useWatcher } from '@wavemaker/app-rn-runtime/runtime/watcher';
import { WmMemo } from '@wavemaker/app-rn-runtime/runtime/memo.component';
import { ThemeProvider } from '@wavemaker/app-rn-runtime/styles/theme';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmIcon from '@wavemaker/app-rn-runtime/components/basic/icon/icon.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLinearlayout from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayout.component';
import WmLinearlayoutitem from '@wavemaker/app-rn-runtime/components/container/linearlayout/linearlayoutitem/linearlayoutitem.component';
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './Turn_Copy_Copy.script';
import styles from './Turn_Copy_Copy.style';
import getVariables from './Turn_Copy_Copy.variables';

const FragmentContext = React.createContext();

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
          name="linearlayoutitem19_1"
          styles={{ root: { width: '100%' }, text: {} }}
          listener={fragment}
        >
          <WmLinearlayout
            direction="column"
            name="linearlayout12"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem21_1"
              styles={{ root: { width: '100%' }, text: {} }}
              listener={fragment}
            >
              <WmLayoutgrid
                name="layoutgrid2"
                classname="grid2"
                listener={fragment}
              >
                <WmGridrow
                  name="gridrow3"
                  classname="grid2-row"
                  listener={fragment}
                >
                  <WmGridcolumn
                    columnwidth={6}
                    name="gridcolumn5"
                    xscolumnwidth={6}
                    classname="grid2-cell"
                    listener={fragment}
                  >
                    <WmLabel
                      name="label2"
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
                      classname="h3"
                      listener={fragment}
                    ></WmLabel>
                  </WmGridcolumn>
                  <WmGridcolumn
                    columnwidth={6}
                    name="gridcolumn6"
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
                    classname="grid2-cell"
                    listener={fragment}
                  >
                    <WmContainer
                      name="container1"
                      onTap={() => {
                        fragment.Actions.goToPage_settings_Copy.invoke();
                      }}
                      styles={{
                        root: {
                          fontSize: 15,
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                        },
                        text: { fontSize: 15, textAlign: 'center' },
                      }}
                      classname="container1"
                      listener={fragment}
                    >
                      <WmIcon
                        name="icon4"
                        iconclass="wi wi-settings"
                        iconsize={20}
                        iconposition="right"
                        styles={{
                          root: { color: '#77b1ff', opacity: 1 },
                          text: { color: '#77b1ff' },
                        }}
                        classname="settings"
                        listener={fragment}
                      ></WmIcon>
                    </WmContainer>
                  </WmGridcolumn>
                </WmGridrow>
                <WmGridrow
                  name="gridrow4"
                  classname="grid2-row"
                  listener={fragment}
                ></WmGridrow>
              </WmLayoutgrid>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem22"
              marginTop="4"
              styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
              listener={fragment}
            >
              <WmLayoutgrid name="layoutgrid3" listener={fragment}>
                <WmGridrow
                  name="gridrow5"
                  classname="grid4"
                  listener={fragment}
                >
                  <WmGridcolumn
                    columnwidth={6}
                    name="gridcolumn5_1"
                    xscolumnwidth={6}
                    styles={{
                      root: {
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        paddingRight: 20,
                        paddingLeft: 30,
                      },
                      text: { textAlign: 'center' },
                    }}
                    listener={fragment}
                  >
                    <WmLabel
                      name="label3"
                      caption="Your Turn!"
                      styles={{
                        root: {
                          color: '#C4A8FF',
                          marginBottom: 5,
                          paddingRight: 4,
                          paddingLeft: 4,
                        },
                        text: { color: '#C4A8FF' },
                      }}
                      listener={fragment}
                    ></WmLabel>
                    <WmContainer
                      name="container2"
                      styles={{
                        root: {
                          height: 260,
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          marginTop: 0,
                          width: 130,
                        },
                        text: { textAlign: 'center' },
                      }}
                      classname="panel1"
                      listener={fragment}
                    >
                      <WmLinearlayout
                        direction="row"
                        name="linearlayout18"
                        styles={{
                          root: {
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingLeft: 3,
                          },
                          text: {},
                        }}
                        classname="layout18"
                        listener={fragment}
                      >
                        <WmLinearlayoutitem
                          name="linearlayoutitem34"
                          listener={fragment}
                        >
                          <WmLabel
                            name="label21"
                            caption="P1 -"
                            styles={{
                              root: {
                                color: '#C4A8FF',
                                marginTop: 3,
                                marginLeft: 3,
                              },
                              text: { color: '#C4A8FF' },
                            }}
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem35"
                          marginLeft="4"
                          styles={{ root: { marginLeft: 4 }, text: {} }}
                          listener={fragment}
                        >
                          <WmLabel
                            name="label20"
                            caption={
                              fragment.Variables.Player.dataSet.data.playername
                            }
                            styles={{
                              root: { color: '#C4A8FF', marginTop: 3 },
                              text: { color: '#C4A8FF' },
                            }}
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                      <WmLinearlayout
                        direction="row"
                        name="linearlayout16"
                        listener={fragment}
                      >
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem34_1"
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
                          <WmLinearlayout
                            direction="column"
                            name="linearlayout17"
                            listener={fragment}
                          >
                            <WmLinearlayoutitem
                              flexgrow={1}
                              name="linearlayoutitem36"
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
                              listener={fragment}
                            >
                              <WmPicture
                                resizemode="contain"
                                name="picture1"
                                picturesource={
                                  fragment.Variables.Player.dataSet.data
                                    .playeravatar
                                }
                                pictureplaceholder="resources/images/imagelists/default-image.png"
                                styles={{
                                  root: { height: 90, marginTop: 5, width: 75 },
                                  text: {},
                                }}
                                listener={fragment}
                              ></WmPicture>
                            </WmLinearlayoutitem>
                          </WmLinearlayout>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                      <WmLinearlayout
                        direction="row"
                        name="linearlayout14_2"
                        horizontalalign="center"
                        verticalalign="center"
                        classname="layout18"
                        listener={fragment}
                      >
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem24_1"
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
                            name="label6"
                            caption={
                              fragment.Variables.Player.dataSet.data
                                .playerchoice
                            }
                            styles={{
                              root: {
                                color: '#C4A8FF',
                                fontSize: 40,
                                paddingRight: 4,
                                paddingLeft: 4,
                              },
                              text: { color: '#C4A8FF', fontSize: 40 },
                            }}
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                      <WmLinearlayout
                        direction="row"
                        spacing="4"
                        name="linearlayout9"
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
                          name="linearlayoutitem21"
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
                          <WmLinearlayout
                            direction="column"
                            name="linearlayout14_1"
                            listener={fragment}
                          >
                            <WmLinearlayoutitem
                              name="linearlayoutitem26_1"
                              flexgrow={1}
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
                              listener={fragment}
                            >
                              <WmLabel
                                name="label7"
                                caption="0"
                                styles={{
                                  root: {
                                    color: '#C4A8FF',
                                    fontSize: 40,
                                    paddingRight: 4,
                                    paddingLeft: 4,
                                  },
                                  text: { color: '#C4A8FF', fontSize: 40 },
                                }}
                                listener={fragment}
                              ></WmLabel>
                            </WmLinearlayoutitem>
                          </WmLinearlayout>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                    </WmContainer>
                  </WmGridcolumn>
                  <WmGridcolumn
                    columnwidth={6}
                    name="gridcolumn6_1"
                    xscolumnwidth={6}
                    styles={{
                      root: { paddingRight: 30, paddingLeft: 10 },
                      text: {},
                    }}
                    listener={fragment}
                  >
                    <WmContainer
                      name="container5"
                      styles={{
                        root: {
                          height: 260,
                          textAlign: 'center',
                          flexDirection: 'row',
                          justifyContent: 'center',
                          flexWrap: 'wrap',
                          marginTop: 24,
                          paddingRight: 0,
                          paddingLeft: 0,
                          width: 130,
                        },
                        text: { textAlign: 'center' },
                      }}
                      classname="container5"
                      listener={fragment}
                    >
                      <WmLayoutgrid
                        name="layoutgrid5"
                        styles={{ root: { width: '100%' }, text: {} }}
                        classname="grid5"
                        listener={fragment}
                      >
                        <WmGridrow
                          name="gridrow9"
                          styles={{ root: { paddingRight: 5 }, text: {} }}
                          classname="grid5-row"
                          listener={fragment}
                        >
                          <WmGridcolumn
                            columnwidth={2}
                            name="gridcolumn11"
                            xscolumnwidth={9}
                            styles={{
                              root: {
                                textAlign: 'left',
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap',
                                paddingRight: 20,
                              },
                              text: { textAlign: 'left' },
                            }}
                            classname="grid5-cell"
                            listener={fragment}
                          >
                            <WmLabel
                              name="label5"
                              caption="P2 - AI"
                              styles={{
                                root: {
                                  color: '#FFD9AD',
                                  fontSize: 12,
                                  marginRight: 10,
                                  marginLeft: 5,
                                  paddingTop: 7,
                                },
                                text: { color: '#FFD9AD', fontSize: 12 },
                              }}
                              listener={fragment}
                            ></WmLabel>
                          </WmGridcolumn>
                          <WmGridcolumn
                            columnwidth={2}
                            name="gridcolumn12"
                            xscolumnwidth={1}
                            styles={{
                              root: {
                                textAlign: 'right',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                flexWrap: 'wrap',
                                paddingBottom: 0,
                              },
                              text: { textAlign: 'right' },
                            }}
                            classname="grid5-cell"
                            listener={fragment}
                          >
                            <WmContainer
                              name="container11"
                              styles={{
                                root: {
                                  backgroundColor: '#EA4C4C',
                                  fontSize: 5,
                                  height: 10,
                                  marginTop: 10,
                                  marginLeft: 10,
                                  width: 10,
                                },
                                text: { fontSize: 5 },
                              }}
                              classname="container7"
                              listener={fragment}
                            ></WmContainer>
                          </WmGridcolumn>
                          <WmGridcolumn
                            columnwidth={2}
                            name="gridcolumn10"
                            xscolumnwidth={1}
                            styles={{
                              root: {
                                textAlign: 'right',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                flexWrap: 'wrap',
                                paddingBottom: 0,
                              },
                              text: { textAlign: 'right' },
                            }}
                            classname="grid5-cell"
                            listener={fragment}
                          >
                            <WmContainer
                              name="container13"
                              show={fragment.toBoolean(
                                (fragment.pageParams.playerlevel == 'Easy'
                                  ? fragment.fasle
                                  : true) || false
                              )}
                              styles={{
                                root: {
                                  backgroundColor: '#EA4C4C',
                                  fontSize: 5,
                                  height: 10,
                                  marginTop: 10,
                                  marginLeft: 10,
                                  width: 10,
                                },
                                text: { fontSize: 5 },
                              }}
                              classname="container7"
                              listener={fragment}
                            ></WmContainer>
                          </WmGridcolumn>
                          <WmGridcolumn
                            columnwidth={2}
                            name="gridcolumn9"
                            xscolumnwidth={1}
                            styles={{
                              root: {
                                textAlign: 'right',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                flexWrap: 'wrap',
                                paddingBottom: 0,
                              },
                              text: { textAlign: 'right' },
                            }}
                            classname="grid5-cell"
                            listener={fragment}
                          >
                            <WmContainer
                              name="container12"
                              show={fragment.toBoolean(
                                (fragment.pageParams.playerlevel == 'Easy' ||
                                fragment.pageParams.playerlevel == 'Medium'
                                  ? false
                                  : true) || false
                              )}
                              styles={{
                                root: {
                                  backgroundColor: '#EA4C4C',
                                  fontSize: 5,
                                  height: 10,
                                  marginTop: 10,
                                  marginLeft: 10,
                                  width: 10,
                                },
                                text: { fontSize: 5 },
                              }}
                              classname="container7"
                              listener={fragment}
                            ></WmContainer>
                          </WmGridcolumn>
                        </WmGridrow>
                      </WmLayoutgrid>
                      <WmLinearlayout
                        direction="row"
                        spacing="4"
                        name="linearlayout9_1"
                        horizontalalign="center"
                        verticalalign="center"
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
                          name="linearlayoutitem17_2"
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
                          <WmPicture
                            resizemode="contain"
                            name="picture3"
                            picturesource="resources/images/imagelists/Screenshot_2023-05-28_180340.png"
                            pictureplaceholder="resources/images/imagelists/default-image.png"
                            styles={{
                              root: { height: 83, marginTop: 8, width: 75 },
                              text: {},
                            }}
                            listener={fragment}
                          ></WmPicture>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                      <WmLinearlayout
                        direction="row"
                        spacing="4"
                        name="linearlayout6_1"
                        horizontalalign="center"
                        verticalalign="center"
                        styles={{
                          root: {
                            height: 64,
                            paddingTop: 16,
                            paddingBottom: 4,
                          },
                          text: {},
                        }}
                        classname="container13"
                        listener={fragment}
                      >
                        <WmLinearlayoutitem
                          flexgrow={1}
                          name="linearlayoutitem16_1"
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
                            caption={
                              fragment.Variables.Player.dataSet.playerchoice ==
                              'O'
                                ? 'X'
                                : 'O' ||
                                  fragment.Variables.Player.dataSet
                                    .playerchoice == 'X'
                                ? 'O'
                                : 'X'
                            }
                            name="label9"
                            styles={{
                              root: {
                                color: '#FFD9AD',
                                fontSize: 40,
                                paddingRight: 4,
                                paddingLeft: 4,
                              },
                              text: { color: '#FFD9AD', fontSize: 40 },
                            }}
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                      <WmLinearlayout
                        direction="row"
                        spacing="4"
                        name="linearlayout10"
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
                          name="linearlayoutitem20_1"
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
                            caption="0"
                            name="label10"
                            styles={{
                              root: {
                                color: '#FFD9AD',
                                fontSize: 40,
                                paddingRight: 4,
                                paddingLeft: 4,
                              },
                              text: { color: '#FFD9AD', fontSize: 40 },
                            }}
                            listener={fragment}
                          ></WmLabel>
                        </WmLinearlayoutitem>
                      </WmLinearlayout>
                    </WmContainer>
                  </WmGridcolumn>
                </WmGridrow>
                <WmGridrow name="gridrow6" listener={fragment}></WmGridrow>
              </WmLayoutgrid>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem28_1"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          classname="linear6"
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            spacing="4"
            name="linearlayout13"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem24"
              styles={{ root: { height: 77 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label10_1Tap($event, widget);
                }}
                name="label10_1"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem25"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              classname="item27"
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label34Tap($event, widget);
                }}
                name="label34"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: 76,
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: 110,
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem26"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label36Tap($event, widget);
                }}
                name="label36"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem29_1"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          classname="item28"
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            spacing="4"
            name="linearlayout14"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem27"
              styles={{ root: { height: 77 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label27_1Tap($event, widget);
                }}
                name="label27_1"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem28"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              classname="item27"
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label39Tap($event, widget);
                }}
                name="label39"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem29"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label43Tap($event, widget);
                }}
                name="label43"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
        <WmLinearlayoutitem
          name="linearlayoutitem30_1"
          flexgrow={1}
          marginTop="4"
          styles={{ root: { marginTop: 4, width: '100%' }, text: {} }}
          classname="linear5"
          listener={fragment}
        >
          <WmLinearlayout
            direction="row"
            spacing="4"
            name="linearlayout15"
            listener={fragment}
          >
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem30"
              styles={{ root: { height: 77 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label32Tap($event, widget);
                }}
                name="label32"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem31"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              classname="item27"
              listener={fragment}
            >
              <WmLabel
                show={true}
                caption="L"
                onTap={($event, widget) => {
                  fragment.label26Tap($event, widget);
                }}
                name="label26"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
              <WmLabel
                caption=""
                name="label28"
                styles={{
                  root: { fontSize: 50, paddingRight: 4, paddingLeft: 4 },
                  text: { fontSize: 50 },
                }}
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
            <WmLinearlayoutitem
              flexgrow={1}
              name="linearlayoutitem32"
              marginLeft="4"
              styles={{ root: { height: 77, marginLeft: 4 }, text: {} }}
              listener={fragment}
            >
              <WmLabel
                caption="L"
                onTap={($event, widget) => {
                  fragment.label45Tap($event, widget);
                }}
                name="label45"
                styles={{
                  root: {
                    color: '#010b1a',
                    fontSize: 55,
                    height: '100%',
                    paddingRight: 4,
                    paddingLeft: 22,
                    width: '100%',
                  },
                  text: { color: '#010b1a', fontSize: 55 },
                }}
                classname="labelX"
                listener={fragment}
              ></WmLabel>
            </WmLinearlayoutitem>
          </WmLinearlayout>
        </WmLinearlayoutitem>
      </WmLinearlayout>
    </WmPageContent>
  );
};

const PC_Page1 = ({ fragment }) => {
  return (
    <WmPage name="page1" hint="hg" listener={fragment}>
      <WmContent name="content1" listener={fragment}>
        <PC_Page_content1 fragment={fragment} />
      </WmContent>
    </WmPage>
  );
};

export default class Turn_Copy_CopyPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('Turn_Copy_Copy-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new(
        'Turn_Copy_Copy-styleOverrides',
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
