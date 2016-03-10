
import React, {
  Component,
  PropTypes,
} from 'react';

import Page, {
  Example,
} from '../../components/page/Page.jsx';

import {
  Link,
  Menu,
  MenuItem,
  Panel,
  PanelLayout,
  SearchBox,
} from '../../../framework/framework';

export default class PanelExample extends Component {

  constructor(props) {
    super(props);

    this.items = [{
      name: 'A',
    }, {
      name: 'B',
    }, {
      name: 'C',
    }, {
      name: 'D',
    }, {
      name: 'E',
    }, {
      name: 'F',
    }, {
      name: 'G',
    }, {
      name: 'H',
    }, {
      name: 'I',
    }, {
      name: 'J',
    }, {
      name: 'K',
    }, {
      name: 'L',
    }];
  }

  onSearch() {
    // This is a no-op. It's just here to satisfy a required prop.
  }

  renderMenu(limit = this.items.length) {
    const items = [];

    for (let i = 0; i < limit; i++) {
      const item = this.items[i];
      items.push(
        <MenuItem
          key={i}
          label={item.name}
        />
      );
    }

    return (
      <Menu>
        {items}
      </Menu>
    );
  }

  render() {
    return (
      <Page title={this.props.route.name}>
        <Example>
          <div style={{ height: 300 }}>
            <Panel
              title="Letters"
            >
              {this.renderMenu(3)}
            </Panel>
          </div>
        </Example>

        <Example title="Scrollable">
          <div style={{ height: 300 }}>
            <Panel
              title="Letters"
            >
              {this.renderMenu()}
            </Panel>
          </div>
        </Example>

        <Example title="With search box">
          <Panel
            title="Searchable"
            actions={
              <SearchBox onSearch={ this.onSearch } />
            }
          >
            Content
          </Panel>
        </Example>

        <Example title="With action">
          <Panel
            title="Clearable"
            actions={<Link>Clear all</Link>}
          >
            Content
          </Panel>
        </Example>

        <Example title="PanelLayout">
          <div style={{ height: 300 }}>
            <PanelLayout>
              <Panel title="Left panel" />
              <Panel title="Right panel" />
            </PanelLayout>
          </div>
        </Example>
      </Page>
    );
  }

}

PanelExample.propTypes = {
  route: PropTypes.object.isRequired,
};