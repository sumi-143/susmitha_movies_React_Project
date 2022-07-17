import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    setTab:PropTypes.func.isRequired,
    setSearchValue:PropTypes.func.isRequired,
    setSelectedLabel: PropTypes.func.isRequired,
  };

  onClick = () => {
    const { label, onClick, setTab, setSearchValue, setSelectedLabel } = this.props;
    onClick(label);
    setTab();
    setSearchValue('');
    setSelectedLabel();
  };

  render() {
    const {
      onClick,
      props: { activeTab, label, selectedLabel },
    } = this;

    let className = "tab-list-item";

    if (activeTab === label) {
      className += " tab-list-active";
    }

    return (
      <li className={className} onClick={onClick}>
        {label}
      </li>
    );
  }
}

export default Tab;