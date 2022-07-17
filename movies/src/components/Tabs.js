import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {

  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    setTab: PropTypes.func.isRequired,
    setSearchValue: PropTypes.func.isRequired,
    setSelectLabel: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.selectedLabel, 
    };
  }
  
  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label, selectedLabel } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
                setTab={child.props.setTab}
                setSearchValue={child.props.setSearchValue}
                selectedLabel={selectedLabel}
                setSelectedLabel={child.props.setSelectedLabel}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;