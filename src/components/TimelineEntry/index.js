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
    >
      <img src={this.props.image} onClick={this.handleClick}/>
      <span className={styles.inlineText} onClick={this.handleClick}>{this.props.entryText}</span>
      
        {this.props.details &&
          this.props.details.map((detail, index) => (
            <div key={`${detail.heading}-${index}`}
              className={bind({ hidden: true, detailText: this.isSelected() })}>
              <div className={styles.heading}>
                <img src={detail.image} />
                <h1>{detail.heading}</h1>
              </div>

              <div className={styles.subtitle}>{detail.subtitle}</div>
            </div>
          ))}
    </div>
  );
}

export default TimelineEntry;
