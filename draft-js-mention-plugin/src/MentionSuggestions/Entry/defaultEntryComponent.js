import React from 'react';
import Avatar from './Avatar';

const defaultEntryComponent = (props) => {
  const {
    mention,
    theme,
    searchValue, // eslint-disable-line no-unused-vars
    childMentions,
    ...parentProps
  } = props;
  return (
    <div {...parentProps}>
      <Avatar mention={mention} theme={theme} />
      <span className={`${mention.has('unclickable') ? 'mention-title' : theme.mentionSuggestionsEntryText}`}>{mention.get('name')}</span>
      <div className="child-mentions">
        {childMentions}
      </div>
    </div>
  );
};

export default defaultEntryComponent;
