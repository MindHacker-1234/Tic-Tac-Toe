import React from 'react';

import { ScrollView } from 'react-native';

import { AssetProvider } from '@wavemaker/app-rn-runtime/core/asset.provider';
import BasePage from '@wavemaker/app-rn-runtime/runtime/base-page.component';
import { useWatcher } from '@wavemaker/app-rn-runtime/runtime/watcher';
import { WmMemo } from '@wavemaker/app-rn-runtime/runtime/memo.component';
import { ThemeProvider } from '@wavemaker/app-rn-runtime/styles/theme';
import WmAppNavbar from '@wavemaker/app-rn-runtime/components/navigation/appnavbar/appnavbar.component';
import WmContent from '@wavemaker/app-rn-runtime/components/page/content/content.component';
import WmForm from '@wavemaker/app-rn-runtime/components/data/form/form.component';
import WmFormAction from '@wavemaker/app-rn-runtime/components/data/form/form-action/form-action.component';
import WmFormBody from '@wavemaker/app-rn-runtime/components/data/form/form-body/form-body.component';
import WmFormField from '@wavemaker/app-rn-runtime/components/data/form/form-field/form-field.component';
import WmFormFooter from '@wavemaker/app-rn-runtime/components/data/form/form-footer/form-footer.component';
import WmGridcolumn from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridcolumn/gridcolumn.component';
import WmGridrow from '@wavemaker/app-rn-runtime/components/container/layoutgrid/gridrow/gridrow.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmLayoutgrid from '@wavemaker/app-rn-runtime/components/container/layoutgrid/layoutgrid.component';
import WmLogin from '@wavemaker/app-rn-runtime/components/advanced/login/login.component';
import WmPage from '@wavemaker/app-rn-runtime/components/page/page.component';
import WmPageContent from '@wavemaker/app-rn-runtime/components/page/page-content/page-content.component';
import WmText from '@wavemaker/app-rn-runtime/components/input/text/text.component';
import { isWebPreviewMode } from '@wavemaker/app-rn-runtime/core/utils';

import { merge, get as _get } from 'lodash';
import ResourceResolver from '../../resolve/resource.resolver';
import addPageScript from './Login.script';
import styles from './Login.style';
import getVariables from './Login.variables';

const FragmentContext = React.createContext();

