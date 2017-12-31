import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';

import 'prismjs/themes/prism.css';

function CodeBlock(props) {
  const html = Prism.highlight(props.literal, Prism.languages[props.language]);
  const cls = 'language-' + props.language;
  console.log('prism', { html, literal });
  return (
    <pre className={cls}>
      <code
        dangerouslySetInnerHTML={{ __html: html }}
        className={cls}
      />
    </pre>
  );
}


class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string,
  };

  componentDidMount() {
    Prism.highlightAll();
  }

  componentDidUpdate() {
    Prism.highlightAll();
  }

  render() {
    return (
      <ReactMarkdown source={this.props.source} renderers={{ CodeBlock }} />
    );
  }
}

export default Markdown;
