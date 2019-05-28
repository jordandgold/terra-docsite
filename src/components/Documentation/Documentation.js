import React, { Component } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import "./Documentation.scss";

import Sidebar from "../Sidebar/Sidebar";

import GettingStarted from "../pages/GettingStarted/GettingStarted";

// -- COMPONENTS -- //
import AccordionPage from "../pages/AccordionPage/AccordionPage";
import AlertPage from "../pages/AlertPage/AlertPage";
import BreadcrumbPage from "../pages/BreadcrumbPage/BreadcrumbPage";
import ButtonsPage from "../pages/ButtonsPage/ButtonsPage";
import CardsPage from "../pages/CardsPage/CardsPage";
import CheckboxPage from "../pages/CheckboxPage/CheckboxPage";
import DropdownPage from "../pages/DropdownPage/DropdownPage";
import LinkPage from "../pages/LinkPage/LinkPage";
import ListPage from "../pages/ListPage/ListPage";
import NavigationPage from "../pages/NavigationPage/NavigationPage";
import NotificationPage from "../pages/NotificationPage/NotificationPage";
import ModalPage from "../pages/ModalPage/ModalPage";
import OverflowMenuPage from "../pages/OverflowMenuPage/OverflowMenuPage";
import PaginationPage from "../pages/PaginationPage/PaginationPage";
import ProgressIndicatorPage from "../pages/ProgressIndicatorPage/ProgressIndicatorPage";
import RadioButtonPage from "../pages/RadioButtonPage/RadioButtonPage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SelectPage from "../pages/SelectPage/SelectPage";
import TabPage from "../pages/TabPage/TabPage";

// -- STYLE -- //
import AccessibilityStandardsPage from "../pages/AccessibilityStandardsPage/AccessibilityStandardsPage";
import DepthPage from "../pages/DepthPage/DepthPage";
import ColorPage from "../pages/ColorPage/ColorPage";
import GridPage from "../pages/GridPage/GridPage";
import IconsPage from "../pages/IconsPage/IconsPage";
import StructurePage from "../pages/StructurePage/StructurePage";
import TypographyPage from "../pages/TypographyPage/TypographyPage";

class Documentation extends Component {
  render() {
    return (
      <section className="documentation">
        <Sidebar />
        <Switch>
          <Route
            path="/documentation/getting-started"
            component={GettingStarted}
          />

          <Route
            path="/documentation/style/accessibility-standards"
            component={AccessibilityStandardsPage}
          />
          <Route path="/documentation/style/depth" component={DepthPage} />
          <Route path="/documentation/style/color" component={ColorPage} />
          <Route path="/documentation/style/grid" component={GridPage} />
          <Route path="/documentation/style/icons" component={IconsPage} />
          <Route
            path="/documentation/style/structure"
            component={StructurePage}
          />
          <Route
            path="/documentation/style/typography"
            component={TypographyPage}
          />

          <Route
            path="/documentation/components/accordion"
            component={AccordionPage}
          />
          <Route path="/documentation/components/alert" component={AlertPage} />
          <Route
            path="/documentation/components/breadcrumb"
            component={BreadcrumbPage}
          />
          <Route
            path="/documentation/components/buttons"
            component={ButtonsPage}
          />
          <Route path="/documentation/components/cards" component={CardsPage} />
          <Route
            path="/documentation/components/checkbox"
            component={CheckboxPage}
          />
          <Route
            path="/documentation/components/dropdown"
            component={DropdownPage}
          />
          <Route path="/documentation/components/link" component={LinkPage} />
          <Route path="/documentation/components/list" component={ListPage} />
          <Route
            path="/documentation/components/navigation"
            component={NavigationPage}
          />
          <Route
            path="/documentation/components/notification"
            component={NotificationPage}
          />
          <Route path="/documentation/components/modal" component={ModalPage} />
          <Route
            path="/documentation/components/overflow-menu"
            component={OverflowMenuPage}
          />
          <Route
            path="/documentation/components/pagination"
            component={PaginationPage}
          />
          <Route
            path="/documentation/components/progress-indicator"
            component={ProgressIndicatorPage}
          />
          <Route
            path="/documentation/components/radio-button"
            component={RadioButtonPage}
          />
          <Route
            path="/documentation/components/search"
            component={SearchPage}
          />
          <Route
            path="/documentation/components/select"
            component={SelectPage}
          />
          <Route path="/documentation/components/tab" component={TabPage} />

          <Route render={() => <p>404</p>} />
        </Switch>
      </section>
    );
  }
}
export default Documentation;
