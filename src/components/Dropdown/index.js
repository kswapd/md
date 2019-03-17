import React, { Component, Fragment } from "react";

class Dropdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: false
    };
    this.myRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', (e) => {
      if(!this.myRef.current.contains(e.target)) {
        this.setState({
          isShow: false
        })
      }
    })
  }

  onToggleDropdown = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow
    }));
  }

  onSelect = (item) => (e) => {
    this.props.onSelect(item);
  }

  render() {
    const { type, name, options } = this.props;
    const { isShow } = this.state;
    let Tag = type === 'link' ? 'a' : 'button';
    return (
      <div ref={this.myRef}>
        <div className={(type === 'link' && 'nav-item ') + 'dropdown' + (isShow ? ' show' : '')} onClick={this.onToggleDropdown}>
          <Tag className={(type === 'link' && 'nav-link ') + 'dropdown-toggle'}>
            {name}
          </Tag>
          <div className={'dropdown-menu' + (isShow ? ' show' : '')}>
            {options.map((item, index) => <a className="dropdown-item" key={index} onClick={this.onSelect(item)}>{item}</a>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
