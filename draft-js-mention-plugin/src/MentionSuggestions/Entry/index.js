import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';

export default class Entry extends Component {

  static propTypes = {
    entryComponent: PropTypes.any.isRequired,
    searchValue: PropTypes.string,
    onMentionSelect: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.mouseDown = false;
  }

  componentDidUpdate() {
    this.mouseDown = false;
  }

  onMouseUp = () => {
    if (this.mouseDown) {
      this.props.onMentionSelect(this.props.mention);
      this.mouseDown = false;
    }
  };

  onMouseDown = (event) => {
    // Note: important to avoid a content edit change
    event.preventDefault();

    this.mouseDown = true;
  };

  onMouseEnter = () => {
    this.props.onMentionFocus(this.props.index);
  };

  render() {
    const { theme = {}, searchValue, key } = this.props;
    // const className = this.props.isFocused ? theme.mentionSuggestionsEntryFocused : theme.mentionSuggestionsEntry;
    const EntryComponent = this.props.entryComponent;
    return (
      <EntryComponent
        className={this.props.mention.has('unclickable') ? '' : 'child-mention'}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseEnter={this.onMouseEnter}
        role="option"
        theme={theme}
        mention={this.props.mention}
        searchValue={searchValue}
        childMentions={this.props.childMentions}
        key={key}
      />
    );
  }
}
