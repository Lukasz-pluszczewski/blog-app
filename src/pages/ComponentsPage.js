/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';

import { getTest, complexTest } from 'services/LoadTester';

import Layout from 'containers/Layout';
import Section from 'containers/Section';

import Button from 'components/Button';
import ButtonSelect from 'components/ButtonSelect';
import Icon from 'components/Icon';
import Input from 'components/Input';
import Select from 'components/Select';

import 'styles/pages/ComponentsPage.scss';

class ComponentsPage extends Component {
  state = {
    buttonSelect1: '0',
    buttonSelect2: '',
    buttonSelect3: '0',
    buttonSelect4: '1',
    select1: '0',
    select2: '',
    select3: '0',
    select4: '1',
    input1: '',
    input2: '',
    input3: 'Some initial value',
    input4: 'Some other initial value',
    input5: '',
  };

  render() {
    return (
      <Layout>
        <div className="ComponentsPage">
          <Section
            title="Load test"
          >
            <Button onClick={getTest}>
              getTest
            </Button>
            <Button onClick={complexTest}>
              complexTest
            </Button>
          </Section>
          <Section
            className="ComponentsPage__buttonSection"
            title="Buttons"
            description="Showcase of different uses of Button component"
          >
            <Button onClick={() => alert('You clicked onClick button')}>onClick button</Button>
            <Button to="/">to button</Button>
            <Button href="http://google.com">href button</Button>
            <Button onClick={() => alert('You clicked disabled button')} disabled>disabled button</Button>
            <Button>notWorking button</Button>
            <Button
              icon="heartbeat"
            >
              I have an Icon! :)
            </Button>
            <Button
              icon="hand-spock-o"
              iconPosition="right"
            >
              Me too
            </Button>
            <Button
              loading={true}
              disabled={true}
            >
              I&#39;m loading
            </Button>
          </Section>
          <Section
            className="ComponentsPage__SelectSection"
            title="Input"
            description="Showcase of different uses of Select component"
          >
            <Select
              label={`I am a Select with value: ${this.state.select1}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Custom action', value: '2', onClick: () => alert('I am a custom action') },
              ]}
              value={this.state.select1}
              onChange={e => this.setState({ select1: e.target.value })}
              placeholder={{ text: 'Choose one', value: '' }}
              fullWidth
            />
            <Select
              label={`I am a nullable Select with value: ${this.state.select2}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.select2}
              onChange={e => this.setState({ select2: e.target.value })}
              placeholder={{ text: 'Choose one', value: '' }}
              nullable
              fullWidth
            />
            <Select
              label={`Psst! Don't choose two!`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.select3}
              onChange={e => this.setState({ select3: e.target.value })}
              placeholder={{ text: 'Choose one (but not two)', value: '' }}
              error={this.state.select3 === '2' ? 'I said don\'t do it!' : null}
              fullWidth
            />
            <Select
              label={`I am a disabled Select with value: ${this.state.select4}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.select4}
              onChange={e => this.setState({ select4: e.target.value })}
              placeholder={{ text: 'Choose one', value: '' }}
              disabled
              fullWidth
            />
          </Section>
          <Section
            className="ComponentsPage__buttonSelectSection"
            title="Button select"
            description="Showcase of different uses of ButtonSelect component"
          >
            <ButtonSelect
              label={`I am a buttonSelect with value: ${this.state.buttonSelect1}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Custom action', value: '2', onClick: () => alert('I am a custom action') },
              ]}
              value={this.state.buttonSelect1}
              onChange={e => this.setState({ buttonSelect1: e.target.value })}
              fullWidth
            />
            <ButtonSelect
              label={`I am a nullable buttonSelect with value: ${this.state.buttonSelect2}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.buttonSelect2}
              onChange={e => this.setState({ buttonSelect2: e.target.value })}
              nullable
              fullWidth
            />
            <ButtonSelect
              label={`Psst! Don't choose two!`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.buttonSelect3}
              error={this.state.buttonSelect3 === '2' ? 'I said don\'t choose it!' : null}
              onChange={e => this.setState({ buttonSelect3: e.target.value })}
              fullWidth
            />
            <ButtonSelect
              label={`I am a disabled buttonSelect with value: ${this.state.buttonSelect4}`}
              options={[
                { text: 'Zero', value: '0' },
                { text: 'One', value: '1' },
                { text: 'Two', value: '2' },
              ]}
              value={this.state.buttonSelect4}
              onChange={e => this.setState({ buttonSelect4: e.target.value })}
              disabled
              fullWidth
            />
          </Section>
          <Section
            className="ComponentsPage__InputSection"
            title="Input"
            description="Showcase of different uses of Input component"
          >
            <Input
              value={this.state.input1}
              onChange={e => this.setState({ input1: e.target.value })}
              label={`I am an Input with value: ${this.state.input1}`}
              fullWidth
            />
            <Input
              value={this.state.input2}
              onChange={e => this.setState({ input2: e.target.value })}
              label={`I am a loading Input with value: ${this.state.input2}`}
              loading
              fullWidth
            />
            <Input
              value={this.state.input3}
              onChange={e => this.setState({ input3: e.target.value })}
              label={`I am a custom icon Input with value: ${this.state.input3}`}
              icon="free-code-camp"
              iconPosition="left"
              fullWidth
            />
            <Input
              value={this.state.input4}
              onChange={e => this.setState({ input4: e.target.value })}
              label={`I am a disabled Input with value: ${this.state.input4}`}
              disabled
              fullWidth
            />
            <Input
              value={this.state.input5}
              onChange={e => this.setState({ input5: e.target.value })}
              label={`Psst! Don't enter 'dupa'!`}
              error={this.state.input5 === 'dupa' ? 'I said don\'t do that!' : null}
              fullWidth
            />
          </Section>
          <Section
            className="ComponentsPage__IconSection"
            title="Icon"
            description="Showcase of different uses of Icon component"
          >
            <Icon name="bath" /><br/>
            <Icon name="bath" rotate="90" /><br/>
            <Icon name="refresh" spin /><br/>
            <Icon name="refresh" pulse /><br/>
            <Icon name="facebook" flip="vertical" /><br/>
            <Icon name="facebook" inverse /><br/>
            <Icon name="facebook" size="2x" /><br/>
          </Section>
        </div>
      </Layout>
    );
  }
}

export default ComponentsPage;