const PC_Mobile_navbar1 = ({ fragment }) => {
  return (
    <WmAppNavbar
      title="Login"
      backbutton={false}
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

const PC_J_username = ({ fragment }) => {
  return (
    <WmFormField
      readonly={false}
      name="j_username"
      displayname="Username"
      type="string"
      show={true}
      widget="text"
      placeholder="Enter username"
      formRef="loggedInUserForm1"
      onChange={($event, widget, newVal, oldVal) => {
        fragment.Widgets.loggedInUserForm1 &&
          fragment.Widgets.loggedInUserForm1.props.onChange &&
          fragment.Widgets.loggedInUserForm1.props.onChange(
            $event,
            widget,
            newVal,
            oldVal
          );
      }}
      onValidate={widget => {
        widget.validateFormField.call(widget);
      }}
      formKey="j_username"
      styles={{ root: { width: '100%' }, text: {} }}
      classname="app-login-username"
      listener={fragment}
      renderFormFields={$formField => (
        <>
          <WmLabel
            caption={$formField.displayname}
            memoize="false"
            required={fragment.toBoolean($formField.required)}
            name="j_username_formLabel"
            classname="form-label"
            listener={fragment}
          ></WmLabel>
          <WmText
            name="j_username"
            formfieldname="j_username"
            formfield="true"
            memoize="false"
            placeholder={$formField.placeholder}
            required={fragment.toBoolean($formField.required)}
            regexp={$formField.regexp}
            validationmessage={$formField.validationmessage}
            datavalue={$formField.defaultvalue}
            disabled={fragment.toBoolean($formField.disabled)}
            readonly={fragment.toBoolean($formField.readonly)}
            updateon={$formField.updateon || 'blur'}
            maxchars={fragment.toNumber($formField.maxchars)}
            classname="form-input form-text"
            listener={fragment}
          ></WmText>
        </>
      )}
    ></WmFormField>
  );
};

const PC_J_password = ({ fragment }) => {
  return (
    <WmFormField
      readonly={false}
      name="j_password"
      displayname="Password"
      type="string"
      show={true}
      widget="text"
      inputtype="password"
      placeholder="Enter password"
      formRef="loggedInUserForm1"
      onChange={($event, widget, newVal, oldVal) => {
        fragment.Widgets.loggedInUserForm1 &&
          fragment.Widgets.loggedInUserForm1.props.onChange &&
          fragment.Widgets.loggedInUserForm1.props.onChange(
            $event,
            widget,
            newVal,
            oldVal
          );
      }}
      onValidate={widget => {
        widget.validateFormField.call(widget);
      }}
      formKey="j_password"
      styles={{ root: { width: '100%' }, text: {} }}
      classname="app-login-password"
      listener={fragment}
      renderFormFields={$formField => (
        <>
          <WmLabel
            caption={$formField.displayname}
            memoize="false"
            required={fragment.toBoolean($formField.required)}
            name="j_password_formLabel"
            classname="form-label"
            listener={fragment}
          ></WmLabel>
          <WmText
            type="password"
            name="j_password"
            formfieldname="j_password"
            formfield="true"
            memoize="false"
            placeholder={$formField.placeholder}
            required={fragment.toBoolean($formField.required)}
            regexp={$formField.regexp}
            validationmessage={$formField.validationmessage}
            datavalue={$formField.defaultvalue}
            disabled={fragment.toBoolean($formField.disabled)}
            readonly={fragment.toBoolean($formField.readonly)}
            updateon={$formField.updateon || 'blur'}
            maxchars={fragment.toNumber($formField.maxchars)}
            classname="form-input form-text"
            listener={fragment}
          ></WmText>
        </>
      )}
    ></WmFormField>
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
      <WmLogin
        name="loginForm"
        data-ng-controller="loginFormController"
        listener={fragment}
        onLogin={(formData, success, error) => {
          fragment.Actions.loginAction.invoke({ formData }, success, error);
        }}
      >
        <WmForm
          errormessage=""
          captionposition="top"
          title=""
          enctype="application/x-www-form-urlencoded"
          method="post"
          captionalign="left"
          name="loggedInUserForm1"
          isLogin="true"
          listener={fragment}
        >
          <WmFormBody name="wm_form_body_d77c8i9c45" listener={fragment}>
            <WmLayoutgrid columns="1" name="layoutgrid1" listener={fragment}>
              <WmGridrow name="gridrow1" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  name="gridcolumn1"
                  xscolumnwidth={12}
                  listener={fragment}
                >
                  <PC_J_username fragment={fragment} />
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow name="gridrow2" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  name="gridcolumn2"
                  xscolumnwidth={12}
                  listener={fragment}
                >
                  <PC_J_password fragment={fragment} />
                </WmGridcolumn>
              </WmGridrow>
              <WmGridrow name="gridrow3" listener={fragment}>
                <WmGridcolumn
                  columnwidth={12}
                  name="gridcolumn3"
                  xscolumnwidth={12}
                  listener={fragment}
                ></WmGridcolumn>
              </WmGridrow>
            </WmLayoutgrid>
          </WmFormBody>
          <WmFormFooter name="wm_form_footer_85jjfgd6gi" listener={fragment}>
            <WmFormAction
              iconclass="wi wi-save"
              action="()=&gt; fragment.Widgets.loggedInUserForm1.submit();fragment.Widgets.loginForm.doLogin(fragment.Widgets.loggedInUserForm1.dataoutput)"
              formKey="loggedInUserForm1"
              name="wm_form_action_5h9baje5if"
              displayName="Signin"
              btnClass="btn-primary"
              classname="form-save btn-success"
              listener={fragment}
              formAction={$event => {
                fragment.Widgets.loggedInUserForm1.submit();
                fragment.Widgets.loginForm.doLogin(
                  fragment.Widgets.loggedInUserForm1.dataoutput
                );
              }}
            ></WmFormAction>
          </WmFormFooter>
        </WmForm>
      </WmLogin>
    </WmPageContent>
  );
};

const PC_Page1 = ({ fragment }) => {
  return (
    <WmPage name="page1" listener={fragment}>
      <PC_Mobile_navbar1 fragment={fragment} />
      <WmContent name="content1" listener={fragment}>
        <PC_Page_content1 fragment={fragment} />
      </WmContent>
    </WmPage>
  );
};

export default class LoginPage extends BasePage {
  components;

  constructor(props) {
    super(props);
    const _this = this.proxy;
    addPageScript(this.App, this.proxy);
    this.theme = props.themeToUse || this.appConfig.theme;
    const styleOverrides = this.theme.getStyle(props.classname);
    this.theme = this.theme.$new('Login-styles', styles);
    if (styleOverrides) {
      this.theme = this.theme.$new('Login-styleOverrides', styleOverrides);
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
