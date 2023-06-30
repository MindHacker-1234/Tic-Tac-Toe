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
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './selectgrid.script';
import styles from './selectgrid.style';
import getVariables from './selectgrid.variables';

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
      <WmLayoutgrid name="layoutgrid1" listener={fragment}>
        <WmGridrow name="gridrow1" listener={fragment}>
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn1"
            xscolumnwidth={3}
            listener={fragment}
          >
            <WmLabel
              name="label2"
              caption="9:41"
              styles={{
                root: { color: '#ffffff', paddingRight: 4, paddingLeft: 4 },
                text: { color: '#ffffff' },
              }}
              listener={fragment}
            ></WmLabel>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn2"
            xscolumnwidth={9}
            styles={{
              root: {
                textAlign: 'right',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                flexWrap: 'wrap',
              },
              text: { textAlign: 'right' },
            }}
            listener={fragment}
          >
            <WmIcon
              name="icon1"
              iconclass="fa fa-signal"
              styles={{
                root: { color: '#ffffff' },
                text: { color: '#ffffff' },
              }}
              classname="icons"
              listener={fragment}
            ></WmIcon>
            <WmIcon
              name="icon3"
              iconclass="fa fa-wifi"
              styles={{
                root: { color: '#ffffff' },
                text: { color: '#ffffff' },
              }}
              classname="icons"
              listener={fragment}
            ></WmIcon>
            <WmIcon
              name="icon2"
              iconclass="fa fa-battery-full"
              styles={{
                root: { color: '#ffffff' },
                text: { color: '#ffffff' },
              }}
              classname="icons"
              listener={fragment}
            ></WmIcon>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow name="gridrow2" listener={fragment}></WmGridrow>
      </WmLayoutgrid>
      <WmLayoutgrid name="layoutgrid2" classname="grid1" listener={fragment}>
        <WmGridrow name="gridrow3" classname="grid1-row" listener={fragment}>
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
                  fontFamily: 'cursive',
                  paddingRight: 4,
                  paddingLeft: 4,
                },
                text: { color: '#ffffBD', fontFamily: 'cursive' },
              }}
              listener={fragment}
            ></WmLabel>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow name="gridrow4" classname="grid1-row" listener={fragment}>
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
                  fontFamily: 'cursive',
                  paddingRight: 4,
                  paddingLeft: 4,
                },
                text: { color: '#77b1ff', fontFamily: 'cursive' },
              }}
              listener={fragment}
            ></WmLabel>
          </WmGridcolumn>
        </WmGridrow>
      </WmLayoutgrid>
      <WmLayoutgrid name="layoutgrid3" listener={fragment}>
        <WmGridrow name="gridrow5" classname="grid2" listener={fragment}>
          <WmGridcolumn
            columnwidth={6}
            name="gridcolumn5_1"
            xscolumnwidth={12}
            styles={{
              root: {
                height: 450,
                textAlign: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
              },
              text: { textAlign: 'center' },
            }}
            classname="grid51"
            listener={fragment}
          >
            <WmContainer
              name="container1"
              styles={{
                root: {
                  textAlign: 'left',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  flexWrap: 'wrap',
                  paddingLeft: 10,
                  width: '100%',
                },
                text: { textAlign: 'left' },
              }}
              classname="container11"
              listener={fragment}
            >
              <WmLabel
                name="label4"
                caption="GAME SETTINGS"
                styles={{
                  root: {
                    color: '#BFDAFF',
                    marginTop: 15,
                    marginBottom: 15,
                    paddingRight: 4,
                    paddingLeft: 4,
                    width: '100%',
                  },
                  text: { color: '#BFDAFF' },
                }}
                listener={fragment}
              ></WmLabel>
              <WmLabel
                name="label5"
                caption="Select side"
                styles={{
                  root: { color: '#77B1FF', paddingRight: 4, paddingLeft: 4 },
                  text: { color: '#77B1FF' },
                }}
                listener={fragment}
              ></WmLabel>
            </WmContainer>
            <WmLinearlayout
              direction="row"
              spacing="4"
              name="linearlayout1"
              horizontalalign="left"
              verticalalign="top"
              styles={{
                root: {
                  height: 80,
                  paddingTop: 0,
                  paddingRight: 4,
                  paddingBottom: 4,
                  paddingLeft: 4,
                },
                text: {},
              }}
              classname="linear1"
              listener={fragment}
            >
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem2"
                styles={{ root: { height: 80 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container2"
                  styles={{
                    root: {
                      backgroundColor: '#25374e',
                      height: 80,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container2"
                  listener={fragment}
                >
                  <WmContainer
                    name="container4"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container41"
                    listener={fragment}
                  >
                    <WmContainer
                      name="container5"
                      styles={{
                        root: {
                          backgroundColor: '#77b1ff',
                          borderColor: '#77b1ff',
                          fontSize: 10,
                          height: '60%',
                          marginTop: 6,
                          marginLeft: 4,
                          width: '70%',
                        },
                        text: { fontSize: 10 },
                      }}
                      classname="container51"
                      listener={fragment}
                    ></WmContainer>
                  </WmContainer>
                  <WmLabel
                    name="label6"
                    caption="X"
                    styles={{
                      root: {
                        color: '#77b1ff',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#77b1ff' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmContainer>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                name="linearlayoutitem6"
                flexgrow={1}
                marginLeft="4"
                styles={{ root: { height: 80, marginLeft: 4 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container6"
                  styles={{
                    root: {
                      height: 80,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container21"
                  listener={fragment}
                >
                  <WmContainer
                    name="container7"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container42"
                    listener={fragment}
                  ></WmContainer>
                  <WmLabel
                    caption="o"
                    name="label7"
                    styles={{
                      root: {
                        color: '#bfdadd',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#bfdadd' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmContainer>
              </WmLinearlayoutitem>
            </WmLinearlayout>
            <WmLabel
              name="label8"
              caption="Select grid size"
              styles={{
                root: {
                  color: '#77b1ff',
                  height: 0,
                  marginTop: 5,
                  marginBottom: 15,
                  paddingRight: 4,
                  paddingLeft: 10,
                  width: '100%',
                },
                text: { color: '#77b1ff' },
              }}
              classname="label8"
              listener={fragment}
            ></WmLabel>
            <WmLinearlayout
              direction="row"
              spacing="4"
              horizontalalign="left"
              verticalalign="top"
              name="linearlayout3"
              styles={{
                root: {
                  height: 80,
                  paddingTop: 5,
                  paddingRight: 4,
                  paddingBottom: 4,
                  paddingLeft: 4,
                },
                text: {},
              }}
              classname="linear2"
              listener={fragment}
            >
              <WmLinearlayoutitem
                flexgrow={0}
                name="linearlayoutitem5"
                styles={{ root: { height: 80 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container12"
                  styles={{
                    root: {
                      backgroundColor: '#25374e',
                      height: 80,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 15,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container2"
                  listener={fragment}
                >
                  <WmContainer
                    name="container13"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container41"
                    listener={fragment}
                  >
                    <WmContainer
                      name="container14"
                      styles={{
                        root: {
                          backgroundColor: '#77b1ff',
                          borderColor: '#77b1ff',
                          fontSize: 10,
                          height: '60%',
                          marginTop: 6,
                          marginLeft: 4,
                          width: '70%',
                        },
                        text: { fontSize: 10 },
                      }}
                      classname="container51"
                      listener={fragment}
                    ></WmContainer>
                  </WmContainer>
                  <WmLabel
                    caption="3 x 3"
                    name="label11"
                    styles={{
                      root: {
                        color: '#77b1ff',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#77b1ff' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmContainer>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem6_1"
                marginLeft="4"
                styles={{ root: { height: 80, marginLeft: 4 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container15"
                  styles={{
                    root: {
                      height: 80,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container21"
                  listener={fragment}
                >
                  <WmContainer
                    name="container16"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container42"
                    listener={fragment}
                  ></WmContainer>
                  <WmLabel
                    caption="4 x 4"
                    name="label12"
                    styles={{
                      root: {
                        color: '#bfdadd',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#bfdadd' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmContainer>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                name="linearlayoutitem7"
                flexgrow={1}
                marginLeft="4"
                styles={{ root: { marginLeft: 4 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container12_1"
                  styles={{
                    root: {
                      height: 80,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container21"
                  listener={fragment}
                >
                  <WmContainer
                    name="container13_1"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container42"
                    listener={fragment}
                  ></WmContainer>
                  <WmLabel
                    caption="5 x 5"
                    name="label11_1"
                    styles={{
                      root: {
                        color: '#bfdadd',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#bfdadd' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                </WmContainer>
              </WmLinearlayoutitem>
            </WmLinearlayout>
            <WmLabel
              name="label15"
              caption="Select difficulty level"
              styles={{
                root: {
                  color: '#77b1ff',
                  marginTop: 10,
                  paddingRight: 4,
                  paddingLeft: 4,
                  width: '100%',
                },
                text: { color: '#77b1ff' },
              }}
              classname="label15"
              listener={fragment}
            ></WmLabel>
            <WmLinearlayout
              direction="row"
              spacing="4"
              horizontalalign="left"
              verticalalign="top"
              name="linearlayout3_1"
              styles={{
                root: {
                  height: 80,
                  paddingTop: 5,
                  paddingRight: 4,
                  paddingBottom: 4,
                  paddingLeft: 4,
                },
                text: {},
              }}
              classname="linear2"
              listener={fragment}
            >
              <WmLinearlayoutitem
                flexgrow={0}
                name="linearlayoutitem6_2"
                styles={{ root: { height: 80 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container19"
                  styles={{
                    root: {
                      backgroundColor: '#25374e',
                      height: 90,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container21"
                  listener={fragment}
                >
                  <WmContainer
                    name="container20"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container42"
                    listener={fragment}
                  ></WmContainer>
                  <WmLabel
                    caption="Easy"
                    name="label14"
                    styles={{
                      root: {
                        color: '#bfdadd',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#bfdadd' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                  <WmContainer name="container21" listener={fragment}>
                    <WmPicture
                      resizemode="contain"
                      name="picture3_1"
                      picturesource="resources/images/imagelists/Screenshot_2023-05-30_170050.png"
                      pictureplaceholder="resources/images/imagelists/default-image.png"
                      styles={{
                        root: { height: 20, marginBottom: 10 },
                        text: {},
                      }}
                      listener={fragment}
                    ></WmPicture>
                  </WmContainer>
                </WmContainer>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem7_1"
                marginLeft="4"
                styles={{ root: { height: 80, marginLeft: 4 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container17"
                  styles={{
                    root: {
                      backgroundColor: '#25374e',
                      height: 90,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 10,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container21"
                  listener={fragment}
                >
                  <WmContainer
                    name="container18"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container42"
                    listener={fragment}
                  ></WmContainer>
                  <WmLabel
                    caption="Medium"
                    name="label13"
                    styles={{
                      root: {
                        color: '#bfdadd',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#bfdadd' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                  <WmContainer name="container22" listener={fragment}>
                    <WmPicture
                      resizemode="contain"
                      name="picture4_1"
                      picturesource="resources/images/imagelists/Screenshot_2023-05-30_170103.png"
                      pictureplaceholder="resources/images/imagelists/default-image.png"
                      styles={{ root: { height: 20 }, text: {} }}
                      listener={fragment}
                    ></WmPicture>
                  </WmContainer>
                </WmContainer>
              </WmLinearlayoutitem>
              <WmLinearlayoutitem
                flexgrow={1}
                name="linearlayoutitem8"
                marginLeft="4"
                styles={{ root: { marginLeft: 4 }, text: {} }}
                listener={fragment}
              >
                <WmContainer
                  name="container14_1"
                  styles={{
                    root: {
                      backgroundColor: '#25374e',
                      height: 90,
                      textAlign: 'center',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      marginLeft: 15,
                      width: 80,
                    },
                    text: { textAlign: 'center' },
                  }}
                  classname="container2"
                  listener={fragment}
                >
                  <WmContainer
                    name="container15_1"
                    styles={{
                      root: {
                        height: 30,
                        textAlign: 'center',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        marginTop: 10,
                        marginLeft: 25,
                        width: '40%',
                      },
                      text: { textAlign: 'center' },
                    }}
                    classname="container41"
                    listener={fragment}
                  >
                    <WmContainer
                      name="container16_1"
                      styles={{
                        root: {
                          backgroundColor: '#77b1ff',
                          borderColor: '#77b1ff',
                          fontSize: 10,
                          height: '60%',
                          marginTop: 6,
                          marginLeft: 4,
                          width: '70%',
                        },
                        text: { fontSize: 10 },
                      }}
                      classname="container51"
                      listener={fragment}
                    ></WmContainer>
                  </WmContainer>
                  <WmLabel
                    caption="Difficult"
                    name="label12_1"
                    styles={{
                      root: {
                        color: '#77b1ff',
                        marginTop: 5,
                        marginLeft: 5,
                        paddingRight: 4,
                        paddingLeft: 4,
                      },
                      text: { color: '#77b1ff' },
                    }}
                    listener={fragment}
                  ></WmLabel>
                  <WmContainer name="container23" listener={fragment}>
                    <WmPicture
                      resizemode="contain"
                      name="picture6"
                      picturesource="resources/images/imagelists/Screenshot_2023-05-30_170116.png"
                      pictureplaceholder="resources/images/imagelists/default-image.png"
                      styles={{ root: { height: 20 }, text: {} }}
                      listener={fragment}
                    ></WmPicture>
                  </WmContainer>
                </WmContainer>
              </WmLinearlayoutitem>
            </WmLinearlayout>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow name="gridrow6" listener={fragment}></WmGridrow>
      </WmLayoutgrid>
      <WmLayoutgrid name="layoutgrid4" classname="grid3" listener={fragment}>
        <WmGridrow name="gridrow7" classname="grid3-row" listener={fragment}>
          <WmGridcolumn
            columnwidth={4}
            name="gridcolumn6"
            xscolumnwidth={4}
            classname="grid3-cell"
            listener={fragment}
          >
            <WmButton
              caption="Previous"
              type="button"
              name="button1"
              iconclass="wm-sl-l sl-keyboard-arrow-left"
              styles={{ root: { backgroundColor: '#77b1ff' }, text: {} }}
              classname="btn-default"
              listener={fragment}
            ></WmButton>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={4}
            name="gridcolumn10"
            xscolumnwidth={4}
            styles={{
              root: {
                textAlign: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                paddingTop: 10,
              },
              text: { textAlign: 'center' },
            }}
            classname="grid3-cell"
            listener={fragment}
          >
            <WmPicture
              resizemode="cover"
              name="picture4"
              picturesource="resources/images/imagelists/Screenshot_2023-05-28_165853.png"
              pictureplaceholder="resources/images/imagelists/default-image.png"
              styles={{ root: { height: 30, width: 42 }, text: {} }}
              listener={fragment}
            ></WmPicture>
          </WmGridcolumn>
          <WmGridcolumn
            columnwidth={4}
            name="gridcolumn7_1"
            xscolumnwidth={4}
            classname="grid3-cell"
            listener={fragment}
          >
            <WmButton
              caption="Next"
              type="button"
              name="button2"
              iconclass="wm-sl-l sl-keyboard-arrow-right"
              iconposition="right"
              styles={{ root: { backgroundColor: '#77b1ff' }, text: {} }}
              classname="btn-default"
              listener={fragment}
            ></WmButton>
          </WmGridcolumn>
        </WmGridrow>
        <WmGridrow
          name="gridrow8"
          classname="grid3-row"
          listener={fragment}
        ></WmGridrow>
      </WmLayoutgrid>
      <WmPicture
        resizemode="contain"
        name="picture3"
        picturesource="resources/images/imagelists/Screenshot_2023-05-28_165042.png"
        pictureplaceholder="resources/images/imagelists/default-image.png"
        styles={{
          root: { marginTop: 10, marginLeft: 90, width: '50%' },
          text: {},
        }}
        listener={fragment}
      ></WmPicture>
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

export default class selectgridPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('selectgrid-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new('selectgrid-styleOverrides', styleOverrides);
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
