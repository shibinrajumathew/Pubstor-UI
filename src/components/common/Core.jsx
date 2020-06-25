import React, { PureComponent } from "react";
import {
  Table as RSTable,
  Col as RSCol,
  Row as RSRow,
  Container as RSContainer,
  Form as RSForm,
  Input as RSInput,
  FormGroup as RSFormGroup,
  Label as RSLabel,
  UncontrolledCollapse as RSUncontrolledCollapse,
  Button as RSButton,
  ButtonGroup as RSButtonGroup,
  Nav as RSNav,
  Navbar as RSNavbar,
  NavItem as RSNavItem,
  NavLink as RSNavLink,
  TabContent as RSTabContent,
  TabPane as RSTabPane,
  Alert as RSAlert,
  UncontrolledButtonDropdown as RSUncontrolledButtonDropdown,
  Dropdown as RSDropdown,
  UncontrolledDropdown as RSUncontrolledDropdown,
  DropdownMenu as RSDropdownMenu,
  DropdownItem as RSDropdownItem,
  DropdownToggle as RSDropdownToggle,
  InputGroup as RSInputGroup,
  InputGroupAddon as RSInputGroupAddon,
  InputGroupText as RSInputGroupText,
  Card as RSCard,
  CardText as RSCardText,
  CardTitle as RSCardTitle,
  CardHeader as RSCardHeader,
  ListGroup as RSListGroup,
  ListGroupItem as RSListGroupItem,
  ListGroupItemHeading as RSListGroupItemHeading,
  ListGroupItemText as RSListGroupItemText,
} from "reactstrap";
import MaterialIcon from "@material-ui/core/Icon";


/** @class
 * Common css components and colors
 */
class Table extends PureComponent {
  render() {
    return <RSTable {...this.props} />;
  }
}
//layouts
class Container extends PureComponent {
  render() {
    return <RSContainer {...this.props} />;
  }
}
class Row extends PureComponent {
  render() {
    return <RSRow {...this.props} />;
  }
}
class Col extends PureComponent {
  render() {
    return <RSCol {...this.props} />;
  }
}

//form
class Form extends PureComponent {
  render() {
    return <RSForm {...this.props} />;
  }
}
class Input extends PureComponent {
  render() {
    return <RSInput {...this.props} />;
  }
}
class InputGroup extends PureComponent {
  render() {
    return <RSInputGroup {...this.props} />;
  }
}
class InputGroupAddon extends PureComponent {
  render() {
    return <RSInputGroupAddon {...this.props} />;
  }
}
class InputGroupText extends PureComponent {
  render() {
    return <RSInputGroupText {...this.props} />;
  }
}
class FormGroup extends PureComponent {
  render() {
    return <RSFormGroup {...this.props} />;
  }
}
class Label extends PureComponent {
  render() {
    return <RSLabel {...this.props} />;
  }
}
class Button extends PureComponent {
  render() {
    return <RSButton {...this.props} />;
  }
}
class ButtonGroup extends PureComponent {
  render() {
    return <RSButtonGroup {...this.props} />;
  }
}
class Collapse extends PureComponent {
  render() {
    return <RSUncontrolledCollapse {...this.props} />;
  }
}
class Nav extends PureComponent {
  render() {
    return <RSNav {...this.props} />;
  }
}
class Navbar extends PureComponent {
  render() {
    return <RSNavbar {...this.props} />;
  }
}
class NavItem extends PureComponent {
  render() {
    return <RSNavItem {...this.props} />;
  }
}
class NavLink extends PureComponent {
  render() {
    return <RSNavLink {...this.props} />;
  }
}
class TabContent extends PureComponent {
  render() {
    return <RSTabContent {...this.props} />;
  }
}
class TabPane extends PureComponent {
  render() {
    return <RSTabPane {...this.props} />;
  }
}
class Alert extends PureComponent {
  render() {
    return <RSAlert {...this.props} />;
  }
}
class ButtonDropdown extends PureComponent {
  render() {
    return <RSUncontrolledButtonDropdown {...this.props} />;
  }
}
class UncontrolledDropdown extends PureComponent {
  render() {
    return <RSUncontrolledDropdown {...this.props} />;
  }
}
class Dropdown extends PureComponent {
  render() {
    return <RSDropdown {...this.props} />;
  }
}
class DropdownMenu extends PureComponent {
  render() {
    return <RSDropdownMenu {...this.props} />;
  }
}
class DropdownItem extends PureComponent {
  render() {
    return <RSDropdownItem {...this.props} />;
  }
}
class DropdownToggle extends PureComponent {
  render() {
    return <RSDropdownToggle {...this.props} />;
  }
}
class Card extends PureComponent {
  render() {
    return <RSCard {...this.props} />;
  }
}
class CardText extends PureComponent {
  render() {
    return <RSCardText {...this.props} />;
  }
}
class CardTitle extends PureComponent {
  render() {
    return <RSCardTitle {...this.props} />;
  }
}
class CardHeader extends PureComponent {
  render() {
    return <RSCardHeader {...this.props} />;
  }
}
class ListGroup extends PureComponent {
  render() {
    return <RSListGroup {...this.props} />;
  }
}
class ListGroupItem extends PureComponent {
  render() {
    return <RSListGroupItem {...this.props} />;
  }
}
class ListGroupItemHeading extends PureComponent {
  render() {
    return <RSListGroupItemHeading {...this.props} />;
  }
}
class ListGroupItemText extends PureComponent {
  render() {
    return <RSListGroupItemText {...this.props} />;
  }
}

//MaterialIcon
class Icon extends PureComponent {
  render() {
    const { name, size, style } = this.props;
    return (
      <MaterialIcon {...this.props} style={{ fontSize: size, ...style }}>
        {name}{" "}
      </MaterialIcon>
    );
  }
}

export {
  Card,
  CardTitle,
  CardText,
  CardHeader,
  Table,
  Row,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormGroup,
  Label,
  Button,
  ButtonGroup,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Alert,
  ButtonDropdown,
  Dropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Icon,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
};
