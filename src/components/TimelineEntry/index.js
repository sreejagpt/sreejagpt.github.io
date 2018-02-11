import React from 'react';
import classNames from 'classnames/bind';
import styles from './TimelineEntry.module.scss';

const bind = classNames.bind(styles);

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
      className={bind({
        entry: true,
        selected: this.isSelected(),
      })}
      onClick={this.handleClick}
    >
      <img src={this.props.image} />
      <div className={styles.inlineText}>{this.props.entryText}</div>
      <div
        className={bind({
          hidden: true,
          detailText: this.isSelected(),
        })}
      >
        {this.props.details &&
          this.props.details.map((detail, index) => (
            <div key={`${detail.heading}-${index}`}>
              <span className={styles.row}>
                <img src={detail.image} />
                <h1>{detail.heading}</h1>
              </span>

              <h2>{detail.subtitle}</h2>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TimelineEntry;
