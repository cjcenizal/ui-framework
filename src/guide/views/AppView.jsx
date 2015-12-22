
// Import exports from various modules.
// NOTE: `import` allows us to tersely specify the individual members we want
// to import from a module with the curly brace syntax and by delimiting
// them with commas.
import React, {
  Component,
} from 'react';
import $ from 'jquery';
import classNames from 'classnames';

import Navigation from '../components/navigation/Navigation.jsx';
import SourceCodeViewer from '../components/sourceCodeViewer/SourceCodeViewer.jsx';

import Route from '../services/route/Route';

// Define the component class and provide it as an export.
export default class AppView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isSourceCodeViewerOpen: false,
    };
  }

  componentDidMount() {
    $(document).keypress(event => {
      // Toggle source code viewer with the tilde key (~).
      if (event.charCode === 96) {
        this.setState({
          isSourceCodeViewerOpen: !this.state.isSourceCodeViewerOpen,
        });
      }
    });
  }

  render() {
    const routes = this.props.routerState.routes;
    const source = routes[routes.length - 1].source;

    const classes = classNames('app', {
      'is-source-code-viewer-open': this.state.isSourceCodeViewerOpen,
    });

    return (
      <div className={classes}>
        <Navigation
          componentRoutes={Route.components}
          integrationRoutes={Route.integrations}
          prototypeRoutes={Route.prototypes}
        />

        {/* Frame the app's different views. */}
        {this.props.children}

        <SourceCodeViewer
          source={source}
          isOpen={this.state.isSourceCodeViewerOpen}
        />
      </div>
    );
  }

}

