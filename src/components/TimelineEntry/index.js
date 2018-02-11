import React from 'react';
import classNames from 'classnames';
import './TimelineEntry.scss';

class TimelineEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
  }

  handleClick = () => this.setState({ isActive: !this.state.isActive });

  isSelected = () => this.state.isActive === true;

  render = () => (
    <div
      className={classNames({
        entry: true,
        selected: this.isSelected(),
      })}
      onClick={ this.handleClick }
    >
      <img src={ this.props.image } />
      <div className="inline-text">{ this.props.entryText }</div>
      <div
        className={classNames({
          hidden: true,
          detailText: this.isSelected(),
        })}
      >

      </div>
    </div>
  );
}

export default TimelineEntry;
